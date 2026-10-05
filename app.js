```javascript
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

const app = document.getElementById('app');

let page = 'home';
let currentNote = null;

const $ = selector => document.querySelector(selector);

function go(newPage) {
  page = newPage;
  render();
  window.scrollTo(0, 0);
}

function render() {
  document.querySelectorAll('nav button[data-page]').forEach(button => {
    button.classList.toggle('active', button.dataset.page === page);
  });

  if (page === 'home') home();
  else if (page === 'library') library();
  else if (page === 'notes') notes();
  else if (page === 'growth') growth();
  else if (page === 'knowledge') knowledge();
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

function library() {
  app.innerHTML = `
    <h2>📚 کتابخانه</h2>

    <p class="muted">
      تعداد کتاب‌های درج‌شده: ${books.length}
    </p>

    <div class="toolbar">
      <input
        id="search"
        class="input search"
        placeholder="جستجوی نام کتاب یا موضوع..."
        oninput="filterBooks()"
      >
    </div>

    <div id="books" class="cards"></div>
  `;

  drawBooks(books);
}

function drawBooks(list) {
  const box = $('#books');

  if (!box) return;

  if (!list.length) {
    box.innerHTML = `
      <div class="card">
        کتابی پیدا نشد.
      </div>
    `;
    return;
  }

  box.innerHTML = list.map(book => `
    <article class="card book">

      <div>
        <div class="chips">
          <span class="chip">
            ${book[2].split(' / ')[0]}
          </span>
        </div>

        <h3>${book[1]}</h3>

        <div class="muted">
          شناسه: ${book[0]}
        </div>

        <div class="muted">
          ${book[2]}
        </div>
      </div>

      <button
        class="open"
        onclick="readBook('${book[0]}')"
      >
        📖 باز کردن کتاب
      </button>

    </article>
  `).join('');
}

function filterBooks() {
  const input = $('#search');

  if (!input) return;

  const query = input.value.trim().toLowerCase();

  const result = books.filter(book => {
    const text = (
      book[1] + ' ' +
      book[2] + ' ' +
      book[0]
    ).toLowerCase();

    return text.includes(query);
  });

  drawBooks(result);
}

/* صفحه مطالعه */
function readBook(id) {
  const book = books.find(item => item[0] === id);

  if (!book) {
    alert('کتاب پیدا نشد.');
    return;
  }

  /* کتاب 15803 */
  if (id === '15803') {
    app.innerHTML = `
      <button
        class="back"
        onclick="go('library')"
      >
        ← بازگشت به کتابخانه
      </button>

      <h2>📖 ${book[1]}</h2>

      <div class="card" style="text-align:center;padding:35px">

        <div style="font-size:52px">
          📚
        </div>

        <h3>
          ${book[1]}
        </h3>

        <p class="muted">
          نویسنده: سید محمد حسینی بهارانچی
        </p>

        <p class="muted">
          برای مطالعه، یکی از گزینه‌های زیر را انتخاب کن.
        </p>

        <div
          style="
            display:flex;
            flex-wrap:wrap;
            gap:12px;
            justify-content:center;
            margin-top:25px;
          "
        >

          <button
            class="primary"
            onclick="openBookOfficial()"
          >
            📖 نسخه قائمیه
          </button>

          <button
            onclick="openBookAlternative()"
          >
            📚 نسخه جایگزین
          </button>

        </div>

        <p
          class="muted"
          style="margin-top:20px"
        >
          اگر نسخه قائمیه در شبکه شما باز نشد،
          نسخه جایگزین را امتحان کن.
        </p>

      </div>
    `;
    return;
  }

  /* سایر کتاب‌ها */
  const url = 'https://www.ghbook.ir/Book/' + id;

  app.innerHTML = `
    <button
      class="back"
      onclick="go('library')"
    >
      ← بازگشت به کتابخانه
    </button>

    <h2>📖 ${book[1]}</h2>

    <div class="card" style="text-align:center;padding:35px">

      <div style="font-size:48px">
        📚
      </div>

      <h3>${book[1]}</h3>

      <p class="muted">
        شناسه کتاب: ${book[0]}
      </p>

      <button
        class="primary"
        onclick="window.open('${url}', '_blank')"
      >
        📖 مطالعه کتاب
      </button>

    </div>
  `;
}

/* لینک رسمی قائمیه برای کتاب 15803 */
function openBookOfficial() {
  const url =
    'https://www.ghbook.ir/Book/15803';

  window.open(url, '_blank');
}

/* نسخه جایگزین آنلاین */
function openBookAlternative() {
  const url =
    'https://www.scribd.com/document/937913982/Az-Quran-Shafa-Bigirim-Softgozar-com';

  window.open(url, '_blank');
}

function notes() {
  let list = JSON.parse(
    localStorage.getItem('murtaza_notes') || '[]'
  );

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
            list.map(note => `
              <div
                class="note-item ${
                  note.id === currentNote ? 'sel' : ''
                }"
                onclick="selectNote('${note.id}')"
              >
                <b>
                  ${note.title || 'بدون عنوان'}
                </b>

                <div class="muted">
                  ${new Date(note.updated)
                    .toLocaleDateString('fa-AF')}
                </div>
              </div>
            `).join('')

            ||

            '<p class="muted">هنوز یادداشتی نداری.</p>'
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
                value="${escapeHtml(selected.title || '')}"
              >

              <textarea
                id="nb"
                placeholder="مطالبی را که می‌خوانی اینجا بنویس..."
              >${escapeHtml(selected.body || '')}</textarea>

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

function escapeHtml(value) {
  return String(value || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function newNote() {
  const list = JSON.parse(
    localStorage.getItem('murtaza_notes') || '[]'
  );

  const note = {
    id: Date.now().toString(),
    title: 'یادداشت جدید',
    body: '',
    updated: Date.now()
  };

  list.unshift(note);

  localStorage.setItem(
    'murtaza_notes',
    JSON.stringify(list)
  );

  currentNote = note.id;

  notes();
}

function selectNote(id) {
  currentNote = id;
  notes();
}

function saveNote() {
  const list = JSON.parse(
    localStorage.getItem('murtaza_notes') || '[]'
  );

  const note = list.find(
    item => item.id === currentNote
  );

  if (!note) return;

  note.title = $('#nt').value;
  note.body = $('#nb').value;
  note.updated = Date.now();

  localStorage.setItem(
    'murtaza_notes',
    JSON.stringify(list)
  );

  notes();
}

function deleteNote() {
  if (!confirm('این یادداشت حذف شود؟')) {
    return;
  }

  let list = JSON.parse(
    localStorage.getItem('murtaza_notes') || '[]'
  );

  list = list.filter(
    note => note.id !== currentNote
  );

  localStorage.setItem(
    'murtaza_notes',
    JSON.stringify(list)
  );

  currentNote = list.length
    ? list[0].id
    : null;

  notes();
}

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

      ${categories.map(category => `
        <div class="card">

          <h3>${category}</h3>

          <p class="muted">
            ${
              books.filter(
                book => book[2].startsWith(category)
              ).length
            }
            عنوان
          </p>

          <button onclick="go('library')">
            رفتن به کتابخانه
          </button>

        </div>
      `).join('')}

    </div>
  `;
}

/* منوی اصلی */
document
  .querySelectorAll('nav button[data-page]')
  .forEach(button => {
    button.onclick = () => {
      go(button.dataset.page);
    };
  });

/* حالت تاریک */
const themeButton = $('#theme');

if (themeButton) {
  themeButton.onclick = () => {
    document.documentElement.classList.toggle('dark');

    localStorage.setItem(
      'murtaza_dark',
      document.documentElement.classList.contains('dark')
    );
  };
}

if (
  localStorage.getItem('murtaza_dark') === 'true'
) {
  document.documentElement.classList.add('dark');
}

/* شروع */
render();
```
