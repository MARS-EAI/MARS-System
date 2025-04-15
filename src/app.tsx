import style from './app.module.less';

import { detector } from '@easycode/client-detector';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterRoutes from '@/routes/routes';
import Footer from '@/components/footer';
import GlobalProvider from '@/provider/global-provider';

function App() {
    useEffect(() => {
        const init = async () => {
            detector.sendClientInfo();
        };

        init();
    }, []);

    return (
        <BrowserRouter>
            <GlobalProvider>
                <div className={style.app} id="app">
                    <div className={style.content}>
                        <RouterRoutes />
                    </div>
                    <Footer />
                </div>
            </GlobalProvider>
        </BrowserRouter>
    );
}

export default App;
