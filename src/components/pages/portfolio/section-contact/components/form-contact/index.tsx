'use client';

import { useEffect, useState } from 'react';

import {
  AnimatedButton,
  Field,
  FieldContent,
  FieldGroup,
  FieldLabel,
  Input,
  Text,
  Textarea,
} from '@/components/ui';

import { ArrowRight } from 'lucide-react';

const COLUMN_COUNT = 2;

const FormContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    const savedData = sessionStorage.getItem('contactFormData');
    if (savedData) {
      try {
        setFormData(JSON.parse(savedData));
      } catch (error) {
        console.error('Failed to parse form data from sessionStorage', error);
      }
    }
  }, []);

  const handleChange = (field: string, value: string) => {
    const updatedData = { ...formData, [field]: value };
    setFormData(updatedData);
    sessionStorage.setItem('contactFormData', JSON.stringify(updatedData));
  };

  return (
    <div className="relative col-span-2 flex flex-col py-20">
      <div className="divide-muted absolute inset-0 flex divide-x overflow-hidden">
        {[...Array(COLUMN_COUNT)].map((_, i) => (
          <div
            key={`form-contact-col-${i}`}
            className="flex-1 self-stretch"
          />
        ))}
      </div>

      <div className="relative z-10 flex min-h-full w-full flex-col items-center justify-center">
        <FieldGroup>
          <FieldGroup>
            {/* Name */}
            <Field orientation="vertical">
              <FieldLabel htmlFor="Name">Name</FieldLabel>
              <FieldContent className="bg-background">
                <Input
                  type="text"
                  placeholder="Jane Smith"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                />
              </FieldContent>
            </Field>

            <div className="flex w-full flex-row">
              {/* Email */}
              <Field orientation="vertical">
                <FieldLabel htmlFor="Email">Email</FieldLabel>
                <FieldContent>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                </FieldContent>
              </Field>

              {/* Phone */}
              <Field orientation="vertical">
                <FieldLabel htmlFor="Phone">Phone</FieldLabel>
                <FieldContent>
                  <Input
                    type="tel"
                    placeholder="+00 000 000 000"
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                  />
                </FieldContent>
              </Field>
            </div>

            {/* Message */}
            <Field orientation="vertical">
              <FieldLabel htmlFor="Message">Message</FieldLabel>
              <FieldContent className="bg-background">
                <Textarea
                  placeholder="Your message here..."
                  required
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                />
              </FieldContent>
            </Field>
          </FieldGroup>
          <div className="grid w-full grid-cols-2 items-stretch">
            <Text
              variant="muted"
              className="col-span-1 flex-col items-start justify-center p-3 leading-[1.15em] tracking-tight uppercase"
            >
              I usually reply within
              <span className="text-text inline-block whitespace-nowrap">
                24 hours
                <span className="bg-text ml-[0.05em] inline-block h-[0.14em] w-[0.14em] align-baseline" />
              </span>
            </Text>

            <AnimatedButton
              type="submit"
              variant="special"
              size="default"
              className="col-span-1"
              onClick={() => {
                console.log('Form submitted:', formData);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  message: '',
                });
                sessionStorage.removeItem('contactFormData');
              }}
            >
              <AnimatedButton.Text>SEND REQUEST</AnimatedButton.Text>
              <AnimatedButton.Icon>
                <ArrowRight size={16} />
              </AnimatedButton.Icon>
            </AnimatedButton>
          </div>
        </FieldGroup>
      </div>
    </div>
  );
};

export { FormContact };
