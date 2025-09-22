import React, { useEffect, useState, useCallback } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import axios from 'axios';
import { Button } from '@/components/ui/button';

interface PlaidLinkProps {
  onSuccess: (public_token: string, metadata: any) => void;
}

const PlaidLink: React.FC<PlaidLinkProps> = ({ onSuccess }) => {
  const [linkToken, setLinkToken] = useState<string | null>(null);

  useEffect(() => {
    const createLinkToken = async () => {
      try {
        const response = await axios.post('/api/create_link_token');
        setLinkToken(response.data.link_token);
      } catch (error) {
        console.error('Error creating link token:', error);
      }
    };
    createLinkToken();
  }, []);

  const onPlaidSuccess = useCallback((public_token: string, metadata: any) => {
    onSuccess(public_token, metadata);
  }, [onSuccess]);

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: onPlaidSuccess,
  });

  return (
    <Button onClick={() => open()} disabled={!ready}>
      Link New Account
    </Button>
  );
};

export default PlaidLink;
