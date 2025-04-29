import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MusicPlayer } from "@/components/ui/MusicPlayer";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Checkout from "@/pages/Checkout";
import TOSPage from "@/pages/TOSPage";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import { CartProvider } from "@/hooks/useCart";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useEffect, useState } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/">
        {() => <Home />}
      </Route>
      <Route path="/shop">
        {() => <Home skipIntro={true} />}
      </Route>
      <Route path="/checkout/:id" component={Checkout} />
      <Route path="/terms" component={TOSPage} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Force dark mode on body
  useEffect(() => {
    document.body.classList.add('dark');
    document.body.classList.add('bg-gray-900');
    document.body.classList.add('text-white');
  }, []);

  // State to control when to show the music player (after intro)
  const [showMusicPlayer, setShowMusicPlayer] = useState(false);
  
  useEffect(() => {
    // Delay showing the music player until after intro animation
    const timer = setTimeout(() => {
      setShowMusicPlayer(true);
    }, 8000); // ~8 seconds after the page loads
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <CartProvider>
            <Toaster />
            <Router />
            {showMusicPlayer && <MusicPlayer />}
          </CartProvider>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
