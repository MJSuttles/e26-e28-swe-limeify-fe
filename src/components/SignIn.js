import React from 'react';
import { Button } from 'react-bootstrap';
import Image from 'next/image';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <Image src="/images/limeify-logo.png" alt="Limeify Logo" width={500} height={500} style={{ alignSelf: 'center' }} />
      <h1>Click the button below to login!</h1>
      <Button type="button" size="lg" className="copy-btn" style={{ backgroundColor: '#61EFA3' }} onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Signin;
