import { useState } from "react";
import { X, Calendar, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useToast } from "./ui/use-toast";
import { Label } from "./ui/label";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState({
    email: "",
    interest: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '5a02c114-65b3-41ad-b0de-a18048ad3dec',
          email: formData.email,
          subject: 'New Demo Request - MAI Business Solutions',
          message: `Demo Request Details:\n\nEmail: ${formData.email}\n\nInterest:\n${formData.interest}`,
          from_name: 'MAI Business Solutions',
          to: 'hakimluxeco@gmail.com',
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Demo Request Sent!",
          description: "We'll contact you shortly to schedule your demo.",
        });
        setFormData({ email: "", interest: "" });
        onClose();
      } else {
        throw new Error(data.message || 'Failed to send');
      }
    } catch (error) {
      console.error('Email error:', error);
      toast({
        title: "Failed to submit",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <Card className="w-full max-w-lg bg-gray-900 border-gray-800 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <CardHeader className="text-center pb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 p-4 mx-auto mb-4">
            <Calendar className="w-full h-full text-white" />
          </div>
          <CardTitle className="text-2xl text-white">Schedule a Demo</CardTitle>
          <CardDescription className="text-gray-400">
            Tell us about your needs and we'll get back to you shortly
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-gray-300 mb-2 block">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
            </div>

            <div>
              <Label htmlFor="interest" className="text-gray-300 mb-2 block">
                What are you interested in?
              </Label>
              <Textarea
                id="interest"
                placeholder="Are you looking for a custom system or interested in one of our existing systems? (Invoice Manager, Lead Machine, Stock Manager)"
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                required
                rows={5}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Request
                  <Send className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
