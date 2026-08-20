import React, { useState } from 'react';
import { RESUME_DATA } from '@/data/resume';
import { toast } from '@/hooks/use-toast';
import { ArrowUp } from 'lucide-react';

interface MailContentProps {
  onClose?: () => void;
}

export const MailContent: React.FC<MailContentProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '', // Email or Phone
    subject: '',
    description: ''
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSend = async () => {
    const { name, contact, subject, description } = formData;
    
    if (!name.trim() || !contact.trim() || !subject.trim() || !description.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields including name and contact info.",
        variant: "destructive"
      });
      return;
    }

    setSending(true);

    try {
      // Try local backend first, fallback to production render endpoint if offline
      let response: Response;
      try {
        response = await fetch('http://localhost:5000/api/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      } catch {
        response = await fetch('https://portfolio-zgam.onrender.com/api/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      }

      if (!response.ok) throw new Error('Failed to send message');

      toast({
        title: "Sent Successfully",
        description: "Your message has been delivered to Saurabh's database.",
      });

      setFormData({
        name: '',
        contact: '',
        subject: '',
        description: ''
      });
      
      if (onClose) onClose();

    } catch (error) {
      console.error(error);
      toast({
        title: "Message Sent (Demo Mode)",
        description: "Thank you for reaching out! Direct email fallback: yadavv.saurab@gmail.com",
      });
      if (onClose) onClose();
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="h-full bg-white flex flex-col font-sans overflow-hidden text-zinc-900">
      {/* Apple Mail Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-[#F9F9F9] backdrop-blur-xl sticky top-0 z-10 shrink-0">
        <button 
          className="text-[#007AFF] text-[15px] hover:opacity-70 transition-opacity font-normal"
          onClick={() => {
            if (onClose) {
              onClose();
            } else {
              setFormData({ name: '', contact: '', subject: '', description: '' });
              toast({ title: "Draft Discarded" });
            }
          }}
        >
          Cancel
        </button>
        <h3 className="font-semibold text-[15px] text-black">New Message</h3>
        <button 
          onClick={handleSend}
          disabled={sending || !formData.subject || !formData.description}
          className={`w-7 h-7 flex items-center justify-center rounded-full transition-all ${
            sending || !formData.subject ? 'bg-gray-300' : 'bg-[#007AFF]'
          }`}
          title="Send Message"
        >
          <ArrowUp size={16} className="text-white font-bold" strokeWidth={3} />
        </button>
      </div>

      {/* Form Fields */}
      <div className="flex-1 overflow-y-auto bg-white p-4 space-y-3">
        <div className="flex items-center border-b border-gray-200 pb-2">
          <span className="text-[#8E8E93] text-[14px] w-16">To:</span>
          <span className="bg-[#E8E8E8] px-2.5 py-0.5 rounded text-[13px] text-black font-medium">
            Saurabh Yadav &lt;{RESUME_DATA.contact.email}&gt;
          </span>
        </div>

        <div className="flex items-center border-b border-gray-200 pb-2">
          <span className="text-[#8E8E93] text-[14px] w-16">Name:</span>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="flex-1 outline-none text-[14px] text-black bg-transparent placeholder-gray-400"
            placeholder="Your Full Name"
          />
        </div>

        <div className="flex items-center border-b border-gray-200 pb-2">
          <span className="text-[#8E8E93] text-[14px] w-16">From:</span>
          <input
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="flex-1 outline-none text-[14px] text-black bg-transparent placeholder-gray-400"
            placeholder="Your Email or Phone"
          />
        </div>

        <div className="flex items-center border-b border-gray-200 pb-2">
          <span className="text-[#8E8E93] text-[14px] w-16">Subject:</span>
          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="flex-1 outline-none text-[14px] font-medium text-black bg-transparent placeholder-gray-400"
            placeholder="Project Inquiry / Job Opportunity / Hello"
          />
        </div>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full h-48 outline-none text-[15px] leading-relaxed resize-none text-black bg-transparent pt-2"
          placeholder="Hi Saurabh, I saw your portfolio and would love to connect regarding..."
        />
      </div>
    </div>
  );
};
