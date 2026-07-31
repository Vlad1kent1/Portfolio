'use client';

import { useEffect, useRef, useState } from 'react';

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
import { toast } from 'sonner';

import { ArrowRight } from 'lucide-react';

import { sendEmail } from './actions/send-email';

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
  const formRef = useRef<HTMLFormElement>(null);

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

  const handleAction = async (formDataObj: FormData) => {
    toast.promise(sendEmail(formDataObj), {
      loading: t('notifications.loading'),
      success: (result) => {
        if (result?.error) {
          throw new Error(result.error);
        }

        setFormData({ name: '', email: '', phone: '', message: '' });
        sessionStorage.removeItem('contactFormData');
        formRef.current?.reset();

        return t('notifications.success');
      },
      error: () => {
        return t('notifications.error');
      },
    });
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
        <form
          ref={formRef}
          action={handleAction}
          className="w-full"
        >
          <FieldGroup>
            <FieldGroup>
              {/* Name */}
              <Field orientation="vertical">
                <FieldLabel htmlFor="name">{t('name')}</FieldLabel>
                <FieldContent className="bg-background">
                  <Input
                    id="name"
                    name="name"
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
                  <FieldLabel htmlFor="email">{t('email')}</FieldLabel>
                  <FieldContent>
                    <Input
                      id="email"
                      name="email"
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
                  <FieldLabel htmlFor="phone">{t('phone')}</FieldLabel>
                  <FieldContent>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder={t('phone_placeholder')}
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                    />
                  </FieldContent>
                </Field>
              </div>

              {/* Message */}
              <Field orientation="vertical">
                <FieldLabel htmlFor="message">{t('message')}</FieldLabel>
                <FieldContent className="bg-background">
                  <Textarea
                    id="message"
                    name="message"
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
              >
                <AnimatedButton.Text>{t('submit')}</AnimatedButton.Text>
                <AnimatedButton.Icon>
                  <ArrowRight size={16} />
                </AnimatedButton.Icon>
              </AnimatedButton>
            </div>
          </FieldGroup>
        </form>
      </RevealBox>
    </div>
  );
};

export { FormContact };
