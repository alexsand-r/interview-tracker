# 2️⃣0️⃣2️⃣5️⃣ interview tracker

      <Router basename="/">
        <Routes>
          {/* сторінка авторизації через гугл аккаунт */}
          <Route path="/login" element={<LoginGoogleForm />} />
          {/* домашня сторінка */}
          <Route path="/" element={<InterviewList />} />
          {/* Сторінка форми */}
          <Route path="/form" element={<Form />} />{" "}
        </Routes>
      </Router>
