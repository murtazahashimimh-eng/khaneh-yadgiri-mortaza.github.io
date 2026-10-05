const books = [
  ['5788','عوامل جاودانگی ژرف‌ترین حماسه تاریخ','تاریخ و جغرافیا'],
  ['12466','انسان کلید اسرار هستی','تاریخ و جغرافیا'],
  ['7413','سیستم ادراکی، احساسی و فکری انسان از دیدگاه قرآن و حدیث','تاریخ و جغرافیا'],
  ['704','توحید مفضل، ترجمه علامه مجلسی','تاریخ و جغرافیا'],
  ['2034','زندگی برزخی و ارتباط با برزخ‌نشینان','تاریخ و جغرافیا'],
  ['4464','عدالت مهدوی و فلسفه تاریخ','تاریخ و جغرافیا'],

  ['4150','مدیریت ذهن و هوش','رشد فردی و خودشناسی / ذهن، هوش و تفکر'],
  ['569','داستان‌هایی از گریه بر امام حسین علیه‌السلام','مناسبت‌ها / عزاداری'],
  ['19232','حفظ حرمت‌ها در فصل بهار','مناسبت‌ها / ماه رمضان'],
  ['16804','بهار طاعت: گلچین سخنرانی‌های حرم مطهر رضوی با موضوع ماه مبارک رمضان','مناسبت‌ها / ماه رمضان'],
  ['17483','آموزه‌هایی از واپسین روزهای حیات پیامبر (صلی الله علیه و آله)','مناسبت‌ها / اعیاد / عید غدیر خم'],
  ['11903','آینه غدیر در روایت شیعه و اهل سنت','مناسبت‌ها / اعیاد / عید غدیر خم'],
  ['13400','خاطرات یک روز آسمانی: گزارش‌هایی از برپایی مراسم نیمه شعبان','مناسبت‌ها / اعیاد / نیمه شعبان'],
  ['15803','از قرآن شفا بگیریم (خواص آیات و سور قرآن کریم)','اخلاق و تربیت اسلامی / ثواب و عقاب'],
  ['678','حق‌الناس در محیط کار و زندگی','اخلاق و تربیت اسلامی / ثواب و عقاب'],
  ['17505','اخلاق در نهج‌البلاغه','اخلاق و تربیت اسلامی / اخلاق در تعلیم و تعلم'],
  ['15166','بایدها و نبایدها در قرآن کریم','اخلاق و تربیت اسلامی / اخلاق در تعلیم و تعلم'],
  ['16682','اعتدال','معصومین (ع) / حضرت علی (ع)'],
  ['8338','ابعاد شخصیت علی علیه‌السلام','معصومین (ع) / حضرت علی (ع)'],
  ['20239','اسلام در عصر دانش','معصومین (ع) / حضرت علی (ع)'],
  ['9360','تاریخ امام حسین علیه‌السلام — موسوعة الامام الحسین علیه‌السلام','معصومین (ع) / امام حسین (ع)'],
  ['17493','آخرین دولت','معصومین (ع) / حضرت صاحب‌الزمان (عج)'],
  ['336','اهل‌بیت علیهم‌السلام — عرشیان فرش‌نشین','معصومین (ع) / اهل‌بیت (ع)'],
  ['5316','مناظره‌ای از امام جواد (علیه‌السلام)','معصومین (ع) / امام جواد (ع)'],
  ['2253','آشنایی با نرم‌افزارهای مفید','مهارت‌های کامپیوتری'],
  ['17692','مهارت‌های ارتباطی','مهارت‌های کاری و اداری']
];

let app = null;
let page = 'home';
let currentNote = null;

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function go(newPage) {
  page = newPage;
  render();
  window.scrollTo(0, 0);
}

