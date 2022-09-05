import React from 'react';
import styles from './Homepage.module.css';
import About from '../About/about';
import CarouselComponent from '../Carousel/car';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignIn/SignUp';
import Navbar from '../../components/navbar/navbar';
import Incentives from '../incentives/Incentives';


function Home() {
    return (
        <div>

            <Navbar />
            <div className={styles.container}>
                <div className={styles.bg}>
                    <div className={styles.im}></div>
                    <div className={styles.vert}></div>
                    <h1 className={styles.heading}>CAMPUS<br />AMBASSADOR<br />PROGRAM</h1>
                </div>
                <div className={styles.bod}>
                    <About/>
                    <Incentives/>
                    <CarouselComponent/>
                </div>
                <div className={styles.cara}></div>
            
                

            </div>


        </div>
    );

}

export default Home;