const JoinUsSection = () => {
  return (
    <section>
      <h2>Приєднуйтесь до "Батьки разом" сьогодні!</h2>
      <p>
        Запрошуємо вас стати частиною нашої колаборативної мережі та підготувати
        вашу дитину до початкової школи разом з нами. Приєднуйтесь сьогодні та
        робіть перші кроки до спільного успіху!
      </p>
      <form autoComplete="off">
        <label htmlFor="">Ім`я</label>
        <input type="text" placeholder="Валерія" />
        <label htmlFor="">Номер телефону</label>
        <input type="text" placeholder="380 00 00 00 000" />
        <button type="submit"></button>
      </form>
      <img src="" alt="" width={50} />
    </section>
  );
};

export default JoinUsSection;
