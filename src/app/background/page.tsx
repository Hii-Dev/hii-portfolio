import Footer from "@/components/footer";

export default function Portfolios() {
  return (
    <div className="relative top-32 animate-fade-in">
      {/* タイトル */}
      <h1 className="relative text-center text-2xl font-semibold tracking-tight">
        Background
      </h1>

      {/* タイムライン全体 */}
      <div className="relative mt-16 px-4 flex flex-col items-center gap-14">
        {/* 縦線 */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-stone-200" />

        <div className="relative flex flex-col items-center gap-2 text-sm text-stone-600">
          <span className="w-3 h-3 rounded-full bg-stone-400" />
          <p className="z-10 mt-4">愛媛県</p>
          <p className="z-10">2003年 5月 17日 生まれ</p>
          <p className="z-10 text-xs text-stone-400">地元の小中学校 卒業</p>
        </div>

        {/* 高校 */}
        <div className="relative w-full max-w-xl rounded-2xl border border-stone-200 bg-white/60 p-6 shadow-sm text-left transition-shadow hover:shadow-md">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h2 className="text-lg font-semibold tracking-tight">
              愛媛県立 伊予農業高等学校 <br />
              環境開発科
            </h2>
            <span className="text-xs text-stone-400">2019 – 2022</span>
          </div>

          <div className="mt-4 space-y-3 text-sm leading-relaxed text-stone-600">
            <p>
              農業の現状や米作りをはじめ、農業土木・測量について体系的に学びました。その過程で、ドローン検定3級および測量士補試験に合格しました。
            </p>

            <p>
              また、農業クラブの役員としてフラワーデザイン競技大会の運営スタッフを担当しました。
            </p>

            <p>
              測量部（伊予農希少植物群保全プロジェクトチーム）では、高知工科大学主催の測量コンテストに参加したほか、塩屋海岸に堆積するプラスチックの調査を実施し、肥料起源のマイクロプラスチックを発見しました。
            </p>

            <p>
              これらの研究成果について、重信川フォーラムや伊予農業高校農業祭、農業クラブプロジェクト発表会校内大会にて発表を行いました。
            </p>
          </div>

          <div className="mt-5">
            <p className="text-xs font-medium text-stone-500">取得資格</p>
            <ul className="mt-2 flex flex-wrap gap-2 text-xs text-stone-600">
              <li className="rounded-full bg-stone-100 px-3 py-1">
                無人航空従事者試験3級
              </li>
              <li className="rounded-full bg-stone-100 px-3 py-1">
                2 級土木施工管理技術検定 後期学科検定（種目：土木）
              </li>
              <li className="rounded-full bg-stone-100 px-3 py-1">
                測量士補 国家試験
              </li>
              <li className="rounded-full bg-stone-100 px-3 py-1">
                文章入力スピード認定試験 準 2 級
              </li>
            </ul>
          </div>
        </div>

        <span className="w-3 h-3 rounded-full bg-stone-400 z-10" />

        <div className="relative w-full max-w-xl rounded-2xl border border-stone-200 bg-white/60 p-6 shadow-sm text-left transition-shadow hover:shadow-md">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h2 className="text-lg font-semibold tracking-tight">
              飲食アルバイト
            </h2>
            <span className="text-xs text-stone-400">2022 – 2026.02</span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-stone-600">
            清掃スタッフとして採用後、レジ業務・ホール業務・調理補助を経験しました。また、100人規模の宴会においてランナーリーダーを担当しました。その他にも、清掃スタッフのリーダーとして業務連絡を担い、有志スタッフと協力して清掃スタッフ用のマニュアルを作成しました。
          </p>
        </div>

        <span className="w-3 h-3 rounded-full bg-stone-400 z-10" />

        {/* 専門学校 */}
        <div className="relative w-full max-w-xl rounded-2xl border border-stone-200 bg-white/60 p-6 shadow-sm text-left transition-shadow hover:shadow-md">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h2 className="text-lg font-semibold tracking-tight">
              河原電子ビジネス専門学校 <br />
              ITイノベーション科
            </h2>
            <span className="text-xs text-stone-400">2022 – 2026.03</span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-stone-600">
            Web開発を中心に、フロントエンドからバックエンドまでの基礎を学習。河原大学園祭に出展する作品として、チームで脱出ゲームのWebアプリを制作しました。また、個人開発では
            React・TypeScript・FastAPI
            を用いたWebアプリケーションの開発に継続的に取り組んでいます。
          </p>

          <div className="mt-5">
            <p className="text-xs font-medium text-stone-500">取得資格</p>
            <ul className="mt-2 flex flex-wrap gap-2 text-xs text-stone-600">
              <li className="rounded-full bg-stone-100 px-3 py-1">
                基本情報技術者
              </li>
              <li className="rounded-full bg-stone-100 px-3 py-1">
                Web クリエイター能力認定試験エキスパート/HTML5 エキスパート
              </li>
              <li className="rounded-full bg-stone-100 px-3 py-1">
                Python3 エンジニア認定基礎試験
              </li>
              <li className="rounded-full bg-stone-100 px-3 py-1">
                Azure Fundamentals
              </li>
            </ul>
          </div>
        </div>

        <span className="w-3 h-3 rounded-full bg-stone-400 z-10" />

        <div className="relative w-full max-w-xl rounded-2xl border border-stone-200 bg-white/60 p-6 shadow-sm text-left transition-shadow hover:shadow-md">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h2 className="text-lg font-semibold tracking-tight">
              学生エンジニアコミュニティ参加
            </h2>
            <span className="text-xs text-stone-400">2024 – 2026.03</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-stone-600">
            学生エンジニアコミュニティでは、日々の学習内容の発表や勉強会の開催をはじめ、就職活動やインターンに関する情報共有など、学生同士が成長できるさまざまな活動を行っています。
          </p>
        </div>

        <span className="w-3 h-3 rounded-full bg-stone-400 z-10" />

        <div className="relative w-full max-w-xl rounded-2xl border border-stone-200 bg-white/60 p-6 shadow-sm text-left transition-shadow hover:shadow-md">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h2 className="text-lg font-semibold tracking-tight">
              株式会社アイムービック <br /> インターンシップ
            </h2>
            <span className="text-xs text-stone-400">2025.8 – 2026.03</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-stone-600">
            メッセージボードアプリ/サービスの企画・開発を約8ヶ月間支援して頂きました。UXを意識した開発の重要性を学び、顧客目線で使いやすいWebアプリ/サービスを設計することの難しさも感じました。
            <br />
            3月に実施したメッセージボードアプリの実証実験では11人が参加し15件のメッセージを書き込みました。
          </p>
        </div>

        <span className="w-3 h-3 rounded-full bg-stone-400 z-10" />

        <p className="z-10 mt-4">就職のため千葉県へ移住</p>

        {/* <span className="w-3 h-3 rounded-full bg-stone-400 z-10" /> */}
      </div>

      {/* フッター */}
      <div className="relative mt-24 pb-16">
        <Footer />
      </div>
    </div>
  );
}
