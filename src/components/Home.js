import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Particles from 'react-particles-js';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Particles 
                params={{
                    particles: {
                        number: {
                            value: 45
                        }
                    }
                }}
            />
        </div>
    )
}

export default Home

