import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import RegistrationForm from "./RegistrationForm";
import { ScrollArea } from "@/components/ui/scroll-area";

interface RegistrationDialogProps {
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const RegistrationDialog = ({ trigger, open, onOpenChange }: RegistrationDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        {trigger || <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">Register Now</Button>}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="text-2xl font-bold text-primary">Register for Hack@Davidson 2026</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-full max-h-[calc(90vh-80px)] px-6 pb-6">
          <RegistrationForm onSuccess={() => onOpenChange?.(false)} />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationDialog;
