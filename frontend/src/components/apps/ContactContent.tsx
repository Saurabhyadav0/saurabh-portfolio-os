import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Copy, Check, ExternalLink, Download, Send, FileText } from 'lucide-react';
import { RESUME_DATA } from '@/data/resume';
import { toast } from '@/hooks/use-toast';
import { MailContent } from './MailContent';

interface ContactContentProps {
  onClose?: () => void;
}

export const ContactContent: React.FC<ContactContentProps> = ({ onClose }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [showMailComposer, setShowMailComposer] = useState(false);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    toast({ title: "Copied!", description: `${fieldName} copied to clipboard.` });
    setTimeout(() => setCopiedField(null), 2000);
  };

  const downloadVCard = () => {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:${RESUME_DATA.name}
TITLE:${RESUME_DATA.role}
EMAIL:${RESUME_DATA.contact.email}
TEL:${RESUME_DATA.contact.phone}
URL:${RESUME_DATA.contact.github}
NOTE:${RESUME_DATA.summary}
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Saurabh_Yadav.vcf';
    a.click();
    URL.revokeObjectURL(url);
    toast({ title: "vCard Downloaded", description: "Saurabh_Yadav.vcf downloaded to your device." });
  };

  if (showMailComposer) {
    return <MailContent onClose={() => setShowMailComposer(false)} />;
  }

  return (
    <div className="h-full bg-[#18181b] text-white p-6 md:p-8 flex flex-col justify-between overflow-auto custom-scrollbar font-sans select-text">
      <div className="space-y-6">
        {/* Contact Header Card */}
        <div className="flex items-center gap-4 border-b border-zinc-800 pb-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xl font-bold border border-white/20 shadow-lg">
            {RESUME_DATA.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h1 className="text-xl font-bold">{RESUME_DATA.name}</h1>
            <p className="text-xs text-indigo-400 font-semibold">{RESUME_DATA.role}</p>
            <p className="text-[11px] text-zinc-400 mt-0.5">{RESUME_DATA.location}</p>
          </div>
        </div>

        {/* Contact Methods List */}
        <div className="space-y-3">
          <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Mail className="text-indigo-400" size={18} />
              <div>
                <p className="text-[10px] uppercase text-zinc-400 font-bold">Email</p>
                <p className="text-xs font-mono font-semibold text-white">{RESUME_DATA.contact.email}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => copyToClipboard(RESUME_DATA.contact.email, 'Email')}
                className="p-1.5 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                title="Copy Email"
              >
                {copiedField === 'Email' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              </button>
              <a 
                href={`mailto:${RESUME_DATA.contact.email}`} 
                className="p-1.5 rounded-lg hover:bg-white/10 text-indigo-400 hover:text-indigo-300 transition-colors"
                title="Send Email"
              >
                <Send size={14} />
              </a>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Phone className="text-emerald-400" size={18} />
              <div>
                <p className="text-[10px] uppercase text-zinc-400 font-bold">Phone</p>
                <p className="text-xs font-mono font-semibold text-white">{RESUME_DATA.contact.phone}</p>
              </div>
            </div>
            <button 
              onClick={() => copyToClipboard(RESUME_DATA.contact.phone, 'Phone')}
              className="p-1.5 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              title="Copy Phone"
            >
              {copiedField === 'Phone' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            </button>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Linkedin className="text-blue-400" size={18} />
              <div>
                <p className="text-[10px] uppercase text-zinc-400 font-bold">LinkedIn</p>
                <p className="text-xs font-semibold text-white">saurabh-yadav-6406311bb</p>
              </div>
            </div>
            <a 
              href={RESUME_DATA.contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg hover:bg-white/10 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Github className="text-zinc-300" size={18} />
              <div>
                <p className="text-[10px] uppercase text-zinc-400 font-bold">GitHub</p>
                <p className="text-xs font-semibold text-white">saurabhyadav0</p>
              </div>
            </div>
            <a
              href={RESUME_DATA.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
            >
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="text-amber-400" size={18} />
              <div>
                <p className="text-[10px] uppercase text-zinc-400 font-bold">Resume</p>
                <p className="text-xs font-semibold text-white">View on Google Drive</p>
              </div>
            </div>
            <a
              href={RESUME_DATA.contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg hover:bg-white/10 text-amber-400 hover:text-amber-300 transition-colors"
            >
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-6">
        <button 
          onClick={() => setShowMailComposer(true)}
          className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
        >
          <Mail size={15} /> Send Direct Message
        </button>
        <button 
          onClick={downloadVCard}
          className="py-2.5 px-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs rounded-xl transition-all border border-zinc-700 flex items-center gap-1.5"
        >
          <Download size={15} /> vCard
        </button>
      </div>
    </div>
  );
};
