import { Bell, Search, Settings } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Languages, HelpCircle } from 'lucide-react';
import logoImage from 'figma:asset/4bb2ffeec55167f64344f30a4fb306d4dad7b467.png';
import profileImage from 'figma:asset/8d8f99b7e2d6a1a509c6db4695bf79b4cede52f1.png';

export function Header() {
  return (
    <header className="h-14 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-40">
      <div className="flex items-center gap-4 flex-1">
        <img src={logoImage} alt="SWE Portal" className="h-8" />
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <Languages className="size-4" />
        </Button>
        
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <HelpCircle className="size-4" />
        </Button>
        
        <Button variant="ghost" size="sm" className="relative h-8 w-8 p-0">
          <Bell className="size-4" />
          <Badge className="absolute -top-0.5 -right-0.5 size-4 flex items-center justify-center p-0 text-[10px] bg-red-500 hover:bg-red-600">
            3
          </Badge>
        </Button>
        
        <div className="h-6 w-px bg-slate-200 mx-1" />
        
        <div className="flex items-center gap-2">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-medium text-slate-900">Fredrik Hansson</p>
            <p className="text-[10px] text-slate-500">Admin</p>
          </div>
          <Avatar className="size-8">
            <AvatarImage src={profileImage} alt="Fredrik Hansson" />
            <AvatarFallback className="bg-blue-600 text-white text-xs">FH</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}