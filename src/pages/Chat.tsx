import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { professionals, conversations, messages as allMessages, currentUser } from '@/data/mock';
import YouthLayout from '@/components/YouthLayout';
import { ArrowLeft, Send, Circle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const Chat = () => {
  const [activeConv, setActiveConv] = useState<string | null>(null);
  const [input, setInput] = useState('');
  const [localMessages, setLocalMessages] = useState(allMessages);

  const activeMessages = activeConv ? localMessages[activeConv] || [] : [];
  const activePro = activeConv
    ? professionals.find(p =>
        conversations.find(c => c.id === activeConv)?.participants.includes(p.id)
      )
    : null;

  const handleSend = () => {
    if (!input.trim() || !activeConv) return;
    const newMsg = {
      id: `msg-${Date.now()}`,
      conversationId: activeConv,
      senderId: currentUser.id,
      content: input,
      createdAt: new Date().toISOString(),
      read: false,
    };
    setLocalMessages(prev => ({
      ...prev,
      [activeConv]: [...(prev[activeConv] || []), newMsg],
    }));
    setInput('');
  };

  // Chat detail
  if (activeConv && activePro) {
    return (
      <YouthLayout>
        <div className="max-w-2xl mx-auto flex flex-col h-[calc(100vh-8rem)] md:h-[calc(100vh-5rem)]">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b bg-card/80 backdrop-blur">
            <button onClick={() => setActiveConv(null)}>
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="w-10 h-10 rounded-full bg-lavender-light flex items-center justify-center text-lg">
              {activePro.name.charAt(0)}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">{activePro.name}</p>
              <p className="text-xs text-muted-foreground">{activePro.specialty}</p>
            </div>
            <Circle className={cn("h-3 w-3 fill-current", activePro.available ? "text-mint" : "text-muted-foreground")} />
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {activeMessages.map(msg => {
              const isMe = msg.senderId === currentUser.id;
              return (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn('flex', isMe ? 'justify-end' : 'justify-start')}
                >
                  <div
                    className={cn(
                      'max-w-[80%] px-4 py-2.5 rounded-2xl text-sm',
                      isMe
                        ? 'bg-primary text-primary-foreground rounded-br-md'
                        : 'bg-muted rounded-bl-md'
                    )}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t bg-card/80 backdrop-blur">
            <form
              onSubmit={e => { e.preventDefault(); handleSend(); }}
              className="flex gap-2"
            >
              <Input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Escribe un mensaje..."
                className="rounded-xl flex-1"
              />
              <Button type="submit" size="icon" className="rounded-xl shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </YouthLayout>
    );
  }

  // Conversation list
  return (
    <YouthLayout>
      <div className="max-w-2xl mx-auto px-4 pt-6 space-y-5">
        <h1 className="text-2xl font-bold">Chat con profesionales</h1>

        {/* Available professionals */}
        <div>
          <h2 className="text-sm font-semibold text-muted-foreground mb-3">Profesionales disponibles</h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {professionals.map(pro => (
              <Card
                key={pro.id}
                className="border-0 shadow-sm min-w-[140px] cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => {
                  const conv = conversations.find(c => c.participants.includes(pro.id));
                  if (conv) setActiveConv(conv.id);
                }}
              >
                <CardContent className="pt-4 pb-4 flex flex-col items-center gap-2 text-center">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-lavender-light flex items-center justify-center text-xl">
                      {pro.name.charAt(0)}
                    </div>
                    <Circle
                      className={cn(
                        "absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 fill-current",
                        pro.available ? "text-mint" : "text-muted-foreground"
                      )}
                    />
                  </div>
                  <p className="text-xs font-semibold leading-tight">{pro.name}</p>
                  <p className="text-[10px] text-muted-foreground">{pro.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Conversations */}
        <div>
          <h2 className="text-sm font-semibold text-muted-foreground mb-3">Conversaciones</h2>
          <div className="space-y-2">
            {conversations.map(conv => {
              const pro = professionals.find(p => conv.participants.includes(p.id));
              if (!pro) return null;
              return (
                <Card
                  key={conv.id}
                  className="border-0 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setActiveConv(conv.id)}
                >
                  <CardContent className="pt-3 pb-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-lavender-light flex items-center justify-center text-lg shrink-0">
                      {pro.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm">{pro.name}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        {conv.lastMessage?.content}
                      </p>
                    </div>
                    {conv.lastMessage && !conv.lastMessage.read && conv.lastMessage.senderId !== currentUser.id && (
                      <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </YouthLayout>
  );
};

export default Chat;