function render() {
  if (!app) return;

  document.querySelectorAll('nav button[data-page]').forEach(button => {
    button.classList.toggle(
      'active',
      button.dataset.page === page
    );
  });

  if (page === 'home') {
    home();
  } else if (page === 'library') {
    library();
  } else if (page === 'notes') {
    notes();
  } else if (page === 'growth') {
    growth();
  } else if (page === 'knowledge') {
    knowledge();
  }
}

function home() {
  app.innerHTML = `
    <section class="hero">
      <div>
        <h2>امروز برای مرتضی</h2>

        <p>
          یک خانه برای مطالعه، فکر کردن، یاد گرفتن و ساختن
          شخصیت واقعی خودت؛ آرام، پیوسته و بدون نمایش برای دیگران.
        </p>

        <div class="actions">
          <button class="primary" onclick="go('library')">
            شروع مطالعه
          </button>

          <button class="primary" onclick="go('notes')">
            نوشتن یادداشت
          </button>
        </div>
      </div>

      <div class="quote">
        <b>یادآوری امروز</b>

        <div>
          «من در لحظه زندگی می‌کنم، نه برای تصویر ساختن در ذهن مردم.»
        </div>

        <hr>

        <div>
          وقار · شخصیت · اطمینان به نفس
        </div>
      </div>
    </section>

    <section class="section">
      <h2>شروع سریع</h2>

      <div class="cards">

        <div class="card">
          <h3>📚 کتابخانه</h3>
          <p class="muted">
            کتاب‌ها را بر اساس موضوع پیدا کن و مطالعه را شروع کن.
          </p>
          <button onclick="go('library')">
            رفتن به کتابخانه
          </button>
        </div>

        <div class="card">
          <h3>📝 یادداشت‌ها</h3>
          <p class="muted">
            هرچه از مطالعه می‌آموزی همین‌جا ثبت و ذخیره کن.
          </p>
          <button onclick="go('notes')">
            یادداشت‌ها
          </button>
        </div>

        <div class="card">
          <h3>🌱 رشد فردی</h3>
          <p class="muted">
            برای ساختن ذهن و شخصیت بهتر، مطالعه را پیوسته نگه دار.
          </p>
          <button onclick="go('growth')">
            رشد فردی
          </button>
        </div>

      </div>
    </section>
  `;
}

/* =========================
   کتابخانه
========================= */

function library() {
  app.innerHTML = `
    <section>
      <h2>📚 کتابخانه</h2>

      <p class="muted">
        تعداد کتاب‌های درج‌شده: ${books.length}
      </p>

      <div class="toolbar">
        <input
          id="bookSearch"
          class="input search"
          type="search"
          placeholder="جستجوی نام کتاب یا موضوع..."
        >
      </div>

      <div id="books" class="cards"></div>
    </section>
  `;

  const search = document.getElementById('bookSearch');

  if (search) {
    search.addEventListener('input', function () {
      filterBooks(this.value);
    });
  }

  drawBooks(books);
}

function drawBooks(list) {
  const box = document.getElementById('books');

  if (!box) {
    return;
  }

  if (!Array.isArray(list) || list.length === 0) {
    box.innerHTML = `
      <div class="card">
        <h3>کتابی پیدا نشد.</h3>
        <p class="muted">
          عبارت دیگری را جستجو کن.
        </p>
      </div>
    `;
    return;
  }

  box.innerHTML = list.map(book => {

    const id = escapeHtml(book[0]);
    const title = escapeHtml(book[1]);
    const category = escapeHtml(book[2]);
    const mainCategory = escapeHtml(
      book[2].split(' / ')[0]
    );

    return `
      <article class="card book">

        <div>
          <div class="chips">
            <span class="chip">
              ${mainCategory}
            </span>
          </div>

          <h3>${title}</h3>

          <div class="muted">
            شناسه: ${id}
          </div>

          <div class="muted">
            ${category}
          </div>
        </div>

        <button
          class="open"
          onclick="readBook('${id}')"
        >
          📖 باز کردن کتاب
        </button>

      </article>
    `;
  }).join('');
}

