import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { currentUser, moodHistory, moodEmojis } from '@/data/mock';
import YouthLayout from '@/components/YouthLayout';
import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <YouthLayout>
      <div className="max-w-2xl mx-auto px-4 pt-6 space-y-6">
        {/* Profile card */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <Card className="border-0 shadow-lg bg-gradient-to-r from-lavender-light to-peach-light">
            <CardContent className="pt-6 flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-3xl">
                {currentUser.name.charAt(0)}
              </div>
              <div className="text-center">
                <h1 className="text-xl font-bold">{currentUser.name}</h1>
                <p className="text-sm text-muted-foreground">{currentUser.email}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Mood history */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Mi historial emocional</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end gap-1">
              {moodHistory.map(entry => {
                const { emoji } = moodEmojis[entry.mood];
                const date = new Date(entry.createdAt);
                const day = date.toLocaleDateString('es', { weekday: 'short' });
                return (
                  <div key={entry.id} className="flex flex-col items-center gap-1">
                    <span className="text-2xl">{emoji}</span>
                    <span className="text-[10px] text-muted-foreground capitalize">{day}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Settings placeholder */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Configuración</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Notificaciones</span>
              <span className="text-xs text-muted-foreground">Activadas</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Tema</span>
              <span className="text-xs text-muted-foreground">Claro</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Idioma</span>
              <span className="text-xs text-muted-foreground">Español</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </YouthLayout>
  );
};

export default Profile;
