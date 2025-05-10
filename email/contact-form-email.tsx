import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gradient-to-br from-gray-50 to-gray-200 text-black min-h-screen py-8">
          <Container>
            <Section className="bg-white shadow-lg border border-gray-200 my-12 mx-auto px-8 py-8 rounded-xl max-w-xl">
              <Heading className="text-2xl font-bold text-blue-700 mb-4">
                📬 New Message from Portfolio
              </Heading>
              <Text className="text-gray-700 mb-6">
                You received the following message:
              </Text>
              <Section className="bg-gray-50 border-l-4 border-blue-400 p-4 rounded mb-6">
                <Text className="text-base text-gray-900 whitespace-pre-line">{message}</Text>
              </Section>
              <Hr className="my-6 border-gray-200" />
              <Section className="flex items-center">
                <Text className="text-sm text-gray-500 mr-2">Sender's email:</Text>
                <Text className="text-sm font-mono bg-gray-100 px-2 py-1 rounded text-blue-700 border border-blue-100">{senderEmail}</Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}