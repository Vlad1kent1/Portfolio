'use client';

import { useEffect, useState } from 'react';

import { useTranslations } from 'next-intl';

import {
  AnimatedButton,
  Field,
  FieldContent,
  FieldGroup,
  FieldLabel,
  Input,
  RevealBox,
  Text,
  Textarea,
} from '@/components/ui';

import { ArrowRight } from 'lucide-react';

const COLUMN_COUNT = 2;

const FormContact = () => {
  const t = useTranslations(
    'components.pages.portfolio.section-contact.components.form-contact',
  );

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

      <RevealBox
        direction="up"
        className="relative z-10"
        innerClassName="flex min-h-full w-full flex-col items-center justify-center"
      >
        <FieldGroup>
          <FieldGroup>
            {/* Name */}
            <Field orientation="vertical">
              <FieldLabel htmlFor="Name">{t('name')}</FieldLabel>
              <FieldContent className="bg-background">
                <Input
                  type="text"
                  placeholder={t('name_placeholder')}
                  required
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                />
              </FieldContent>
            </Field>

            <div className="flex w-full flex-row">
              {/* Email */}
              <Field orientation="vertical">
                <FieldLabel htmlFor="Email">{t('email')}</FieldLabel>
                <FieldContent>
                  <Input
                    type="email"
                    placeholder={t('email_placeholder')}
                    required
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                </FieldContent>
              </Field>

              {/* Phone */}
              <Field orientation="vertical">
                <FieldLabel htmlFor="Phone">{t('phone')}</FieldLabel>
                <FieldContent>
                  <Input
                    type="tel"
                    placeholder={t('phone_placeholder')}
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                  />
                </FieldContent>
              </Field>
            </div>

            {/* Message */}
            <Field orientation="vertical">
              <FieldLabel htmlFor="Message">{t('message')}</FieldLabel>
              <FieldContent className="bg-background">
                <Textarea
                  placeholder={t('message_placeholder')}
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
              {t('reply_notice')}
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
              <AnimatedButton.Text>{t('submit')}</AnimatedButton.Text>
              <AnimatedButton.Icon>
                <ArrowRight size={16} />
              </AnimatedButton.Icon>
            </AnimatedButton>
          </div>
        </FieldGroup>
      </RevealBox>
    </div>
  );
};

export { FormContact };
