import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { moodEmojis, resources, currentUser, moodHistory } from '@/data/mock';
import { MoodType } from '@/types';
import YouthLayout from '@/components/YouthLayout';
import { motion } from 'framer-motion';
import { BookOpen, MessageCircle, TrendingUp } from 'lucide-react';

const moodKeys: MoodType[] = ['great', 'good', 'okay', 'bad', 'terrible'];

const HomePage = () => {
  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);
  const lastMood = moodHistory[moodHistory.length - 1];
  const featuredResources = resources.filter(r => r.status === 'published').slice(0, 3);

  return (
    <YouthLayout>
      <div className="max-w-2xl mx-auto px-4 pt-6 space-y-6">
        {/* Greeting */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl font-bold">
            Hola, {currentUser.name.split(' ')[0]} 👋
          </h1>
          <p className="text-muted-foreground">¿Cómo te sientes hoy?</p>
        </motion.div>

        {/* Mood selector */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="border-0 shadow-lg bg-gradient-to-r from-lavender-light to-mint-light">
            <CardContent className="pt-6">
              <div className="flex justify-around">
                {moodKeys.map(mood => {
                  const { emoji, label } = moodEmojis[mood];
                  const isSelected = selectedMood === mood;
                  return (
                    <button
                      key={mood}
                      onClick={() => setSelectedMood(mood)}
                      className={`flex flex-col items-center gap-1 p-3 rounded-2xl transition-all ${
                        isSelected ? 'bg-card shadow-md scale-110' : 'hover:bg-card/50'
                      }`}
                    >
                      <span className="text-3xl">{emoji}</span>
                      <span className="text-xs font-medium">{label}</span>
                    </button>
                  );
                })}
              </div>
              {selectedMood && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center mt-4 text-sm text-muted-foreground"
                >
                  ¡Registrado! Tu estado de hoy: {moodEmojis[selectedMood].emoji} {moodEmojis[selectedMood].label}
                </motion.p>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick actions */}
        <div className="grid grid-cols-3 gap-3">
          <Link to="/resources">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-lavender-light">
              <CardContent className="pt-4 pb-4 flex flex-col items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                <span className="text-xs font-medium text-center">Recursos</span>
              </CardContent>
            </Card>
          </Link>
          <Link to="/chat">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-mint-light">
              <CardContent className="pt-4 pb-4 flex flex-col items-center gap-2">
                <MessageCircle className="h-6 w-6 text-mint" />
                <span className="text-xs font-medium text-center">Chat</span>
              </CardContent>
            </Card>
          </Link>
          <Link to="/profile">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-peach-light">
              <CardContent className="pt-4 pb-4 flex flex-col items-center gap-2">
                <TrendingUp className="h-6 w-6 text-peach" />
                <span className="text-xs font-medium text-center">Mi progreso</span>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Featured resources */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold">Recursos destacados</h2>
            <Link to="/resources" className="text-sm text-primary font-medium">Ver todos</Link>
          </div>
          <div className="space-y-3">
            {featuredResources.map((resource, i) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <Link to={`/resources/${resource.id}`}>
                  <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="pt-4 pb-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm leading-tight">{resource.title}</h3>
                          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{resource.description}</p>
                        </div>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">{resource.readTime} min</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </YouthLayout>
  );
};

export default HomePage;
