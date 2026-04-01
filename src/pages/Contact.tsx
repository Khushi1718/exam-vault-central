import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => (
  <Layout>
    <section className="bg-gradient-to-br from-primary to-primary/70 text-primary-foreground px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Contact</h1>
        <p className="text-lg opacity-90">Have questions or suggestions? We'd love to hear from you.</p>
      </div>
    </section>

    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl font-bold mb-6">Get in Touch</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">contact@examvault.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">+91 XXXXX XXXXX</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">Greater Noida</p>
              </div>
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-bold">Send a Message</h2>
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" type="email" />
            <Textarea placeholder="Your Message" rows={4} />
            <Button className="w-full">Send Message</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  </Layout>
);

export default Contact;