function filterBooks(value) {
  const query = String(value || '')
    .trim()
    .toLowerCase();

  const result = books.filter(book => {

    const text = [
      book[0],
      book[1],
      book[2]
    ].join(' ').toLowerCase();

    return text.includes(query);
  });

  drawBooks(result);
}

/* =========================
   مطالعه مستقیم کتاب
========================= */

function readBook(id) {

  const book = books.find(
    item => item[0] === id
  );

  if (!book) {
    alert('کتاب پیدا نشد.');
    return;
  }

  const readerUrl =
    'https://www.ghbook.ir/read/fa-IR/' +
    encodeURIComponent(id);

  app.innerHTML = `
    <section>

      <button
        class="back"
        onclick="go('library')"
      >
        ← بازگشت به کتابخانه
      </button>

      <h2>
        📖 ${escapeHtml(book[1])}
      </h2>

      <p class="muted">
        در حال بارگذاری نسخه مطالعه کتاب...
      </p>

      <div
        class="card"
        style="
          padding:0;
          overflow:hidden;
          margin-top:15px;
        "
      >

        <iframe
          id="bookReader"
          src="${readerUrl}"
          style="
            width:100%;
            min-height:80vh;
            height:850px;
            border:0;
            display:block;
            background:white;
          "
          title="${escapeHtml(book[1])}"
          allowfullscreen
        ></iframe>

      </div>

    </section>
  `;

  window.scrollTo(0, 0);
}

/* =========================
   یادداشت‌ها
========================= */

function getNotes() {
  try {
    return JSON.parse(
      localStorage.getItem('murtaza_notes') || '[]'
    );
  } catch (error) {
    return [];
  }
}

function saveNotes(list) {
  localStorage.setItem(
    'murtaza_notes',
    JSON.stringify(list)
  );
}

function notes() {
  const list = getNotes();

  if (!currentNote && list.length) {
    currentNote = list[0].id;
  }

  if (!list.length) {
    currentNote = null;
  }

  const selected = list.find(
    note => note.id === currentNote
  );

  app.innerHTML = `
    <h2>📝 یادداشت‌های من</h2>

    <p class="muted">
      یادداشت‌ها در همین مرورگر ذخیره می‌شوند.
    </p>

    <div class="note-layout">

      <aside class="note-list">

        <button onclick="newNote()">
          ＋ یادداشت جدید
        </button>

        <div id="noteList">

          ${
            list.length
              ? list.map(note => `
                <div
                  class="note-item ${
                    note.id === currentNote ? 'sel' : ''
                  }"
                  onclick="selectNote('${escapeHtml(note.id)}')"
                >
                  <b>
                    ${escapeHtml(
                      note.title || 'بدون عنوان'
                    )}
                  </b>

                  <div class="muted">
                    ${new Date(
                      note.updated
                    ).toLocaleDateString('fa-AF')}
                  </div>
                </div>
              `).join('')
              : '<p class="muted">هنوز یادداشتی نداری.</p>'
          }

        </div>
      </aside>

      <section class="note-editor">

        ${
          selected
            ? `
              <input
                id="nt"
                class="input"
                placeholder="عنوان یادداشت"
                value="${escapeHtml(
                  selected.title || ''
                )}"
              >

              <textarea
                id="nb"
                placeholder="مطالبی را که می‌خوانی اینجا بنویس..."
              >${escapeHtml(
                selected.body || ''
              )}</textarea>

              <div class="note-actions">

                <button onclick="saveNote()">
                  ذخیره
                </button>

                <button
                  class="danger"
                  onclick="deleteNote()"
                >
                  حذف
                </button>

              </div>
            `
            : `
              <div class="muted">
                برای شروع، «یادداشت جدید» را بزن.
              </div>
            `
        }

      </section>
    </div>
  `;
}

