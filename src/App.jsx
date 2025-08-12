import { useState } from 'react'
import './App.css'
import main1 from "../src/assets/main1.jpg";
import main2 from "../src/assets/main2.jpg";
import about1 from "../src/assets/abou1.jpg";
import about2 from "../src/assets/about2.jpg";
import about4 from "../src/assets/abou4.jpg";
import сourse1 from "../src/assets/cour1.jpg";
import сourse2 from "../src/assets/cours2.jpg";
import сourse3 from "../src/assets/c3.jpg";
import сourse4 from "../src/assets/c4.jpg";
import сourse5 from "../src/assets/c5.jpg";
import profile1 from "../src/assets/profil1.jpg";
import profile2 from "../src/assets/profil2.jpg";
import profile3 from "../src/assets/profil3.jpg";
import profile4 from "../src/assets/profil4.jpg";
import donate from "../src/assets/p1.jpg";
import translater1 from "../src/assets/translater.png";
import mobile1 from "../src/assets/mobile1.jpg";
import mobile2 from "../src/assets/mobile2.jpg";
import mobile3 from "../src/assets/mobile3.jpg";
import mobile4 from "../src/assets/mobile4.jpg";
import mobile5 from "../src/assets/mobile5.jpg";
import demoVideo from "../src/assets/look.mp4";
const GalleryBlock = ({ title, text, images }) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const openFullScreen = () => {
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
  };


  const changeImage = (newIndex) => {
    setFade(true);
    setTimeout(() => {
      setIndex(newIndex);
      setFade(false);
    }, 300); 
  };

  const nextImage = () => {
    changeImage((index + 1) % images.length);
  };

  const prevImage = () => {
    changeImage((index - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-item">
      <div className="image-container">
        <button onClick={prevImage} className="nav-btn">‹</button>
        <img
          src={images[index]}
          alt={title}
          className={fade ? 'fade-out' : 'fade-in'}
          onClick={openFullScreen} 
        />
        <button onClick={nextImage} className="nav-btn">›</button>
      </div>

      {isFullScreen && (
        <div className="fullscreen-view">
          <button className="close-btn" onClick={closeFullScreen}>×</button>
          <button className="nav-btn prev" onClick={prevImage}>‹</button>
          <img src={images[index]} alt={title} />
          <button className="nav-btn next" onClick={nextImage}>›</button>
        </div>
      )}
      <div className="text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="page-wrapper">
      <div className="project-page">
        <header className="project-header">
          <h1>Signly — перекладач жестової мови з інтегрованими курсами</h1>
          <p className="subtitle">
            Веб-застосунок, який допомагає спілкуватися між людьми з використанням
            української жестової мови та навчає її.
          </p>
          <div className="links">
            <a href="https://github.com/YuliiaIvakhnenko/SignLanguageTranslaterWebsite" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </header>

        <section className="description">
          <h2>Короткий опис</h2>
          <p>
            Signly — це веб-застосунок, який поєднує функції перекладача
            української жестової мови та інтерактивних навчальних курсів.
            Мета проєкту — зробити спілкування та вивчення жестової мови
            доступним для всіх.
          </p>
        </section>

        <section className="gallery">
          <GalleryBlock
            title="Загальні сторінки"
            text=
            "Продемонстровано основну сторінку та сторінку 'Про проєкт'. Основна сторінка вміщає в себе демонстрацію перекладача та можливості даного проєкту. Для реалізації використано React з хуками useState і useEffect."
            images={[main1, main2, about1, about2, about4 ]}
          />
          <GalleryBlock
            title="Сторінка перекладу"
            text="Блок перекладу реалізовано на React із використанням хуків useState, useEffect і useRef для контролю стану, доступу до відеопотоку камери та управління процесом запису відео. Впроваджено функціонал завантаження відео, запису в режимі реального часу з таймером і обмеженнями на кількість перекладів для неавторизованих користувачів. Для обробки відео і взаємодії з сервером використано axios з підтримкою асинхронних запитів та обробкою помилок, що забезпечує надійність і зручність роботи користувача."
            images={[translater1]}
          />
          <GalleryBlock
            title="Сторінка курсів"
            text="Сторінка курсу «Жестова мова для всіх» створена на React із використанням хуків useState для керування станом — відстеження донату, прогресу, навігації між уроками. Інтерфейс пояснює цільову аудиторію курсу, умови навчання та запис. Курс має підтримку послідовного проходження уроків із відео, тестами, контролем прогресу та блокуванням наступних уроків до успішного завершення поточного. Для навігації застосовано React Router і хук useNavigate. Динамічна бокова панель з розблокуванням уроків за результатами тестів."
            images={[сourse1, сourse2, сourse3, сourse4, сourse5]}
          />
          <GalleryBlock
              title="Форми аутентифікації"
              text={
                <>
                  <p>Реалізовано три форми аутентифікації на React з хуками useState та Formik. Валідація — через кастомні функції та Yup із перевіркою email, пароля й унікальності даних. Обмін з сервером — axios і fetch з cookie для refresh-токенів.</p>
                  <p>Вхід — показ/приховування пароля, обробка помилок, збереження токенів у localStorage.</p>
                  <p>Реєстрація — багатокрокова з чернеткою у sessionStorage, перевіркою полів та валідацією на рівні UI і API.</p>
                  <p>Відновлення — покрокове, з перевіркою email, підтвердженням коду та новим паролем.</p>
                </>
              }
              images={[profile1, profile2, profile3]}
            />

          <GalleryBlock
              title="Профіль користувача"
              text="
                  Сторінка профілю користувача містить можливість перегляду та редагування персональних даних, таких як ім’я, прізвище, нікнейм та електронна пошта. Користувач може змінити аватар, завантаживши нове фото з попереднім переглядом, а також оновити пароль через зручне модальне вікно з валідацією введених даних. Відображається прогрес у навчанні — кількість пройдених уроків та середня оцінка. Крім того, доступні кнопки для виходу з акаунту, повернення до курсу і налаштування теми інтерфейсу. Усі зміни синхронізуються з сервером через API з обробкою помилок та відповідними повідомленнями для користувача.
                "
              images={[profile4]}
            />

          <GalleryBlock
            title="Підтримка проєкту"
            text="Сторінка підтримки проєкту реалізована у вигляді форми, де користувач може ввести свій email, ім’я, суму донату, вибрати валюту та залишити необов’язкове повідомлення. Форма містить валідацію обов’язкових полів і перевірку правильності введених даних. Після підтвердження даних вони відправляються на сервер для створення сесії оплати через Stripe Checkout. Користувач автоматично перенаправляється на сторінку оплати, а у разі помилок система відображає відповідні повідомлення. Після успішного надсилання форми відбувається перенаправлення на сторінку подяки."
            images={[donate]}
          />

          <GalleryBlock
            title="Мобільна версія"
            text="Усі сторінки проєкту оптимізовані для коректного відображення на різних пристроях. Використано адаптивну верстку, медіа-запити та гнучкі сітки, щоб інтерфейс залишався зручним і читабельним на будь-якій роздільній здатності."
            images={[mobile1, mobile2, mobile3, mobile4, mobile5]}
          />
        </section>

    
        <section className="video-demo">
          <h2>Відео демо</h2>
          <video
            src={demoVideo}
            controls
            preload="metadata"
            style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
          >
            Ваш браузер не підтримує відтворення відео.
          </video>
        </section>


        <section className="technologies">
          <h2>Використані технології</h2>
          <ul>
            <li>React</li>
            <li>React Router/React Hooks</li>
            <li>Vite</li>
            <li>HTML/CSS/JavaScript</li>
            <li>Formik + Yup</li>
            <li>Axios</li>
            <li>LocalStorage/SessionStorage</li>
            <li>FileReader API</li>
          </ul>
        </section>
        
        <section className="my-role">
          <h2>Моя роль у проєкті</h2>
          <ul>
            <li>Розробка дизайну інтерфейсу та адаптивного оформлення з урахуванням UX/UI-принципів</li>
            <li>Створення та наповнення сайту контентом: підготовка текстів, інформаційних матеріалів і медіа</li>
            <li>Повна розробка користувацького інтерфейсу</li>
            <li>Реалізація форм аутентифікації (реєстрація, вхід, відновлення пароля) з валідацією, обробкою помилок і безпечним зберіганням токенів</li>
            <li>Розробка функціоналу профілю: редагування даних, зміна пароля, завантаження та оновлення аватара через API</li>
            <li>Відображення прогресу у навчальних курсах із динамічним оновленням статистики</li>
            <li>Організація маршрутизації та логіки перенаправлень після ключових дій (авторизація, реєстрація, донати)</li>
            <li>Оптимізація взаємодії користувача з інтерфейсом: повідомлення про помилки, підтвердження успішних операцій, динамічний контент</li>
            <li>Використання React, хуків, Formik, Yup, axios та REST API для створення інтерактивних і надійних компонентів фронтенду</li>
            <li>Адаптація під мобільні пристрої</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
