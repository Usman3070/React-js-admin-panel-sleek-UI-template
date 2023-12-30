import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
const BASE_URL=process.env.REACT_APP_BASE_URL

const ConfirmEmail = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/auth/confirm-email/${token}/`,{token:token}, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 202) {
          // Email verification successful
          console.log('Email verification successful');
          
          // Redirect to the sign-in page
          navigate('/auth');
        } else {
          console.error('Email verification failed');
        }
      } catch (error) {
        console.error('Error during email verification:', error);
      }
    };

    confirmEmail();
  }, [token, navigate]);

  return (
    <div>
      <p>Verifying email...</p>
    </div>
  );
};

export default ConfirmEmail;