function newNote() {
  const list = getNotes();

  const note = {
    id: Date.now().toString(),
    title: 'یادداشت جدید',
    body: '',
    updated: Date.now()
  };

  list.unshift(note);

  saveNotes(list);

  currentNote = note.id;

  notes();
}

function selectNote(id) {
  currentNote = id;
  notes();
}

function saveNote() {
  const list = getNotes();

  const note = list.find(
    item => item.id === currentNote
  );

  if (!note) return;

  const title =
    document.getElementById('nt');

  const body =
    document.getElementById('nb');

  note.title = title ? title.value : '';
  note.body = body ? body.value : '';
  note.updated = Date.now();

  saveNotes(list);

  notes();
}

function deleteNote() {
  if (!confirm('این یادداشت حذف شود؟')) {
    return;
  }

  let list = getNotes();

  list = list.filter(
    note => note.id !== currentNote
  );

  saveNotes(list);

  currentNote = list.length
    ? list[0].id
    : null;

  notes();
}

/* =========================
   رشد فردی
========================= */

function growth() {
  app.innerHTML = `
    <h2>🌱 رشد فردی و خودشناسی</h2>

    <div class="cards">

      <div class="card">

        <h3>🧠 ذهن، هوش و تفکر</h3>

        <p>
          مدیریت ذهن و هوش
        </p>

        <button onclick="readBook('4150')">
          📖 مطالعه
        </button>

      </div>

      <div class="card">

        <h3>🌱 تمرین روزانه</h3>

        <p class="muted">
          هر روز یک چیز کوچک یاد بگیر،
          یک نکته بنویس و آن را در عمل ببین.
        </p>

      </div>

    </div>
  `;
}

/* =========================
   دانش و مطالعه
========================= */

function knowledge() {

  const categories = [
    ...new Set(
      books.map(
        book => book[2].split(' / ')[0]
      )
    )
  ];

  app.innerHTML = `
    <h2>📖 دانش و مطالعه</h2>

    <p class="muted">
      موضوعات اصلی خانه یادگیری
    </p>

    <div class="cards">

      ${categories.map(category => {

        const count = books.filter(
          book => book[2].startsWith(category)
        ).length;

        return `
          <div class="card">

            <h3>
              ${escapeHtml(category)}
            </h3>

            <p class="muted">
              ${count} عنوان
            </p>

            <button
              onclick="openCategory('${escapeHtml(category)}')"
            >
              📚 مشاهده کتاب‌ها
            </button>

          </div>
        `;

      }).join('')}

    </div>
  `;
}

function openCategory(category) {

  page = 'library';

  render();

  const result = books.filter(
    book => book[2].startsWith(category)
  );

  const search =
    document.getElementById('bookSearch');

  if (search) {
    search.value = category;
  }

  drawBooks(result);

  window.scrollTo(0, 0);
}

/* =========================
   شروع برنامه
========================= */

function initializeApp() {

  app = document.getElementById('app');

  if (!app) {
    console.error(
      'عنصر #app در index.html پیدا نشد.'
    );
    return;
  }

  document
    .querySelectorAll('nav button[data-page]')
    .forEach(button => {

      button.addEventListener(
        'click',
        function () {
          go(this.dataset.page);
        }
      );

    });

  const themeButton =
    document.getElementById('theme');

  if (themeButton) {

    themeButton.addEventListener(
      'click',
      function () {

        document.documentElement
          .classList.toggle('dark');

        localStorage.setItem(
          'murtaza_dark',
          document.documentElement
            .classList
            .contains('dark')
        );

      }
    );
  }

  if (
    localStorage.getItem('murtaza_dark') === 'true'
  ) {

    document.documentElement
      .classList
      .add('dark');

  }

  render();
}

/* =========================
   اجرای برنامه
========================= */

if (document.readyState === 'loading') {

  document.addEventListener(
    'DOMContentLoaded',
    initializeApp
  );

} else {

  initializeApp();

}
