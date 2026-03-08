'use client';

import { useState, useEffect, useRef } from 'react';
import { useContent } from '@/context/ContentContext';

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

interface AppointmentData {
  name?: string;
  department?: string;
  doctor?: string;
  date?: string;
  time?: string;
  contact?: string;
}

enum AppointmentStep {
  None,
  AskName,
  AskDepartment,
  AskDoctor,
  AskDate,
  AskTime,
  AskContact,
  Completed,
}

export default function Chatbot() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [appointmentStep, setAppointmentStep] = useState<AppointmentStep>(
    AppointmentStep.None
  );
  const [appointmentData, setAppointmentData] = useState<AppointmentData>({});
  const { services, doctors, contact } = useContent();

  const messageEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (showChat && messages.length === 0) {
      addBotMessage(
        "Hello! I'm the Gentrimed Hospital Virtual Assistant. How may I help you today?"
      );
    }
  }, [showChat]);

  useEffect(scrollToBottom, [messages]);

  const addBotMessage = (text: string) => {
    setMessages((m) => [...m, { sender: 'bot', text }]);
  };

  const addUserMessage = (text: string) => {
    setMessages((m) => [...m, { sender: 'user', text }]);
  };

  const handleSend = () => {
    const text = inputValue.trim();
    if (!text) return;
    addUserMessage(text);
    setInputValue('');
    processUserMessage(text);
  };

  const processUserMessage = (text: string) => {
    const lower = text.toLowerCase();

    // appointment flow
    if (appointmentStep !== AppointmentStep.None) {
      handleAppointmentFlow(text);
      return;
    }

    if (lower.includes('appointment') || lower.includes('book')) {
      startAppointmentFlow();
      return;
    }

    if (lower.includes('service')) {
      const list = services.map((s) => s.title).join(', ');
      addBotMessage(
        `We offer the following services: ${list}. Let me know if you need details about a specific department.`
      );
      return;
    }

    if (lower.includes('doctor')) {
      const list = doctors.map((d) => `${d.name} (${d.specialty}, ${d.experience})`).join('; ');
      addBotMessage(`Our doctors include ${list}.`);
      return;
    }

    if (lower.includes('hours') || lower.includes('operating')) {
      addBotMessage(`Our regular hours are ${contact.hours}.`);
      return;
    }

    if (lower.includes('location') || lower.includes('where')) {
      addBotMessage(
        `We are located at ${contact.address}. You can contact us at ${contact.phone} or ${contact.email}.`
      );
      return;
    }

    if (lower.includes('emergency')) {
      addBotMessage(
        `If you are experiencing a medical emergency, please go to the nearest emergency room or contact our emergency hotline immediately at ${contact.emergency}.`
      );
      return;
    }

    if (
      lower.includes('cardiology') ||
      lower.includes('pediatrics') ||
      lower.includes('radiology') ||
      lower.includes('surgery') ||
      lower.includes('laboratory') ||
      lower.includes('emergency care')
    ) {
      addBotMessage(
        `At Gentrimed Hospital, our ${text} Department specializes in diagnosing and treating patients with ${text.toLowerCase()}.` // generic
      );
      return;
    }

    // fallback
    addBotMessage(
      "I'm sorry, I didn’t quite understand that. Could you please rephrase or choose one of the quick suggestions below? For medical concerns, we recommend consulting with one of our doctors."
    );
  };

  const startAppointmentFlow = () => {
    setAppointmentStep(AppointmentStep.AskDepartment);
    addBotMessage('Sure! I can help you with that. Which department would you like to visit?');
  };

  const handleAppointmentFlow = (text: string) => {
    const value = text.trim();
    switch (appointmentStep) {
      case AppointmentStep.AskDepartment:
        setAppointmentData((d) => ({ ...d, department: value }));
        setAppointmentStep(AppointmentStep.AskName);
        addBotMessage('Can I have your full name, please?');
        break;
      case AppointmentStep.AskName:
        setAppointmentData((d) => ({ ...d, name: value }));
        setAppointmentStep(AppointmentStep.AskDoctor);
        addBotMessage('Do you have a preferred doctor? (optional)');
        break;
      case AppointmentStep.AskDoctor:
        setAppointmentData((d) => ({ ...d, doctor: value }));
        setAppointmentStep(AppointmentStep.AskDate);
        addBotMessage('What date would you prefer for your appointment?');
        break;
      case AppointmentStep.AskDate:
        setAppointmentData((d) => ({ ...d, date: value }));
        setAppointmentStep(AppointmentStep.AskTime);
        addBotMessage('And what time works best?');
        break;
      case AppointmentStep.AskTime:
        setAppointmentData((d) => ({ ...d, time: value }));
        setAppointmentStep(AppointmentStep.AskContact);
        addBotMessage('Please provide a contact number or email.');
        break;
      case AppointmentStep.AskContact:
        setAppointmentData((d) => ({ ...d, contact: value }));
        setAppointmentStep(AppointmentStep.Completed);
        addBotMessage(
          'Thank you. Our team will confirm your appointment shortly.'
        );
        // reset after a bit
        setTimeout(() => {
          setAppointmentStep(AppointmentStep.None);
          setAppointmentData({});
        }, 3000);
        break;
      default:
        setAppointmentStep(AppointmentStep.None);
        break;
    }
  };

  const quickButtons = [
    'Book Appointment',
    'View Services',
    'Find a Doctor',
    'Hospital Location',
    'Contact Support',
  ];

  const handleQuickClick = (text: string) => {
    setInputValue(text);
    setTimeout(() => handleSend(), 100);
  };

  return (
    <>
      <div
        className="fixed bottom-8 right-8 z-50"
        style={{ maxWidth: '320px' }}
      >
        {showChat && (
          <div className="bg-white shadow-xl rounded-xl flex flex-col h-[500px] w-full">
            <div className="p-4 bg-green-500 text-white rounded-t-xl flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <img
                  src="/images/teddy_transparent_chatbot.gif"
                  alt="Chatbot"
                  className="w-8 h-8 rounded-full"
                />
                <span>Virtual Assistant</span>
              </div>
              <button
                onClick={() => setShowChat(false)}
                className="font-bold"
              >
                ×
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.sender === 'bot' ? 'justify-start' : 'justify-end'
                  } items-start`}
                >
                  {msg.sender === 'bot' && (
                    <img
                      src="/images/teddy_transparent_chatbot.gif"
                      alt="bot avatar"
                      className="w-6 h-6 mr-2 rounded-full"
                    />
                  )}
                  <div
                    className={`px-3 py-2 rounded-lg max-w-[75%] break-words text-sm ${
                      msg.sender === 'bot'
                        ? 'bg-gray-100 text-gray-900'
                        : 'bg-green-500 text-white'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messageEndRef} />
            </div>
            <div className="p-2 border-t">
              <div className="flex space-x-2 mb-2 overflow-x-auto">
                {quickButtons.map((btn) => (
                  <button
                    key={btn}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs whitespace-nowrap"
                    onClick={() => handleQuickClick(btn)}
                  >
                    {btn}
                  </button>
                ))}
              </div>
              <div className="flex">
                <input
                  type="text"
                  className="flex-1 border rounded-l-lg px-3 py-2 text-sm"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSend();
                  }}
                  placeholder="Type a message..."
                />
                <button
                  className="bg-green-500 text-white px-4 rounded-r-lg"
                  onClick={handleSend}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}

        {!showChat && (
          <button
            className="bg-white rounded-full p-1 shadow-lg hover:shadow-xl transition"
            onClick={() => setShowChat(true)}
          >
            <img
              src="/images/teddy_transparent_chatbot.gif"
              alt="Chatbot"
              className="w-10 h-10"
            />
          </button>
        )}
      </div>
    </>
  );
}
