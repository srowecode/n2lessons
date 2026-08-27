const n2curriculum = [
    {
        id: 1,
        title: "Lesson 1: Time & Sequential Action",
        grammar: [
            {
                point: "~にあたって / 〜にあたり",
                english: "At the time of / On the occasion of",
                structure: "Noun / Verb (Dictionary form) + にあたって",
                nuance: "It's used when you are about to start something big, special, or formal. It's not for everyday stuff like 'before I eat breakfast.' It's more like 'before we launch this massive project' or 'prior to getting married.'",
                metaphor: "Think of it as rolling out the red carpet before a VIP event. You wouldn't roll out a red carpet just to open your fridge; it's only for special occasions!",
                examples: [
                    { topic: "Business", text: "新規プロジェクトの開始にあたって、チーム全員で会議を開いた。", eng: "On the occasion of starting the new project, we held a meeting with the whole team." },
                    { topic: "Video games", text: "新しいゲーム機を発売するにあたり、大規模なテストが行われた。", eng: "At the time of releasing the new game console, large-scale testing was conducted." },
                    { topic: "Dating", text: "プロポーズするにあたって、彼は高級レストランを予約した。", eng: "On the occasion of proposing, he booked a high-end restaurant." },
                    { topic: "Computers", text: "サーバーの移行にあたり、データのバックアップが必須です。", eng: "At the time of server migration, data backup is essential." },
                    { topic: "Anime", text: "アニメの最終回を放送するにあたって、特別なイベントが企画された。", eng: "On the occasion of broadcasting the final episode of the anime, a special event was planned." }
                ],
                clickingGames: [
                    { prompt: "On the occasion of participating in the airsoft tournament, I bought a new gun.", target: "サバイバルゲームの大会に参加するにあたって新しい銃を買った", words: ["新しい銃を買った", "大会に参加するにあたって", "サバイバルゲームの"] },
                    { prompt: "At the time of starting the channel, I prepared a high-performance camera.", target: "チャンネルを開設するにあたり高性能なカメラを準備した", words: ["準備した", "高性能なカメラを", "チャンネルを", "開設するにあたり"] },
                    { prompt: "On the occasion of opening the new store, we conducted staff training.", target: "新店舗のオープンにあたってスタッフの研修を行った", words: ["研修を行った", "スタッフの", "新店舗の", "オープンにあたって"] },
                    { prompt: "At the time of touring the beer factory, the precautions were explained.", target: "ビール工場を見学するにあたり注意事項が説明された", words: ["注意事項が説明された", "見学するにあたり", "ビール工場を"] },
                    { prompt: "On the occasion of studying abroad in Japan, I received a letter from my parents.", target: "日本へ留学するにあたって両親から手紙をもらった", words: ["日本へ留学するにあたって", "手紙をもらった", "両親から"] }
                ],
                dropdownGames: [
                    { before: "海外へ", options: ["留学するにあたり", "留学したにあたり", "留学にあたり"], answer: "留学するにあたり", after: "、パスポートを更新した。" },
                    { before: "新製品の", options: ["開発するにあたって", "開発にあたって", "開発したにあたって"], answer: "開発にあたって", after: "、市場調査を行った。" },
                    { before: "ゲーム大会に", options: ["出場するにあたって", "出場にあたりて", "出場したにあたって"], answer: "出場するにあたって", after: "、毎日10時間練習した。" },
                    { before: "結婚", options: ["するにあたって", "にあたり", "したにあたって"], answer: "するにあたって", after: "、両親に挨拶に行った。" },
                    { before: "ウェブサイトの", options: ["公開するにあたり", "公開にあたり", "公開のあたり"], answer: "公開にあたり", after: "、セキュリティを強化した。" }
                ],
                opinionQuestions: [
                    { text: "新しい仕事を始めるにあたって、一番大切だと思う準備は何ですか？", eng: "What do you think is the most important preparation when starting a new job?" },
                    { text: "日本へ旅行に行くにあたり、絶対に調べておくべきことは何だと思いますか？", eng: "What do you think one absolutely must research prior to traveling to Japan?" },
                    { text: "新しいパソコンを買うにあたって、あなたが一番重視するスペックは何ですか？", eng: "When buying a new PC, what specification do you value the most?" }
                ]
            },
            {
                point: "~か〜ないかのうちに",
                english: "Right after / As soon as",
                structure: "Verb (Dictionary) + か + Verb (ない form) + かのうちに",
                nuance: "This describes two things happening so close together that they almost overlap. It feels like the first action hasn't even fully finished before the second one aggressively interrupts or starts.",
                metaphor: "It's like a relay race where the second runner grabs the baton before the first runner has even fully let go of it.",
                examples: [
                    { topic: "General JLPT", text: "ドアが開くか開かないかのうちに、犬が飛び出していった。", eng: "Right after the door opened, the dog jumped out." },
                    { topic: "Alcohol", text: "ビールを一杯飲み終わるか終わらないかのうちに、彼は次のグラスを注文した。", eng: "Right after he finished drinking one glass of beer, he ordered the next one." },
                    { topic: "Airsoft", text: "サバイバルゲームの試合が始まるか始まらないかのうちに、敵に撃たれた。", eng: "Right after the airsoft game started, I was shot by the enemy." },
                    { topic: "Youtube", text: "動画が公開されるかされないかのうちに、たくさんのコメントがついた。", eng: "Right after the video was published, it got many comments." },
                    { topic: "Business", text: "会議が終わるか終わらないかのうちに、彼は急いで部屋を出た。", eng: "Right after the meeting ended, he hurried out of the room." }
                ],
                clickingGames: [
                    { prompt: "Right after restarting the PC, it froze again.", target: "パソコンを再起動するかしないかのうちにまたフリーズした", words: ["またフリーズした", "パソコンを再起動するか", "しないかのうちに"] },
                    { prompt: "Right after the anime broadcast ended, it became a trending topic on social media.", target: "アニメの放送が終わるか終わらないかのうちにSNSで話題になった", words: ["終わらないかのうちに", "SNSで話題になった", "アニメの放送が終わるか"] },
                    { prompt: "Right after she arrived home, a message came from him.", target: "彼女が家に着くか着かないかのうちに彼からメッセージが来た", words: ["彼女が家に着くか", "彼からメッセージが来た", "着かないかのうちに"] },
                    { prompt: "Right after defeating the boss, the next enemy appeared.", target: "ボスを倒すか倒さないかのうちに次の敵が現れた", words: ["次の敵が現れた", "ボスを倒すか", "倒さないかのうちに"] },
                    { prompt: "Right after entering the field, the game started.", target: "フィールドに入るか入らないかのうちにゲームがスタートした", words: ["入らないかのうちに", "フィールドに入るか", "ゲームがスタートした"] }
                ],
                dropdownGames: [
                    { before: "ベッドに", options: ["入るか入らないかのうちに", "入るか入るないかのうちに", "入るか入らなかったかのうちに"], answer: "入るか入らないかのうちに", after: "、眠ってしまった。" },
                    { before: "PCの電源を", options: ["つけるかつかないかのうちに", "つけるかつけないかのうちに", "つけたかつけないかのうちに"], answer: "つけるかつけないかのうちに", after: "、エラーが出た。" },
                    { before: "彼が", options: ["帰るか帰らないかのうちに", "帰ったか帰らないかのうちに", "帰るか帰るないかのうちに"], answer: "帰るか帰らないかのうちに", after: "、雨が降り始めた。" },
                    { before: "給料が", options: ["入るか入らないかのうちに", "入るか入るかのうちに", "入ったか入らないかのうちに"], answer: "入るか入らないかのうちに", after: "、ゲームに全部使ってしまった。" },
                    { before: "チャイムが", options: ["鳴るか鳴らないかのうちに", "鳴るか鳴るないかのうちに", "鳴るか鳴らなかったかのうちに"], answer: "鳴るか鳴らないかのうちに", after: "、学生たちは教室を出た。" }
                ],
                opinionQuestions: [
                    { text: "あなたは朝起きて、目が覚めるか覚めないかのうちに何をしますか？", eng: "What do you do right after you wake up / open your eyes in the morning?" },
                    { text: "好きなゲームの新作が発売されるかされないかのうちに、いつもやってしまうことはありますか？", eng: "Is there something you always end up doing right as a new game from your favorite series is released?" },
                    { text: "金曜日の仕事（または授業）が終わるか終わらないかのうちに、どんな気分になりますか？", eng: "How do you feel right as Friday's work (or class) is ending?" }
                ]
            },
            {
                point: "~あげく",
                english: "After (a long process), in the end (often negative result)",
                structure: "Verb (た form) / Nounの + あげく",
                nuance: "You tried, you struggled, you went back and forth for a really long time... and after all that exhausting effort, the result was usually bad or disappointing.",
                metaphor: "Imagine spending 3 hours assembling a complicated piece of IKEA furniture, sweating and arguing, only to realize at the very end that it's upside down and you have to start over.",
                examples: [
                    { topic: "General JLPT", text: "彼は道に迷ったあげく、結局タクシーで帰ってきた。", eng: "After getting lost for a long time, he eventually came home by taxi." },
                    { topic: "Dating", text: "彼女と何時間も口論したあげく、別れることになった。", eng: "After arguing with her for hours, we ended up breaking up." },
                    { topic: "Computers", text: "パソコンを自分で修理しようと頑張ったあげく、完全に壊してしまった。", eng: "After struggling to fix the PC myself, I broke it completely." },
                    { topic: "Video games", text: "徹夜でゲームをやり続けたあげく、風邪をひいてしまった。", eng: "After pulling an all-nighter playing games, I ended up catching a cold." },
                    { topic: "Youtube", text: "長時間動画の編集で悩んだあげく、最初のバージョンに戻した。", eng: "After agonizing over the video editing for a long time, I reverted to the first version." }
                ],
                clickingGames: [
                    { prompt: "After arguing for hours in the meeting, no conclusion was reached.", target: "会議で何時間も議論したあげく結論が出なかった", words: ["議論したあげく", "会議で何時間も", "結論が出なかった"] },
                    { prompt: "After bar-hopping to three izakayas, I ended up losing my wallet.", target: "居酒屋を3軒もはしごしたあげく財布をなくしてしまった", words: ["はしごしたあげく", "居酒屋を3軒も", "財布をなくしてしまった"] },
                    { prompt: "After buying too much merch for my favorite anime, my savings dropped to zero.", target: "好きなアニメのグッズを買いすぎたあげく貯金がゼロになった", words: ["買いすぎたあげく", "好きなアニメのグッズを", "貯金がゼロになった"] },
                    { prompt: "After searching all over the net, I ended up calling customer support.", target: "ネットで調べ回ったあげく結局カスタマーサポートに電話した", words: ["調べ回ったあげく", "ネットで", "結局カスタマーサポートに電話した"] },
                    { prompt: "After reshooting the video many times, I decided to scrap it.", target: "何度も動画を撮り直したあげくボツにすることに決めた", words: ["何度も動画を", "ボツにすることに決めた", "撮り直したあげく"] }
                ],
                dropdownGames: [
                    { before: "色々", options: ["考えたあげく", "考えるあげく", "考えのあげく"], answer: "考えたあげく", after: "、会社を辞めることにした。" },
                    { before: "さんざん", options: ["迷ったあげく", "迷うあげく", "迷いあげく"], answer: "迷ったあげく", after: "、何も買わなかった。" },
                    { before: "3時間も", options: ["待ったあげく", "待ちあげく", "待つあげく"], answer: "待ったあげく", after: "、彼は来なかった。" },
                    { before: "口論の", options: ["あげく", "したあげく", "するあげく"], answer: "あげく", after: "、二人は殴り合いになった。" },
                    { before: "高いお金を", options: ["払ったあげく", "払うあげく", "払いあげく"], answer: "払ったあげく", after: "、料理は美味しくなかった。" }
                ],
                opinionQuestions: [
                    { text: "ネットで何時間も悩んだあげく、結局失敗してしまった買い物の経験はありますか？", eng: "Have you ever had an experience where you agonized online for hours and ended up making a bad purchase in the end?" },
                    { text: "友達（または恋人）と大げんかしたあげく、どうやって仲直りした（または別れた）経験がありますか？", eng: "Have you ever had a huge fight with a friend/partner, and how did it end up resolving?" },
                    { text: "パソコンのトラブルを自分で直そうと頑張ったあげく、もっとひどい状態になったことはありますか？", eng: "Have you ever tried your best to fix a PC problem yourself, only to have it end up in an even worse state?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Talking about a recent drinking party.",
            text: "<p><strong>田中:</strong> 「いやー、昨日の飲み会、大変だったよ。」</p><p><strong>佐藤:</strong> 「どうしたの？取引先のプロジェクトを始める[BLANK1]企画したやつでしょ？」</p><p><strong>田中:</strong> 「そう。でもさ、俺が乾杯の挨拶を言い終わる[BLANK2]、部長に絡まれちゃって。」</p><p><strong>佐藤:</strong> 「うわ、最悪。また説教？」</p><p><strong>田中:</strong> 「ああ。結局、３時間も説教された[BLANK3]、終電逃しちゃったよ。」</p><p><strong>佐藤:</strong> 「それは災難だったな。」</p>",
            blanks: [
                { id: "BLANK1", options: ["にあたって", "か終わらないかのうちに", "あげく"], answer: "にあたって" },
                { id: "BLANK2", options: ["にあたり", "か終わらないかのうちに", "あげく"], answer: "か終わらないかのうちに" },
                { id: "BLANK3", options: ["にあたり", "か終わらないかのうちに", "あげく"], answer: "あげく" }
            ]
        },
        story: {
            title: "Game Launch Troubles",
            text: "<p>新しいゲーム機の開発チームは、これまで数え切れないほどの困難を乗り越え、長年の努力を重ねてきた。特に、これまでにない高画質のグラフィックと、全く新しいコントローラーの操作性を両立させるのには苦労した。いよいよプロジェクトの最終テストを行う[BLANK1]、全員が「絶対に失敗は許されない」というプレッシャーから、緊張で眠れない日々を過ごしていた。社内の期待も非常に大きく、毎日のように進捗の確認が行われていた。</p><p>待ちに待った発売日の朝、ついにその瞬間が訪れた。しかし、予定時刻になり販売サイトがオープンする[BLANK2]、世界中からサーバーへのアクセスが殺到し、システムが完全にダウンしてしまったのだ。技術チームは直ちに原因の調査と復旧作業に取り掛かり、必死に対応した。しかし、ユーザーからのアクセス要求のトラフィックは事前の予想を遥かに超えており、サーバーの補強作業は困難を極めた。</p><p>昼夜を問わず、交代でシステムの復旧作業にあたった。エンジニアたちは文字通り一睡もせずに、３日間にわたってシステムトラブルの対応に追われた[BLANK3]、ついにサーバーが安定し、正常な販売が再開された。チーム全体は疲労困憊で立っているのさえやっとの状態だったが、SNSでのユーザーの高評価や、「歴史的な大ヒット」という結果を目の当たりにして、涙を流しながら喜びを隠せなかった。</p>",
            blanks: [
                { id: "BLANK1", options: ["にあたり", "かしないかのうちに", "あげく"], answer: "にあたり" },
                { id: "BLANK2", options: ["にあたって", "かしないかのうちに", "あげく"], answer: "かしないかのうちに" },
                { id: "BLANK3", options: ["にあたって", "かしないかのうちに", "あげく"], answer: "あげく" }
            ]
        }
    },
    {
        id: 2,
        title: "Lesson 2: Basis, Standard & Relation",
        grammar: [
            {
                point: "~をもとに / もとにして",
                english: "Based on / Derived from",
                structure: "Noun + をもとに(して)",
                nuance: "Used when creating, making, or thinking of something new using something else as the raw material, base data, or foundation. It is strictly for physical creations or concrete ideas.",
                metaphor: "Think of it as building a house. The noun before をもとに is the concrete foundation you pour before you can build the walls and roof.",
                examples: [
                    { topic: "Anime", text: "このアニメは、実際の歴史をもとにして作られた。", eng: "This anime was created based on actual history." },
                    { topic: "Business", text: "アンケートの結果をもとに、新しいサービスを開発します。", eng: "Based on the survey results, we will develop a new service." },
                    { topic: "Airsoft", text: "実際の軍事訓練をもとに、サバゲーの戦術を考えた。", eng: "Based on actual military training, I thought of airsoft tactics." },
                    { topic: "Video games", text: "プレイヤーのフィードバックをもとにして、ゲームのバグを修正した。", eng: "Based on player feedback, they fixed the game's bugs." },
                    { topic: "Dating", text: "共通の趣味をもとに、二人の会話が盛り上がった。", eng: "Based on their shared hobbies, their conversation got lively." }
                ],
                clickingGames: [
                    { prompt: "I wrote an essay based on this book.", target: "この本をもとにレポートを書きました", words: ["レポートを書きました", "この本を", "もとに"] },
                    { prompt: "He created a new cocktail based on traditional recipes.", target: "伝統的なレシピをもとにして新しいカクテルを作った", words: ["もとにして", "伝統的なレシピを", "新しいカクテルを", "作った"] },
                    { prompt: "We designed the website based on user data.", target: "ユーザーデータをもとにウェブサイトをデザインした", words: ["ウェブサイトを", "ユーザーデータを", "もとに", "デザインした"] },
                    { prompt: "Based on last year's sales, we made a new plan.", target: "去年の売上をもとに新しい計画を立てた", words: ["もとに", "去年の売上を", "立てた", "新しい計画を"] },
                    { prompt: "I made a video based on my travel experience.", target: "旅行の経験をもとにして動画を作りました", words: ["旅行の経験を", "動画を", "もとにして", "作りました"] }
                ],
                dropdownGames: [
                    { before: "この映画は、実話", options: ["をもとに", "をもとにしては", "をもとの"], answer: "をもとに", after: "作られている。" },
                    { before: "テストの結果", options: ["もとにして", "をもとに", "にもとに"], answer: "をもとに", after: "、クラスを分けます。" },
                    { before: "設計図", options: ["をもとにして", "をもとにした", "をもとで"], answer: "をもとにして", after: "、新しいPCを組み立てた。" },
                    { before: "顧客の意見", options: ["をもとに", "をもとで", "をもとには"], answer: "をもとに", after: "、商品を改良するべきだ。" },
                    { before: "あの小説", options: ["をもとにして", "をもとに", "をもとにした"], answer: "をもとにした", after: "ドラマが大ヒットしている。" }
                ],
                opinionQuestions: [
                    { text: "あなたの人生の経験をもとに、後輩に何かアドバイスをするとしたら何ですか？", eng: "Based on your life experiences, what advice would you give to someone younger?" },
                    { text: "実話をもとにして作られた映画やアニメで、一番好きなものは何ですか？", eng: "What is your favorite movie or anime that was created based on a true story?" },
                    { text: "どんなデータや情報をもとに、新しいパソコン（またはスマホ）を選びますか？", eng: "Based on what kind of data or information do you choose a new PC (or smartphone)?" }
                ]
            },
            {
                point: "~に沿って (にそって)",
                english: "In accordance with / Along",
                structure: "Noun + に沿って",
                nuance: "Moving or acting in parallel with a rule, policy, manual, expectation, or physical line (like a river or street) without deviating from it.",
                metaphor: "Like a train running strictly along its tracks. You don't deviate from the established path or manual.",
                examples: [
                    { topic: "Computers", text: "マニュアルに沿って、ソフトウェアのインストールを行った。", eng: "I installed the software in accordance with the manual." },
                    { topic: "Business", text: "会社の方針に沿って、新しい英語研修を進めていく。", eng: "We will proceed with the new English training in accordance with company policy." },
                    { topic: "Youtube", text: "台本に沿って、スムーズに動画の撮影を行った。", eng: "We filmed the video smoothly in accordance with the script." },
                    { topic: "Alcohol", text: "ソムリエのアドバイスに沿って、料理に合うワインを選んだ。", eng: "I chose a wine that matches the food in accordance with the sommelier's advice." },
                    { topic: "General JLPT N2", text: "川に沿って30分ほど歩くと、駅に着きます。", eng: "If you walk along the river for about 30 minutes, you will reach the station." }
                ],
                clickingGames: [
                    { prompt: "I progressed the story in accordance with the quest log.", target: "クエストの指示に沿ってストーリーを進めた", words: ["ストーリーを進めた", "クエストの指示に", "沿って"] },
                    { prompt: "We moved in accordance with the leader's strategy.", target: "リーダーの作戦に沿って移動した", words: ["沿って", "移動した", "リーダーの作戦に"] },
                    { prompt: "The movie was made faithfully along the original manga.", target: "映画は原作の漫画に沿って忠実に作られた", words: ["忠実に作られた", "原作の漫画に", "映画は", "沿って"] },
                    { prompt: "Please proceed with the work in accordance with the schedule.", target: "スケジュールに沿って作業を進めてください", words: ["沿って", "スケジュールに", "作業を", "進めてください"] },
                    { prompt: "We walked along the coastline on our date.", target: "デートで海岸線に沿って歩いた", words: ["海岸線に", "デートで", "沿って歩いた"] }
                ],
                dropdownGames: [
                    { before: "計画", options: ["に沿って", "に沿っての", "に沿うで"], answer: "に沿って", after: "、プロジェクトを進めましょう。" },
                    { before: "お客様のご希望", options: ["に沿った", "に沿って", "に沿う"], answer: "に沿った", after: "プランを提案いたします。" },
                    { before: "この道", options: ["に沿って", "を沿って", "に沿い"], answer: "に沿って", after: "まっすぐ行くと、右手にあります。" },
                    { before: "ルールの変更", options: ["に沿って", "に沿い", "に沿う"], answer: "に沿って", after: "、システムをアップデートした。" },
                    { before: "政府のガイドライン", options: ["に沿って", "に沿った", "に沿うて"], answer: "に沿って", after: "、安全対策を強化する。" }
                ],
                opinionQuestions: [
                    { text: "あなたの会社（または学校）のルールに沿って行動するのは、簡単ですか、難しいですか？", eng: "Is it easy or difficult to act in accordance with the rules of your company (or school)?" },
                    { text: "旅行する時、スケジュールに沿って動くのが好きですか、それとも自由に動くのが好きですか？", eng: "When traveling, do you like to move strictly in accordance with a schedule, or move freely?" },
                    { text: "ゲームをする時、攻略サイトの手順に沿って進めますか？", eng: "When playing a game, do you proceed in accordance with the steps on a strategy site?" }
                ]
            },
            {
                point: "~に応じて (におうじて)",
                english: "Depending on / In response to",
                structure: "Noun + に応じて",
                nuance: "Making changes, adapting, or adjusting something to appropriately fit a changing condition (like age, level, budget, or a specific request).",
                metaphor: "Like a chameleon changing its colors to perfectly match its environment. It's all about natural adaptation.",
                examples: [
                    { topic: "Video games", text: "プレイヤーのレベルに応じて、敵の強さが変化する。", eng: "Depending on the player's level, the strength of the enemies changes." },
                    { topic: "Airsoft", text: "フィールドの広さに応じて、使う武器を変える。", eng: "Depending on the size of the field, I change the weapon I use." },
                    { topic: "Dating", text: "相手の好みに応じて、デートのプランを考えます。", eng: "I will think of a date plan in response to the other person's preferences." },
                    { topic: "Business", text: "顧客からの要望に応じて、デザインを修正した。", eng: "In response to the customer's request, we revised the design." },
                    { topic: "Computers", text: "予算に応じて、組み立てるPCのスペックを決める。", eng: "Depending on the budget, I decide the specs of the PC to build." }
                ],
                clickingGames: [
                    { prompt: "The tax amount changes depending on your income.", target: "収入に応じて税金の額が変わる", words: ["収入に", "税金の額が", "応じて", "変わる"] },
                    { prompt: "I choose the type of alcohol depending on my mood that day.", target: "その日の気分に応じて飲むお酒の種類を選ぶ", words: ["飲むお酒の種類を", "選ぶ", "その日の気分に", "応じて"] },
                    { prompt: "Depending on the viewer's reactions, I will change the video content.", target: "視聴者の反応に応じて動画の内容を変えます", words: ["応じて", "視聴者の反応に", "動画の内容を変えます"] },
                    { prompt: "We will sell merchandise depending on the character's popularity.", target: "キャラクターの人気に応じてグッズを販売する", words: ["応じて", "グッズを販売する", "キャラクターの人気に"] },
                    { prompt: "Depending on the amount of data, the processing time will differ.", target: "データ量に応じて処理時間が異なります", words: ["処理時間が異なります", "データ量に", "応じて"] }
                ],
                dropdownGames: [
                    { before: "季節", options: ["に応じて", "に応じた", "に応じって"], answer: "に応じて", after: "、服を変える必要がある。" },
                    { before: "経験", options: ["に応じた", "に応じて", "に応じる"], answer: "に応じた", after: "給料が支払われます。" },
                    { before: "子供の年齢", options: ["に応じて", "に応じた", "に応じ"], answer: "に応じて", after: "、おもちゃを選びます。" },
                    { before: "状況", options: ["に応じて", "に応じた", "に応じって"], answer: "に応じて", after: "、柔軟（じゅうなん）に対応してください。" },
                    { before: "収入", options: ["に応じて", "に応じた", "に応じ"], answer: "に応じて", after: "、税金の額が変わる。" }
                ],
                opinionQuestions: [
                    { text: "あなたの気分に応じて、よく聴く音楽（または遊ぶゲーム）は変わりますか？", eng: "Depending on your mood, does the music you listen to (or games you play) change?" },
                    { text: "天候に応じて、週末の予定をどのくらい柔軟に変えることができますか？", eng: "Depending on the weather, how flexibly can you change your weekend plans?" },
                    { text: "一緒にいる相手に応じて、自分の話し方を変えることはありますか？", eng: "Do you ever change your way of speaking depending on the person you are with?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Talking about buying a new PC for gaming and work.",
            text: "<p><strong>田中:</strong> 「最近、新しいPCを組もうと思ってるんだけど、パーツ選びが難しくてさ。」</p><p><strong>佐藤:</strong> 「なるほど。まずは君の予算[BLANK1]、CPUとグラフィックボードを決めた方がいいよ。」</p><p><strong>田中:</strong> 「ネットの組み立てマニュアル[BLANK2]作れば、俺でもできるかな？」</p><p><strong>佐藤:</strong> 「大丈夫だよ。俺の過去の失敗体験[BLANK3]アドバイスするから、一緒にやろうぜ。」</p><p><strong>田中:</strong> 「助かるよ！終わったらお酒でも奢るよ。」</p>",
            blanks: [
                { id: "BLANK1", options: ["をもとに", "に沿って", "に応じて"], answer: "に応じて" },
                { id: "BLANK2", options: ["をもとに", "に沿って", "に応じて"], answer: "に沿って" },
                { id: "BLANK3", options: ["をもとに", "に沿って", "に応じて"], answer: "をもとに" }
            ]
        },
        story: {
            title: "Organizing an Airsoft Event",
            text: "<p>来月、私たちのグループで大規模なサバイバルゲームの大会を主催することになった。参加者の年齢やサバゲーの経験値はバラバラであるため、それぞれのレベル[BLANK1]チームのバランスを調整する必要があった。初心者でも安全に楽しめるようにすることが、今回の最大の目標だ。</p><p>そこで私たちは、過去のイベントでのアンケート結果[BLANK2]、新しいルールの作成に取り組んだ。例えば、「ヒット」の判定基準をより明確にし、フレンドリーファイア（味方撃ち）を防ぐための特別なマーカーを導入することにした。</p><p>当日は、運営マニュアル[BLANK3]、スタッフ全員がスムーズに動かなければならない。どんなトラブルが起きても冷静に対応できるように、事前にしっかりとシミュレーションを行うつもりだ。参加者全員が笑顔で帰れるようなイベントにしたい。</p>",
            blanks: [
                { id: "BLANK1", options: ["をもとに", "に沿って", "に応じて"], answer: "に応じて" },
                { id: "BLANK2", options: ["をもとにして", "に沿って", "に応じて"], answer: "をもとにして" },
                { id: "BLANK3", options: ["をもとに", "に沿って", "に応じて"], answer: "に沿って" }
            ]
        }
    },
    {
        id: 3,
        title: "Lesson 3: Scope, Limits & Additions",
        grammar: [
            {
                point: "~でしかない",
                english: "Merely / Nothing more than",
                structure: "Noun + でしかない",
                nuance: "Emphasizes that something is ONLY a certain thing and nothing more. It often carries a slightly dismissive, modest, or realistic tone, bringing expectations back down to earth.",
                metaphor: "Think of it like looking at a fancy, expensive smartphone and saying, 'It's merely a calculator to me.' It reduces the scope or importance of the subject.",
                examples: [
                    { topic: "Business", text: "私はただの平社員でしかないので、決定権はありません。", eng: "Since I am merely a regular employee, I have no decision-making authority." },
                    { topic: "Video games", text: "これはただのゲームでしかないが、私は真剣だ。", eng: "This is merely a game, but I am taking it seriously." },
                    { topic: "Dating", text: "今のところ、彼はただの友達でしかない。", eng: "At the moment, he is nothing more than a friend." },
                    { topic: "Airsoft", text: "この銃はおもちゃでしかないが、安全ルールは守るべきだ。", eng: "This gun is merely a toy, but safety rules must be followed." },
                    { topic: "Computers", text: "AIは便利なツールでしかなく、人間に代わるものではない。", eng: "AI is nothing more than a convenient tool and will not replace humans." }
                ],
                clickingGames: [
                    { prompt: "This is merely my personal opinion.", target: "これは私の個人的な意見でしかない", words: ["個人的な", "意見でしかない", "これは私の"] },
                    { prompt: "To me, this character is merely a drawing, but to him, it's everything.", target: "私にはただの絵でしかないが彼にはすべてだ", words: ["彼にはすべてだ", "私には", "ただの絵でしかないが"] },
                    { prompt: "Drinking is merely a way to relieve stress.", target: "お酒を飲むのはストレス発散の手段でしかない", words: ["手段でしかない", "お酒を飲むのは", "ストレス発散の"] },
                    { prompt: "The number of views is merely a number; content is what matters.", target: "再生回数はただの数字でしかなく内容が重要だ", words: ["再生回数は", "ただの数字でしかなく", "内容が重要だ"] },
                    { prompt: "Failure is merely a stepping stone to success.", target: "失敗は成功への通過点でしかない", words: ["失敗は", "通過点でしかない", "成功への"] }
                ],
                dropdownGames: [
                    { before: "彼の話は、単なる言い訳", options: ["でしかない", "でしかなく", "でしかだ"], answer: "でしかない", after: "。" },
                    { before: "これは私の個人的な意見", options: ["でしかなく", "でしかない", "でしかの"], answer: "でしかなく", after: "、会社を代表するものではありません。" },
                    { before: "失敗は成功への通過点", options: ["でしかない", "でしかの", "でしかだ"], answer: "でしかない", after: "から、諦めないで。" },
                    { before: "あの時の約束は、口約束", options: ["でしかなく", "でしかない", "でしかの"], answer: "でしかなく", after: "、契約書はない。" },
                    { before: "お金は生きるための手段", options: ["でしかない", "でしかの", "でしかなく"], answer: "でしかない", after: "。" }
                ],
                opinionQuestions: [
                    { text: "「それはただの趣味でしかないけれど、真剣にやっている」と思えることは何ですか？", eng: "What is something you can say 'It's merely a hobby, but I take it seriously' about?" },
                    { text: "AI（人工知能）はただのツールでしかないと思いますか？", eng: "Do you think AI (Artificial Intelligence) is merely a tool?" },
                    { text: "他の人はすごいと思っているけれど、あなたにとっては「ただの日常でしかない」ことは何ですか？", eng: "What is something that others think is amazing, but to you is 'merely everyday life'?" }
                ]
            },
            {
                point: "~として〜ない",
                english: "Not a single ~ / Not even one",
                structure: "Counter word (1) + として + Verb (Negative)",
                nuance: "Used with minimal counter words (like 1-nichi, 1-nin, 1-do) to completely deny the existence or occurrence of something. It is much stronger and more dramatic than simply saying 'there is none.'",
                metaphor: "Imagine a completely empty room. You aren't just saying 'it's empty'—you are saying 'there is not a single speck of dust remaining.' It is an absolute zero.",
                examples: [
                    { topic: "Alcohol", text: "昨日から、一滴としてお酒を飲んでいない。", eng: "I haven't drunk a single drop of alcohol since yesterday." },
                    { topic: "Business", text: "私の部署には、今日遅刻した人は一人としていない。", eng: "Not a single person in my department was late today." },
                    { topic: "Youtube", text: "この動画には、一つとして役に立つ情報がない。", eng: "There is not a single piece of useful information in this video." },
                    { topic: "General JLPT", text: "彼は一日として日本語の勉強を休んだことがない。", eng: "He hasn't taken a single day off from studying Japanese." },
                    { topic: "Anime", text: "そのアニメの謎は、一つとして解明されていない。", eng: "Not a single mystery of that anime has been solved." }
                ],
                clickingGames: [
                    { prompt: "Not a single bullet hit the target.", target: "一発として弾が的に当たらなかった", words: ["弾が", "的に当たらなかった", "一発として"] },
                    { prompt: "I couldn't beat not even one enemy.", target: "敵を一体として倒すことができなかった", words: ["倒すことができなかった", "一体として", "敵を"] },
                    { prompt: "Not a single file could be recovered.", target: "ファイルは一つとして復元できなかった", words: ["一つとして", "復元できなかった", "ファイルは"] },
                    { prompt: "I haven't forgotten about her for a single second.", target: "彼女のことを一瞬として忘れたことはない", words: ["彼女のことを", "一瞬として", "忘れたことはない"] },
                    { prompt: "Not a single customer complained.", target: "お客様の中で文句を言う人は一人としていなかった", words: ["文句を言う人は", "お客様の中で", "一人としていなかった"] }
                ],
                dropdownGames: [
                    { before: "彼の本当の顔を見た人は、", options: ["一人としていない", "一人としてはいない", "一人はとしていない"], answer: "一人としていない", after: "。" },
                    { before: "この過酷な訓練を、", options: ["一日として", "一日はとして", "一日としてに"], answer: "一日として", after: "休むわけにはいかない。" },
                    { before: "私の質問に答えられる人は、", options: ["一人としていなかった", "一人としてはいない", "一人としてない"], answer: "一人としていなかった", after: "。" },
                    { before: "彼の書いたコードには、", options: ["一つとして", "一人はとして", "一回として"], answer: "一つとして", after: "エラーがなかった。" },
                    { before: "あの日のことは、", options: ["一瞬として", "一日として", "一滴として"], answer: "一瞬として", after: "忘れたことがない。" }
                ],
                opinionQuestions: [
                    { text: "あなたが今まで、一日として休まずに続けていることはありますか？", eng: "Is there anything you have continued doing without taking a single day off?" },
                    { text: "「誰一人としてつまらないと思わない」ような、最高のアニメや映画は何ですか？", eng: "What is an amazing anime or movie where 'not a single person would think it's boring'?" },
                    { text: "ダイエット中、一日として甘いものを我慢できた経験はありますか？", eng: "Have you ever had an experience where you endured without a single sweet thing for a whole day while dieting?" }
                ]
            },
            {
                point: "~のみならず",
                english: "Not only ~ but also",
                structure: "Noun / Plain form + のみならず",
                nuance: "A formal and written version of '~だけでなく'. It is used to add something else of the same kind to a statement, expanding the scope of what you are talking about.",
                metaphor: "It's the 'Buy one, get one free!' of grammar. It takes what you already have and proudly announces that there is something extra included on top.",
                examples: [
                    { topic: "Airsoft", text: "彼はサバゲーのみならず、キャンプの知識も豊富だ。", eng: "He is knowledgeable not only in airsoft but also in camping." },
                    { topic: "Computers", text: "このPCはデザインが美しいのみならず、性能も非常に高い。", eng: "This PC is not only beautiful in design but also very high in performance." },
                    { topic: "Anime", text: "このアニメは日本のみならず、世界中で愛されている。", eng: "This anime is loved not only in Japan but all over the world." },
                    { topic: "Alcohol", text: "この居酒屋はビールのみならず、日本酒の種類も多い。", eng: "This Izakaya has a wide variety not only of beer but also of Japanese sake." },
                    { topic: "Business", text: "彼は英語のみならず、中国語も流暢に話せる。", eng: "He can speak not only English but also Chinese fluently." }
                ],
                clickingGames: [
                    { prompt: "He is excellent not only in sports but also in his studies.", target: "彼はスポーツのみならず勉強も優秀だ", words: ["スポーツのみならず", "勉強も優秀だ", "彼は"] },
                    { prompt: "This game is popular not only among kids but also adults.", target: "このゲームは子供のみならず大人にも人気がある", words: ["大人にも人気がある", "このゲームは", "子供のみならず"] },
                    { prompt: "I watch not only game streams but also cooking channels.", target: "ゲーム実況のみならず料理チャンネルも見る", words: ["ゲーム実況", "のみならず", "料理チャンネルも見る"] },
                    { prompt: "She is not only beautiful but also very kind.", target: "彼女は外見が美しいのみならずとても優しい", words: ["彼女は", "外見が美しいのみならず", "とても優しい"] },
                    { prompt: "That software is available not only on Windows but also on Mac.", target: "そのソフトはWindowsのみならずMacでも使える", words: ["Macでも使える", "そのソフトは", "Windowsのみならず"] }
                ],
                dropdownGames: [
                    { before: "このゲームは子供", options: ["のみならず", "のみならずの", "のみならずは"], answer: "のみならず", after: "、大人も楽しめる。" },
                    { before: "彼女は外見が美しい", options: ["のみならず", "のみならずの", "のみならずだ"], answer: "のみならず", after: "、性格も素晴らしい。" },
                    { before: "環境問題は一国", options: ["のみならず", "のみならずの", "のみならずは"], answer: "のみならず", after: "、地球全体の問題だ。" },
                    { before: "彼のYouTubeチャンネルは日本", options: ["のみならず", "のみ", "のみならずの"], answer: "のみならず", after: "、海外からの視聴者も多い。" },
                    { before: "このソフトはMac", options: ["のみならず", "のみならずの", "のみならずだ"], answer: "のみならず", after: "、Windowsでも使える。" }
                ],
                opinionQuestions: [
                    { text: "「安いのみならず、品質も良い」と思うおすすめの製品は何ですか？", eng: "What is a recommended product that you think is 'not only cheap but also good quality'?" },
                    { text: "あなたの国のみならず、世界中で有名な人は誰ですか？", eng: "Who is someone famous not only in your country but all over the world?" },
                    { text: "ビジネスのみならず、日常生活でも必要だと思うスキルは何ですか？", eng: "What skill do you think is necessary not only for business but also for daily life?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Talking about health, drinking, and getting older.",
            text: "<p><strong>田中:</strong> 「最近、週末になっても疲れが取れないんだよね。ただの年齢のせい[BLANK1]と思うけど。」</p><p><strong>佐藤:</strong> 「運動してる？お酒[BLANK2]、食事も気をつけないと40代はきついよ。」</p><p><strong>田中:</strong> 「わかってるんだけどさ。昨日も休肝日にしようと思ったのに、結局我慢できなくて、一滴[BLANK3]残さずビール飲んじゃったよ。」</p><p><strong>佐藤:</strong> 「だめじゃん！まずは週に一日だけでも休むことから始めなよ。」</p>",
            blanks: [
                { id: "BLANK1", options: ["でしかない", "のみならず", "として"], answer: "でしかない" },
                { id: "BLANK2", options: ["でしかない", "のみならず", "として"], answer: "のみならず" },
                { id: "BLANK3", options: ["でしかない", "のみならず", "として"], answer: "として" }
            ]
        },
        story: {
            title: "The Growth of Our Airsoft Team",
            text: "<p>私たちが立ち上げたサバゲーチームは、最初は週末に集まるただの趣味の集まり[BLANK1]、メンバーも数人しかいなかった。しかし、活動の様子をYouTubeやSNSで発信し始めてから、状況は大きく変わった。</p><p>動画の編集クオリティにこだわった結果、今では地元のプレイヤー[BLANK2]、遠方からわざわざ私たちのイベントに参加してくれる人も増えている。初心者からベテランまで、幅広い層が楽しめるイベント作りを心がけている。</p><p>毎週末のゲームを楽しみにしているメンバーたちは、少々の雨の日であっても、誰一人[BLANK3]休もうとはしない。大人になっても本気で遊べる場所を作れたことを、私はとても誇りに思っている。</p>",
            blanks: [
                { id: "BLANK1", options: ["でしかなく", "のみならず", "として"], answer: "でしかなく" },
                { id: "BLANK2", options: ["でしかない", "のみならず", "として"], answer: "のみならず" },
                { id: "BLANK3", options: ["でしかない", "のみならず", "として"], answer: "として" }
            ]
        }
    },

{
        id: 4,
        title: "Lesson 4: Cause & Reason (Part 1)",
        grammar: [
            {
                point: "~からこそ",
                english: "Precisely because",
                structure: "Verb / Nounだから / Adj + からこそ",
                nuance: "Emphasizes that the reason stated is the ONLY or the PRIMARY reason for the outcome. It shines a spotlight on a specific cause, often highlighting a positive result that comes from a difficult situation.",
                metaphor: "Think of it as a spotlight on a dark stage. It illuminates the exact, specific reason something happened, completely ignoring everything else in the shadows.",
                examples: [
                    { topic: "Airsoft", text: "サバゲーの運営に関わっているからこそ、安全第一の重要性がわかる。", eng: "Precisely because I am involved in airsoft management, I understand the importance of safety first." },
                    { topic: "Video games", text: "難易度が高いゲームだからこそ、クリアした時の達成感が大きい。", eng: "Precisely because it is a high-difficulty game, the sense of achievement when clearing it is huge." },
                    { topic: "Business", text: "過去に大きな失敗をしたからこそ、今の新しい解決策がある。", eng: "Precisely because we made a big mistake in the past, we have our current new solution." },
                    { topic: "Alcohol", text: "長年信頼している仲間だからこそ、一緒にお酒を飲んで本音を語れる。", eng: "Precisely because they are comrades I've trusted for years, we can drink alcohol together and speak our true feelings." },
                    { topic: "Anime", text: "キャラクターの感情がリアルだからこそ、このアニメは大人にも人気がある。", eng: "Precisely because the characters' emotions are real, this anime is popular with adults too." }
                ],
                clickingGames: [
                    { prompt: "Precisely because I have a long history with airsoft, I understand the importance of good gear.", target: "サバゲー歴が長いからこそ道具の大切さがわかる", words: ["長いからこそ", "道具の大切さがわかる", "サバゲー歴が"] },
                    { prompt: "Precisely because I post YouTube videos every day, my subscribers increase.", target: "毎日動画を投稿しているからこそ登録者が増える", words: ["毎日動画を", "登録者が増える", "投稿しているからこそ"] },
                    { prompt: "Precisely because we have a long-distance relationship, the joy when we can meet is multiplied.", target: "遠距離恋愛だからこそ会えた時の喜びが倍になる", words: ["会えた時の喜びが", "遠距離恋愛だからこそ", "倍になる"] },
                    { prompt: "Precisely because the security is strict, we can use the system with peace of mind.", target: "セキュリティが厳しいからこそ安心してシステムを使える", words: ["安心して", "厳しいからこそ", "システムを使える", "セキュリティが"] },
                    { prompt: "Precisely because I review Kanji every day, I can pass the JLPT N2.", target: "毎日漢字を復習するからこそN2に合格できる", words: ["毎日漢字を", "復習するからこそ", "N2に合格できる"] }
                ],
                dropdownGames: [
                    { before: "毎日厳しく", options: ["指導するからこそ", "指導するからには", "指導したあげく"], answer: "指導するからこそ", after: "、部下は成長するのです。" },
                    { before: "自分の家", options: ["だからこそ", "からこそ", "なからこそ"], answer: "だからこそ", after: "、ホームシアターの音響にはこだわりたい。" },
                    { before: "本当に彼を愛している", options: ["からこそ", "だからこそ", "であるからこそ"], answer: "からこそ", after: "、今回は厳しく叱った。" },
                    { before: "毎日が忙しい", options: ["からこそ", "だからこそ", "なからこそ"], answer: "からこそ", after: "、休日のキャンプが最高の息抜きになる。" },
                    { before: "親", options: ["だからこそ", "からこそ", "なからこそ"], answer: "だからこそ", after: "、子供の将来が心配になるのだ。" }
                ],
                opinionQuestions: [
                    { text: "「〜だからこそ、今の自分がある」と思えるような過去の経験は何ですか？", eng: "What is a past experience where you can say 'Precisely because of ~, I am who I am today'?" },
                    { text: "あなたの仕事（または趣味）で、「大変だからこそ楽しい」と感じる瞬間はいつですか？", eng: "In your work (or hobby), when is a moment you feel 'Precisely because it's tough, it's fun'?" },
                    { text: "日本の生活で、「日本だからこそ体験できる」と思うことは何ですか？", eng: "In Japanese life, what is something you think 'Precisely because it's Japan, you can experience this'?" }
                ]
            },
            {
                point: "~からには",
                english: "Now that / Since",
                structure: "Verb (dictionary / た-form) + からには",
                nuance: "Used to express that since a certain fact is true or a decision has been made, it is only natural to carry it out completely. It is almost always followed by words of determination, obligation (must), or strong advice.",
                metaphor: "It's like crossing the Rubicon or signing a mortgage contract. Once you've committed to the action, there is no turning back; you have to go all the way.",
                examples: [
                    { topic: "General JLPT", text: "自分で家を買ったからには、責任を持ってローンを払う。", eng: "Now that I bought my own house, I will responsibly pay the mortgage." },
                    { topic: "Business", text: "このプロジェクトのリーダーを引き受けたからには、絶対に成功させる。", eng: "Since I took on the role of leader for this project, I will absolutely make it succeed." },
                    { topic: "Youtube", text: "チャンネルを開設したからには、毎週新しい動画をアップするべきだ。", eng: "Now that you've started a channel, you should upload new videos every week." },
                    { topic: "Airsoft", text: "大会に出場するからには、もちろん優勝を狙うよ。", eng: "Since we are participating in the tournament, of course we are aiming for the championship." },
                    { topic: "Computers", text: "高いプロジェクターを買ったからには、毎日ホームシアターを楽しみたい。", eng: "Now that I bought an expensive projector, I want to enjoy my home theater every day." }
                ],
                clickingGames: [
                    { prompt: "Now that I've promised, I absolutely cannot break it.", target: "約束したからには絶対に破るわけにはいかない", words: ["絶対に", "約束したからには", "破るわけにはいかない"] },
                    { prompt: "Since we are paying high tuition fees, we must study hard.", target: "高い学費を払うからにはしっかり勉強しなければならない", words: ["高い学費を", "しっかり勉強しなければならない", "払うからには"] },
                    { prompt: "Now that we've started playing this game, let's clear it to the end.", target: "このゲームを始めたからには最後までクリアしよう", words: ["このゲームを", "始めたからには", "最後までクリアしよう"] },
                    { prompt: "Since we are going to drink, let's go to a delicious Izakaya.", target: "お酒を飲むからには美味しい居酒屋に行きたい", words: ["お酒を飲むからには", "美味しい居酒屋に", "行きたい"] },
                    { prompt: "Now that you've become a manager, you have to look after your subordinates.", target: "マネージャーになったからには部下の面倒を見るべきだ", words: ["マネージャーに", "部下の面倒を", "見るべきだ", "なったからには"] }
                ],
                dropdownGames: [
                    { before: "日本で", options: ["働くからには", "働いてからには", "働きからには"], answer: "働くからには", after: "、日本語のビジネス敬語を覚えるべきだ。" },
                    { before: "試合に", options: ["出るからには", "出ってからには", "出りからには"], answer: "出るからには", after: "、最後まで諦めずに戦おう。" },
                    { before: "高いお金を出して4Kブルーレイを", options: ["買ったからには", "買うからには", "買ってからには"], answer: "買ったからには", after: "、最高の音響設備で観たい。" },
                    { before: "プロとしてお金を", options: ["もらうからには", "もらってからには", "もらったからには"], answer: "もらうからには", after: "、妥協（だきょう）は許されない。" },
                    { before: "自分でやると", options: ["決めたからには", "決めるからには", "決めてからには"], answer: "決めたからには", after: "、文句を言わずに最後までやりなさい。" }
                ],
                opinionQuestions: [
                    { text: "「日本に住むからには、絶対にやっておきたい」と思っていることは何ですか？", eng: "What is something you think 'Since I live in Japan, I absolutely want to do this'?" },
                    { text: "何か新しい趣味を「始めたからには」、どこまで上達したいですか？", eng: "When you 'have started' a new hobby, how far do you want to improve?" },
                    { text: "高いお金を払って何かを買った「からには」、どうやってその元を取りますか？", eng: "Now that you've paid a lot of money to buy something, how do you make the most of it?" }
                ]
            },
            {
                point: "~せいで",
                english: "Because of ~ (Negative outcome)",
                structure: "Verb (plain) / Nounの / Adj + せいで",
                nuance: "Used to clearly express the cause of a bad, annoying, or undesirable outcome. It actively places blame on someone or something. It is the exact opposite of 'おかげで' (thanks to).",
                metaphor: "It's the pointing finger of blame. You only use it when someone or something completely ruined your day or your plans.",
                examples: [
                    { topic: "General JLPT", text: "電車が遅延したせいで、大事な会議に遅刻してしまった。", eng: "Because the train was delayed, I ended up being late for an important meeting." },
                    { topic: "Alcohol", text: "昨日テキーラを飲みすぎたせいで、今日はひどい二日酔いだ。", eng: "Because I drank too much tequila yesterday, I have a terrible hangover today." },
                    { topic: "Computers", text: "ルーターの調子が悪いせいで、ネットの接続が途切れる。", eng: "Because the router is acting up, the internet connection keeps dropping." },
                    { topic: "Video games", text: "ゲームのサーバーが落ちたせいで、セーブデータが消えた。", eng: "Because the game server crashed, my save data was erased." },
                    { topic: "Dating", text: "彼がデートに遅れてきたせいで、映画の最初の10分を見逃した。", eng: "Because he came late to the date, we missed the first 10 minutes of the movie." }
                ],
                clickingGames: [
                    { prompt: "Because I ate a super spicy chili pepper, my stomach hurts.", target: "激辛のチリペッパーを食べたせいで胃が痛い", words: ["胃が痛い", "食べたせいで", "激辛のチリペッパーを"] },
                    { prompt: "Because of the sudden rain, my camping tent got completely soaked.", target: "急な雨のせいでキャンプのテントがずぶ濡れになった", words: ["キャンプのテントが", "ずぶ濡れになった", "急な雨のせいで"] },
                    { prompt: "Because he didn't check the documents, a big problem occurred.", target: "彼が書類を確認しなかったせいで大きな問題が起きた", words: ["確認しなかったせいで", "彼が書類を", "大きな問題が起きた"] },
                    { prompt: "Because I stayed up all night watching YouTube, I'm extremely sleepy during work.", target: "徹夜でYouTubeを見たせいで仕事中すごく眠い", words: ["仕事中すごく眠い", "見たせいで", "徹夜でYouTubeを"] },
                    { prompt: "Because the airsoft gun broke, I couldn't participate in the match.", target: "サバゲーの銃が壊れたせいで試合に参加できなかった", words: ["サバゲーの銃が", "試合に参加できなかった", "壊れたせいで"] }
                ],
                dropdownGames: [
                    { before: "前の人がミスを", options: ["したせいで", "するせいで", "してせいで"], answer: "したせいで", after: "、私の仕事が増えてしまった。" },
                    { before: "スマホのバッテリーが", options: ["切れたせいで", "切れるせいで", "切りせいで"], answer: "切れたせいで", after: "、彼女に連絡できなかった。" },
                    { before: "急な雨", options: ["のせいで", "なせいで", "せいで"], answer: "のせいで", after: "、フライトがキャンセルになった。" },
                    { before: "彼の説明が", options: ["下手なせいで", "下手のせいで", "下手せいで"], answer: "下手なせいで", after: "、話がややこしくなった。" },
                    { before: "エアコンをつけたまま", options: ["寝たせいで", "寝るせいで", "寝てせいで"], answer: "寝たせいで", after: "、風邪をひいてしまった。" }
                ],
                opinionQuestions: [
                    { text: "最近、誰か（または何か）のせいで予定が狂ってしまったことはありますか？", eng: "Recently, have your plans been messed up because of someone (or something)?" },
                    { text: "お酒を飲みすぎたせいで、失敗してしまったエピソードはありますか？", eng: "Do you have a story where you made a mistake because you drank too much alcohol?" },
                    { text: "天気が悪かったせいで、楽しみにしていたイベントが台無しになったことはありますか？", eng: "Have you ever had an event you were looking forward to ruined because the weather was bad?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Talking about buying a house and setting up a home theater.",
            text: "<p><strong>田中:</strong> 「実は先月、やっとマイホームを買って引っ越したんだよ。」</p><p><strong>佐藤:</strong> 「おっ、マジで？おめでとう！自分の家を買った[BLANK1]、俺たちを招待してくれよな。」</p><p><strong>田中:</strong> 「もちろん。自分の家[BLANK2]、音響にこだわって最高のホームシアターを作りたいんだよね。」</p><p><strong>佐藤:</strong> 「いいね！スピーカーはデノンとか？」</p><p><strong>田中:</strong> 「そうそう。でも、引っ越しの手続きに手間取った[BLANK3]、まだ機材を買うお金がなくてさ。来月までお預けだよ。」</p>",
            blanks: [
                { id: "BLANK1", options: ["からには", "からこそ", "せいで"], answer: "からには" },
                { id: "BLANK2", options: ["だからこそ", "からには", "のせいで"], answer: "だからこそ" },
                { id: "BLANK3", options: ["せいで", "からには", "からこそ"], answer: "せいで" }
            ]
        },
        story: {
            title: "The Great Chili Pepper Challenge",
            text: "<p>私は最近、庭で激辛のチリペッパーを育てることにハマっている。ハラペーニョやハバネロだけでなく、世界一辛いと言われる「キャロライナ・リーパー」の種も海外から取り寄せた。自分で栽培すると決めた[BLANK1]、一番辛くて刺激的なものに挑戦したかったのだ。</p><p>激辛の唐辛子は、気温や湿度の管理が非常に難しい。しかし、育てるのが難しい植物[BLANK2]、収穫できた時の喜びは計り知れない。スマートホームのセンサーを導入し、温度管理を徹底しながら、毎日欠かさず水やりをして大切に育てていた。</p><p>ところが先週、季節外れの突然の寒波がやってきた。その急激な温度変化の[BLANK3]、順調に育っていた苗のいくつかが枯れてしまった。自然の力には勝てないと痛感したが、残った苗をスパイスの効いた最高のメキシコ料理に使うため、私は決して諦めない。</p>",
            blanks: [
                { id: "BLANK1", options: ["からには", "からこそ", "せいで"], answer: "からには" },
                { id: "BLANK2", options: ["だからこそ", "からには", "のせいで"], answer: "だからこそ" },
                { id: "BLANK3", options: ["せいで", "からには", "からこそ"], answer: "せいで" }
            ]
        }
    },
    {
        id: 5,
        title: "Lesson 5: Cause & Reason (Part 2) & Concession",
        grammar: [
            {
                point: "~だけに",
                english: "All the more because ~ / As expected of ~",
                structure: "Noun / Plain form + だけに",
                nuance: "Indicates that because a specific, high-quality or significant reason exists, the resulting outcome or feeling is naturally intensified or completely as expected.",
                metaphor: "It acts like a magnifying glass on the reason. 'Because he is a trained professional, *of course* the result is amazing.'",
                examples: [
                    { topic: "Business", text: "彼は元ファッション会社を経営していただけに、ビジネスのセンスが抜群だ。", eng: "As expected of someone who used to run a fashion company, his business sense is outstanding." },
                    { topic: "General JLPT", text: "期待が大きかっただけに、不合格だった時のショックも大きかった。", eng: "All the more because my expectations were high, the shock when I failed was huge." },
                    { topic: "Dating", text: "彼女は長く海外に住んでいただけに、考え方がとてもオープンだ。", eng: "As expected of someone who lived overseas for a long time, her way of thinking is very open." },
                    { topic: "Video games", text: "このゲームは開発に5年かかっただけに、グラフィックが素晴らしい。", eng: "All the more because this game took 5 years to develop, the graphics are amazing." },
                    { topic: "Airsoft", text: "彼はサバゲーの運営チームなだけに、ルールの隅々まで詳しい。", eng: "As expected of someone on the airsoft management team, he is familiar with every corner of the rules." }
                ],
                clickingGames: [
                    { prompt: "Since he is trained as a professional chef, his cooking skills are perfect.", target: "プロのシェフとして訓練を受けているだけに料理の腕は完璧だ", words: ["訓練を受けているだけに", "プロのシェフとして", "料理の腕は完璧だ"] },
                    { prompt: "All the more because it was a highly anticipated movie, the ending was disappointing.", target: "楽しみにしていた映画なだけに結末が残念だった", words: ["楽しみにしていた", "映画なだけに", "結末が残念だった"] },
                    { prompt: "As expected of a high-end 4K projector, the image quality is overwhelmingly beautiful.", target: "高級な4Kプロジェクターだけに画質が圧倒的に美しい", words: ["高級な", "4Kプロジェクターだけに", "画質が圧倒的に美しい"] },
                    { prompt: "All the more because I studied desperately, I was extremely happy when I passed.", target: "必死に勉強しただけにごうかくした時は最高に嬉しかった", words: ["必死に勉強しただけに", "ごうかくした時は", "最高に嬉しかった"] },
                    { prompt: "As expected of a popular Izakaya, you can't enter without a reservation.", target: "人気の居酒屋なだけに予約しないと入れない", words: ["人気の居酒屋なだけに", "予約しないと", "入れない"] }
                ],
                dropdownGames: [
                    { before: "彼は長年アメリカに住んでいた", options: ["だけに", "なだけに", "のだけに"], answer: "だけに", after: "、英語の発音がネイティブのようだ。" },
                    { before: "一流のホテル", options: ["なだけに", "いだけに", "くだけに"], answer: "なだけに", after: "、スタッフのサービスが素晴らしい。" },
                    { before: "一生懸命", options: ["準備しただけに", "準備するだけに", "準備してだけに"], answer: "準備しただけに", after: "、プロジェクトが中止になって悔しい。" },
                    { before: "彼女は毎日ジムに", options: ["通っているだけに", "通ってだけに", "通うのだけに"], answer: "通っているだけに", after: "、とてもスタイルが良い。" },
                    { before: "最新のIT技術を", options: ["使っているだけに", "使ってだけに", "使うだけに"], answer: "使っているだけに", after: "、このアプリは処理速度が段違いだ。" }
                ],
                opinionQuestions: [
                    { text: "あなたの周りに、「プロとして訓練を受けているだけに、やっぱりすごい！」と思う人はいますか？", eng: "Is there someone around you who makes you think, 'As expected of someone trained as a professional, they really are amazing!'?" },
                    { text: "「期待が大きかっただけに、がっかりした」という映画やゲームの経験はありますか？", eng: "Have you ever experienced a movie or game where 'all the more because your expectations were high, you were disappointed'?" },
                    { text: "「高いお金を払っただけに、品質が最高だった」という最近の買い物は何ですか？", eng: "What is a recent purchase where 'as expected because I paid a lot of money, the quality was the best'?" }
                ]
            },
            {
                point: "~結果 (けっか)",
                english: "As a result of ~",
                structure: "Verb (た-form) / Nounの + 結果",
                nuance: "Introduces the final, objective outcome of a specific action, investigation, or long period of effort. It sounds slightly formal and is frequently used in business, news, or logical explanations.",
                metaphor: "It's the equals sign (=) at the very end of a long, complicated math equation. It simply presents the final total.",
                examples: [
                    { topic: "Business", text: "英語研修のカリキュラムを見直した結果、社員のTOEICスコアが上がった。", eng: "As a result of reviewing the English training curriculum, the employees' TOEIC scores went up." },
                    { topic: "Computers", text: "複数のセキュリティソフトを比較した結果、この製品を導入することに決めた。", eng: "As a result of comparing multiple security softwares, we decided to introduce this product." },
                    { topic: "Fitness", text: "1年間、毎日欠かさず筋トレを続けた結果、体重が10キロ減った。", eng: "As a result of continuing strength training every day without fail for a year, I lost 10 kg." },
                    { topic: "Youtube", text: "視聴者のコメントを分析した結果、動画の長さを10分に変更した。", eng: "As a result of analyzing viewer comments, I changed the video length to 10 minutes." },
                    { topic: "General JLPT", text: "家族で話し合った結果、新しい家を買うことになった。", eng: "As a result of discussing it as a family, we ended up buying a new house." }
                ],
                clickingGames: [
                    { prompt: "As a result of thoroughly researching online, I bought a Denon center speaker.", target: "ネットで徹底的に調べた結果デノンのセンタースピーカーを買った", words: ["徹底的に調べた結果", "ネットで", "デノンのセンタースピーカーを買った"] },
                    { prompt: "As a result of the interview, unfortunately we cannot hire you.", target: "面接の結果残念ながら採用することはできません", words: ["面接の結果", "残念ながら", "採用することはできません"] },
                    { prompt: "As a result of practicing repeatedly, I was finally able to clear the boss.", target: "何度も練習した結果ついにボスをクリアできた", words: ["何度も練習した結果", "ついに", "ボスをクリアできた"] },
                    { prompt: "As a result of saving up little by little, I was able to travel to Canada.", target: "少しずつ貯金した結果カナダへ旅行に行けた", words: ["少しずつ貯金した結果", "カナダへ", "旅行に行けた"] },
                    { prompt: "As a result of arguing, the two did not speak for a week.", target: "口論した結果二人は一週間口をきかなかった", words: ["口論した結果", "二人は一週間", "口をきかなかった"] }
                ],
                dropdownGames: [
                    { before: "市場調査", options: ["の結果", "な結果", "結果"], answer: "の結果", after: "、新商品のデザインを変更した。" },
                    { before: "警察が詳しく", options: ["捜査した結果", "捜査する結果", "捜査して結果"], answer: "捜査した結果", after: "、犯人がついに逮捕された。" },
                    { before: "色々なテントを", options: ["比較検討した結果", "比較検討する結果", "比較検討して結果"], answer: "比較検討した結果", after: "、Naturehikeのテントを選んだ。" },
                    { before: "長時間の会議", options: ["の結果", "な結果", "結果"], answer: "の結果", after: "、来週もう一度集まることになった。" },
                    { before: "毎日お酒を", options: ["飲み続けた結果", "飲み続ける結果", "飲んで結果"], answer: "飲み続けた結果", after: "、肝臓の数値が悪くなった。" }
                ],
                opinionQuestions: [
                    { text: "あなたが過去に「努力した結果、大きな成功を収めた」経験は何ですか？", eng: "What is an experience from your past where 'as a result of your effort, you achieved great success'?" },
                    { text: "「色々と迷って比較した結果、最終的にそれを選んだ」というお気に入りのアイテムは何ですか？", eng: "What is a favorite item where 'as a result of hesitating and comparing, you finally chose it'?" },
                    { text: "最近、話し合いの「結果」、決まった重要なルールや予定はありますか？", eng: "Recently, is there an important rule or plan that was decided 'as a result' of a discussion?" }
                ]
            },
            {
                point: "~ものの",
                english: "Although ~ / Even though ~",
                structure: "Verb / Adj (Plain form) / Noun + である + ものの",
                nuance: "Acknowledges a fact or an action that occurred, but states that the expected outcome didn't happen, or that there is an underlying problem/contradiction. It sounds slightly more formal than '〜けれど'.",
                metaphor: "It's like a speed bump on a smooth road. You accept the first part of the sentence as true, but then hit a bump because the second part contradicts it.",
                examples: [
                    { topic: "Dating", text: "彼女とハロウィンの仮装をしたものの、恥ずかしくて外には出なかった。", eng: "Although I dressed up for Halloween with my girlfriend, I was too embarrassed and didn't go outside." },
                    { topic: "General JLPT", text: "新しい家への引っ越しは終わったものの、まだ段ボールの片付けが終わっていない。", eng: "Although the move to the new house is finished, I haven't finished cleaning up the cardboard boxes yet." },
                    { topic: "Computers", text: "スマートホームの機器を買ったものの、設定が難しくて使えていない。", eng: "Although I bought smart home devices, the setup is difficult and I haven't been able to use them." },
                    { topic: "Alcohol", text: "休肝日を作ると決めたものの、誘われるとつい居酒屋に行ってしまう。", eng: "Although I decided to have alcohol-free days, when invited, I end up going to the Izakaya." },
                    { topic: "Video games", text: "話題のゲームを買ってみたものの、忙しくてプレイする時間がない。", eng: "Although I bought the much-talked-about game, I'm too busy and have no time to play it." }
                ],
                clickingGames: [
                    { prompt: "Although I started growing jalapeños in the garden, they were eaten by bugs.", target: "庭でハラペーニョを育て始めたものの虫に食べられてしまった", words: ["庭でハラペーニョを", "育て始めたものの", "虫に食べられてしまった"] },
                    { prompt: "Although I took an English course, I still can't speak fluently.", target: "英語の研修を受けたもののまだ流暢には話せない", words: ["英語の研修を", "受けたものの", "まだ流暢には話せない"] },
                    { prompt: "Although I bought an expensive road bike, I completely stopped riding it in winter.", target: "高いロードバイクを買ったものの冬になって全く乗らなくなった", words: ["高いロードバイクを", "買ったものの", "冬になって全く乗らなくなった"] },
                    { prompt: "Although I submitted my resume, I haven't received a reply from the company yet.", target: "履歴書を提出したものの会社からまだ返事が来ない", words: ["履歴書を提出したものの", "会社から", "まだ返事が来ない"] },
                    { prompt: "Although I understand the rules of airsoft, my body doesn't move the way I want it to.", target: "サバゲーのルールは理解しているものの体が思い通りに動かない", words: ["サバゲーのルールは", "理解しているものの", "体が思い通りに動かない"] }
                ],
                dropdownGames: [
                    { before: "日本語の文法を", options: ["勉強したものの", "勉強するものの", "勉強してものの"], answer: "勉強したものの", after: "、実際の会話ではうまく使えない。" },
                    { before: "新しいプロジェクトが", options: ["始まったものの", "始まるものの", "始まってものの"], answer: "始まったものの", after: "、予算が足りなくて進まない。" },
                    { before: "春に", options: ["なったものの", "なるものの", "なってものの"], answer: "なったものの", after: "、カナダはまだ雪が降っている。" },
                    { before: "ダイエットを", options: ["始めたものの", "始めるものの", "始めてものの"], answer: "始めたものの", after: "、すぐに甘いものを食べてしまった。" },
                    { before: "CDのコレクションがたくさん", options: ["あるものの", "あってものの", "あったものの"], answer: "あるものの", after: "、最近はサブスクでしか音楽を聴かない。" }
                ],
                opinionQuestions: [
                    { text: "「〜を買ったものの、結局使っていない」というアイテムは家にありますか？", eng: "Is there an item in your house where you 'bought it, but ended up not using it'?" },
                    { text: "「勉強（または練習）したものの、なかなか上達しない」と感じていることは何ですか？", eng: "What is something you feel 'Although I studied (or practiced) it, I'm not improving easily'?" },
                    { text: "「計画を立てたものの、実行できなかった」という最近の経験を教えてください。", eng: "Tell me about a recent experience where 'Although I made a plan, I couldn't execute it'." }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Talking about buying camping gear and going outdoors.",
            text: "<p><strong>田中:</strong> 「最近、週末にソロキャンプに行こうと思って、新しく迷彩柄のテントを買ったんだよ。」</p><p><strong>佐藤:</strong> 「へえ、いいじゃん！ネットで色々比較した[BLANK1]選んだの？」</p><p><strong>田中:</strong> 「そうそう。アウトドアの人気ブランド[BLANK2]、軽くて設営も簡単なんだ。」</p><p><strong>佐藤:</strong> 「で、実際に使ってみたの？」</p><p><strong>田中:</strong> 「いや、それがさ。準備は完璧にした[BLANK3]、最近週末になるとずっと雨が降ってて、まだ一度も行けてないんだよ。」</p>",
            blanks: [
                { id: "BLANK1", options: ["結果", "だけに", "ものの"], answer: "結果" },
                { id: "BLANK2", options: ["だけに", "結果", "ものの"], answer: "だけに" },
                { id: "BLANK3", options: ["ものの", "結果", "だけに"], answer: "ものの" }
            ]
        },
        story: {
            title: "Setting Up the Perfect Home Theater",
            text: "<p>私は映画が大好きで、特に4Kの高画質ソフトや美しいスチールブックのパッケージを集めるのが趣味だ。念願のマイホームを手に入れたので、リビングにホームシアターを構築することにした。数週間かけて色々なオーディオメーカーのレビューを調べた[BLANK1]、ついにデノンのセンタースピーカーと大型のサブウーファーを購入した。</p><p>機材が届き、さっそくスピーカーを配置して映画を再生してみた。高価なオーディオ機材[BLANK2]、音の迫力とクリアさは以前のテレビとは比べ物にならなかった。アクション映画の爆発音は、まるで映画館にいるかのように床を震わせた。</p><p>しかし、機材のポテンシャルは高い[BLANK3]、私の部屋の構造に合わせて完璧な音響バランスに設定するのは非常に難しかった。低音が強すぎてセリフが聞き取りにくかったり、音が壁に反響しすぎたりしたのだ。結局、理想の音を手に入れるために、さらに何週間も設定画面と格闘することになった。</p>",
            blanks: [
                { id: "BLANK1", options: ["結果", "だけに", "ものの"], answer: "結果" },
                { id: "BLANK2", options: ["だけに", "結果", "ものの"], answer: "だけに" },
                { id: "BLANK3", options: ["ものの", "結果", "だけに"], answer: "ものの" }
            ]
        }
    }, {
        id: 6,
        title: "Lesson 6: Time & Sequential Action (Part 2)",
        grammar: [
            {
                point: "~に際して (にさいして)",
                english: "On the occasion of / Prior to",
                structure: "Noun / Verb (Dictionary form) + に際して",
                nuance: "Very formal. Used for special, one-time, or highly official events (like signing a contract, moving, or a grand opening). It's essentially a stiffer, more formal version of 'にあたって'.",
                metaphor: "Think of it as the formal ribbon-cutting ceremony before a grand opening. You don't do this for everyday tasks.",
                examples: [
                    { topic: "Business", text: "ご契約に際して、こちらの身分証明書が必要となります。", eng: "Prior to signing the contract, this identification document is required." },
                    { topic: "Computers", text: "システムのアップデートに際して、データは自動保存されます。", eng: "On the occasion of the system update, data will be automatically saved." },
                    { topic: "General JLPT", text: "日本への留学に際して、多くの書類を準備した。", eng: "Prior to studying abroad in Japan, I prepared many documents." },
                    { topic: "Video games", text: "世界大会の開催に際して、特別なルールが発表された。", eng: "On the occasion of holding the world tournament, special rules were announced." },
                    { topic: "Airsoft", text: "新しいフィールドの利用に際して、安全講習を受けてください。", eng: "Prior to using the new field, please take the safety lecture." }
                ],
                clickingGames: [
                    { prompt: "Prior to purchasing the property, we conducted an inspection.", target: "物件の購入に際して視察を行いました", words: ["物件の購入に際して", "視察を", "行いました"] },
                    { prompt: "On the occasion of joining the company, I received a PC from the president.", target: "入社に際して社長からPCを受け取った", words: ["入社に際して", "社長から", "PCを受け取った"] },
                    { prompt: "Prior to uploading the video, please check the copyright.", target: "動画を公開するに際して著作権を確認してください", words: ["公開するに際して", "動画を", "著作権を", "確認してください"] },
                    { prompt: "On the occasion of the drinking party, the manager gave a speech.", target: "飲み会の開催に際して部長がスピーチをした", words: ["飲み会の開催に際して", "部長が", "スピーチをした"] },
                    { prompt: "Prior to the date, I booked a nice restaurant.", target: "デートに向かうに際して素敵なレストランを予約した", words: ["素敵なレストランを", "デートに", "向かうに際して", "予約した"] }
                ],
                dropdownGames: [
                    { before: "サービスの", options: ["利用に際して", "利用するに際して", "利用の際して"], answer: "利用に際して", after: "、規約をお読みください。" },
                    { before: "プロジェクトを", options: ["始めるに際して", "始めたに際して", "始めに際して"], answer: "始めるに際して", after: "、予算の確認が必要です。" },
                    { before: "海外", options: ["出張に際して", "出張するに際して", "出張の際して"], answer: "出張に際して", after: "、ビザの申請を行った。" },
                    { before: "新しいアプリを", options: ["ダウンロードするに際して", "ダウンロードしたに際して", "ダウンロードに際して"], answer: "ダウンロードするに際して", after: "、空き容量を確認してください。" },
                    { before: "大会への", options: ["エントリーに際して", "エントリーするに際して", "エントリーの際して"], answer: "エントリーに際して", after: "、参加費をお支払いください。" }
                ],
                opinionQuestions: [
                    { text: "新しい家への引っ越しに際して、一番大変なことは何だと思いますか？", eng: "Prior to moving to a new house, what do you think is the hardest part?" },
                    { text: "海外旅行に際して、必ず持っていくものはありますか？", eng: "On the occasion of traveling abroad, is there anything you always bring?" },
                    { text: "大切な面接に際して、あなたが一番気をつけることは何ですか？", eng: "Prior to an important interview, what are you most careful about?" }
                ]
            },
            {
                point: "~かと思うと / ~かと思ったら",
                english: "Just when I thought...",
                structure: "Verb (た-form) + かと思うと",
                nuance: "Expresses the speaker's surprise at how quickly one event is followed by an opposite or completely unexpected event. It highlights sudden, rapid changes.",
                metaphor: "It's a whiplash effect. Like a sudden plot twist in an anime right when you thought you understood the scene.",
                examples: [
                    { topic: "General JLPT", text: "空が暗くなったかと思うと、突然大雨が降り出した。", eng: "Just when I thought the sky had gotten dark, it suddenly started pouring rain." },
                    { topic: "Anime", text: "主人公が負けたかと思ったら、次の瞬間には復活していた。", eng: "Just when I thought the main character had lost, he revived in the next moment." },
                    { topic: "Dating", text: "彼女は笑ったかと思うと、急に泣き出した。", eng: "Just when I thought she laughed, she suddenly started crying." },
                    { topic: "Alcohol", text: "彼はお酒を一口飲んだかと思うと、そのまま寝てしまった。", eng: "Just when I thought he took one sip of alcohol, he immediately fell asleep." },
                    { topic: "Youtube", text: "新しい動画がアップされたかと思うと、すぐに削除された。", eng: "Just when I thought a new video was uploaded, it was immediately deleted." }
                ],
                clickingGames: [
                    { prompt: "Just when I thought the meeting started, it ended in 5 minutes.", target: "会議が始まったかと思うと5分で終わった", words: ["始まったかと思うと", "会議が", "5分で終わった"] },
                    { prompt: "Just when I thought he bought a new PC, it was already broken.", target: "新しいPCを買ったかと思ったらもう壊れていた", words: ["買ったかと思ったら", "新しいPCを", "もう壊れていた"] },
                    { prompt: "Just when I thought the enemy was defeated in the game, it transformed.", target: "ゲームで敵を倒したかと思ったら変身した", words: ["ゲームで敵を", "変身した", "倒したかと思ったら"] },
                    { prompt: "Just when I thought he aimed the airsoft gun, he had already shot.", target: "サバゲーで銃を構えたかと思うともう撃っていた", words: ["サバゲーで", "構えたかと思うと", "もう撃っていた", "銃を"] },
                    { prompt: "Just when I thought the boss got angry, he started laughing.", target: "上司が怒ったかと思うと急に笑い出した", words: ["上司が怒ったか", "急に", "笑い出した", "と思うと"] }
                ],
                dropdownGames: [
                    { before: "赤ちゃんは", options: ["泣いたかと思うと", "泣くかと思うと", "泣いているかと思うと"], answer: "泣いたかと思うと", after: "、すぐに笑い始めた。" },
                    { before: "電車が", options: ["着いたかと思ったら", "着くかと思ったら", "着いてかと思ったら"], answer: "着いたかと思ったら", after: "、すぐに発車してしまった。" },
                    { before: "晴れて", options: ["きたかと思うと", "くるかと思うと", "きているかと思うと"], answer: "きたかと思うと", after: "、また雪が降り出した。" },
                    { before: "彼は部屋に", options: ["入ってきたかと思ったら", "入ってくるかと思ったら", "入ってかと思ったら"], answer: "入ってきたかと思ったら", after: "、すぐに出て行った。" },
                    { before: "エラーが", options: ["直ったかと思うと", "直るかと思うと", "直りかと思うと"], answer: "直ったかと思うと", after: "、別のバグが発生した。" }
                ],
                opinionQuestions: [
                    { text: "最近、「〜かと思ったら、すぐに〜した」と驚いた急な出来事はありますか？", eng: "Recently, has there been a sudden event that surprised you, where 'just when you thought X, Y happened immediately'?" },
                    { text: "あなたの国の天気は、「晴れたかと思うと、急に雨が降る」ように変わりやすいですか？", eng: "Is the weather in your country changeable, like 'just when you thought it cleared up, it suddenly rains'?" },
                    { text: "アクション映画やアニメで、「死んだかと思ったら生きていた」という展開が好きですか？", eng: "Do you like the plot twist in action movies or anime where 'just when you thought they died, they were alive'?" }
                ]
            },
            {
                point: "~た末 (たすえ)",
                english: "After a long process / At the end of",
                structure: "Verb (た-form) / Nounの + 末(に)",
                nuance: "Focuses on the heavy burden, long duration, or deep thought that occurred *before* reaching a final conclusion. Unlike '~あげく' (which is mostly negative), '~た末' can result in a positive or neutral outcome.",
                metaphor: "Imagine finally planting your flag at the summit of a mountain after a grueling, multi-day climb.",
                examples: [
                    { topic: "Business", text: "何ヶ月も議論した末に、ようやく新しい方針が決まった。", eng: "After months of discussion, the new policy was finally decided." },
                    { topic: "General JLPT", text: "色々悩んだ末、日本で働くことを決意した。", eng: "After agonizing over it, I decided to work in Japan." },
                    { topic: "Video games", text: "100時間プレイした末に、ついに隠しボスを倒した。", eng: "At the end of playing for 100 hours, I finally defeated the hidden boss." },
                    { topic: "Computers", text: "徹夜でコードを書いた末、システムが完成した。", eng: "After writing code all night, the system was completed." },
                    { topic: "Dating", text: "遠距離恋愛の末に、二人は結婚することになった。", eng: "At the end of a long-distance relationship, the two decided to get married." }
                ],
                clickingGames: [
                    { prompt: "After researching various specs, I decided on this PC.", target: "色々なスペックを調べた末にこのPCに決めた", words: ["調べた末に", "色々なスペックを", "このPCに決めた"] },
                    { prompt: "After a long, fierce battle, our team won the airsoft match.", target: "長時間の激戦の末に私たちのチームが勝った", words: ["長時間の", "激戦の末に", "私たちのチームが勝った"] },
                    { prompt: "After hesitating at the Izakaya, I ordered sake.", target: "居酒屋で迷った末に日本酒を注文した", words: ["迷った末に", "居酒屋で", "日本酒を注文した"] },
                    { prompt: "After reading the reviews, I gave up on buying the game.", target: "レビューを読んだ末ゲームを買うのを諦めた", words: ["レビューを", "読んだ末", "ゲームを買うのを諦めた"] },
                    { prompt: "At the end of a lot of hard work, the channel reached 10,000 subscribers.", target: "大変な苦労の末チャンネル登録者が1万人になった", words: ["大変な苦労の末", "チャンネル登録者が", "1万人になった"] }
                ],
                dropdownGames: [
                    { before: "一週間", options: ["考えた末に", "考える末に", "考えの末に"], answer: "考えた末に", after: "、車を売ることにした。" },
                    { before: "長時間の", options: ["交渉の末", "交渉した末", "交渉する末"], answer: "交渉の末", after: "、契約が成立した。" },
                    { before: "迷いに", options: ["迷った末", "迷う末", "迷いの末"], answer: "迷った末", after: "、プロポーズの指輪を選んだ。" },
                    { before: "何度も", options: ["失敗した末に", "失敗する末に", "失敗の末に"], answer: "失敗した末に", after: "、美味しいカレーが完成した。" },
                    { before: "激しい", options: ["競争の末", "競争した末", "競争する末"], answer: "競争の末", after: "、彼が選ばれた。" }
                ],
                opinionQuestions: [
                    { text: "あなたが「色々と悩んだ末に」決断したことで、一番良かったことは何ですか？", eng: "What is the best decision you made 'after agonizing over it for a long time'?" },
                    { text: "「長時間の苦労の末に」何かを完成させた（または達成した）経験を教えてください。", eng: "Tell me about an experience where you completed (or achieved) something 'at the end of a long period of hard work'." },
                    { text: "レストランでメニューを見て、散々迷った末に、いつも頼んでしまうものはありますか？", eng: "When looking at a menu in a restaurant, is there something you always end up ordering after hesitating for a long time?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Talking about quitting a job and changing careers.",
            text: "<p><strong>田中:</strong> 「実はさ、来月で今の会社を辞めることにしたんだ。」</p><p><strong>佐藤:</strong> 「えっ、マジで！？順調そうだったじゃないか。退職[BLANK1]、何かトラブルでもあったのか？」</p><p><strong>田中:</strong> 「いや、数ヶ月前からずっと転職を考えててさ。妻とも何週間も話し合った[BLANK2]、自分のやりたいITの仕事に挑戦することにしたんだ。」</p><p><strong>佐藤:</strong> 「そうだったのか。最近、お前が疲れた顔をしてる[BLANK3]、急にスッキリした顔になったのはそういう理由だったんだな。応援するよ！」</p>",
            blanks: [
                { id: "BLANK1", options: ["に際して", "かと思うと", "末に"], answer: "に際して" },
                { id: "BLANK2", options: ["に際して", "かと思うと", "末に"], answer: "末に" },
                { id: "BLANK3", options: ["に際して", "かと思うと", "末に"], answer: "かと思うと" }
            ]
        },
        story: {
            title: "A Grueling Software Update",
            text: "<p>私たちのIT企業では、年に一度の大規模なサーバー移行が行われる。今回のシステムの移行[BLANK1]、チーム全体で数週間にわたるリハーサルが行われた。少しのミスがクライアントのデータを消してしまう可能性があるため、全員が極度の緊張状態にあった。</p><p>作業当日の深夜、エラーが解決した[BLANK2]、すぐに別のバグが発生するという最悪の状況が続いた。何度も心が折れそうになったが、エンジニアたちは決してパソコンの前から離れなかった。</p><p>朝の光が窓から差し込んできた頃、徹夜で修正作業を続けた[BLANK3]、ついにすべてのシステムが正常に稼働し始めた。私たちは無言でハイタッチを交わし、その日のビールが人生で一番美味しく感じた。</p>",
            blanks: [
                { id: "BLANK1", options: ["に際して", "かと思ったら", "末に"], answer: "に際して" },
                { id: "BLANK2", options: ["に際して", "かと思ったら", "末に"], answer: "かと思ったら" },
                { id: "BLANK3", options: ["に際して", "かと思ったら", "末に"], answer: "末に" }
            ]
        }
    },
    {
        id: 7,
        title: "Lesson 7: Basis, Standard & Relation (Part 2)",
        grammar: [
            {
                point: "~に応えて (にこたえて)",
                english: "In response to / Meeting expectations",
                structure: "Noun + に応えて",
                nuance: "Doing an action specifically to satisfy someone's request, expectation, or demand. It implies a positive effort to 'answer the call'.",
                metaphor: "Imagine a musician walking back onto the stage to play an encore because the crowd is cheering so loudly.",
                examples: [
                    { topic: "Business", text: "お客様の要望に応えて、新しいサービスを開始した。", eng: "In response to customer requests, we launched a new service." },
                    { topic: "Youtube", text: "視聴者のリクエストに応えて、ゲームの実況動画を作りました。", eng: "Meeting the requests of the viewers, I made a game gameplay video." },
                    { topic: "General JLPT", text: "両親の期待に応えて、一流の大学に合格した。", eng: "Meeting my parents' expectations, I passed into a top-tier university." },
                    { topic: "Anime", text: "ファンの声に応えて、アニメの第2シーズンが決定した。", eng: "In response to the fans' voices, the second season of the anime was decided." },
                    { topic: "Alcohol", text: "常連客のアンコールに応えて、マスターが特別なワインを開けた。", eng: "In response to the regulars' encore, the master opened a special wine." }
                ],
                clickingGames: [
                    { prompt: "In response to everyone's expectations, I will do my best in the airsoft tournament.", target: "みんなの期待に応えてサバゲーの大会で頑張ります", words: ["期待に応えて", "みんなの", "サバゲーの大会で", "頑張ります"] },
                    { prompt: "In response to user requests, we updated the PC software.", target: "ユーザーの要望に応えてPCソフトをアップデートした", words: ["要望に応えて", "ユーザーの", "PCソフトを", "アップデートした"] },
                    { prompt: "Meeting her request, I took her on a drive date.", target: "彼女のリクエストに応えてドライブデートに連れて行った", words: ["リクエストに応えて", "彼女の", "ドライブデートに連れて行った"] },
                    { prompt: "In response to the cheers, the player waved his hand.", target: "歓声に応えて選手は手を振った", words: ["歓声に応えて", "選手は", "手を振った"] },
                    { prompt: "We increased the inventory in response to high demand.", target: "高い需要に応えて商品の在庫を増やした", words: ["商品の在庫を増やした", "高い需要に", "応えて"] }
                ],
                dropdownGames: [
                    { before: "国民の声", options: ["に応えて", "を応えて", "で応えて"], answer: "に応えて", after: "、新しい法律が作られた。" },
                    { before: "社長の期待", options: ["に応えるため", "を応えるため", "の応えるため"], answer: "に応えるため", after: "、徹夜でプレゼンの準備をした。" },
                    { before: "熱いアンコール", options: ["に応えて", "を応えて", "で応えて"], answer: "に応えて", after: "、バンドが再びステージに登場した。" },
                    { before: "ユーザーのニーズ", options: ["に応える", "を応える", "の応える"], answer: "に応える", after: "製品を開発したい。" },
                    { before: "皆さんのご要望", options: ["に応えて", "を応えて", "で応えて"], answer: "に応えて", after: "、メニューに激辛カレーを追加しました。" }
                ],
                opinionQuestions: [
                    { text: "あなたが今までに、誰かの「期待に応えて」一番頑張ったことは何ですか？", eng: "What is the hardest you have ever worked 'in response to someone's expectations'?" },
                    { text: "もしあなたがお店やビジネスをやるとしたら、お客様のどんな「要望に応えたい」ですか？", eng: "If you were to run a shop or business, what kind of customer 'requests would you want to answer'?" },
                    { text: "ファンからのリクエストに応えて復活してほしいテレビ番組やゲームはありますか？", eng: "Is there a TV show or game you want to be revived in response to fan requests?" }
                ]
            },
            {
                point: "~をめぐって / ~をめぐり",
                english: "Over / Concerning (a dispute or discussion)",
                structure: "Noun + をめぐって",
                nuance: "Used when multiple people are arguing, discussing, or competing *around* a single central issue, prize, or problem.",
                metaphor: "Picture a group of seagulls fighting and circling over a single french fry dropped on the beach.",
                examples: [
                    { topic: "Business", text: "新しいプロジェクトの予算をめぐって、激しい議論が交わされた。", eng: "A fierce discussion was exchanged over the budget for the new project." },
                    { topic: "Video games", text: "レアアイテムをめぐって、プレイヤー同士の争いが起きた。", eng: "A fight broke out among players over the rare item." },
                    { topic: "Dating", text: "結婚の時期をめぐって、彼女と喧嘩をしてしまった。", eng: "I ended up having a fight with my girlfriend over the timing of our marriage." },
                    { topic: "Anime", text: "王位をめぐって、兄弟たちの争いがアニメのメインテーマだ。", eng: "The conflict between brothers over the throne is the main theme of the anime." },
                    { topic: "General JLPT", text: "遺産をめぐり、家族の間で裁判が始まった。", eng: "A trial started among the family concerning the inheritance." }
                ],
                clickingGames: [
                    { prompt: "The members argued over the airsoft rules.", target: "サバゲーのルールをめぐってメンバーが言い争いをした", words: ["サバゲーの", "ルールをめぐって", "メンバーが", "言い争いをした"] },
                    { prompt: "Various opinions were exchanged concerning the development of the new OS.", target: "新しいOSの開発をめぐって様々な意見が出た", words: ["新しいOSの", "開発をめぐって", "様々な意見が出た"] },
                    { prompt: "Two companies fought in court over the copyright.", target: "著作権をめぐり二つの会社が裁判で争った", words: ["著作権をめぐり", "二つの会社が", "裁判で争った"] },
                    { prompt: "Discussions continued over the location of the drinking party.", target: "飲み会の場所をめぐって話し合いが続いた", words: ["飲み会の場所を", "めぐって", "話し合いが続いた"] },
                    { prompt: "Youtubers are competing over the number of views.", target: "再生回数をめぐってYouTuberたちが競争している", words: ["再生回数をめぐって", "YouTuberたちが", "競争している"] }
                ],
                dropdownGames: [
                    { before: "教育の方針", options: ["をめぐって", "にめぐって", "のめぐって"], answer: "をめぐって", after: "、両親が対立している。" },
                    { before: "地球の資源", options: ["をめぐる", "にめぐる", "でめぐる"], answer: "をめぐる", after: "争いは、今後も続くだろう。" },
                    { before: "その事件の真相", options: ["をめぐって", "にめぐって", "のめぐって"], answer: "をめぐって", after: "、様々な憶測（おくそく）が飛んでいる。" },
                    { before: "会社のリーダーの座", options: ["をめぐり", "にめぐり", "のめぐり"], answer: "をめぐり", after: "、派閥（はばつ）争いが起きた。" },
                    { before: "クーラーの設定温度", options: ["をめぐって", "にめぐって", "でめぐって"], answer: "をめぐって", after: "、オフィスで意見が分かれている。" }
                ],
                opinionQuestions: [
                    { text: "あなたの国で、今どんな社会問題をめぐって議論が起きていますか？", eng: "What kind of social issue is currently sparking debate in your country?" },
                    { text: "過去に、友達や家族と何をめぐって言い争いをしたことがありますか？", eng: "In the past, what have you argued over with friends or family?" },
                    { text: "職場で、エアコンの温度設定をめぐって対立が起きたことはありますか？", eng: "Have you ever had a conflict in the workplace over the air conditioner temperature settings?" }
                ]
            },
            {
                point: "~のもとで / ~のもとに",
                english: "Under the supervision/influence of",
                structure: "Noun + のもとで",
                nuance: "Doing something under someone's guidance, rules, or a specific environment/condition (like under the blazing sun). 'のもとで' is usually for people/guidance, 'のもとに' is usually for conditions.",
                metaphor: "Like growing up under the protective shade of a massive, ancient tree, where you are influenced by its presence.",
                examples: [
                    { topic: "Business", text: "素晴らしいマネージャーのもとで働くことができて幸せです。", eng: "I am happy to be able to work under a wonderful manager." },
                    { topic: "Fitness", text: "プロのトレーナーの指導のもとで、安全に筋トレを行っています。", eng: "Under the guidance of a professional trainer, I am doing strength training safely." },
                    { topic: "General JLPT", text: "子供たちは青空のもとで、元気に遊んでいる。", eng: "The children are playing energetically under the blue sky." },
                    { topic: "Airsoft", text: "厳しいルールのもとで、サバゲーの試合は行われる。", eng: "The airsoft matches are conducted under strict rules." },
                    { topic: "Computers", text: "政府の監視のもとに、そのITシステムは運用されている。", eng: "That IT system is operated under the surveillance of the government." }
                ],
                clickingGames: [
                    { prompt: "I studied Japanese under the instruction of a great teacher.", target: "素晴らしい先生の指導のもとで日本語を勉強した", words: ["素晴らしい先生の", "指導のもとで", "日本語を勉強した"] },
                    { prompt: "The beer was crafted under thorough quality control.", target: "徹底した品質管理のもとにビールが作られた", words: ["徹底した", "品質管理のもとに", "ビールが作られた"] },
                    { prompt: "I grew up freely under my parents' warm love.", target: "両親の温かい愛情のもとで自由に育った", words: ["両親の", "温かい愛情のもとで", "自由に育った"] },
                    { prompt: "Data is analyzed under conditions respecting privacy.", target: "プライバシーを尊重する条件のもとにデータが分析される", words: ["プライバシーを尊重する", "条件のもとに", "データが分析される"] },
                    { prompt: "We enjoyed BBQ under the blazing sun.", target: "炎天下のもとでBBQを楽しんだ", words: ["炎天下の", "もとで", "BBQを楽しんだ"] }
                ],
                dropdownGames: [
                    { before: "有名なシェフ", options: ["のもとで", "をもとで", "でもとで"], answer: "のもとで", after: "、料理の修行をしています。" },
                    { before: "新しい法律", options: ["のもとに", "をもとに", "にもとに"], answer: "のもとに", after: "、税金の制度が見直された。" },
                    { before: "厳しい両親", options: ["のもとで", "をもとで", "でもとで"], answer: "のもとで", after: "育ったので、礼儀には厳しいです。" },
                    { before: "平等という理念", options: ["のもとに", "をもとに", "にもとに"], answer: "のもとに", after: "、この組織は設立されました。" },
                    { before: "コーチの厳しい指導", options: ["のもとで", "をもとで", "でもとで"], answer: "のもとで", after: "、チームは優勝を果たした。" }
                ],
                opinionQuestions: [
                    { text: "あなたはどんな上司（または先生）のもとで働きたい（勉強したい）ですか？", eng: "Under what kind of boss (or teacher) do you want to work (or study)?" },
                    { text: "子供が成長するためには、どんな環境のもとで育つのが一番良いと思いますか？", eng: "For a child to grow, under what kind of environment do you think it is best for them to be raised?" },
                    { text: "厳しいルールのもとでゲームやスポーツをするのと、自由なルールのどちらが好きですか？", eng: "Do you prefer playing games or sports under strict rules, or with free rules?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Talking about a new project manager at work.",
            text: "<p><strong>田中:</strong> 「今度の新しいプロジェクト、予算[BLANK1]かなり揉めてるらしいな。」</p><p><strong>佐藤:</strong> 「ああ。でも新しいマネージャーが、クライアントの厳しい要望[BLANK2]、うまくプランを調整したって聞いたぞ。」</p><p><strong>田中:</strong> 「あのマネージャー、優秀らしいね。俺も彼[BLANK3]働いてみたいな。」</p><p><strong>佐藤:</strong> 「ただ、かなり仕事には厳しいらしいから、覚悟しておいたほうがいいかもよ。」</p>",
            blanks: [
                { id: "BLANK1", options: ["をめぐって", "に応えて", "のもとで"], answer: "をめぐって" },
                { id: "BLANK2", options: ["をめぐって", "に応えて", "のもとで"], answer: "に応えて" },
                { id: "BLANK3", options: ["をめぐって", "に応えて", "のもとで"], answer: "のもとで" }
            ]
        },
        story: {
            title: "Rebuilding the Community Event",
            text: "<p>私たちの町では、毎年秋に大きなお祭りが開催される。しかし、去年は新しい駐車場の場所[BLANK1]、近隣住民と商店街の間で大きな対立が起きてしまい、雰囲気が悪くなってしまった。そのため、今年の実行委員長は非常に難しい立場に立たされていた。</p><p>しかし、新しく選ばれた委員長は、皆が安心して楽しめるお祭りにしたいという地域の声[BLANK2]、何度も両者を集めて話し合いの場を設けた。彼は過去の慣習にとらわれず、新しいアイデアを次々と提案した。</p><p>その熱心な委員長のリーダーシップ[BLANK3]、住民と商店街は少しずつ歩み寄りを見せた。最終的には、空き地を臨時駐車場として活用するという案で全員が納得し、今年のお祭りは過去最高の盛り上がりを見せた。</p>",
            blanks: [
                { id: "BLANK1", options: ["をめぐって", "に応えて", "のもとで"], answer: "をめぐって" },
                { id: "BLANK2", options: ["をめぐって", "に応えて", "のもとで"], answer: "に応えて" },
                { id: "BLANK3", options: ["をめぐって", "に応えて", "のもとで"], answer: "のもとで" }
            ]
        }
    }, {
        id: 8,
        title: "Lesson 8: Contrast & Concession (Part 1)",
        grammar: [
            {
                point: "~反面 (はんめん)",
                english: "On the other hand / While ~",
                structure: "Verb / Adj (Plain form) / Noun + である + 反面",
                nuance: "Used to present two completely opposite sides or characteristics of the exact same subject. It highlights the dual nature of a single thing.",
                metaphor: "Think of a coin. It has a 'heads' side and a 'tails' side. You can't look at one side without acknowledging the other is attached to it.",
                examples: [
                    { topic: "Technology", text: "このノートパソコンは軽量で持ち運びやすい反面、バッテリーの持ちが悪い。", eng: "While this laptop is lightweight and easy to carry, on the other hand, its battery life is poor." },
                    { topic: "Daily Life", text: "都会の生活は便利な反面、家賃が非常に高い。", eng: "City life is convenient, but on the other hand, the rent is extremely high." },
                    { topic: "Business", text: "リモートワークは自由な反面、自己管理が求められる。", eng: "Remote work offers freedom, but on the other hand, it requires self-management." },
                    { topic: "Travel", text: "一人旅は気楽な反面、トラブルが起きた時に心細い。", eng: "Traveling alone is carefree, but on the other hand, it feels lonely when trouble occurs." },
                    { topic: "Shopping", text: "ネットショッピングは手軽な反面、実物を確認できないという欠点がある。", eng: "While online shopping is easy, on the other hand, it has the drawback of not being able to check the actual item." }
                ],
                clickingGames: [
                    { prompt: "While this car is fast, on the other hand, its fuel efficiency is bad.", target: "この車はスピードが速い反面燃費が悪い", words: ["スピードが", "速い反面", "燃費が悪い", "この車は"] },
                    { prompt: "While the new system is highly secure, on the other hand, it is difficult to use.", target: "新システムは安全性が高い反面使い方が難しい", words: ["安全性が高い反面", "新システムは", "使い方が難しい"] },
                    { prompt: "While working the night shift pays well, on the other hand, it is physically tough.", target: "夜勤は給料が良い反面体力的にはきつい", words: ["給料が良い反面", "体力的にはきつい", "夜勤は"] },
                    { prompt: "While the manager is strict, on the other hand, he cares deeply about his subordinates.", target: "部長は厳しい反面部下思いだ", words: ["厳しい反面", "部下思いだ", "部長は"] },
                    { prompt: "While living alone is free, on the other hand, doing chores is a hassle.", target: "一人暮らしは自由な反面家事が面倒だ", words: ["一人暮らしは", "自由な反面", "家事が面倒だ"] }
                ],
                dropdownGames: [
                    { before: "この街は", options: ["静かな反面", "静かの反面", "静かであるの反面"], answer: "静かな反面", after: "、夜は少し暗くて怖い。" },
                    { before: "フリーランスの仕事は", options: ["自由である反面", "自由なである反面", "自由の反面"], answer: "自由である反面", after: "、収入が不安定だ。" },
                    { before: "あのレストランは", options: ["美味しい反面", "美味しな反面", "美味しである反面"], answer: "美味しい反面", after: "、値段がかなり高い。" },
                    { before: "SNSは情報が", options: ["早い反面", "早くの反面", "早いの反面"], answer: "早い反面", after: "、嘘の噂も広がりやすい。" },
                    { before: "この薬はよく", options: ["効く反面", "効いて反面", "効きの反面"], answer: "効く反面", after: "、副作用も強い。" }
                ],
                opinionQuestions: [
                    { text: "あなたの仕事（または学校）には、どんな「良い反面、大変なこと」がありますか？", eng: "In your work (or school), what is something that is 'good, but on the other hand, tough'?" },
                    { text: "都会に住むことと、田舎に住むことの「便利な反面、不便なところ」は何だと思いますか？", eng: "What do you think are the 'convenient, but on the other hand, inconvenient parts' of living in the city versus the countryside?" },
                    { text: "スマートフォンの普及は、私たちの生活を「豊かにした反面」何を失わせたと思いますか？", eng: "While the spread of smartphones has 'enriched our lives', what do you think it made us lose 'on the other hand'?" }
                ]
            },
            {
                point: "~一方で (いっぽうで)",
                english: "On the other hand / At the same time",
                structure: "Verb / Adj (Plain form) / Noun + である + 一方で",
                nuance: "Used to present two parallel actions, trends, or facts. Unlike '~反面' (which is about the same subject), '~一方で' can compare two entirely different subjects or highlight two simultaneous situations.",
                metaphor: "Think of a split-screen in a movie. While one scene is happening on the left, a completely different scene is unfolding on the right at the exact same time.",
                examples: [
                    { topic: "Business", text: "彼は営業部で働く一方で、休日はボランティア活動をしている。", eng: "While he works in the sales department, at the same time, he volunteers on his days off." },
                    { topic: "Society", text: "人口が減少する一方で、高齢者の数は増え続けている。", eng: "While the population is decreasing, on the other hand, the number of elderly people continues to increase." },
                    { topic: "Technology", text: "AI技術が発展する一方で、プライバシーの懸念が高まっている。", eng: "While AI technology develops, at the same time, privacy concerns are rising." },
                    { topic: "Education", text: "厳しく指導する一方で、生徒の悩みにもしっかり耳を傾ける。", eng: "While giving strict guidance, at the same time, one must listen carefully to the students' worries." },
                    { topic: "Economy", text: "一部の企業が大きな利益を上げる一方で、多くの企業が苦しんでいる。", eng: "While some companies make huge profits, on the other hand, many companies are struggling." }
                ],
                clickingGames: [
                    { prompt: "While working as a teacher, he is also writing a novel.", target: "彼は教師として働く一方で小説も書いている", words: ["教師として", "働く一方で", "彼は", "小説も書いている"] },
                    { prompt: "While digital books are becoming popular, on the other hand, paper books are selling less.", target: "電子書籍が普及する一方で紙の本が売れなくなっている", words: ["普及する一方で", "紙の本が売れなくなっている", "電子書籍が"] },
                    { prompt: "While she looks cheerful, at the same time, she has a delicate side.", target: "彼女は明るい一方で繊細な部分も持っている", words: ["彼女は", "明るい一方で", "繊細な部分も持っている"] },
                    { prompt: "While urban development progresses, nature is being destroyed.", target: "都市の開発が進む一方で自然が破壊されている", words: ["自然が破壊されている", "都市の開発が", "進む一方で"] },
                    { prompt: "While income increases, on the other hand, stress also piles up.", target: "収入が増える一方でストレスも溜まる", words: ["収入が", "増える一方で", "ストレスも溜まる"] }
                ],
                dropdownGames: [
                    { before: "仕事が", options: ["忙しい一方で", "忙しくの一方で", "忙しな一方で"], answer: "忙しい一方で", after: "、家族との時間も大切にしたい。" },
                    { before: "新しい技術を", options: ["開発する一方で", "開発して一方で", "開発の一方で"], answer: "開発する一方で", after: "、コスト削減も進めなければならない。" },
                    { before: "彼は優秀な", options: ["学者である一方で", "学者の一方で", "学者な一方で"], answer: "学者である一方で", after: "、素晴らしいピアニストでもある。" },
                    { before: "海外旅行が", options: ["好きな一方で", "好きの一方で", "好きなである一方で"], answer: "好きな一方で", after: "、飛行機に乗るのは苦手だ。" },
                    { before: "物価が", options: ["上昇する一方で", "上昇して一方で", "上昇の一方で"], answer: "上昇する一方で", after: "、給料は全く上がらない。" }
                ],
                opinionQuestions: [
                    { text: "「仕事（または勉強）を頑張る一方で」、あなたがプライベートで力を入れていることは何ですか？", eng: "While working (or studying) hard, what are you putting effort into in your private life 'at the same time'?" },
                    { text: "テクノロジーが「進化する一方で」、現代社会が直面している問題は何だと思いますか？", eng: "While technology 'evolves', what do you think is a problem modern society is facing 'on the other hand'?" },
                    { text: "あなた自身の性格について、「〇〇である一方で、実は〇〇だ」と言える部分はありますか？", eng: "Regarding your own personality, is there a part where you can say 'While I am X, at the same time, I am actually Y'?" }
                ]
            },
            {
                point: "~かわりに",
                english: "Instead of / In exchange for",
                structure: "Verb (Plain form) / Noun + の + かわりに",
                nuance: "Indicates doing one thing to make up for not doing another (substitution), or receiving/giving something as compensation for an action (exchange).",
                metaphor: "It's like a barter system or trading trading cards. You hand one thing over, but you get something else of equal value to fill the empty space.",
                examples: [
                    { topic: "Daily Life", text: "今日は料理を作ってもらったかわりに、私が皿洗いをします。", eng: "In exchange for you cooking today, I will do the dishes." },
                    { topic: "Work", text: "日曜日に出勤するかわりに、来週の月曜日に休みを取る。", eng: "In exchange for working on Sunday, I will take next Monday off." },
                    { topic: "Shopping", text: "現金の代わりに、クレジットカードで支払うことはできますか。", eng: "Can I pay with a credit card instead of cash?" },
                    { topic: "Language", text: "英語を教えてあげるかわりに、日本語を教えてくれませんか。", eng: "In exchange for me teaching you English, could you teach me Japanese?" },
                    { topic: "Travel", text: "飛行機で行くかわりに、のんびりと新幹線で行くことにした。", eng: "Instead of going by plane, I decided to take it easy and go by Shinkansen." }
                ],
                clickingGames: [
                    { prompt: "Instead of the meeting, let's communicate via email today.", target: "今日は会議のかわりにメールで連絡しましょう", words: ["今日は", "会議のかわりに", "メールで連絡しましょう"] },
                    { prompt: "In exchange for doing the overtime work, please treat me to lunch.", target: "残業を引き受けるかわりにランチをご馳走してください", words: ["残業を", "引き受けるかわりに", "ランチをご馳走してください"] },
                    { prompt: "Instead of using the car, I try to commute by bicycle.", target: "車を使うかわりに自転車で通勤するようにしている", words: ["自転車で通勤するようにしている", "車を", "使うかわりに"] },
                    { prompt: "In exchange for paying the rent, my friend does the cleaning.", target: "家賃を払うかわりに友達が掃除をしてくれる", words: ["友達が掃除をしてくれる", "家賃を", "払うかわりに"] },
                    { prompt: "Instead of buying coffee at a cafe, I bring a water bottle.", target: "カフェでコーヒーを買うかわりに水筒を持ち歩く", words: ["水筒を持ち歩く", "カフェでコーヒーを", "買うかわりに"] }
                ],
                dropdownGames: [
                    { before: "社長の", options: ["かわりに", "にかわりに", "をかわりに"], answer: "かわりに", after: "、副社長が会議に出席した。" },
                    { before: "休日出勤を", options: ["したかわりに", "するのかわりに", "したのかわりに"], answer: "したかわりに", after: "、手当をもらった。" },
                    { before: "海外旅行に", options: ["行くかわりに", "行くのかわりに", "行ったのかわりに"], answer: "行くかわりに", after: "、国内の温泉旅館に泊まった。" },
                    { before: "スマートフォン", options: ["のかわりに", "なかわりに", "かわりに"], answer: "のかわりに", after: "、タブレットを使って作業をした。" },
                    { before: "手伝って", options: ["もらったかわりに", "もらうのかわりに", "もらったのかわりに"], answer: "もらったかわりに", after: "、後で食事をご馳走します。" }
                ],
                opinionQuestions: [
                    { text: "「〜するかわりに、〜をしてあげる」というような、友達との交渉をしたことはありますか？", eng: "Have you ever negotiated with a friend, like 'In exchange for doing X, I will do Y for you'?" },
                    { text: "週末、外食する「かわりに」家でよく作る料理はありますか？", eng: "Is there a meal you often cook at home 'instead of' eating out on the weekend?" },
                    { text: "お金を節約するために、何かを買う「かわりに」我慢していることはありますか？", eng: "To save money, is there something you endure 'instead of' buying something?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Discussing work styles and commuting.",
            text: "<p><strong>田中:</strong> 「最近、うちの会社でも完全にリモートワークができるようになったんだよ。」</p><p><strong>佐藤:</strong> 「へえ、いいな！通勤がなくなって楽になっただろ？」</p><p><strong>田中:</strong> 「通勤時間が減って楽な[BLANK1]、ずっと家にいるから運動不足になりがちでさ。」</p><p><strong>佐藤:</strong> 「確かに。家で仕事ができる[BLANK2]、オンとオフの切り替えも難しそうだね。」</p><p><strong>田中:</strong> 「そうなんだよ。だから、電車で通勤する[BLANK3]、毎朝近所をジョギングするようにしてるよ。」</p>",
            blanks: [
                { id: "BLANK1", options: ["反面", "一方で", "かわりに"], answer: "反面" },
                { id: "BLANK2", options: ["一方で", "反面", "かわりに"], answer: "一方で" },
                { id: "BLANK3", options: ["かわりに", "一方で", "反面"], answer: "かわりに" }
            ]
        },
        story: {
            title: "Moving to the Countryside",
            text: "<p>結婚を機に、私たちは都心のマンションを引き払い、少し離れた郊外に家を買うことにした。都会の生活は買い物や交通の便が良い[BLANK1]、家賃が高くて部屋が狭いという不満があったのだ。</p><p>郊外での生活は、自然が豊かで静かな[BLANK2]、都心への通勤時間が以前の倍以上かかってしまうという問題がある。しかし、その通勤時間を活用して、私たちは電車の中で資格の勉強や読書を楽しんでいる。</p><p>週末には混雑したショッピングモールに行く[BLANK3]、近くの川沿いを散歩したり、庭で家庭菜園の手入れをしたりして過ごしている。便利さを少し手放したことで、私たちは心にゆとりを取り戻すことができた。</p>",
            blanks: [
                { id: "BLANK1", options: ["反面", "一方で", "かわりに"], answer: "反面" },
                { id: "BLANK2", options: ["一方で", "反面", "かわりに"], answer: "一方で" },
                { id: "BLANK3", options: ["かわりに", "反面", "一方で"], answer: "かわりに" }
            ]
        }
    },
    {
        id: 9,
        title: "Lesson 9: Contrast & Concession (Part 2)",
        grammar: [
            {
                point: "~に反して (にはんして)",
                english: "Contrary to / Against",
                structure: "Noun + に反して",
                nuance: "Used when a result is the exact opposite of what was expected, predicted, or desired. It is frequently paired with words like 'expectation' (期待), 'prediction' (予想), or 'rules' (規則).",
                metaphor: "Think of an arrow pointing completely in the wrong direction on a one-way street. It goes against the established flow.",
                examples: [
                    { topic: "Business", text: "専門家の予想に反して、その会社の株価は急上昇した。", eng: "Contrary to the experts' predictions, the company's stock price skyrocketed." },
                    { topic: "Sports", text: "皆の期待に反して、私たちのチームは一回戦で負けてしまった。", eng: "Contrary to everyone's expectations, our team lost in the first round." },
                    { topic: "Society", text: "法律やルールに反して行動すれば、罰せられるのは当然だ。", eng: "If you act against laws and rules, it is natural to be punished." },
                    { topic: "Weather", text: "天気予報に反して、午後は素晴らしい晴天になった。", eng: "Contrary to the weather forecast, the afternoon turned into wonderful clear weather." },
                    { topic: "Medicine", text: "親の意向に反して、彼は医者ではなくアーティストになった。", eng: "Contrary to his parents' wishes, he became an artist instead of a doctor." }
                ],
                clickingGames: [
                    { prompt: "Contrary to expectations, the new product did not sell at all.", target: "期待に反して新製品は全く売れなかった", words: ["期待に反して", "新製品は", "全く売れなかった"] },
                    { prompt: "Contrary to his gentle appearance, his personality is aggressive.", target: "優しい外見に反して彼の性格は攻撃的だ", words: ["彼の性格は攻撃的だ", "優しい外見に", "反して"] },
                    { prompt: "Acting against the company's policy is not allowed.", target: "会社の方針に反して行動することは許されない", words: ["会社の方針に反して", "行動することは", "許されない"] },
                    { prompt: "Contrary to the preliminary predictions, the election result was a close contest.", target: "事前の予想に反して選挙結果は接戦だった", words: ["事前の予想に", "反して", "選挙結果は接戦だった"] },
                    { prompt: "He pushed the project forward against everyone's opposition.", target: "皆の反対に反して彼はプロジェクトを推し進めた", words: ["皆の反対に", "反して", "彼はプロジェクトを推し進めた"] }
                ],
                dropdownGames: [
                    { before: "世間の", options: ["予想に反して", "予想の反して", "予想な反して"], answer: "予想に反して", after: "、その映画は大ヒットを記録した。" },
                    { before: "両親の", options: ["希望に反して", "希望の反して", "希望を反して"], answer: "希望に反して", after: "、海外で暮らすことを選んだ。" },
                    { before: "事前の", options: ["予測に反して", "予測を反して", "予測の反して"], answer: "予測に反して", after: "、渋滞は全く起きていなかった。" },
                    { before: "校則", options: ["に反する", "を反する", "の反する"], answer: "に反する", after: "服装で学校に来てはいけない。" },
                    { before: "本人の", options: ["意志に反して", "意志の反して", "意志を反して"], answer: "意志に反して", after: "、転勤が命じられた。" }
                ],
                opinionQuestions: [
                    { text: "最近、「予想に反して」とても美味しかった食べ物や面白かった映画はありますか？", eng: "Recently, is there a food or movie that was very delicious or interesting 'contrary to your expectations'?" },
                    { text: "「親（または上司）の意向に反して」、自分で決断を下した経験はありますか？", eng: "Have you ever made a decision yourself, 'against the wishes of your parents (or boss)'?" },
                    { text: "天気予報に反して急に雨が降ってきた時、あなたはどう対応しますか？", eng: "When it suddenly rains contrary to the weather forecast, how do you handle it?" }
                ]
            },
            {
                point: "~ながら(も)",
                english: "Even though / While (often a state)",
                structure: "Verb (stem) / Adj / Noun + ながら(も)",
                nuance: "Expresses a contradiction where the reality is different from what one would normally expect given the condition. It often sounds slightly emotional or reflective.",
                metaphor: "Like looking at a tiny, fragile plant pushing its way through solid concrete. You wouldn't expect it to survive, yet it does.",
                examples: [
                    { topic: "Business", text: "彼はまだ新入社員でありながらも、素晴らしいプレゼンをした。", eng: "Even though he is still a new employee, he gave a wonderful presentation." },
                    { topic: "Daily Life", text: "狭いながらも、この部屋は日当たりが良くて快適だ。", eng: "Even though it is small, this room gets good sunlight and is comfortable." },
                    { topic: "Technology", text: "このカメラは古いモデルながら、画質は非常に良い。", eng: "Even though this camera is an old model, the image quality is very good." },
                    { topic: "Health", text: "彼女は病気で苦しみながらも、いつも笑顔を絶やさなかった。", eng: "Even though she was suffering from an illness, she never stopped smiling." },
                    { topic: "Society", text: "残念ながら、本日のイベントは雨天のため中止となります。", eng: "While it is unfortunate, today's event will be canceled due to rain." }
                ],
                clickingGames: [
                    { prompt: "Even though it's a cheap product, the design is excellent.", target: "安い製品でありながらもデザインが優れている", words: ["安い製品で", "ありながらも", "デザインが優れている"] },
                    { prompt: "Even though I lack experience, I will do my best.", target: "経験不足ながらも一生懸命頑張ります", words: ["経験不足ながらも", "一生懸命", "頑張ります"] },
                    { prompt: "Even though he understands it's bad for his health, he can't stop smoking.", target: "体に悪いと知りながらもタバコがやめられない", words: ["タバコがやめられない", "体に悪いと", "知りながらも"] },
                    { prompt: "Even though it's a small store, it's always crowded with customers.", target: "小さな店舗ながらもいつも客で賑わっている", words: ["いつも客で賑わっている", "小さな店舗", "ながらも"] },
                    { prompt: "Even though I was afraid of making mistakes, I challenged myself to something new.", target: "失敗を恐れながらも新しいことに挑戦した", words: ["失敗を恐れながらも", "新しいことに", "挑戦した"] }
                ],
                dropdownGames: [
                    { before: "彼は", options: ["学生でありながら", "学生なながら", "学生ながらに"], answer: "学生でありながら", after: "、すでに自分の会社を立ち上げている。" },
                    { before: "日本語が", options: ["下手ながらも", "下手にしながらも", "下手のながらも"], answer: "下手ながらも", after: "、一生懸命に感謝の気持ちを伝えた。" },
                    { before: "危険だと", options: ["わかっていながら", "わかっているのながら", "わかっていなながら"], answer: "わかっていながら", after: "、彼は海へ飛び込んだ。" },
                    { before: "このレストランは", options: ["高いながらも", "高いくながらも", "高くてながらも"], answer: "高いながらも", after: "、味は保証できる。" },
                    { before: "勝つのは", options: ["難しいと知りながらも", "難しいと知ってながらも", "難しいと知りのながらも"], answer: "難しいと知りながらも", after: "、最後まで全力で戦った。" }
                ],
                opinionQuestions: [
                    { text: "「狭い（または古い）ながらも、とても気に入っている」場所や物はありますか？", eng: "Do you have a place or item that 'even though it is small (or old), you really like it'?" },
                    { text: "体に悪いと「知りながらも」、つい食べてしまうものは何ですか？", eng: "What is something you end up eating 'even though you know' it's bad for your health?" },
                    { text: "「初心者（または経験不足）でありながらも」、挑戦してみたい仕事や趣味はありますか？", eng: "Is there a job or hobby you want to challenge 'even though you are a beginner (or lack experience)'?" }
                ]
            },
            {
                point: "~つつ(も)",
                english: "Even though / Despite (one's intentions)",
                structure: "Verb (stem) + つつ(も)",
                nuance: "Used when someone does an action that goes against their own inner feelings, intentions, or knowledge. It carries a strong sense of regret, hesitation, or contradiction inside the speaker's mind.",
                metaphor: "Think of your brain pressing the brakes while your hand is pushing the gas pedal. You know you shouldn't, but you do it anyway.",
                examples: [
                    { topic: "Dieting", text: "ダイエット中だと言いつつ、深夜にラーメンを食べてしまった。", eng: "Even while saying I'm on a diet, I ended up eating ramen late at night." },
                    { topic: "Business", text: "早く仕事を終わらせようと思いつつ、ついスマホを見てしまう。", eng: "Even though I intend to finish work quickly, I end up looking at my smartphone." },
                    { topic: "Relationships", text: "謝らなければいけないと分かりつつも、プライドが邪魔をして言えなかった。", eng: "Even though I knew I had to apologize, my pride got in the way and I couldn't say it." },
                    { topic: "Study", text: "明日がテストだと焦りつつも、ベッドで寝転がっている。", eng: "Even while feeling panicked that the test is tomorrow, I am lying in bed." },
                    { topic: "Money", text: "無駄遣いだと知りつつ、また新しいガジェットを買ってしまった。", eng: "Even though I know it's a waste of money, I ended up buying another new gadget." }
                ],
                clickingGames: [
                    { prompt: "Even though I thought it was dangerous, I touched it.", target: "危ないと思いつつも触ってしまった", words: ["危ないと", "思いつつも", "触ってしまった"] },
                    { prompt: "Even while worrying about the future, I can't take action.", target: "将来を心配しつつも行動を起こせないでいる", words: ["将来を", "心配しつつも", "行動を起こせないでいる"] },
                    { prompt: "Even though I know the truth, I kept quiet.", target: "本当のことを知りつつも黙っていた", words: ["本当のことを", "知りつつも", "黙っていた"] },
                    { prompt: "Even while feeling regret, the days just pass by.", target: "後悔しつつも時間だけが過ぎていく", words: ["後悔しつつも", "時間だけが", "過ぎていく"] },
                    { prompt: "Even though I resolved to wake up early, I overslept again.", target: "早起きしようと決心しつつまた寝坊した", words: ["早起きしようと", "決心しつつ", "また寝坊した"] }
                ],
                dropdownGames: [
                    { before: "本当は", options: ["行きたくないと思いつつ", "行きたくないと思うつつ", "行きたくないと思わつつ"], answer: "行きたくないと思いつつ", after: "、会社の飲み会に参加した。" },
                    { before: "体に悪いと", options: ["分かりつつも", "分かるつつも", "分かってつつも"], answer: "分かりつつも", after: "、お酒を飲み過ぎてしまう。" },
                    { before: "やらなければならないと", options: ["焦りつつ", "焦るつつ", "焦ってつつ"], answer: "焦りつつ", after: "、ゲームを続けている。" },
                    { before: "お金がないと", options: ["言いつつ", "言うつつ", "言ってつつ"], answer: "言いつつ", after: "、彼は毎週のように買い物に出かける。" },
                    { before: "迷惑をかけていると", options: ["感じつつも", "感じるつつも", "感じてつつも"], answer: "感じつつも", after: "、彼女に頼らざるを得ない。" }
                ],
                opinionQuestions: [
                    { text: "「良くないと分かりつつも」、ついついやってしまう悪い癖は何ですか？", eng: "What is a bad habit you end up doing 'even though you know it's not good'?" },
                    { text: "「早くやらなきゃと思いつつ」、いつも後回しにしてしまう仕事や家事はありますか？", eng: "Are there chores or work tasks you always put off 'even while thinking you have to do them quickly'?" },
                    { text: "「ダイエットすると言いつつ」、食べてしまって後悔したエピソードを教えてください。", eng: "Tell me a story where you regretted eating something 'even while saying you are on a diet'." }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Discussing an unexpected promotion at work.",
            text: "<p><strong>田中:</strong> 「聞いたか？営業部の鈴木くんが、今度の異動でいきなり課長に昇進したらしいぞ。」</p><p><strong>佐藤:</strong> 「えっ、本当か？まだ入社して3年目だろ？皆の予想[BLANK1]の大抜擢だな。」</p><p><strong>田中:</strong> 「ああ。彼はまだ若く経験不足[BLANK2]、この前の大型契約をまとめた実績が評価されたみたいだ。」</p><p><strong>佐藤:</strong> 「なるほどな。俺たちも負けてられないと頭では分かり[BLANK3]、最近はすっかり現状に甘えちゃってるよ。」</p><p><strong>田中:</strong> 「全くだ。たまには気合を入れ直さないとな。」</p>",
            blanks: [
                { id: "BLANK1", options: ["に反して", "ながらも", "つつも"], answer: "に反して" },
                { id: "BLANK2", options: ["ながらも", "に反して", "つつも"], answer: "ながらも" },
                { id: "BLANK3", options: ["つつも", "に反して", "ながらも"], answer: "つつも" }
            ]
        },
        story: {
            title: "The Unexpected Examination Result",
            text: "<p>来月の資格試験に向けて、私は毎晩遅くまで勉強を続けていた。日中は仕事で疲労が溜まっていると分かり[BLANK1]、どうしても一発で合格したかったからだ。休日は友人からの食事の誘いを断り、ひたすら参考書と向き合った。</p><p>しかし、いざ試験の当日になると、事前の予想[BLANK2]、過去の傾向とは全く違う問題が出題された。私は焦りを感じた。完璧に準備したつもりだったが、見たこともない専門用語の前に手が止まってしまったのだ。</p><p>数週間後、結果発表の日が来た。私は「絶対に不合格だ」と落ち込み[BLANK3]、恐る恐るウェブサイトで自分の受験番号を確認した。すると驚いたことに、そこには私の番号がはっきりと記載されていたのだ。どうやら、基礎の知識を応用して書いた記述問題の点数が、予想以上に高く評価されたらしい。</p>",
            blanks: [
                { id: "BLANK1", options: ["つつも", "に反して", "ながらも"], answer: "つつも" },
                { id: "BLANK2", options: ["に反して", "つつも", "ながらも"], answer: "に反して" },
                { id: "BLANK3", options: ["ながらも", "に反して", "つつも"], answer: "ながらも" }
            ]
        }
    }, {
        id: 10,
        title: "Lesson 10: Degree, Extent & Comparison (Part 1)",
        grammar: [
            {
                point: "~ほど",
                english: "To the extent that / The more ~, the more ~",
                structure: "Verb / Adj (Plain form) / Noun + ほど",
                nuance: "Used to express an extreme degree or extent of something, often showing a proportional relationship (e.g., the more you practice, the better you get) or an exaggeration of how far a feeling goes.",
                metaphor: "Think of a mercury thermometer rising higher and higher until it reaches the absolute peak of the glass tube.",
                examples: [
                    { topic: "General JLPT", text: "忙しくて、猫の手も借りたいほどだ。", eng: "I'm so busy to the extent that I'd even want to borrow a cat's paw (help from anyone)." },
                    { topic: "Video games", text: "このゲームは、寝る間を惜しむほど面白い。", eng: "This game is interesting to the extent that I hate to spare time for sleeping." },
                    { topic: "Dating", text: "彼女のことが好きすぎて、涙が出るほどだ。", eng: "I love her to the extent that it makes me want to cry." },
                    { topic: "Computers", text: "エラーメッセージが多すぎて、泣きたくなるほど困っている。", eng: "There are so many error messages that I'm troubled to the extent of wanting to cry." },
                    { topic: "Anime", text: "お腹が空いて、牛丼を3杯も食べられるほどだ。", eng: "I'm hungry to the extent that I could eat three bowls of Gyudon." }
                ],
                clickingGames: [
                    { prompt: "I was so tired that I fell asleep on the train.", target: "疲れていて電車で立っていられないほどだった", words: ["疲れていて", "電車で", "立っていられないほどだった"] },
                    { prompt: "The scenery was so beautiful that I was speechless.", target: "景色が美しすぎて言葉が出ないほどだった", words: ["景色が美しすぎて", "言葉が出ないほどだった"] },
                    { prompt: "The soup was so hot that I couldn't drink it right away.", target: "スープが熱くてすぐには飲めないほどだった", words: ["スープが熱くて", "すぐには飲めないほどだった"] },
                    { prompt: "He is so rich that he can buy any luxury car.", target: "彼はどんな高級車でも買えるほどお金持ちだ", words: ["彼はどんな", "高級車でも買えるほど", "お金持ちだ"] },
                    { prompt: "The explanation was so clear that even a beginner could understand.", target: "説明が分かりやすくて初心者でも理解できるほどだった", words: ["説明が分かりやすくて", "初心者でも理解できるほどだった"] }
                ],
                dropdownGames: [
                    { before: "彼の英語は", options: ["ネイティブなほど", "ネイティブであるほど", "ネイティブ並みなほど"], answer: "ネイティブ並みなほど", after: "上手だ。" },
                    { before: "お腹が空いて", options: ["倒れるほど", "倒れるのほど", "倒れなほど"], answer: "倒れるほど", after: "何も食べていない。" },
                    { before: "この問題は", options: ["子供でも解けるほど", "子供でも解けるなほど", "子供でも解けるのほど"], answer: "子供でも解けるほど", after: "簡単だ。" },
                    { before: "彼女の歌声は", options: ["鳥肌が立つほど", "鳥肌が立つなほど", "鳥肌が立つをほど"], answer: "鳥肌が立つほど", after: "美しかった。" },
                    { before: "昨日は", options: ["死ぬほど", "死ぬのほど", "死ぬなほど"], answer: "死ぬほど", after: "忙しかった。" }
                ],
                opinionQuestions: [
                    { text: "あなたが今まで体験した中で、「お腹が破裂するほど食べた」食べ物は何ですか？", eng: "What is something you ate where you were 'full to the extent that your stomach felt like it would burst'?" },
                    { text: "「忙しくて、猫の手も借りたい」と思った最近の出来事はありますか？", eng: "Recently, have you had an event where you thought 'I'm so busy I'd want to borrow a cat's paw'?" },
                    { text: "「時間を忘れるほど夢中になってしまう」趣味やゲームは何ですか？", eng: "What is a hobby or game that you get 'so absorbed in that you forget the time'?" }
                ]
            },
            {
                point: "~ほど...はない",
                english: "There is nothing as ~ as ...",
                structure: "Noun + ほど + [Adjective] + はない",
                nuance: "Used to elevate a specific noun to the absolute highest rank, stating that nothing else compares to it in a certain quality.",
                metaphor: "It's the undisputed heavyweight champion of the world. No other contender even comes close.",
                examples: [
                    { topic: "Alcohol", text: "仕事のあとに飲む冷えたビールほど美味しいものはない。", eng: "There is nothing as delicious as a cold beer drunk after work." },
                    { topic: "Dating", text: "彼女の笑顔を見る時ほど幸せな瞬間はない。", eng: "There is no moment as happy as when I see her smile." },
                    { topic: "Business", text: "信頼できる仲間と働くことほど心強いことはない。", eng: "There is nothing as reassuring as working with trusted colleagues." },
                    { topic: "Travel", text: "誰もいない静かな自然の中でキャンプをするほど楽しいことはない。", eng: "There is nothing as fun as camping in quiet, empty nature." },
                    { topic: "Computers", text: "保存する前にPCがフリーズした時の絶望感ほど大きいものはない。", eng: "There is no despair as great as when your PC freezes before saving." }
                ],
                clickingGames: [
                    { prompt: "There is nothing as fun as playing video games on a holiday.", target: "休日に一日中ゲームをするほど楽しいことはない", words: ["休日に一日中", "ゲームをするほど", "楽しいことはない"] },
                    { prompt: "There is nothing as important as health in life.", target: "人生において健康ほど大切なものはない", words: ["人生において", "健康ほど", "大切なものはない"] },
                    { prompt: "There is nothing as lonely as eating alone on Christmas.", target: "クリスマスの夜に一人で食事をするほど寂しいことはない", words: ["クリスマスの夜に", "一人で食事をするほど", "寂しいことはない"] },
                    { prompt: "There is nothing as delicious as freshly baked bread in the morning.", target: "朝に食べる焼き立てのパンほど美味しいものはない", words: ["朝に食べる", "焼き立てのパンほど", "美味しいものはない"] },
                    { prompt: "There is nothing as difficult as changing one's own habits.", target: "自分の習慣を変えるほど難しいことはない", words: ["自分の習慣を", "変えるほど", "難しいことはない"] }
                ],
                dropdownGames: [
                    { before: "夏に", options: ["冷たい麦茶を飲むほど", "冷たい麦茶を飲むのほど", "冷たい麦茶を飲むなほど"], answer: "冷たい麦茶を飲むほど", after: "美味しいものはない。" },
                    { before: "試験の合格発表を", options: ["待つ時間ほど", "待つ時間のほど", "待つ時間なほど"], answer: "待つ時間ほど", after: "緊張するものはない。" },
                    { before: "親しい友人に", options: ["裏切られるほど", "裏切られるのほど", "裏切られるなほど"], answer: "裏切られるほど", after: "悲しいことはない。" },
                    { before: "新しいガジェットを", options: ["開ける瞬間ほど", "開ける瞬間のほど", "開ける瞬間なほど"], answer: "開ける瞬間ほど", after: "ワクワクするものはない。" },
                    { before: "平和な", options: ["日常ほど", "日常のほど", "日常なほど"], answer: "日常ほど", after: "ありがたいものはない。" }
                ],
                opinionQuestions: [
                    { text: "あなたにとって、「これほどリラックスできるものはない」という時間は何ですか？", eng: "For you, what is a time where you think 'There is nothing as relaxing as this'?" },
                    { text: "人生において、「健康やお金以外に、これほど大切なものはない」と思うものは何ですか？", eng: "In life, besides health and money, what do you think 'there is nothing as important as this'?" },
                    { text: "「夏の暑い日に飲むもの」といえば、あなたにとって何が一番ですか？", eng: "Speaking of 'things to drink on a hot summer day', what is the absolute best for you?" }
                ]
            },
            {
                point: "~につれて / ~にしたがって",
                english: "As ~ / In proportion to ~ (Progressive change)",
                structure: "Verb (Dictionary) / Noun + につれて / にしたがって",
                nuance: "Shows that as one thing changes, a second thing changes naturally along with it in a steady progression.",
                metaphor: "Like climbing a mountain: as you go higher step by step (につれて), the air automatically gets thinner and the view changes.",
                examples: [
                    { topic: "General JLPT", text: "試験の日が近づくにつれて、緊張感が高まってきた。", eng: "As the day of the exam approaches, the sense of tension increases." },
                    { topic: "Travel", text: "山を登るにつれて、気温がどんどん下がっていった。", eng: "As we climbed the mountain, the temperature steadily dropped." },
                    { topic: "Business", text: "経験を積むにしたがって、仕事のスピードが速くなった。", eng: "As I gained experience, my work speed became faster." },
                    { topic: "Dating", text: "一緒に過ごす時間が長くなるにつれて、お互いの理解が深まった。", eng: "As the time spent together grew longer, our mutual understanding deepened." },
                    { topic: "Language", text: "日本語の勉強を続けるにしたがって、アニメが字幕なしで理解できるようになった。", eng: "As I continued studying Japanese, I came to understand anime without subtitles." }
                ],
                clickingGames: [
                    { prompt: "As the city developed, nature disappeared.", target: "街が発展するにつれて自然が消えていった", words: ["街が発展するにつれて", "自然が", "消えていった"] },
                    { prompt: "As I grew older, my body started aching.", target: "年齢を重ねるにしたがって体に痛みが出始めた", words: ["年齢を重ねるにしたがって", "体に", "痛みが出始めた"] },
                    { prompt: "As the economy improves, commodity prices rise.", target: "経済がよくなるにつれて物価が上がっていく", words: ["経済がよくなるにつれて", "物価が", "上がっていく"] },
                    { prompt: "As the sun sets, it gets colder outside.", target: "日が進むにしたがって外の寒さが厳しくなる", words: ["日が進むにしたがって", "外の寒さが", "厳しくなる"] },
                    { prompt: "As my proficiency in the game increased, it became more fun.", target: "ゲームの腕前が上がるにつれて面白さが増した", words: ["ゲームの腕前が上がるにつれて", "面白さが増した"] }
                ],
                dropdownGames: [
                    { before: "技術が", options: ["進歩するにつれて", "進歩したにつれて", "進歩のつれて"], answer: "進歩するにつれて", after: "、生活が便利になった。" },
                    { before: "北へ", options: ["進むにしたがって", "進んだにしたがって", "進むのしたがって"], answer: "進むにしたがって", after: "、雪の量が増えた。" },
                    { before: "子供が", options: ["成長するにつれて", "成長したにつれて", "成長のつれて"], answer: "成長するにつれて", after: "、手がかからなくなる。" },
                    { before: "練習を", options: ["重ねるにしたがって", "重ねたにしたがって", "重ねるのしたがって"], answer: "重ねるにしたがって", after: "、ピアノが上手になった。" },
                    { before: "夜が", options: ["更けるにつれて", "更けたにつれて", "更けのつれて"], answer: "更けるにつれて", after: "、街が静かになっていった。" }
                ],
                opinionQuestions: [
                    { text: "あなたが大人になるにつれて、「変わったな」と感じる自分の価値観は何ですか？", eng: "As you grew older, what value of yours do you feel has changed?" },
                    { text: "日本語の学習を進めるにつれて、「一番難しくなった」と感じる部分はどこですか？", eng: "As you progress in studying Japanese, where do you feel has become 'the most difficult part'?" },
                    { text: "季節が秋から冬に移り変わるにつれて、あなたの生活スタイルはどう変わりますか？", eng: "As the season shifts from autumn to winter, how does your lifestyle change?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Discussing age, fitness, and health changes.",
            text: "<p><strong>田中:</strong> 「最近さ、階段を上るだけで息切れがするんだよね。年齢を重ねる[BLANK1]、体力の衰えを感じるよ。」</p><p><strong>佐藤:</strong> 「分かるよ。若い頃は徹夜しても平気だった[BLANK2]、今じゃ考えられないもんな。」</p><p><strong>田中:</strong> 「本当にな。健康管理の大切さを痛感するよ。健康[BLANK3]大切なものはないって、この歳になってようやく分かったよ。」</p><p><strong>佐藤:</strong> 「お互い、これからは週末に運動でも始めようぜ。」</p>",
            blanks: [
                { id: "BLANK1", options: ["につれて", "ほど", "にしたがって"], answer: "につれて" },
                { id: "BLANK2", options: ["ほど", "につれて", "にしたがって"], answer: "ほど" },
                { id: "BLANK3", options: ["ほど", "につれて", "にしたがって"], answer: "ほど" }
            ]
        },
        story: {
            title: "The Evolution of Video Game Graphics",
            text: "<p>子どもの頃に夢中になって遊んでいたレトロゲームを振り返ると、技術の進化には驚かされるばかりだ。昔のゲームはドット絵が粗く、キャラクターが何かさえ分からない[BLANK1]、当時はそれでも十分にワクワクしていた。</p><p>しかし、時代が進む[BLANK2]、ゲームのグラフィックはまるで実写映画のようにリアルになり、オープンワールドの広大な世界を自由に探索できるようになった。開発に何年もかかった大作RPGをクリアした時の感動は、言葉に表せない[BLANK3]素晴らしい体験だ。</p><p>今やゲームはただの子供の遊びではなく、高度なアートやストーリーテリングを楽しむ総合エンターテインメントへと成長した。ゲーマーの一人として、次の世代でVRやAI技術がどう進化していくのか、楽しみで仕方がない。</p>",
            blanks: [
                { id: "BLANK1", options: ["ほど", "につれて", "にしたがって"], answer: "ほど" },
                { id: "BLANK2", options: ["につれて", "ほど", "にしたがって"], answer: "につれて" },
                { id: "BLANK3", options: ["ほど", "につれて", "にしたがって"], answer: "ほど" }
            ]
        }
    },
    {
        id: 11,
        title: "Lesson 11: Degree, Extent & Comparison (Part 2)",
        grammar: [
            {
                point: "~にくらべて / ~に比べ",
                english: "Compared to ~",
                structure: "Noun + にくらべて / に比べ",
                nuance: "Used to directly compare two or more things, highlighting the differences in size, speed, price, difficulty, or performance.",
                metaphor: "Think of placing two objects side-by-side on a scale or a measurement table to see which one is heavier or taller.",
                examples: [
                    { topic: "Business", text: "去年の売上に比べて、今年はすでに20%増加している。", eng: "Compared to last year's sales, this year has already increased by 20%." },
                    { topic: "Computers", text: "昔のデスクトップPCに比べて、今のノートPCは圧倒的に軽い。", eng: "Compared to old desktop PCs, current laptops are overwhelmingly light." },
                    { topic: "Language", text: "英語の文法に比べて、日本語の敬語システムは非常に複雑だ。", eng: "Compared to English grammar, the Japanese honorific system is extremely complex." },
                    { topic: "Weather", text: "東京の冬は、北海道の冬に比べてかなり暖かい。", eng: "Tokyo's winter is quite warm compared to Hokkaido's winter." },
                    { topic: "General JLPT", text: "今回の試験は、前回に比べて少し難易度が上がった。", eng: "This exam increased slightly in difficulty compared to the previous one." }
                ],
                clickingGames: [
                    { prompt: "Compared to last year, this summer is extremely hot.", target: "去年に比べて今年の夏は異常に暑い", words: ["去年に比べて", "今年の夏は", "異常に暑い"] },
                    { prompt: "Compared to urban areas, life in the countryside is very quiet.", target: "都会に比べて田舎の生活はとても静かだ", words: ["都会に比べて", "田舎の生活は", "とても静かだ"] },
                    { prompt: "Compared to physical books, digital books save a lot of space.", target: "紙の本に比べて電子書籍は場所をとらない", words: ["紙の本に比べて", "電子書籍は", "場所をとらない"] },
                    { prompt: "Compared to before, my physical stamina has dropped significantly.", target: "昔に比べて自分の体力がかなり落ちたと感じる", words: ["昔に比べて", "自分の体力が", "かなり落ちたと感じる"] },
                    { prompt: "Compared to the smartphone version, the PC version has better graphics.", target: "スマホ版に比べてPC版の方がグラフィックが綺麗だ", words: ["スマホ版に比べて", "PC版の方が", "グラフィックが綺麗だ"] }
                ],
                dropdownGames: [
                    { before: "予想", options: ["に比べて", "に比べの", "に比べる"], answer: "に比べて", after: "、今日の会議は早く終わった。" },
                    { before: "兄", options: ["に比べ", "に比べての", "に比べる"], answer: "に比べ", after: "、弟はスポーツが得意だ。" },
                    { before: "他の国", options: ["に比べて", "に比べの", "に比べる"], answer: "に比べて", after: "、日本は治安が良いと言われている。" },
                    { before: "平日に", options: ["比べ", "に比べての", "に比べる"], answer: "比べ", after: "、休日はカフェが混雑する。" },
                    { before: "先月", options: ["に比べて", "に比べの", "に比べる"], answer: "In comparison to", after: "、今月の出費がかなり少ない。" }
                ],
                opinionQuestions: [
                    { text: "「昔の自分に比べて、今の自分が成長したな」と思う部分はどこですか？", eng: "In what part do you think 'Compared to my past self, my current self has grown'?" },
                    { text: "あなたが住んでいる街は、他の街に「比べて」どんな特徴がありますか？", eng: "What characteristics does the city you live in have 'compared to' other cities?" },
                    { text: "「紙の本で読むこと」と「電子書籍で読むこと」は、お互いに「比べて」どんなメリットがありますか？", eng: "What advantages do 'reading physical books' and 'reading e-books' have 'compared to' each other?" }
                ]
            },
            {
                point: "~に加えて",
                english: "In addition to ~ / Plus ~",
                structure: "Noun + に加えて",
                nuance: "Used to add an extra factor, condition, or quality on top of an existing one. It emphasizes accumulation (1 + 1 = more than 2).",
                metaphor: "Think of stacking extra ingredients onto a gourmet burger: you start with a patty, and *in addition to that*, you add cheese, bacon, and avocado.",
                examples: [
                    { topic: "Business", text: "基本給に加えて、今月は特別なボーナスが支給された。", eng: "In addition to the base salary, a special bonus was paid this month." },
                    { topic: "Weather", text: "今日は朝から雨が降っているのに加えて、風も非常に強い。", eng: "It has been raining since morning today, and in addition to that, the wind is also very strong." },
                    { topic: "Skills", text: "彼は英語力に加えて、優れたプログラミングスキルを持っている。", eng: "In addition to his English proficiency, he possesses excellent programming skills." },
                    { topic: "General JLPT", text: "週末の仕事に加えて、レポートの提出もしなければならない。", eng: "In addition to weekend work, I also have to submit a report." },
                    { topic: "Airsoft", text: "新しい銃を買ったのに加えて、迷彩服も新しく揃えた。", eng: "In addition to buying a new gun, I also got a new set of camouflage clothing." }
                ],
                clickingGames: [
                    { prompt: "In addition to being delicious, this restaurant is cheap.", target: "このレストランは美味しいことに加えて値段も安い", words: ["このレストランは", "美味しいことに加えて", "値段も安い"] },
                    { prompt: "In addition to the cold, I caught a fever.", target: "風邪を引いているのに加えて熱まで出てきた", words: ["風邪を引いているのに加えて", "熱まで出てきた"] },
                    { prompt: "In addition to my main job, I started a side hustle.", target: "本業の仕事に加えて副業も始めた", words: ["本業の仕事に加えて", "副業も始めた"] },
                    { prompt: "In addition to visual beauty, the audio quality of this home theater is amazing.", target: "見た目の美しさに加えてホームシアターの音質が最高だ", words: ["見た目の美しさに加えて", "ホームシアターの音質が最高だ"] },
                    { prompt: "In addition to studying grammar, listening practice is necessary.", target: "文法を勉強するに加えてリスニングの練習も必要だ", words: ["文法を勉強するに加えて", "リスニングの練習も必要だ"] }
                ],
                dropdownGames: [
                    { before: "土曜日の", options: ["出勤に加えて", "出勤するに加えて", "出勤してに加えて"], answer: "出勤に加えて", after: "、日曜日も仕事になった。" },
                    { before: "高い", options: ["技術力に加えて", "技術力するに加えて", "技術力してに加えて"], answer: "技術力に加えて", after: "、豊富な経験が彼の強みだ。" },
                    { before: "部屋の", options: ["狭さに加えて", "狭いのに加えて", "狭くてに加えて"], answer: "狭さに加えて", after: "、日当たりも悪い物件だった。" },
                    { before: "経験者に", options: ["加えて", "加えるに", "加えたに"], answer: "加えて", after: "、初心者も募集しています。" },
                    { before: "電車の", options: ["遅延に加えて", "遅延するに加えて", "遅延してに加えて"], answer: "遅延に加えて", after: "、大雨も降って最悪だった。" }
                ],
                opinionQuestions: [
                    { text: "あなたが仕事や勉強で、「〜に加えて、これも求められるのか」と大変だと感じたことは何ですか？", eng: "In your work or study, what is something where you felt it was tough when thinking 'In addition to ~, this is also required'?" },
                    { text: "レストランを選ぶ時、「味に加えて、何が重要だと思いますか？」", eng: "When choosing a restaurant, 'in addition to the taste, what do you think is important?'" },
                    { text: "理想のパソコンやスマホを選ぶ時、「スペックに加えて、どんな要素を重視しますか？」", eng: "When choosing an ideal PC or smartphone, 'in addition to specs, what factors do you emphasize?'" }
                ]
            },
            {
                point: "~かわからない / ~か ~ ないか",
                english: "Whether ~ or not",
                structure: "Verb / Adj (Plain form) + かどうか / Verb (Plain) + か + Verb (Negative) + か",
                nuance: "Used to express uncertainty or a lack of knowledge about a specific question or outcome.",
                metaphor: "It's tossing a coin into the air: you won't know if it lands on heads or tails until it hits the ground.",
                examples: [
                    { topic: "General JLPT", text: "明日の天気がどうなるか分からないので、傘を持っていく。", eng: "Since I don't know whether tomorrow's weather will be good or not, I'll take an umbrella." },
                    { topic: "Dating", text: "彼女がこのプレゼントを気に入るかどうかわからない。", eng: "I don't know whether she will like this present or not." },
                    { topic: "Business", text: "そのプロジェクトが成功するかどうかは、今後の努力次第だ。", eng: "Whether that project succeeds or not depends on future efforts." },
                    { topic: "Travel", text: "今年の夏休み、海外旅行に行けるかどうかわからない。", eng: "I don't know whether I can travel abroad for this summer vacation or not." },
                    { topic: "Computers", text: "この古いパソコンがまだ修理できるかどうか店員に聞いた。", eng: "I asked the store clerk whether this old PC can still be repaired or not." }
                ],
                clickingGames: [
                    { prompt: "I don't know whether I passed the N2 exam or not.", target: "N2の試験に合格したかどうかわからない", words: ["N2の試験に", "合格したか", "どうかわからない"] },
                    { prompt: "I haven't decided whether to buy the new game console or not yet.", target: "新しいゲーム機を買うかどうかまだ決めていない", words: ["新しいゲーム機を", "買うかどうか", "まだ決めていない"] },
                    { prompt: "Please let me know whether you can attend the meeting or not.", target: "会議に出席できるかどうか教えてください", words: ["会議に出席できるか", "どうか", "教えてください"] },
                    { prompt: "I wonder if it will rain this weekend.", target: "今週末に雨が降るかどうか心配だ", words: ["今週末に", "雨が降るかどうか", "心配だ"] },
                    { prompt: "I don't know if he is telling the truth.", target: "彼の言っていることが本当かどうか分からない", words: ["彼の言っていることが", "本当かどうか", "分からない"] }
                ],
                dropdownGames: [
                    { before: "明日の会議に", options: ["参加するかどうか", "参加するのどうか", "参加したかどうか"], answer: "参加するかどうか", after: "、メールで返事してください。" },
                    { before: "この料理が", options: ["美味しいかどうか", "美味しいのかどうか", "美味しいだかどうか"], answer: "美味しいかどうか", after: "、一口食べてみた。" },
                    { before: "彼が本当に", options: ["来るか来ないか", "来るか来るないか", "来たるか来ないか"], answer: "来るか来ないか", after: "、ずっと待っている。" },
                    { before: "その噂が", options: ["本当か分からない", "本当かどうか分からない", "本当であるか分からない"], answer: "本当かどうか分からない", after: "、すぐに信じてはいけない。" },
                    { before: "無事に", options: ["着いたかどうか", "着いたのかどうか", "着いたるかどうか"], answer: "着いたかどうか", after: "、母親にメッセージを送った。" }
                ],
                opinionQuestions: [
                    { text: "最近、「成功するかどうか分からないけれど、挑戦してみたい」と思ったことは何ですか？", eng: "Recently, what is something where you thought 'I don't know whether it will succeed or not, but I want to try'?" },
                    { text: "週末の天気がどうなるか分からない時、あらかじめ予定を立てますか？", eng: "When you don't know whether the weather on the weekend will be good or not, do you plan ahead?" },
                    { text: "新しいレストランに行く時、事前にネットのレビューを見るか見ないか、どちらですか？", eng: "When going to a new restaurant, do you check online reviews beforehand or not?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Discussing buying a new smartphone and gadgets.",
            text: "<p><strong>田中:</strong> 「今使ってるスマホ、もう3年経つからそろそろ買い替えようと思うんだよね。」</p><p><strong>佐藤:</strong> 「昔のガラケーに[BLANK1]、最近のスマホは本当に高機能になったよな。」</p><p><strong>田中:</strong> 「そうそう。それに新しいモデルは、カメラの性能が上がっていること[BLANK2]、バッテリーの持ち時間も長くなっているらしい。」</p><p><strong>佐藤:</strong> 「どれにするか決めたのか？」</p><p><strong>田中:</strong> 「いや、今年発売されたモデルにするか、一つ前の型落ちを安く買うか[BLANK3]、まだ迷ってるんだ。」</p>",
            blanks: [
                { id: "BLANK1", options: ["に比べて", "に加えて", "かどうか"], answer: "に比べて" },
                { id: "BLANK2", options: ["に加えて", "に比べて", "かどうか"], answer: "に加えて" },
                { id: "BLANK3", options: ["かどうか", "に比べて", "に加えて"], answer: "かどうか" }
            ]
        },
        story: {
            title: "A Tough Camping Trip",
            text: "<p>先週末、私は友人たちと一緒に山奥へキャンプに出かけた。都会の喧騒から離れてリフレッシュしたかったからだ。しかし、今回のキャンプは過去の経験[BLANK1]、予想以上に過酷なものとなった。</p><p>山の天気は変わりやすく、日中は晴れていたの[BLANK2]、夕方になると急に強い風が吹き始め、夜中には激しい雨が降ってきたのだ。準備していた防水テントのおかげで何とか濡れずに済んだが、寒さで十分に眠ることができなかった。</p><p>翌朝、すっかり疲れ果てた私たちは「来年もまたここでキャンプをするべきか[BLANK3]」と苦笑いしながらコーヒーを飲んだ。自然の厳しさを痛感した一方で、温かいコーヒーがこれほど美味しいと感じたことはなかった。</p>",
            blanks: [
                { id: "BLANK1", options: ["に比べて", "に加えて", "かどうか"], answer: "に比べて" },
                { id: "BLANK2", options: ["に加えて", "に比べて", "かどうか"], answer: "に加えて" },
                { id: "BLANK3", options: ["かどうか", "に比べて", "に加えて"], answer: "かどうか" }
            ]
        }
    }, {
        id: 12,
        title: "Lesson 12: Assertion & Strong Affirmation",
        grammar: [
            {
                point: "~に違いない (にちがいない)",
                english: "There is no doubt that / Must be",
                structure: "Noun / Verb / Adj (Plain form) + に違いない",
                nuance: "Used to make a strong assertion or guess based on objective evidence, logical deduction, or observation. It sounds relatively formal and confident.",
                metaphor: "Think of a detective solving a mystery. You have gathered all the clues (footprints, motives), and this is the only logical conclusion remaining.",
                examples: [
                    { topic: "Business", text: "これだけ準備をしたのだから、明日のプレゼンは成功するに違いない。", eng: "Since we prepared this much, there is no doubt that tomorrow's presentation will be successful." },
                    { topic: "Anime", text: "あのキャラクターの過去には、悲しい秘密があるに違いない。", eng: "There is no doubt that there is a sad secret in that character's past." },
                    { topic: "Technology", text: "このスペックなら、どんな重いゲームでもサクサク動くに違いない。", eng: "With these specs, there is no doubt that any heavy game will run smoothly." },
                    { topic: "Airsoft", text: "彼は元軍人だから、サバゲーの腕前も相当なものに違いない。", eng: "Since he is a former soldier, there is no doubt that his airsoft skills are quite something." },
                    { topic: "Daily Life", text: "部屋の電気がついているから、彼は家にいるに違いない。", eng: "Since the room light is on, there is no doubt that he is at home." }
                ],
                clickingGames: [
                    { prompt: "Since he studies every day, he will definitely pass the exam.", target: "毎日勉強しているから試験に合格するに違いない", words: ["毎日勉強しているから", "試験に合格する", "に違いない"] },
                    { prompt: "That expensive PC must be extremely fast.", target: "あの高いPCはものすごく処理が速いに違いない", words: ["あの高いPCは", "ものすごく処理が", "速いに違いない"] },
                    { prompt: "Because he loves alcohol, he will definitely come to the drinking party.", target: "お酒が好きだから彼は飲み会に来るに違いない", words: ["お酒が好きだから", "彼は飲み会に来る", "に違いない"] },
                    { prompt: "This curry is red, so it must be super spicy.", target: "このカレーは赤いから激辛に違いない", words: ["このカレーは", "赤いから", "激辛に違いない"] },
                    { prompt: "Since the reviews are this good, it must be a masterpiece movie.", target: "これだけレビューが良いのだから名作映画に違いない", words: ["これだけレビューが良いのだから", "名作映画に違いない"] }
                ],
                dropdownGames: [
                    { before: "犯人は", options: ["彼に違いない", "彼であるに違いない", "彼なのに違いない"], answer: "彼に違いない", after: "、と警察は考えている。" },
                    { before: "あの二人は、もうすぐ", options: ["結婚するに違いない", "結婚したに違いない", "結婚してに違いない"], answer: "結婚するに違いない", after: "とお似合いのカップルだ。" },
                    { before: "こんなに安いのだから、品質が", options: ["悪いに違いない", "悪いであるに違いない", "悪くの違いない"], answer: "悪いに違いない", after: "。" },
                    { before: "毎日練習したのだから、明日の試合は", options: ["勝てるに違いない", "勝てたに違いない", "勝ってに違いない"], answer: "勝てるに違いない", after: "。" },
                    { before: "あの店はいつも行列ができているから、", options: ["美味しいに違いない", "美味しかるに違いない", "美味しくて違いない"], answer: "美味しいに違いない", after: "。" }
                ],
                opinionQuestions: [
                    { text: "あなたの経験上、「これをやれば絶対に成功するに違いない」と思う仕事や勉強の方法は何ですか？", eng: "From your experience, what work or study method makes you think 'If I do this, there is no doubt I will succeed'?" },
                    { text: "街で大行列ができているお店を見つけたら、「〜に違いない」とどんな予想をしますか？", eng: "If you see a shop with a huge line in the city, what kind of prediction do you make using 'must be ~'?" },
                    { text: "今のテクノロジーの進化を見ると、10年後の未来は「〜に違いない」とどう思いますか？", eng: "Looking at the evolution of current technology, what do you think 'will definitely happen' in the future 10 years from now?" }
                ]
            },
            {
                point: "~に決まっている",
                english: "Must be / Definitely (Subjective)",
                structure: "Noun / Verb / Adj (Plain form) + に決まっている",
                nuance: "A strong assertion based on the speaker's gut feeling, subjective opinion, or common sense. It is more conversational and emotional than '~に違いない', often carrying a tone of 'It's obvious!'",
                metaphor: "Like a passionate sports fan shouting at the TV. They haven't analyzed the statistics, but they feel it in their bones: 'Our team is definitely going to win!'",
                examples: [
                    { topic: "General JLPT", text: "こんなに雨が降っているのだから、明日のイベントは中止に決まっている。", eng: "Since it's raining this hard, tomorrow's event is definitely canceled." },
                    { topic: "Dating", text: "彼がそんな優しいことを言うなんて、何か裏があるに決まっている。", eng: "For him to say something so kind, there must definitely be an ulterior motive." },
                    { topic: "Alcohol", text: "あんなにテキーラを飲んだのだから、彼は今日二日酔いに決まっている。", eng: "Since he drank that much tequila, he is definitely hungover today." },
                    { topic: "Video games", text: "このボスの攻撃パターンは、初見で避けられるわけがない。無理に決まっている。", eng: "There's no way to dodge this boss's attack pattern on the first try. It's definitely impossible." },
                    { topic: "Business", text: "無断欠勤を繰り返せば、クビになるに決まっている。", eng: "If you repeatedly take unauthorized absences, you will definitely be fired." }
                ],
                clickingGames: [
                    { prompt: "Since he is a pro gamer, he is definitely good at it.", target: "彼はプロゲーマーなのだから上手いに決まっている", words: ["彼はプロゲーマーなのだから", "上手いに", "決まっている"] },
                    { prompt: "If you say such a thing, she will definitely get angry.", target: "そんなことを言えば彼女は怒るに決まっている", words: ["そんなことを言えば", "彼女は怒るに", "決まっている"] },
                    { prompt: "A PC with these specs is definitely going to be expensive.", target: "このスペックのPCは値段が高いに決まっている", words: ["このスペックのPCは", "値段が高いに", "決まっている"] },
                    { prompt: "There's no way a beginner can do that. It's definitely impossible.", target: "初心者にできるわけがない無理に決まっている", words: ["初心者にできるわけがない", "無理に", "決まっている"] },
                    { prompt: "If you don't sleep all night, you will definitely be tired.", target: "徹夜で寝ていないのだから疲れているに決まっている", words: ["徹夜で寝ていないのだから", "疲れているに", "決まっている"] }
                ],
                dropdownGames: [
                    { before: "そんなにケーキを食べたら、", options: ["太るに決まっている", "太ったに決まっている", "太ってに決まっている"], answer: "太るに決まっている", after: "よ。" },
                    { before: "こんな難しい問題、私に", options: ["解けないに決まっている", "解けないであるに決まっている", "解けなくて決まっている"], answer: "解けないに決まっている", after: "。" },
                    { before: "彼が一人で", options: ["やったに決まっている", "やったであるに決まっている", "やってに決まっている"], answer: "やったに決まっている", after: "。他に証拠がない。" },
                    { before: "あんなにひどいことを言われたら、", options: ["傷つくに決まっている", "傷ついたに決まっている", "傷つきに決まっている"], answer: "傷つくに決まっている", after: "。" },
                    { before: "このゲームは、", options: ["面白いに決まっている", "面白いであるに決まっている", "面白くて決まっている"], answer: "面白いに決まっている", after: "！世界中で売れているんだから。" }
                ],
                opinionQuestions: [
                    { text: "あなたが「これをやったら絶対に失敗するに決まっている」と思う悪い習慣は何ですか？", eng: "What is a bad habit that you think 'If you do this, you will definitely fail'?" },
                    { text: "友達が怪しい投資の話を持ってきたら、「〜に決まっている！」とどう注意しますか？", eng: "If a friend brought up a suspicious investment story, how would you warn them using 'It's definitely ~!'?" },
                    { text: "「この映画（またはアニメ）は面白いに決まっている！」と公開前に確信した作品はありますか？", eng: "Is there a movie (or anime) where you were certain before its release, saying 'This is definitely going to be interesting!'?" }
                ]
            },
            {
                point: "~にほかならない",
                english: "Nothing but / None other than",
                structure: "Noun + にほかならない",
                nuance: "A highly formal and somewhat rigid expression used to forcefully assert that X is exactly Y, and absolutely nothing else. Often used to point out the true cause or reason for something.",
                metaphor: "It's the grand dramatic reveal at the end of a mystery play. You pull off the mask and confidently declare: 'The culprit is none other than... YOU!'",
                examples: [
                    { topic: "Business", text: "このプロジェクトの成功は、チーム全員の努力の賜物にほかならない。", eng: "The success of this project is nothing but the fruit of the entire team's effort." },
                    { topic: "General JLPT", text: "彼が怒っているのは、君のことを心配しているからにほかならない。", eng: "The fact that he is angry is for no other reason than that he is worried about you." },
                    { topic: "Society", text: "この事故は、会社の安全管理の甘さにほかならない。", eng: "This accident is due to nothing but the company's lax safety management." },
                    { topic: "Sports", text: "今回の優勝は、毎日の厳しいトレーニングの結果にほかならない。", eng: "This championship is nothing but the result of severe daily training." },
                    { topic: "Technology", text: "AIの急速な発展は、データ処理能力の向上にほかならない。", eng: "The rapid development of AI is due to nothing but the improvement of data processing capabilities." }
                ],
                clickingGames: [
                    { prompt: "My current success is nothing but thanks to my parents' support.", target: "今の成功は両親のサポートのおかげにほかならない", words: ["今の成功は", "両親のサポートのおかげに", "ほかならない"] },
                    { prompt: "This problem is due to nothing but a lack of communication.", target: "この問題はコミュニケーション不足にほかならない", words: ["この問題は", "コミュニケーション不足に", "ほかならない"] },
                    { prompt: "My study abroad experience is nothing but a precious treasure in my life.", target: "留学の経験は人生の貴重な財産にほかならない", words: ["留学の経験は", "人生の貴重な財産に", "ほかならない"] },
                    { prompt: "The drop in sales is for no other reason than a lack of market research.", target: "売上の低下は市場調査の不足からにほかならない", words: ["売上の低下は", "市場調査の不足からに", "ほかならない"] },
                    { prompt: "His words are nothing but a sign of his deep affection.", target: "彼の言葉は深い愛情の表れにほかならない", words: ["彼の言葉は", "深い愛情の表れに", "ほかならない"] }
                ],
                dropdownGames: [
                    { before: "彼の失敗は、準備", options: ["不足にほかならない", "不足であるにほかならない", "不足からほかならない"], answer: "不足にほかならない", after: "。" },
                    { before: "私がここで働いているのは、この会社が", options: ["好きだからにほかならない", "好きであるにほかならない", "好きにほかならない"], answer: "好きだからにほかならない", after: "。" },
                    { before: "この美しいデザインは、職人の", options: ["努力の結晶にほかならない", "努力の結晶であるにほかならない", "努力の結晶するにほかならない"], answer: "努力の結晶にほかならない", after: "。" },
                    { before: "彼が泣いたのは、悔しかった", options: ["からにほかならない", "のであるにほかならない", "てほかならない"], answer: "からにほかならない", after: "。" },
                    { before: "政治の腐敗は、有権者の", options: ["無関心にほかならない", "無関心であるにほかならない", "無関心してほかならない"], answer: "無関心にほかならない", after: "。" }
                ],
                opinionQuestions: [
                    { text: "あなたが今、健康で生活できているのは「〜にほかならない」と思いますか？", eng: "To what do you attribute the fact that you are able to live healthily now, using 'It is nothing but ~'?" },
                    { text: "ビジネスや勉強で失敗してしまう最大の原因は、「〜にほかならない」とどう考えますか？", eng: "What do you think is the biggest cause of failure in business or study, using 'It is due to nothing but ~'?" },
                    { text: "あなたが今の趣味（サバゲーやゲームなど）を続けている理由は、「〜からにほかならない」とどう説明しますか？", eng: "How would you explain the reason you continue your current hobbies (like airsoft or games) using 'It is for no other reason than ~'?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Talking about a coworker who suddenly quit.",
            text: "<p><strong>田中:</strong> 「なあ、営業部の高橋が急に会社を辞めたらしいぞ。」</p><p><strong>佐藤:</strong> 「えっ、本当か？あいつ、この前の大きなプロジェクトを任されて張り切ってたじゃないか。」</p><p><strong>田中:</strong> 「ああ。でも最近、毎日終電まで残業させられてたらしいんだ。過労で倒れる前に逃げた[BLANK1]よ。」</p><p><strong>佐藤:</strong> 「ブラック企業だな…。優秀な彼が辞めたのは、会社の管理体制が甘かったから[BLANK2]な。」</p><p><strong>田中:</strong> 「全くだ。このままじゃ、他の社員も辞めていく[BLANK3]よ。」</p>",
            blanks: [
                { id: "BLANK1", options: ["に決まっている", "に違いない", "にほかならない"], answer: "に決まっている" },
                { id: "BLANK2", options: ["にほかならない", "に決まっている", "に違いない"], answer: "にほかならない" },
                { id: "BLANK3", options: ["に違いない", "にほかならない", "に決まっている"], answer: "に違いない" }
            ]
        },
        story: {
            title: "The Mystery of the Missing Controller",
            text: "<p>週末、私は楽しみにしていた新作ゲームをプレイしようとテレビの前に座った。しかし、あるはずのコントローラーが見当たらないのだ。部屋中を探したが、どこにもない。昨日遊びに来ていた甥っ子が、勝手に持ち帰った[BLANK1]と私は推理した。</p><p>すぐに姉に電話をかけて確認すると、「ごめんなさい、彼が自分のリュックに入れていたわ」と返答があった。やっぱり私の予想通りだった。ゲーム好きの彼のことだから、かっこいいコントローラーを見たら欲しくなる[BLANK2]。</p><p>後日、甥っ子は謝りながらコントローラーを返しに来た。彼が泣きそうな顔をしていたのは、私に怒られるのが怖かったから[BLANK3]。私は彼を許し、今度は一緒にゲームをして遊ぶ約束をした。</p>",
            blanks: [
                { id: "BLANK1", options: ["に違いない", "に決まっている", "にほかならない"], answer: "に違いない" },
                { id: "BLANK2", options: ["に決まっている", "に違いない", "にほかならない"], answer: "に決まっている" },
                { id: "BLANK3", options: ["にほかならない", "に決まっている", "に違いない"], answer: "にほかならない" }
            ]
        }
    },
    {
        id: 13,
        title: "Lesson 13: Prohibition, Warning & Necessity",
        grammar: [
            {
                point: "~てはならない / ~てはいけない",
                english: "Must not / Should not",
                structure: "Verb (て-form) + はならない / はいけない",
                nuance: "A strong prohibition or warning against doing something. '~てはならない' is highly formal and written, often seen in rules, laws, or moral guidelines. '~てはいけない' is slightly softer but still expresses a firm 'don't do this.'",
                metaphor: "It's like a giant, flashing red 'DO NOT ENTER' sign at a construction site. It's not a suggestion; it's a strict rule for everyone's safety.",
                examples: [
                    { topic: "Business", text: "お客様の個人情報を外部に漏らしてはならない。", eng: "You must not leak customers' personal information to the outside." },
                    { topic: "Airsoft", text: "セーフティエリアで銃の引き金に指をかけてはいけない。", eng: "You must not put your finger on the trigger in the safety area." },
                    { topic: "General JLPT", text: "試験中にスマートフォンを使用してはならない。", eng: "You must not use your smartphone during the exam." },
                    { topic: "Society", text: "いかなる理由があっても、暴力を振るってはならない。", eng: "Regardless of the reason, you must not use violence." },
                    { topic: "Health", text: "薬を飲んだ後、すぐにお酒を飲んではいけない。", eng: "You must not drink alcohol immediately after taking medicine." }
                ],
                clickingGames: [
                    { prompt: "You must not forget the gratitude you have toward your parents.", target: "両親への感謝の気持ちを忘れてはならない", words: ["両親への感謝の気持ちを", "忘れてはならない"] },
                    { prompt: "You must not take off your goggles during the game.", target: "ゲーム中にゴーグルを外してはいけない", words: ["ゲーム中に", "ゴーグルを", "外してはいけない"] },
                    { prompt: "You must not share the password with anyone.", target: "パスワードを誰かに教えてはならない", words: ["パスワードを誰かに", "教えてはならない"] },
                    { prompt: "Employees must not accept bribes.", target: "社員は賄賂を受け取ってはならない", words: ["社員は賄賂を", "受け取ってはならない"] },
                    { prompt: "You must not click on suspicious links.", target: "怪しいリンクをクリックしてはいけない", words: ["怪しいリンクを", "クリックしてはいけない"] }
                ],
                dropdownGames: [
                    { before: "法律を", options: ["破ってはならない", "破るはならない", "破りてはならない"], answer: "破ってはならない", after: "。" },
                    { before: "機密データを持ち", options: ["出してはならない", "出してはいけない", "出しはならない"], answer: "出してはならない", after: "、とマニュアルに書いてある。" },
                    { before: "未成年者は、お酒を", options: ["飲んではいけない", "飲むはいけない", "飲んでてはいけない"], answer: "飲んではいけない", after: "。" },
                    { before: "他人の悪口を", options: ["言ってはならない", "言うはならない", "言いしてはならない"], answer: "言ってはならない", after: "。" },
                    { before: "運転中にスマホを", options: ["操作してはいけない", "操作するはいけない", "操作しはならない"], answer: "操作してはいけない", after: "。" }
                ],
                opinionQuestions: [
                    { text: "あなたの職場や学校で、「絶対に〜てはならない」という厳しいルールは何ですか？", eng: "In your workplace or school, what is a strict rule that says 'You absolutely must not ~'?" },
                    { text: "人間関係を長く続けるために、「相手に〜てはいけない」と思うことは何ですか？", eng: "To make a relationship last a long time, what do you think is something you 'must not do to the other person'?" },
                    { text: "趣味（サバゲーやゲームなど）のコミュニティで、初心者が「〜てはいけない」マナーは何ですか？", eng: "In your hobby community (airsoft, games, etc.), what is a manner where beginners 'must not ~'?" }
                ]
            },
            {
                point: "~ざるを得ない (ざるをえない)",
                english: "Cannot help but / Have no choice but to",
                structure: "Verb (ない-form, drop ない) + ざるを得ない  (*する becomes せざるを得ない)",
                nuance: "Used when you really don't want to do something, but external circumstances, common sense, or a lack of options force you to do it anyway. It expresses reluctance and resignation.",
                metaphor: "It's like being backed into a corner in a fighting game. You really wanted to save your ultimate move for the boss, but your health is at 1%, so you have no choice but to use it now to survive.",
                examples: [
                    { topic: "Business", text: "予算が足りないため、このプロジェクトは中止せざるを得ない。", eng: "Because we lack the budget, we have no choice but to cancel this project." },
                    { topic: "Weather", text: "台風が近づいているので、明日のキャンプは延期せざるを得ない。", eng: "Because a typhoon is approaching, we cannot help but postpone tomorrow's camping trip." },
                    { topic: "Technology", text: "パソコンが完全に壊れてしまったので、新しいものを買わざるを得ない。", eng: "Because my PC completely broke down, I have no choice but to buy a new one." },
                    { topic: "General JLPT", text: "電車が止まっているので、タクシーで帰らざるを得ない。", eng: "Since the trains are stopped, I have no choice but to return by taxi." },
                    { topic: "Health", text: "熱が39度もあるので、今日は仕事を休まざるを得ない。", eng: "Since I have a fever of 39 degrees, I have no choice but to take the day off from work today." }
                ],
                clickingGames: [
                    { prompt: "Since I made a mistake, I cannot help but apologize.", target: "自分がミスをしたのだから謝らざるを得ない", words: ["自分がミスを", "したのだから", "謝らざるを得ない"] },
                    { prompt: "Due to the lack of evidence, we have no choice but to release the suspect.", target: "証拠がないため容疑者を釈放せざるを得ない", words: ["証拠がないため", "容疑者を", "釈放せざるを得ない"] },
                    { prompt: "Since there is no air conditioner, I have no choice but to endure the heat.", target: "エアコンがないので暑さを我慢せざるを得ない", words: ["エアコンがないので", "暑さを", "我慢せざるを得ない"] },
                    { prompt: "The injury is severe, so he has no choice but to retire.", target: "怪我がひどいため彼は引退せざるを得ない", words: ["怪我がひどいため", "彼は", "引退せざるを得ない"] },
                    { prompt: "The deadline is tomorrow, so I have no choice but to pull an all-nighter.", target: "締め切りが明日なので徹夜せざるを得ない", words: ["締め切りが明日なので", "徹夜", "せざるを得ない"] }
                ],
                dropdownGames: [
                    { before: "社長の命令なので、", options: ["従わざるを得ない", "従うざるを得ない", "従ってざるを得ない"], answer: "従わざるを得ない", after: "。" },
                    { before: "この状況では、計画を", options: ["変更せざるを得ない", "変更しざるを得ない", "変更するざるを得ない"], answer: "変更せざるを得ない", after: "。" },
                    { before: "道に迷ってしまったので、人に", options: ["聞かざるを得ない", "聞くざるを得ない", "聞いてざるを得ない"], answer: "聞かざるを得ない", after: "。" },
                    { before: "他に誰もいないので、私が", options: ["やらざるを得ない", "やるざるを得ない", "やってざるを得ない"], answer: "やらざるを得ない", after: "だろう。" },
                    { before: "これだけ証拠が揃っていれば、彼の犯罪を", options: ["認めざるを得ない", "認めるざるを得ない", "認めてざるを得ない"], answer: "認めざるを得ない", after: "。" }
                ],
                opinionQuestions: [
                    { text: "最近、「本当はやりたくなかったけれど、〜せざるを得なかった」という出来事はありますか？", eng: "Recently, has there been an event where 'you really didn't want to do it, but had no choice but to ~'?" },
                    { text: "天候やトラブルのせいで、予定を「変更せざるを得なかった」経験を教えてください。", eng: "Tell me about an experience where you 'had no choice but to change' your plans because of the weather or trouble." },
                    { text: "パソコンや家電が壊れて、「新しいものを買わざるを得なかった」ことはありますか？", eng: "Have you ever 'had no choice but to buy a new one' because your PC or home appliance broke?" }
                ]
            },
            {
                point: "~かねない",
                english: "Might happen / There is a fear that...",
                structure: "Verb (stem) + かねない",
                nuance: "Expresses a strong possibility that a negative or undesirable result will happen if the current situation continues. It is often used as a warning.",
                metaphor: "It's like driving too fast on an icy road. You haven't crashed *yet*, but the conditions make a disaster highly likely if you don't slow down.",
                examples: [
                    { topic: "Health", text: "そんなに毎日徹夜ばかりしていると、倒れかねないよ。", eng: "If you stay up all night every day like that, you might collapse." },
                    { topic: "Business", text: "この小さなミスが、後で大きなトラブルになりかねない。", eng: "This small mistake might turn into a huge trouble later." },
                    { topic: "Information Security", text: "パスワードを使い回すと、ハッキングされかねない。", eng: "If you reuse your password, you might get hacked." },
                    { topic: "General JLPT", text: "あんなにスピードを出して運転したら、事故を起こしかねない。", eng: "If you drive speeding like that, you might cause an accident." },
                    { topic: "Society", text: "彼の不用意な発言は、誤解を招きかねない。", eng: "His careless remark might invite misunderstanding." }
                ],
                clickingGames: [
                    { prompt: "If you leave it alone, the problem might get worse.", target: "そのまま放置しておくと問題が悪化しかねない", words: ["そのまま放置しておくと", "問題が", "悪化しかねない"] },
                    { prompt: "If you drink too much, you might lose your memory.", target: "お酒を飲みすぎると記憶を失いかねない", words: ["お酒を飲みすぎると", "記憶を", "失いかねない"] },
                    { prompt: "Without safety checks, a major accident might happen.", target: "安全確認を怠ると大事故に繋がりかねない", words: ["安全確認を怠ると", "大事故に", "繋がりかねない"] },
                    { prompt: "If you lend him money, he might not return it.", target: "彼にお金を貸したら返ってこない事態になりかねない", words: ["彼にお金を貸したら", "返ってこない事態に", "なりかねない"] },
                    { prompt: "If you spread rumors, you might lose your friends' trust.", target: "噂を広めると友達の信用を失いかねない", words: ["噂を広めると", "友達の信用を", "失いかねない"] }
                ],
                dropdownGames: [
                    { before: "そんなに無理をすると、病気に", options: ["なりかねない", "なるかねない", "なってかねない"], answer: "なりかねない", after: "よ。" },
                    { before: "このままでは、会社が", options: ["倒産しかねない", "倒産するかねない", "倒産してかねない"], answer: "倒産しかねない", after: "。" },
                    { before: "あの二人は仲が悪いから、会議で", options: ["喧嘩しかねない", "喧嘩するかねない", "喧嘩してかねない"], answer: "喧嘩しかねない", after: "。" },
                    { before: "このデータが漏洩（ろうえい）すれば、社会問題に", options: ["発展しかねない", "発展するかねない", "発展してかねない"], answer: "発展しかねない", after: "。" },
                    { before: "あまり厳しく怒ると、子供が", options: ["反抗しかねない", "反抗するかねない", "反抗してかねない"], answer: "反抗しかねない", after: "。" }
                ],
                opinionQuestions: [
                    { text: "仕事や勉強で、「これを放置しておくと、後で大変なことになりかねない」と思うことは何ですか？", eng: "In work or study, what is something you think 'If I leave this alone, it might become a terrible situation later'?" },
                    { text: "パスワードの使い回しなど、「〜すると、トラブルになりかねない」と思うデジタルの危険は何ですか？", eng: "What is a digital danger, like reusing passwords, where you think 'If you do ~, it might lead to trouble'?" },
                    { text: "あなたの趣味（スポーツやゲーム）で、「無理をすると、〜しかねない」という注意点はありますか？", eng: "In your hobby, is there a point of caution where 'If you push yourself too hard, you might ~'?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Discussing data security at the office.",
            text: "<p><strong>田中:</strong> 「最近、うちの会社でも情報セキュリティのルールがかなり厳しくなったよな。」</p><p><strong>佐藤:</strong> 「ああ。会社のパソコンから個人のUSBメモリにデータを移し[BLANK1]って、何度も言われてるよ。」</p><p><strong>田中:</strong> 「少しでもデータが漏れたら、会社の信用を失い[BLANK2]からね。面倒だけど、ルールには従わ[BLANK3]よ。」</p><p><strong>佐藤:</strong> 「全くだな。昔みたいにゆるい環境ではもう働けない時代になったんだな。」</p>",
            blanks: [
                { id: "BLANK1", options: ["てはならない", "ざるを得ない", "かねない"], answer: "てはならない" },
                { id: "BLANK2", options: ["かねない", "ざるを得ない", "てはならない"], answer: "かねない" },
                { id: "BLANK3", options: ["ざるを得ない", "てはならない", "かねない"], answer: "ざるを得ない" }
            ]
        },
        story: {
            title: "Safety Rules on the Field",
            text: "<p>サバイバルゲームは非常にスリリングで楽しい趣味だが、一歩間違えれば大怪我に繋がり[BLANK1]危険な側面も持っている。だからこそ、どのフィールドにも厳格なルールが存在し、プレイヤーはそれを絶対に守らなければならない。</p><p>例えば、ゲーム中はいかなる理由があっても、絶対に目を保護するゴーグルを外し[BLANK2]。もしレンズが曇って前が見えなくなったとしても、フィールドから安全に出るまでは着用し続けなければならないのだ。</p><p>先日、ある初心者のプレイヤーがゲーム中にゴーグルを外そうとしたため、私は強い口調で注意せ[BLANK3]。楽しい雰囲気の水を差すようで心苦しかったが、重大な事故を防ぐためには、ベテランとして厳しく指導するしかなかったのである。</p>",
            blanks: [
                { id: "BLANK1", options: ["かねない", "てはならない", "ざるを得ない"], answer: "かねない" },
                { id: "BLANK2", options: ["てはならない", "ざるを得ない", "かねない"], answer: "てはならない" },
                { id: "BLANK3", options: ["ざるを得ない", "かねない", "てはならない"], answer: "ざるを得ない" }
            ]
        }
    }, {
        id: 14,
        title: "Lesson 14: Medium, Trigger & Emotion",
        grammar: [
            {
                point: "~を通じて / ~を通して (をつうじて / をとおして)",
                english: "Through / Via / Throughout",
                structure: "Noun + を通じて / を通して",
                nuance: "Has two meanings: 1) Using someone or something as a medium/intermediary to do something. 2) A state or action that continues continuously 'throughout' an entire period of time.",
                metaphor: "Think of a tunnel. You either use it as a pathway to get a message to the other side, or you experience something continuously from the entrance to the exit.",
                examples: [
                    { topic: "Business", text: "社長の秘書を通じて、会議の時間を変更してもらった。", eng: "I had the meeting time changed through the president's secretary." },
                    { topic: "Internet", text: "SNSを通じて、世界中のサバゲープレイヤーと知り合った。", eng: "I got to know airsoft players from all over the world via SNS." },
                    { topic: "Weather", text: "この地域は一年を通じて、比較的温暖な気候だ。", eng: "This region has a relatively mild climate throughout the year." },
                    { topic: "Anime", text: "アニメを通して、日本の文化や言葉を学んだ。", eng: "I learned about Japanese culture and language through anime." },
                    { topic: "Dating", text: "共通の友人を通して、彼女と初めて出会った。", eng: "I first met my girlfriend through a mutual friend." }
                ],
                clickingGames: [
                    { prompt: "I purchased the parts through an online shop.", target: "ネットショップを通じてパーツを購入した", words: ["ネットショップを", "通じて", "パーツを購入した"] },
                    { prompt: "We communicate via an interpreter.", target: "通訳を通してコミュニケーションをとる", words: ["通訳を", "通して", "コミュニケーションをとる"] },
                    { prompt: "This game is loved by people throughout the four seasons.", target: "このゲームは四季を通じて人々に愛されている", words: ["このゲームは", "四季を通じて", "人々に愛されている"] },
                    { prompt: "I gained valuable experience through volunteer work.", target: "ボランティア活動を通して貴重な経験を得た", words: ["ボランティア活動を", "通して", "貴重な経験を得た"] },
                    { prompt: "He is a hard worker throughout his entire life.", target: "彼は生涯を通じて働き者だ", words: ["生涯を", "通じて", "働き者だ", "彼は"] }
                ],
                dropdownGames: [
                    { before: "共通の", options: ["知人を通して", "知人に通して", "知人が通して"], answer: "知人を通して", after: "、彼に連絡を取った。" },
                    { before: "この街は、", options: ["一年を通じて", "一年に通じて", "一年が通じて"], answer: "一年を通じて", after: "観光客で賑わっている。" },
                    { before: "インターネット", options: ["を通じて", "に通じて", "が通じて"], answer: "を通じて", after: "、情報を簡単に集められる。" },
                    { before: "スポーツ", options: ["を通して", "に通して", "をして通して"], answer: "を通して", after: "、チームワークの重要性を学んだ。" },
                    { before: "彼の一生", options: ["を通じて", "に通じて", "が通じて"], answer: "を通じて", after: "、その研究は続けられた。" }
                ],
                opinionQuestions: [
                    { text: "あなたが「インターネットを通じて」出会った、一番面白い人や物は何ですか？", eng: "What is the most interesting person or thing you have encountered 'through the internet'?" },
                    { text: "「一年を通じて」一番快適に過ごせる場所はどこだと思いますか？", eng: "Where do you think is the most comfortable place to spend time 'throughout the year'?" },
                    { text: "あなたはどんな経験を「通して」、今の仕事のスキルを身につけましたか？", eng: "Through what kind of experience did you acquire your current work skills?" }
                ]
            },
            {
                point: "~をきっかけに / ~を契機に (をけいきに)",
                english: "Triggered by / With ... as a start",
                structure: "Noun / Verb-た＋の + をきっかけに",
                nuance: "Expresses that a specific event, chance, or encounter sparked a major change, a new habit, or the beginning of a relationship. It emphasizes the turning point.",
                metaphor: "It's the first domino falling. One small push causes a massive chain reaction that changes everything that follows.",
                examples: [
                    { topic: "Health", text: "病気で入院したのをきっかけに、タバコをやめた。", eng: "Triggered by being hospitalized with an illness, I quit smoking." },
                    { topic: "Language", text: "日本旅行をきっかけに、日本語の勉強を始めた。", eng: "Triggered by a trip to Japan, I started studying Japanese." },
                    { topic: "Business", text: "今回のプロジェクトの失敗を契機に、システムを完全に見直した。", eng: "With the failure of this project as a turning point, we completely reviewed the system." },
                    { topic: "Dating", text: "同じゲームが好きだったことをきっかけに、二人は付き合い始めた。", eng: "Triggered by the fact that they liked the same game, the two started dating." },
                    { topic: "Airsoft", text: "友人に誘われたのをきっかけに、サバゲーにすっかりハマってしまった。", eng: "Triggered by being invited by a friend, I got completely hooked on airsoft." }
                ],
                clickingGames: [
                    { prompt: "Triggered by the move, I bought new furniture.", target: "引っ越しをきっかけに新しい家具を買った", words: ["引っ越しを", "きっかけに", "新しい家具を買った"] },
                    { prompt: "Triggered by a quarrel, we stopped talking.", target: "喧嘩をきっかけに口をきかなくなった", words: ["喧嘩を", "きっかけに", "口をきかなくなった"] },
                    { prompt: "With his retirement as a turning point, the team's atmosphere changed.", target: "彼の引退を契機にチームの雰囲気が変わった", words: ["彼の引退を契機に", "チームの雰囲気が", "変わった"] },
                    { prompt: "Triggered by watching anime, I became interested in Japan.", target: "アニメを見たのをきっかけに日本に興味を持った", words: ["アニメを見たのを", "きっかけに", "日本に興味を持った"] },
                    { prompt: "Triggered by my PC breaking, I started studying programming.", target: "PCが壊れたのをきっかけにプログラミングの勉強を始めた", words: ["PCが壊れたのを", "きっかけに", "プログラミングの勉強を始めた"] }
                ],
                dropdownGames: [
                    { before: "大学の", options: ["卒業をきっかけに", "卒業したきっかけに", "卒業のきっかけに"], answer: "卒業をきっかけに", after: "、一人暮らしを始めた。" },
                    { before: "その事件", options: ["を契機に", "に契機に", "の契機に"], answer: "を契機に", after: "、セキュリティ対策が強化された。" },
                    { before: "同じ映画を", options: ["見たのをきっかけに", "見るのきっかけに", "見たにきっかけに"], answer: "見たのをきっかけに", after: "、彼と仲良くなった。" },
                    { before: "健康診断の", options: ["結果をきっかけに", "結果のきっかけに", "結果したきっかけに"], answer: "結果をきっかけに", after: "、ダイエットを決意した。" },
                    { before: "海外", options: ["転勤を契機に", "転勤した契機に", "転勤の契機に"], answer: "転勤を契機に", after: "、英語を本気で学び直した。" }
                ],
                opinionQuestions: [
                    { text: "あなたが現在の趣味（ゲームやサバゲーなど）を始めた「きっかけ」は何ですか？", eng: "What was the 'trigger' that made you start your current hobbies (games, airsoft, etc.)?" },
                    { text: "何か大きな出来事を「契機に」、自分の生活習慣をガラッと変えたことはありますか？", eng: "Have you ever completely changed your lifestyle habits 'with a major event as a turning point'?" },
                    { text: "あなたが一番親しい友人と仲良くなった「きっかけ」は何でしたか？", eng: "What was the 'trigger' for you becoming close with your best friend?" }
                ]
            },
            {
                point: "~をこめて",
                english: "Filled with / With a lot of",
                structure: "Noun + をこめて",
                nuance: "Used when doing an action while putting a strong emotion (love, gratitude, anger, prayer, wishes) into it. It cannot be used with physical objects; it must be an abstract feeling.",
                metaphor: "It's like carefully pouring a secret, invisible ingredient into a dish before serving it. You can't see the love, but you can feel it.",
                examples: [
                    { topic: "Dating", text: "彼女への愛をこめて、特別な指輪を選んだ。", eng: "Filled with love for her, I chose a special ring." },
                    { topic: "Business", text: "日頃の感謝をこめて、チーム全員にコーヒーを奢った。", eng: "Filled with daily gratitude, I treated the whole team to coffee." },
                    { topic: "Daily Life", text: "平和への祈りをこめて、千羽鶴を折った。", eng: "Filled with prayers for peace, I folded a thousand paper cranes." },
                    { topic: "Music", text: "彼は怒りをこめて、力強くドラムを叩いた。", eng: "Filled with anger, he hit the drums powerfully." },
                    { topic: "Crafting", text: "一つ一つ心をこめて、この家具を作りました。", eng: "I made this furniture putting my heart into each and every piece." }
                ],
                clickingGames: [
                    { prompt: "I wrote this letter filled with gratitude.", target: "感謝をこめてこの手紙を書きました", words: ["感謝を", "こめて", "この手紙を書きました"] },
                    { prompt: "She sang a song filled with wishes.", target: "彼女は願いをこめて歌を歌った", words: ["願いを", "こめて", "歌を歌った", "彼女は"] },
                    { prompt: "I hit the punching bag filled with stress.", target: "ストレスをこめてサンドバッグを殴った", words: ["ストレスを", "こめて", "サンドバッグを殴った"] },
                    { prompt: "Filled with love, I cooked a handmade dinner.", target: "愛をこめて手作りの夕食を作った", words: ["愛をこめて", "手作りの", "夕食を作った"] },
                    { prompt: "He glared at the enemy filled with anger.", target: "彼は怒りをこめて敵を睨みつけた", words: ["怒りをこめて", "敵を", "睨みつけた", "彼は"] }
                ],
                dropdownGames: [
                    { before: "両親への", options: ["感謝をこめて", "感謝にこめて", "感謝がこめて"], answer: "感謝をこめて", after: "、旅行をプレゼントした。" },
                    { before: "復興への", options: ["祈りをこめて", "祈りにこめて", "祈りがこめて"], answer: "祈りをこめて", after: "、募金活動を行った。" },
                    { before: "たっぷりの", options: ["愛情をこめて", "愛情にこめて", "愛情がこめて"], answer: "愛情をこめて", after: "、お弁当を作ります。" },
                    { before: "悔しさ", options: ["をこめて", "にこめて", "がこめて"], answer: "をこめて", after: "、彼はタオルを床に叩きつけた。" },
                    { before: "一つ一つ", options: ["心をこめて", "心にこめて", "心がこめて"], answer: "心をこめて", after: "磨き上げられた革靴だ。" }
                ],
                opinionQuestions: [
                    { text: "あなたが誰かに「感謝をこめて」何か特別なことをしてあげた経験はありますか？", eng: "Do you have an experience where you did something special for someone 'filled with gratitude'?" },
                    { text: "「心をこめて」作られた料理と、ファストフードでは、やはり味が違うと感じますか？", eng: "Do you feel that food made 'putting one's heart into it' tastes different from fast food?" },
                    { text: "もしプレゼントを贈るなら、どんな「思いをこめて」選びたいですか？", eng: "If you were to give a present, what kind of 'feeling' would you want to 'fill it with' when choosing?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Talking about starting a new YouTube channel.",
            text: "<p><strong>田中:</strong> 「実は最近、サバゲーのプレイ動画をYouTubeにアップし始めたんだよ。」</p><p><strong>佐藤:</strong> 「へえ、すごいな！急にどうしたの？」</p><p><strong>田中:</strong> 「先月、新しいアクションカメラを買ったの[BLANK1]、編集も勉強してみようと思ってさ。」</p><p><strong>佐藤:</strong> 「いい趣味だな。動画[BLANK2]、同じ趣味の仲間も増えそうだし。」</p><p><strong>田中:</strong> 「そうなんだよ。だから毎回、見てくれる人への感謝[BLANK3]、丁寧に字幕をつけてるんだ。」</p>",
            blanks: [
                { id: "BLANK1", options: ["をきっかけに", "を通じて", "をこめて"], answer: "をきっかけに" },
                { id: "BLANK2", options: ["を通じて", "をきっかけに", "をこめて"], answer: "を通じて" },
                { id: "BLANK3", options: ["をこめて", "をきっかけに", "を通じて"], answer: "をこめて" }
            ]
        },
        story: {
            title: "A New Hobby in the Kitchen",
            text: "<p>私はもともと、休日は家でゲームをするか、ホームシアターで映画を見るばかりだった。しかし、ある日友人からスパイスセットをプレゼントされたこと[BLANK1]、本格的なカレー作りに挑戦してみることにした。</p><p>最初は失敗ばかりだったが、インターネットの料理動画[BLANK2]、様々な国のスパイスの配合や、玉ねぎの炒め方を学ぶことができた。次第に、キッチンに立つ時間が週末の最大の楽しみになっていった。</p><p>今では、友人を家に招いてスパイスカレーを振る舞うようになった。みんなが「美味しい」と言ってくれる笑顔を見るために、毎回たっぷりの情熱とスパイス[BLANK3]、時間をかけて煮込んでいる。新しい世界を開いてくれた友人には、本当に感謝している。</p>",
            blanks: [
                { id: "BLANK1", options: ["をきっかけに", "を通じて", "をこめて"], answer: "をきっかけに" },
                { id: "BLANK2", options: ["を通じて", "をきっかけに", "をこめて"], answer: "を通じて" },
                { id: "BLANK3", options: ["をこめて", "をきっかけに", "を通じて"], answer: "をこめて" }
            ]
        }
    },
    {
        id: 15,
        title: "Lesson 15: Evaluation & Perspectives",
        grammar: [
            {
                point: "~にしては",
                english: "For... / Considering...",
                structure: "Noun / Plain form + にしては",
                nuance: "Used to express surprise or a feeling that something is out of the ordinary, because the reality doesn't match the typical standard or expectation for that noun/category.",
                metaphor: "It's like seeing a heavy-looking bulldog jump 6 feet into the air. 'For a bulldog, that is incredibly agile.' It breaks the standard stereotype.",
                examples: [
                    { topic: "Computers", text: "このノートPCは、値段が安いにしては処理速度がとても速い。", eng: "For a cheap laptop, the processing speed is very fast." },
                    { topic: "Airsoft", text: "彼はサバゲー初心者にしては、動きがかなり俊敏だ。", eng: "For an airsoft beginner, his movements are quite agile." },
                    { topic: "Weather", text: "今日は12月にしては、コートがいらないくらい暖かい。", eng: "For December, it is warm enough today that you don't need a coat." },
                    { topic: "Food", text: "自分で初めて作ったにしては、とても美味しくできた。", eng: "Considering it's my first time making it myself, it turned out very delicious." },
                    { topic: "Language", text: "日本に1年しか住んでいないにしては、彼の日本語は自然だ。", eng: "Considering he has only lived in Japan for one year, his Japanese is natural." }
                ],
                clickingGames: [
                    { prompt: "For a smartphone camera, the image quality is overwhelmingly good.", target: "スマホのカメラにしては画質が圧倒的に良い", words: ["スマホのカメラにしては", "画質が", "圧倒的に良い"] },
                    { prompt: "Considering he drank that much, he's surprisingly sober.", target: "あんなに飲んだにしては彼は意外と素面だ", words: ["あんなに飲んだにしては", "彼は意外と", "素面だ"] },
                    { prompt: "For a used car, the condition is very clean.", target: "中古車にしては状態がとても綺麗だ", words: ["中古車にしては", "状態が", "とても綺麗だ"] },
                    { prompt: "Considering he is a boss, his leadership is lacking.", target: "上司にしては彼のリーダーシップは物足りない", words: ["上司にしては", "彼のリーダーシップは", "物足りない"] },
                    { prompt: "For a child, the way he talks is mature.", target: "子供にしては話し方が大人びている", words: ["子供にしては", "話し方が", "大人びている"] }
                ],
                dropdownGames: [
                    { before: "初めて", options: ["作ったにしては", "作るにしては", "作ってにしては"], answer: "作ったにしては", after: "、上出来だね。" },
                    { before: "外国人", options: ["にしては", "のしては", "だしては"], answer: "にしては", after: "、漢字をよく知っている。" },
                    { before: "プロ", options: ["にしては", "のしては", "なしては"], answer: "にしては", after: "、簡単なミスが多すぎる。" },
                    { before: "100円ショップの", options: ["商品にしては", "商品のしては", "商品なしては"], answer: "商品にしては", after: "、長持ちしている。" },
                    { before: "たくさん", options: ["寝たにしては", "寝るにしては", "寝てにしては"], answer: "寝たにしては", after: "、まだ顔が疲れているよ。" }
                ],
                opinionQuestions: [
                    { text: "あなたが持っているガジェットで、「安いにしては性能が良い」と思うものは何ですか？", eng: "What is a gadget you own that you think 'For being cheap, the performance is good'?" },
                    { text: "「初めてやったにしては、うまくできた」という最近の経験はありますか？", eng: "Do you have a recent experience where 'Considering it was my first time, I did well'?" },
                    { text: "日本の冬は、「冬にしては」暖かい日が多いと感じますか？", eng: "Do you feel that winters in Japan have many days that are warm 'for winter'?" }
                ]
            },
            {
                point: "~にしたら / ~にすれば",
                english: "From the perspective of...",
                structure: "Noun (Person) + にしたら / にすれば",
                nuance: "Used to put yourself in someone else's shoes and guess how they must feel or think about a situation. It emphasizes seeing things from a different point of view.",
                metaphor: "It's like putting on someone else's VR headset. Suddenly, you see the game exactly how they are experiencing it.",
                examples: [
                    { topic: "Business", text: "社長にしたら、この売上減少は大きな問題だろう。", eng: "From the president's perspective, this drop in sales is probably a big problem." },
                    { topic: "Dating", text: "彼にすれば冗談のつもりでも、彼女にしたら傷つく言葉だ。", eng: "Even if it was meant as a joke from his perspective, from her perspective, it's a hurtful word." },
                    { topic: "Pets", text: "犬にしたら、人間が毎日出かけるのは不思議に違いない。", eng: "From a dog's perspective, it must be strange that humans leave the house every day." },
                    { topic: "Video games", text: "初心者にしたら、このゲームの操作は複雑すぎる。", eng: "From a beginner's perspective, the controls of this game are too complex." },
                    { topic: "Technology", text: "高齢者にすれば、スマートフォンの設定は難しいだろう。", eng: "From the perspective of the elderly, setting up a smartphone is probably difficult." }
                ],
                clickingGames: [
                    { prompt: "From a fan's perspective, the concert cancellation is very shocking.", target: "ファンにしたらコンサートの中止はとてもショックだ", words: ["ファンにしたら", "コンサートの中止は", "とてもショックだ"] },
                    { prompt: "From my perspective, his success is natural.", target: "私にすれば彼の成功は当然のことだ", words: ["私にすれば", "彼の成功は", "当然のことだ"] },
                    { prompt: "From the child's perspective, homework is just a hassle.", target: "子供にしたら宿題は面倒なだけだ", words: ["子供にしたら", "宿題は", "面倒なだけだ"] },
                    { prompt: "From the customer's perspective, speed is the most important.", target: "客にすればスピードが一番重要だ", words: ["客にすれば", "スピードが", "一番重要だ"] },
                    { prompt: "From a professional's perspective, that equipment is insufficient.", target: "プロにしたらその機材では不十分だ", words: ["プロにしたら", "その機材では", "不十分だ"] }
                ],
                dropdownGames: [
                    { before: "親", options: ["にしたら", "のしたら", "をしてら"], answer: "にしたら", after: "、子供の健康が一番の心配事だ。" },
                    { before: "新入社員", options: ["にすれば", "のすれば", "なすれば"], answer: "にすれば", after: "、全てが分からないことだらけだろう。" },
                    { before: "住民", options: ["にしたら", "をしてら", "のしたら"], answer: "にしたら", after: "、深夜の工事の音は迷惑でしかない。" },
                    { before: "先生", options: ["にすれば", "のすれば", "なすれば"], answer: "にすれば", after: "、生徒の成長が何よりの喜びだ。" },
                    { before: "猫", options: ["にしたら", "のしたら", "をしてら"], answer: "にしたら", after: "、掃除機はただの恐ろしいモンスターだ。" }
                ],
                opinionQuestions: [
                    { text: "あなたの会社の社長（または上司）にしたら、今の職場の課題は何だと思いますか？", eng: "From the perspective of your company's president (or boss), what do you think is the current challenge in the workplace?" },
                    { text: "外国人にしたら、日本の文化で一番不思議に感じることは何だと思いますか？", eng: "From a foreigner's perspective, what do you think is the strangest thing about Japanese culture?" },
                    { text: "ペット（犬や猫）にしたら、人間のどんな行動が変に見えると思いますか？", eng: "From a pet's (dog or cat) perspective, what human behavior do you think looks weird?" }
                ]
            },
            {
                point: "~のわりに(は)",
                english: "Considering... / For... (Often critical)",
                structure: "Verb / Adj (Plain) / Noun + の + わりに(は)",
                nuance: "Very similar to '~にしては', but used across a broader range of grammar types (adjectives, verbs). It indicates that the degree of something does not match the standard, often carrying a slightly negative, critical, or heavily surprised tone.",
                metaphor: "It's like buying a giant, fancy-looking bag of chips, only to open it and find it's 80% air. The content doesn't match the packaging.",
                examples: [
                    { topic: "Food", text: "このレストランは、値段が高いわりには美味しくない。", eng: "Considering how high the price is, this restaurant is not delicious." },
                    { topic: "Business", text: "彼は毎日残業しているわりには、仕事の成果が出ていない。", eng: "Considering he works overtime every day, his work results are not showing." },
                    { topic: "Language", text: "勉強した時間が短いわりには、テストの点数が良かった。", eng: "Considering the short study time, the test score was good." },
                    { topic: "Age", text: "あの俳優は、年齢のわりに若く見える。", eng: "For his age, that actor looks young." },
                    { topic: "Airsoft", text: "重そうな装備のわりに、彼は素早く走る。", eng: "Considering his heavy-looking equipment, he runs quickly." }
                ],
                clickingGames: [
                    { prompt: "Considering it's a famous store, the customer service was terrible.", target: "有名店であるわりには接客の態度が悪かった", words: ["有名店であるわりには", "接客の態度が", "悪かった"] },
                    { prompt: "For his small body, he eats an incredible amount.", target: "体が小さいわりに彼はものすごい量を食べる", words: ["体が小さいわりに", "彼は", "ものすごい量を食べる"] },
                    { prompt: "Considering I slept a lot, my fatigue isn't gone.", target: "たくさん寝たわりには疲れが取れていない", words: ["たくさん寝たわりには", "疲れが", "取れていない"] },
                    { prompt: "Considering he is a beginner, his aim is accurate.", target: "初心者であるわりに彼のエイムは正確だ", words: ["初心者であるわりに", "彼のエイムは", "正確だ"] },
                    { prompt: "For a winter day, it's strangely warm today.", target: "冬の日にしては今日は妙に暖かい", words: ["冬の日にしては", "今日は", "妙に暖かい"] }
                ],
                dropdownGames: [
                    { before: "値段の", options: ["わりには", "なわりには", "であるわりには"], answer: "わりには", after: "、生地が安っぽく見える。" },
                    { before: "毎日練習", options: ["しているわりには", "するのわりには", "しているのわりには"], answer: "しているわりには", after: "、全く上達しない。" },
                    { before: "この物件は、駅から", options: ["遠いわりには", "遠いのわりには", "遠くのわりには"], answer: "遠いわりには", after: "家賃が高い。" },
                    { before: "年の", options: ["わりに", "なわりに", "であるわりに"], answer: "わりに", after: "、彼はとても落ち着いている。" },
                    { before: "給料が", options: ["少ないわりには", "少ないのわりには", "少なくてわりには"], answer: "少ないわりには", after: "、仕事の責任が重すぎる。" }
                ],
                opinionQuestions: [
                    { text: "今まで行ったレストランで、「値段が高いわりには〜」とがっかりした経験はありますか？", eng: "At a restaurant you've been to, have you had a disappointing experience where 'considering the high price, it was ~'?" },
                    { text: "周りの人から、「年齢のわりには〇〇だね」と言われたことはありますか？", eng: "Have you ever been told by people around you, 'For your age, you are ~'?" },
                    { text: "「勉強（または練習）したわりには、うまくできなかった」と悔しかったことは何ですか？", eng: "What is something where you felt frustrated, thinking 'Considering I studied (or practiced), I couldn't do it well'?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Looking at a cheap projector bought online.",
            text: "<p><strong>田中:</strong> 「見てくれよ、ネットで買った1万円のプロジェクター。中国の無名メーカーなんだけどさ。」</p><p><strong>佐藤:</strong> 「1万円！？プロジェクター[BLANK1]、めちゃくちゃ安いな。画質はどうなの？」</p><p><strong>田中:</strong> 「それがさ、値段の[BLANK2]かなり綺麗に映るんだよ。もちろん4Kには負けるけど、暗い部屋なら十分だ。」</p><p><strong>佐藤:</strong> 「へえ、すごい当たりを引いたな。でも、メーカー[BLANK3]利益が出てるのか心配になるレベルだな。」</p><p><strong>田中:</strong> 「本当にな。週末はこれで映画でも見ようぜ。」</p>",
            blanks: [
                { id: "BLANK1", options: ["にしては", "にしたら", "わりに"], answer: "にしては" },
                { id: "BLANK2", options: ["わりに", "にしては", "にしたら"], answer: "わりに" },
                { id: "BLANK3", options: ["にしたら", "にしては", "わりに"], answer: "にしたら" }
            ]
        },
        story: {
            title: "Evaluating the Rookie",
            text: "<p>私たちのサバゲーチームに、先月から新しいメンバーが加わった。彼はまだ20代前半で、本物のエアガンに触るのはこれが初めてだと言っていた。しかし、いざゲームが始まると、初心者[BLANK1]見事な動きでフィールドを駆け回り、次々と相手をヒットしていった。</p><p>休憩中、彼になぜそんなに動けるのかと尋ねると、「毎日FPSゲームで立ち回りを研究しているんです」と笑って答えた。古くから実戦を重ねてきたベテラン勢[BLANK2]、「ゲームの知識だけでここまで動けるのか」と、少し悔しいような、感心するような複雑な気持ちだった。</p><p>ただ、経験が浅い[BLANK3]、彼はすぐに弾切れを起こしてしまい、後半は何もできずに隠れているだけだった。やはり、画面の中の知識と現実の体力配分は違うのだ。私たちは先輩として、彼に弾の節約とスタミナの使い方を教えることにした。</p>",
            blanks: [
                { id: "BLANK1", options: ["にしては", "にしたら", "わりに"], answer: "にしては" },
                { id: "BLANK2", options: ["にしたら", "にしては", "わりに"], answer: "にしたら" },
                { id: "BLANK3", options: ["わりに", "にしては", "にしたら"], answer: "わりに" }
            ]
        }
    }, {
        id: 16,
        title: "Lesson 16: Degree, Extent & Comparison (Part 3)",
        grammar: [
            {
                point: "~ないことには",
                english: "Unless you ~ / Until you ~",
                structure: "Verb (negative form -ない) + ことには",
                nuance: "Used to emphasize that a certain condition must be met first; otherwise, a specific action or evaluation cannot possibly happen.",
                metaphor: "It's like trying to start a car without putting the key in the ignition. Unless you do step A, step B is completely locked.",
                examples: [
                    { topic: "Business", text: "実際に商品を試してみないことには、良さは分からない。", eng: "Unless you actually try the product, you won't understand its quality." },
                    { topic: "General JLPT", text: "計画を立ててみないことには、予算が足りるかどうか判断できない。", eng: "Unless we try making a plan, we cannot judge whether the budget will be enough." },
                    { topic: "Language", text: "ネイティブと話してみないことには、会話力が伸びているか実感できない。", eng: "Unless you try talking with a native speaker, you won't feel that your conversational skills are improving." },
                    { topic: "Computers", text: "エラーログを確認しないことには、バグの原因を特定するのは難しい。", eng: "Unless we check the error logs, it is difficult to identify the cause of the bug." },
                    { topic: "Travel", text: "現地に行ってみないことには、その街の本当の魅力は分からない。", eng: "Unless you go there in person, you won't know the true charm of that city." }
                ],
                clickingGames: [
                    { prompt: "Unless you taste it, you won't know if it's delicious.", target: "食べてみないことには美味しいか分からない", words: ["食べてみないことには", "美味しいか", "分からない"] },
                    { prompt: "Unless you discuss it directly, the problem won't be solved.", target: "直接話し合ってみないことには問題は解決しない", words: ["直接話し合ってみないことには", "問題は", "解決しない"] },
                    { prompt: "Unless you open the file, you cannot check the contents.", target: "ファイルを開いてみないことには中身を確認できない", words: ["ファイルを開いてみないことには", "中身を", "確認できない"] },
                    { prompt: "Unless you listen to his opinion, you cannot make a final decision.", target: "彼の意見を聞いてみないことには最終決定を下せない", words: ["彼の意見を聞いてみないことには", "最終決定を下せない"] },
                    { prompt: "Unless you actually use it, you won't know how convenient it is.", target: "実際に使ってみないことにはその便利さは伝わらない", words: ["実際に使ってみないことには", "その便利さは伝わらない"] }
                ],
                dropdownGames: [
                    { before: "相手の立場に", options: ["立ってみないことには", "立たないことには", "立ってないことには"], answer: "立ってみないことには", after: "、本当の気持ちは理解できない。" },
                    { before: "データを見て", options: ["みないことには", "いないことには", "ないことには"], answer: "みないことには", after: "、今年の利益は予測できない。" },
                    { before: "実際にプログラミングを", options: ["やってみないことには", "やらないことには", "やってないことには"], answer: "やってみないことには", after: "、スキルは身につかない。" },
                    { before: "テストを", options: ["受けてみないことには", "受けないことには", "受けてないことには"], answer: "受けてみないことには", after: "、自分の実力は分からない。" },
                    { before: "お互いに", options: ["話してみないことには", "話さないことには", "話してないことには"], answer: "話してみないことには", after: "、誤解は解けない。" }
                ],
                opinionQuestions: [
                    { text: "「実際にやってみないことには分からない」と思う新しいチャレンジは何ですか？", eng: "What is a new challenge where you think 'Unless you actually try it, you won't know'?" },
                    { text: "外国語の勉強で、「ネイティブと話してみないことには伸びない」と感じる部分はどこですか？", eng: "In foreign language study, where do you feel that 'Unless you try talking with a native speaker, you won't improve'?" },
                    { text: "新しい製品を買う時、「実物を見てみないことには買えない」タイプですか？", eng: "When buying a new product, are you the type who 'cannot buy it unless you see the actual item'?" }
                ]
            },
            {
                point: "~っこない",
                english: "No chance of ~ / Absolutely cannot",
                structure: "Verb (stem) + っこない",
                nuance: "Strong, conversational expression used to completely dismiss the possibility of something happening. It sounds very casual and subjective.",
                metaphor: "It's like a pig trying to fly. You don't even need to test it—you know right away it's 100% impossible.",
                examples: [
                    { topic: "General JLPT", text: "こんなに難しい漢字のテストなんて、一晩で覚えっこない。", eng: "There's no chance of memorizing a difficult Kanji test like this in a single night." },
                    { topic: "Video games", text: "この最強のボスを、普通の装備で倒せるわけがない。勝っこないよ。", eng: "There's no way to beat this strongest boss with normal equipment. We stand no chance of winning." },
                    { topic: "Business", text: "締切が明日なのに、今からこの大量の書類を終わらせっこない。", eng: "Even though the deadline is tomorrow, there's no way we can finish this huge stack of documents starting now." },
                    { topic: "Dating", text: "あんなに怒っている彼女を、私一人で機嫌直させっこない。", eng: "There's no way I alone can make an angry girlfriend like that cheer up." },
                    { topic: "Money", text: "今の貯金で、そんな高級な車を買えるわけっこない。", eng: "There's no chance of buying such a luxury car with my current savings." }
                ],
                clickingGames: [
                    { prompt: "There's no chance of finishing a 1000-page book in one day.", target: "1000ページの本を1日で読み切っこない", words: ["1000ページの本を", "1日で", "読み切っこない"] },
                    { prompt: "A beginner can't possibly win against a professional player.", target: "初心者がプロの選手に勝てるっこない", words: ["初心者が", "プロの選手に", "勝てるっこない"] },
                    { prompt: "There's no chance of forgetting such an embarrassing memory.", target: "あんな恥ずかしい記憶なんて忘れっこない", words: ["あんな恥ずかしい", "記憶なんて", "忘れっこない"] },
                    { prompt: "It's impossible to carry this heavy luggage by yourself.", target: "こんな重い荷物一人で持ち上げっこない", words: ["こんな重い荷物", "一人で", "持ち上げっこない"] },
                    { prompt: "There's no chance the train will arrive on time in this heavy snow.", target: "この大雪では電車が時間通りに到着しっこない", words: ["この大雪では", "電車が時間通りに", "到着しっこない"] }
                ],
                dropdownGames: [
                    { before: "こんなに遠い距離を、歩いて", options: ["行けるっこない", "行けっこない", "行きっこない"], answer: "行けっこない", after: "よ。" },
                    { before: "プログラミングの経験ゼロで、アプリなんて", options: ["作れるっこない", "作りっこない", "作られっこない"], answer: "作れるっこない", after: "。" },
                    { before: "彼がそんな嘘をつくなんて、", options: ["信じっこない", "信じられっこない", "信じるっこない"], answer: "信じられっこない", after: "。" },
                    { before: "一人で全部の家事をやるなんて、", options: ["無理っこない", "できっこない", "終わりっこない"], answer: "できっこない", after: "。" },
                    { before: "ダイエット中なのに、甘いものを", options: ["我慢できっこない", "我慢しっこない", "我慢できなさそう"], answer: "我慢できっこない", after: "。" }
                ],
                opinionQuestions: [
                    { text: "「これだけは絶対に自分にはできっこない」と思うことは何ですか？", eng: "What is something where you think 'There is no chance I could ever do this'?" },
                    { text: "忙しい時、「今日中にこれを終わらせっこない」と諦めかけたことはありますか？", eng: "When busy, have you ever almost given up, thinking 'There's no chance of finishing this today'?" },
                    { text: "子供の頃、「大人になったら絶対できる」と思っていたけれど、今では「できっこない」と思うことは何ですか？", eng: "When you were a child, what is something you thought 'I can definitely do it when I grow up', but now think 'There's no chance'?" }
                ]
            },
            {
                point: "~きれる / ~きれない",
                english: "To do completely / Too much to finish",
                structure: "Verb (stem) + きれる / きれない",
                nuance: "'-きれる' means to complete an action to the absolute limit (exhausting it fully). '-きれない' means there is too much of something to finish, process, or consume.",
                metaphor: "Think of pouring water into a glass until it's filled precisely to the brim (-きる), or having so much water that it overflows and you can't contain it all (-きれない).",
                examples: [
                    { topic: "Food", text: "母が作った料理が多すぎて、どうしても食べきれない。", eng: "The food my mother made is too much, and I simply cannot finish eating it all." },
                    { topic: "Business", text: "この大量の仕事を、一人でやりきるのは難しい。", eng: "It's difficult to completely finish this massive amount of work all by myself." },
                    { topic: "Dating", text: "彼女への感謝の気持ちは、言葉にしきれない。", eng: "My feelings of gratitude toward her are too vast to be fully put into words." },
                    { topic: "Video games", text: "このオープンワールドゲームは、要素が多すぎて遊びきれない。", eng: "This open-world game has too many features and cannot be played completely." },
                    { topic: "General JLPT", text: "彼の説明が長すぎて、最後まで聞ききれなかった。", eng: "His explanation was too long, and I couldn't listen all the way to the end." }
                ],
                clickingGames: [
                    { prompt: "I bought too many books and can't read them all.", target: "本を買いすぎて読みきれない", words: ["本を買いすぎて", "読みきれない"] },
                    { prompt: "I ran all the way to the end of the marathon without giving up.", target: "最後まで諦めずに走りきった", words: ["最後まで", "諦めずに", "走りきった"] },
                    { prompt: "There are so many delicious dishes that I can't eat them all.", target: "美味しそうな料理が多すぎて食べきれない", words: ["美味しそうな料理が多すぎて", "食べきれない"] },
                    { prompt: "I managed to complete the difficult project successfully.", target: "困難なプロジェクトをやりきることができた", words: ["困難なプロジェクトを", "やりきることができた"] },
                    { prompt: "I have so many worries that I can't talk about them all.", target: "心配事が多すぎて話しきれない", words: ["心配事が多すぎて", "話しきれない"] }
                ],
                dropdownGames: [
                    { before: "この辞書に載っている単語をすべて", options: ["覚えきれない", "覚えきれる", "覚えせない"], answer: "覚えきれない", after: "。" },
                    { before: "彼との思い出は、語り", options: ["つくせない", "きれない", "おわらない"], answer: "きれない", after: "ほどたくさんある。" },
                    { before: "出された料理を", options: ["残さず食べきった", "残さず食べきれない", "残さず食べさせたい"], answer: "残さず食べきった", after: "。" },
                    { before: "仕事が多すぎて、定時に", options: ["終わりきれない", "終わりきった", "終わりえない"], answer: "終わりきれない", after: "。" },
                    { before: "彼の才能を信じ", options: ["ぬきった", "きった", "きれない"], answer: "きった", after: "からこそ、成功したのだ。" }
                ],
                opinionQuestions: [
                    { text: "あなたが今までにもらった（または買った）もので、「量が多すぎて使いきれなかった」ものは何ですか？", eng: "What is something you received (or bought) that had 'too much quantity to use up'?" },
                    { text: "ゲームやアニメで、「ボリュームが多すぎて遊びきれなかった」作品はありますか？", eng: "Is there a game or anime where 'there was too much volume to play through completely'?" },
                    { text: "自分の感情が溢れて、「言葉にしきれなかった」瞬間はいつですか？", eng: "When was a moment where your emotions overflowed and you 'couldn't fully express them in words'?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Talking about starting a new diet and fitness routine.",
            text: "<p><strong>田中:</strong> 「実は今月から、ジムに通ってダイエットを始めようと思うんだ。」</p><p><strong>佐藤:</strong> 「おっ、いいじゃないか！でも、お前三日坊主だから、続けられるのか？」</p><p><strong>田中:</strong> 「今回は本気だよ。ただ、仕事が忙しいから、毎日ジムに行くなんて時間的に[BLANK1]さ。」</p><p><strong>佐藤:</strong> 「だよな。無理な目標を立てると、結局やり[BLANK2]なくて挫折する原因になるしな。」</p><p><strong>田中:</strong> 「だからまずは、週末に軽く走ることから始めるよ。実際にやってみ[BLANK3]、自分に合っているか分からないからな。」</p>",
            blanks: [
                { id: "BLANK1", options: ["できっこない", "きれない", "ないことには"], answer: "できっこない" },
                { id: "BLANK2", options: ["きれ", "っこない", "ないことには"], answer: "きれ" },
                { id: "BLANK3", options: ["ないことには", "できっこない", "きれ"], answer: "ないことには" }
            ]
        },
        story: {
            title: "The Steam Game Backlog",
            text: ".<p>PCゲーマーにとって、Steamのセールは財布の紐を緩めさせる魔力を持っている。「いつか遊ぶだろう」と思って買ったインディーゲームや大作RPGが、ライブラリの奥底に眠ったままになっている人は多いはずだ。私もその一人で、積んだゲームの数はすでに遊び[BLANK1]ほどの量になっていた。</p><p>「今週末こそはこのRPGをクリアするぞ」と意気込んでパソコンを起動するものの、複雑なクエストや膨大なテキストを前にすると、圧倒されてしまう。仕事で疲れた頭では、この大ボリュームを最後までやり[BLANK2]気力が起きないのだ。</p><p>しかし、ゲームを買うこと自体が一種のコレクション的楽しさになっているのも事実である。「実際にプレイし[BLANK3]、その面白さは分からない」と頭では分かっていながらも、私はまた次のセールで新しいゲームをカートに入れてしまうのであった。</p>",
            blanks: [
                { id: "BLANK1", options: ["きれない", "っこない", "ないことには"], answer: "きれない" },
                { id: "BLANK2", options: ["きれる", "っこない", "ないことには"], answer: "きれる" },
                { id: "BLANK3", options: ["ないことには", "きれない", "っこない"], answer: "ないことには" }
            ]
        }
    },
    {
        id: 17,
        title: "Lesson 17: Example & Exemplification",
        grammar: [
            {
                point: "~例えば / ~と言えば",
                english: "For example / Speaking of ~",
                structure: "例えば + Noun / Noun + といえば",
                nuance: "Used to introduce a concrete illustration or specific representative item to make an abstract concept clear, or to pick up a keyword mentioned by someone else and expand on it.",
                metaphor: "Think of a teacher drawing a detailed picture on the chalkboard after explaining a difficult math theorem.",
                examples: [
                    { topic: "Japanese Food", text: "日本料理といえば、やはり寿司や天ぷらが一番に思い浮かぶ。", eng: "Speaking of Japanese food, sushi and tempura naturally come to mind first." },
                    { topic: "Hobbies", text: "アウトドアの趣味、例えばキャンプや釣りなどは休日をリフレッシュするのに最適だ。", eng: "Outdoor hobbies, for example, camping and fishing, are ideal for refreshing on days off." },
                    { topic: "Computers", text: "プログラミング言語といえば、PythonやJavaScriptが現在とても人気がある。", eng: "Speaking of programming languages, Python and JavaScript are currently very popular." },
                    { topic: "Travel", text: "歴史的な観光地、例えば京都や奈良には毎年多くの外国人が訪れる。", eng: "Historical tourist spots, for example, Kyoto and Nara, are visited by many foreigners every year." },
                    { topic: "Anime", text: "日本のアニメ文化といえば、世界中にファンを持つ『ドラゴンボール』や『NARUTO』が代表的だ。", eng: "Speaking of Japanese anime culture, 'Dragon Ball' and 'NARUTO', which have fans all over the world, are representative." }
                ],
                clickingGames: [
                    { prompt: "Speaking of summer fruit, watermelon is the absolute best.", target: "夏の果物といえばやっぱりスイカが最高だ", words: ["夏の果物といえば", "やっぱり", "スイカが最高だ"] },
                    { prompt: "Japanese traditional culture, for example, tea ceremony and flower arrangement, is deep.", target: "日本の伝統文化例えば茶道や華道などは奥が深い", words: ["日本の伝統文化", "例えば", "茶道や華道などは", "奥が深い"] },
                    { prompt: "Speaking of action movie stars, Tom Cruise is famous worldwide.", target: "アクション映画のスターといえばトムクルーズが世界的に有名だ", words: ["アクション映画のスターといえば", "トムクルーズが", "世界的に有名だ"] },
                    { prompt: "Winter sports, for example, skiing and snowboarding, are very popular in Hokkaido.", target: "冬のスポーツ例えばスキーやスノーボードは北海道で大人気だ", words: ["冬のスポーツ", "例えば", "スキーやスノーボードは", "北海道で大人気だ"] },
                    { prompt: "Speaking of spicy food, Mexican cuisine and Thai food come to mind.", target: "辛い食べ物といえばメキシコ料理やタイ料理が思い浮かぶ", words: ["辛い食べ物といえば", "メキシコ料理や", "タイ料理が思い浮かぶ"] }
                ],
                dropdownGames: [
                    { before: "日本の首都", options: ["といえば", "といえばの", "といえばな"], answer: "といえば", after: "、東京のことだ。" },
                    { before: "便利な家電、", options: ["例えば", "例えの", "例えな"], answer: "例えば", after: "ロボット掃除機や食洗機は共働き家庭の強い味方だ。" },
                    { before: "イタリア料理", options: ["といえば", "といえばの", "といえばな"], answer: "といえば", after: "、パスタやピザが定番だ。" },
                    { before: "激辛のスパイス、", options: ["例えば", "例えの", "例えな"], answer: "例えば", after: "ハバネロやキャロライナ・リーパーが有名だ。" },
                    { before: "趣味のカメラ", options: ["といえば", "といえばの", "といえばな"], answer: "といえば", after: "、ソニーやキヤノンが人気を集めている。" }
                ],
                opinionQuestions: [
                    { text: "あなたのお国の代表的な料理といえば、何が一番に思い浮かびますか？", eng: "Speaking of representative foods from your country, what comes to mind first?" },
                    { text: "「例えば、こんな特技がある」と自慢できるあなたのスキルは何ですか？", eng: "What is a skill you can boast about, saying 'For example, I have this special talent'?" },
                    { text: "「休日の過ごし方といえば、やっぱりこれだ」というあなたのお気に入りのルーティンはありますか？", eng: "Speaking of 'how to spend a day off, this is definitely it', do you have a favorite routine?" }
                ]
            },
            {
                point: "~など / ~なんか / ~なんて",
                english: "Things like ~ / Such as ~",
                structure: "Noun + など / なんか / なんて",
                nuance: "Used to list examples loosely, implying 'and things of this sort'. 'なんか' and 'なんて' can also express a sense of dismissal, self-deprecation, or surprise.",
                metaphor: "It's like grabbing a handful of items from a toy box and saying, 'Yeah, stuff like this and that' without needing to list every single toy.",
                examples: [
                    { topic: "Food", text: "冷蔵庫にある卵や納豆などで、簡単に夕食を済ませた。", eng: "I easily finished dinner with things like eggs and natto from the fridge." },
                    { topic: "Dating", text: "私になんて、そんな大役は務まりません。", eng: "Someone like me could never handle such a big role." },
                    { topic: "General JLPT", text: "休日はアニメを見たりゲームをしたりして過ごすことが多い。", eng: "On my days off, I often spend time doing things like watching anime and playing games." },
                    { topic: "Hobbies", text: "カメラやキャンプ用品など、アウトドアの道具は集め出すとキリがない。", eng: "Outdoor gear like cameras and camping equipment, once you start collecting them, there's no end." },
                    { topic: "Business", text: "資料のコピーやファイリングなどの雑用を任された。", eng: "I was assigned miscellaneous chores such as copying documents and filing." }
                ],
                clickingGames: [
                    { prompt: "I like fruits like apples and oranges.", target: "りんごやみかんなどの果物が好きです", words: ["りんごやみかん", "などの", "果物が好きです"] },
                    { prompt: "Someone like me can't possibly speak English fluently.", target: "僕なんかには流暢な英語なんて話せっこない", words: ["僕なんかには", "流暢な英語なんて", "話せっこない"] },
                    { prompt: "I want to try hobbies like photography or pottery.", target: "写真撮影や陶芸なんか習ってみたい", words: ["写真撮影や陶芸", "なんか", "習ってみたい"] },
                    { prompt: "Please prepare daily necessities like towels and toothbrushes.", target: "タオルや歯ブラシなどの日用品を準備してください", words: ["タオルや歯ブラシ", "などの", "日用品を準備してください"] },
                    { prompt: "Failing a small test like that is no big deal.", target: "そんな小さなテストに落ちたことなんて大したことない", words: ["そんな小さなテストに", "落ちたことなんて", "大したことない"] }
                ],
                dropdownGames: [
                    { before: "週末は映画", options: ["を見たり", "を見ていたり", "を見たりして"], answer: "を見たり", after: "本を読んだりしてリラックスする。" },
                    { before: "私", options: ["なんかには", "なんかに", "なんかで"], answer: "なんかに", "after": "、そんな大金は稼げない。" },
                    { before: "エアコンや冷蔵庫", options: ["などの", "などな", "などし"], answer: "などの", after: "家電製品が値上がりしている。" },
                    { before: "アニメ", options: ["なんて", "なんかで", "なんかに"], answer: "なんて", after: "子供が見るものだと思っていた時期があった。" },
                    { before: "ペンやノート", options: ["などの文房具", "などな文房具", "などし文房具"], answer: "などの文房具", after: "を新しく買った。" }
                ],
                opinionQuestions: [
                    { text: "あなたの部屋にある、「漫画やゲームなどのコレクション」で一番大切なものは何ですか？", eng: "What is the most important thing among your 'manga, games, and other collections' in your room?" },
                    { text: "「自分なんて…」と謙遜してしまう自分の性格や短所はありますか？", eng: "Is there a part of your personality or a flaw where you humbly think 'Someone like me…'?" },
                    { text: "休日に、「掃除や洗濯などの家事」はどのくらいまとめてやりますか？", eng: "On your days off, how much do you do chores 'such as cleaning and laundry' all at once?" }
                ]
            },
            {
                point: "~代わり (かわり)",
                english: "Representative of / Standing in for",
                structure: "Noun + の代わり / 代理",
                nuance: "Used when one thing or person takes the place of another to fulfill a role, function, or duty.",
                metaphor: "It's a substitute player running onto a soccer field to take the place of an injured teammate.",
                examples: [
                    { topic: "Business", text: "部長の代わりに、私が本日の会議で挨拶をいたします。", eng: "Standing in for the department manager, I will give a greeting at today's meeting." },
                    { topic: "Daily Life", text: "コーヒーの代わりに、今日はハーブティーを飲もう。", eng: "Instead of coffee, I'll drink herbal tea today." },
                    { topic: "Technology", text: "人間の代わりに、AIが単純作業を行う時代になった。", eng: "An era has arrived where AI performs simple tasks instead of humans." },
                    { topic: "Dating", text: "花束の代わりに、彼女が好きなチョコレートをプレゼントした。", eng: "Instead of a flower bouquet, I presented her with the chocolate she likes." },
                    { topic: "General JLPT", text: "母の代わりに、私がスーパーへ買い物に行った。", eng: "Standing in for my mother, I went shopping at the supermarket." }
                ],
                clickingGames: [
                    { prompt: "I went to the post office instead of my father.", target: "父の代わりに私が郵便局へ行った", words: ["父の代わりに", "私が", "郵便局へ行った"] },
                    { prompt: "I used my smartphone instead of a notebook to take memos.", target: "ノートの代わりにスマホでメモを取った", words: ["ノートの代わりに", "スマホで", "メモを取った"] },
                    { prompt: "A robot cleaned the room instead of me.", target: "私の代わりにロボットが部屋を掃除してくれた", words: ["私の代わりに", "ロボットが", "部屋を掃除してくれた"] },
                    { prompt: "I ate a sandwich instead of lunch today.", target: "今日の昼ご飯の代わりにサンドイッチを食べた", words: ["今日の昼ご飯の代わりに", "サンドイッチを", "食べた"] },
                    { prompt: "Cash can be used instead of a credit card.", target: "クレジットカードの代わりに現金も使える", words: ["クレジットカードの代わりに", "現金も使える"] }
                ],
                dropdownGames: [
                    { before: "先輩の", options: ["代わりに", "代わりが", "代わりの"], answer: "代わりに", after: "、私がその仕事を処理した。" },
                    { before: "紙のノートの", options: ["代わりに", "代わりが", "代わりの"], answer: "代わりに", after: "タブレットを使う人が増えている。" },
                    { before: "現金で払う", options: ["代わりに", "代わりが", "代わりの"], answer: "代わりに", after: "電子マネーで決済した。" },
                    { before: "肉の", options: ["代わりに", "代わりが", "代わりの"], answer: "代わりに", after: "大豆ミートを使ったカレーを作った。" },
                    { before: "本物の植物の", options: ["代わりに", "代わりが", "代わりの"], answer: "代わりに", after: "部屋に造花を飾っている。" }
                ],
                opinionQuestions: [
                    { text: "もし自分の「代わり」をしてくれるロボットがいたら、どんな仕事を任せたいですか？", eng: "If you had a robot to 'stand in for' you, what kind of work would you want to assign to it?" },
                    { text: "「これの代わりに、いつもこれを使っている」というお気に入りの代用品はありますか？", eng: "Is there a favorite substitute where you think 'Instead of this, I always use that'?" },
                    { text: "仕事で誰かの「代わりに」ピンチヒッターを務めた経験はありますか？", eng: "Have you ever served as a pinch hitter 'standing in for' someone at work?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Talking about modern household appliances and cooking.",
            text: "<p><strong>田中:</strong> 「最近、うちの妻が食洗機を買ってくれたんだけど、これがめちゃくちゃ便利なんだよ。」</p><p><strong>佐藤:</strong> 「おっ、ロボット掃除機[BLANK1]、今の家電は本当に進化してるよな。」</p><p><strong>田中:</strong> 「本当にな。夕食のあと、皿洗いの[BLANK2]ボタン一つで全部やってくれるから、自分の時間が増えたよ。」</p><p><strong>佐藤:</strong> 「うらやましいな。料理[BLANK3]、俺もたまには自分で作って家族を驚かせてみようかな。」</p>",
            blanks: [
                { id: "BLANK1", options: ["など", "といえば", "代わりに"], answer: "など" },
                { id: "BLANK2", options: ["代わりに", "など", "といえば"], answer: "代わりに" },
                { id: "BLANK3", options: ["といえば", "など", "代わりに"], answer: "といえば" }
            ]
        },
        story: {
            title: "The Weekend Recipe",
            text: "<p>休日の楽しみといえば、やっぱり時間をかけて凝った料理を作ることだ。特にスパイスから本格的なカレーを作る時は、普段のストレスを発散する最高の時間になる。タマネギをあめ色になるまで炒め、ハバネロやハラペーニョ[BLANK1]の激辛唐辛子を隠し味に加えるのが私のこだわりだ。</p><p>以前は、市販のカレールーを手抜き[BLANK2]使っていたが、一度スパイスの魅力にハマってからは、もう元には戻れなくなった。肉の[BLANK3]シーフードを使ってみたり、隠し味にチョコレートを入れてみたりと、自分なりのアレンジを試すのが最高に面白い。</p><p>家族や友人たちは、私が作った激辛カレーを食べると「美味しいけれど辛すぎる！」と汗を流しながらも完食してくれる。その笑顔を見るたびに、また次の週末もキッチンに立とうと心に誓うのであった。</p>",
            blanks: [
                { id: "BLANK1", options: ["など", "といえば", "代わりに"], answer: "など" },
                { id: "BLANK2", options: ["代わりに", "など", "といえば"], answer: "代わりに" },
                { id: "BLANK3", options: ["代わりに", "など", "といえば"], answer: "代わりに" }
            ]
        }
    }, {
        id: 18,
        title: "Lesson 18: Trend, Tendency & Habit",
        grammar: [
            {
                point: "~がちだ / ~がちに",
                english: "Tend to / Frequently (usually negative/undesirable)",
                structure: "Verb (stem) / Noun + がちだ / がちに",
                nuance: "Expresses a regular tendency or frequency of doing something, almost always used for bad, lazy, or undesirable habits.",
                metaphor: "It's like a ball resting on a slanted hill: it naturally tends to roll down toward trouble without any effort.",
                examples: [
                    { topic: "Health", text: "忙しくなると、睡眠不足になりがちだ。", eng: "When things get busy, I tend to not get enough sleep." },
                    { topic: "Weather", text: "梅雨の時期は、雨が続きがちだ。", eng: "During the rainy season, it tends to keep raining." },
                    { topic: "Work", text: "一人で仕事をしていると、自分の意見にこだわりがちになる。", eng: "When working alone, you tend to become overly fixated on your own opinions." },
                    { topic: "Daily Life", text: "冬は寒くて、家に引きこもりがちだ。", eng: "Winter is cold, so I tend to shut myself inside the house." },
                    { topic: "Study", text: "基礎がおろそかになりがちなので、注意が必要だ。", eng: "The basics tend to get neglected, so caution is required." }
                ],
                clickingGames: [
                    { prompt: "When tired, people tend to make mistakes.", target: "疲れている時はミスをしがちだ", words: ["疲れている時は", "ミスを", "しがちだ"] },
                    { prompt: "During long holidays, people tend to wake up late.", target: "長い休みの時は朝寝坊しがちになる", words: ["長い休みの時は", "朝寝坊しがちになる"] },
                    { prompt: "Beginners tend to panic in airsoft matches.", target: "初心者はサバゲーの試合で焦りがちだ", words: ["初心者は", "サバゲーの試合で", "焦りがちだ"] },
                    { prompt: "When busy, people tend to skip breakfast.", target: "忙しいと朝食を抜かしがちだ", words: ["忙しいと", "朝食を", "抜かしがちだ"] },
                    { prompt: "Without clear communication, misunderstandings tend to happen.", target: "コミュニケーションが不足すると誤解が生じがちだ", words: ["コミュニケーションが不足すると", "誤解が生じがちだ"] }
                ],
                dropdownGames: [
                    { before: "最近、運動不足に", options: ["なりがちだ", "なるがちだ", "なってがちだ"], answer: "なりがちだ", after: "から、週末は走ろう。" },
                    { before: "冬は", options: ["風邪を引きがちだ", "風邪を引くがちだ", "風邪を引いてがちだ"], answer: "風邪を引きがちだ", after: "なので気をつけましょう。" },
                    { before: "一人暮らしだと、野菜が", options: ["不足しがちになる", "不足するがちになる", "不足してがちになる"], answer: "不足しがちになる", after: "。" },
                    { before: "若い頃は、感情的になって", options: ["失敗しがちだ", "失敗するがちだ", "失敗してがちだ"], answer: "失敗しがちだ", after: "。" },
                    { before: "仕事に夢中になると、休憩を", options: ["忘れがちだ", "忘れるがちだ", "忘れてがちだ"], answer: "忘れがちだ", after: "。" }
                ],
                opinionQuestions: [
                    { text: "あなたが「忙しくなると、ついやってしまいがちだな」と思う悪い習慣は何ですか？", eng: "What is a bad habit you tend to do when you get busy?" },
                    { text: "一人暮らしの人が「陥りがち（なりがち）な問題」は何だと思いますか？", eng: "What do you think is a problem single people tend to fall into?" },
                    { text: "健康のために「忘れがちだけど、本当に大切なこと」は何ですか？", eng: "What is something that is 'easy to forget for health, but truly important'?" }
                ]
            },
            {
                point: "~つつある",
                english: "Is in the process of ~ / Continuing to change",
                structure: "Verb (stem) + つつある",
                nuance: "Indicates that a gradual, progressive change is currently happening right now. It sounds formal and objective.",
                metaphor: "It's like watching a time-lapse video of a plant sprouting, growing leaves, and stretching upward. The shift is actively underway.",
                examples: [
                    { topic: "Technology", text: "私たちの生活スタイルは、デジタル化に伴って変化しつつある。", eng: "Our lifestyle is in the process of changing along with digitization." },
                    { topic: "Economy", text: "長い不況から、日本の経済は回復しつつある。", eng: "The Japanese economy is in the process of recovering from a long recession." },
                    { topic: "Society", text: "人々の価値観は、多様性を重視する方向へ変わりつつある。", eng: "People's values are changing toward placing importance on diversity." },
                    { topic: "Environment", text: "地球温暖化の影響で、世界の気候が変わりつつある。", eng: "Due to global warming, the world's climate is in the process of changing." },
                    { topic: "General JLPT", text: "絶滅危惧種の数が、少しずつ減りつつある。", eng: "The number of endangered species is gradually decreasing." }
                ],
                clickingGames: [
                    { prompt: "Public awareness of environmental issues is rising.", target: "環境問題に対する人々の意識が高まりつつある", words: ["環境問題に対する", "人々の意識が", "高まりつつある"] },
                    { prompt: "Traditional culture is disappearing in modern society.", target: "現代社会において伝統文化が失われつつある", words: ["現代社会において", "伝統文化が", "失われつつある"] },
                    { prompt: "The new project is finally starting to move forward.", target: "新しいプロジェクトがようやく動き出しつつある", words: ["新しいプロジェクトが", "ようやく", "動き出しつつある"] },
                    { prompt: "The trust between the two countries is recovering.", target: "両国間の信頼関係が回復しつつある", words: ["両国間の", "信頼関係が", "回復しつつある"] },
                    { prompt: "The cold winter is finally turning into spring.", target: "厳しい寒さがようやく春へと変わりつつある", words: ["厳しい寒さが", "ようやく", "春へと変わりつつある"] }
                ],
                dropdownGames: [
                    { before: "失われた技術が、最新の科学で", options: ["復活しつつある", "復活するつつある", "復活したつつある"], answer: "復活しつつある", after: "。" },
                    { before: "AIの進化によって、仕事のあり方が", options: ["変わりつつある", "変わるつつある", "変わったつつある"], answer: "変わりつつある", after: "。" },
                    { before: "絶滅寸前だった動物の数が、", options: ["増えつつある", "増えるつつある", "増えたつつある"], answer: "増えつつある", after: "。" },
                    { before: "世の中の景気が、徐々に", options: ["改善しつつある", "改善するつつある", "改善したつつある"], answer: "改善しつつある", after: "。" },
                    { before: "人々のライフスタイルが", options: ["多様化しつつある", "多様化するつつある", "多様化したつつある"], answer: "多様化しつつある", after: "。" }
                ],
                opinionQuestions: [
                    { text: "ここ数年で、あなたの周りの「世の中のトレンド」はどのように変わりつつありますか？", eng: "In the last few years, how are the 'trends in society' around you changing?" },
                    { text: "テクノロジーの進化によって、私たちの未来の仕事はどのように変わりつつあると思いますか？", eng: "How do you think our future work is changing due to the evolution of technology?" },
                    { text: "あなた自身の中で、「昔とは考え方が変わりつつあるな」と感じる部分はありますか？", eng: "Within yourself, is there a part where you feel 'my way of thinking is changing compared to the past'?" }
                ]
            },
            {
                point: "~ものだ",
                english: "Naturally, people do ~ / Expressing general truths or nostalgic memories",
                structure: "Verb / Adj (Plain form) + ものだ",
                nuance: "Used to express a general universal truth, moral rule ('that's how things are supposed to be'), or deep nostalgia about the past ('ah, those were the days').",
                metaphor: "It's like pointing out the laws of nature or a universal human experience. 'Water flows downhill, and humans naturally cherish their childhood memories.'",
                examples: [
                    { topic: "General JLPT", text: "子供の頃は、よく外で走り回ったものだ。", eng: "When I was a child, I used to often run around outside (ah, good memories)." },
                    { topic: "Business", text: "社会人なら、挨拶や礼儀はきちんと守るものだ。", eng: "If you're a working adult, you are naturally expected to properly keep greetings and manners." },
                    { topic: "Life", text: "人生、山あり谷ありで、苦しい時もあれば楽しい時もあるものだ。", eng: "Life has ups and downs; there are painful times and fun times (that's just how life is)." },
                    { topic: "Dating", text: "遠距離恋愛は、お互いの信頼が何よりも大切なものだ。", eng: "In a long-distance relationship, mutual trust is fundamentally the most important thing." },
                    { topic: "General JLPT", text: "初心を忘れないというのは、口で言うほど簡単なものではない。", eng: "Not forgetting one's original intention is not as easy as saying it with words." }
                ],
                clickingGames: [
                    { prompt: "Time flies so fast when you get older.", target: "歳を取ると時間が経つのが早いものだ", words: ["歳を取ると", "時間が経つの手が早い", "ものだ"] },
                    { prompt: "People naturally want to return to their hometowns.", target: "人間は誰しも故郷が恋しくなるものだ", words: ["人間は誰しも", "故郷が恋しくなる", "ものだ"] },
                    { prompt: "Studying a foreign language takes patience.", target: "外国語の習得には時間がかかるものだ", words: ["外国語の習得には", "時間がかかる", "ものだ"] },
                    { prompt: "When I was young, I used to play video games all night.", target: "若い頃はよく徹夜でゲームをしたものだ", words: ["若い頃はよく", "徹夜でゲームをした", "ものだ"] },
                    { prompt: "A true friend is someone who helps you in trouble.", target: "本当の友とは困った時に助け合うものだ", words: ["本当の友とは", "困った時に助け合う", "ものだ"] },
                ],
                dropdownGames: [
                    { before: "子供は", options: ["よく遊ぶものだ", "よく遊ぶのだった", "よく遊ぶだった"], answer: "よく遊ぶものだ", after: "、それが健全な成長だ。" },
                    { before: "昔は、よくこの川で", options: ["泳いだものだ", "泳いだのだった", "泳ぐものだ"], answer: "泳いだものだ", after: "。" },
                    { before: "苦しい時こそ、", options: ["笑顔を忘れないものだ", "笑顔を忘れないのだった", "笑顔を忘れないだ"], answer: "笑顔を忘れないものだ", after: "。" },
                    { before: "他人の", options: ["優しさは身に染みるものだ", "優しさは身に染みるのだった", "優しさは身に染みるだ"], answer: "優しさは身に染みるものだ", after: "。" },
                    { before: "人生は、", options: ["思い通りにいかないものだ", "思い通りにいかないのだった", "思い通りにいかないだ"], answer: "思い通りにいかないものだ", after: "。" }
                ],
                opinionQuestions: [
                    { text: "あなたが子供の頃に「よくやったな」と懐かしく思い出す思い出は何ですか？", eng: "What is a memory from your childhood that you fondly remember doing?" },
                    { text: "「人間とはこういうものだ」とあなたが人生経験から学んだことは何ですか？", eng: "What have you learned from life experience about 'how humans naturally are'?" },
                    { text: "「社会人ならこうあるべきだ」というあなたなりの信念は何ですか？", eng: "What is your personal belief about 'how a working adult should be'?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Discussing how life and tech have changed over the decades.",
            text: "<p><strong>田中:</strong> 「最近、昔に比べてなんだか時間が経つのがあっという間に感じるよ。」</p><p><strong>佐藤:</strong> 「分かるよ。歳を取ると、一年が過ぎ去るのが本当に早い[BLANK1]。」</p><p><strong>田中:</strong> 「若い頃は、新しいゲーム機が出るたびにワクワクしたものだけど、最近は技術の進化も早すぎて、ついていくのがやっと[BLANK2]。」</p><p><strong>佐藤:</strong> 「でも、世の中が便利になり[BLANK3]、その分人間関係がドライになってる気もするけどな。」</p><p><strong>田中:</strong> 「確かに、一長一短ってやつだな。」</p>",
            blanks: [
                { id: "BLANK1", options: ["ものだ", "がちだ", "つつある"], answer: "ものだ" },
                { id: "BLANK2", options: ["つつある", "ものだ", "がちだ"], answer: "つつある" },
                { id: "BLANK3", options: ["がちだ", "ものだ", "つつある"], answer: "がちだ" }
            ]
        },
        story: {
            title: "Reflecting on the Past",
            text: "<p>週末の夜、私は昔のアルバムや、学生時代に集めた音楽CDを整理していた。昔は、お気に入りのアルバムを手に入れるためにわざわざタワーレコードまで足を運んだ[BLANK1]。今ではスマホ一つで何百万曲も聴ける時代になったが、あの頃のワクワク感は特別だった。</p><p>時代の流れとともに、私たちのライフスタイルや娯楽の形は大きく変わり[BLANK2]。レコードからCDへ、CDからデジタル配信へと、音楽の聴き方は常に進化し続けている。</p><p>便利になるのは素晴らしいことだが、忙しさに追われるあまり、私たちは大切な何かを忘れ[BLANK3]。たまにはスマホの電源を切り、ゆっくりとコーヒーを飲みながら音楽に浸る時間も、大人には必要なのかもしれない。</p>",
            blanks: [
                { id: "BLANK1", options: ["ものだ", "つつある", "がちだ"], answer: "ものだ" },
                { id: "BLANK2", options: ["つつある", "ものだ", "がちだ"], answer: "つつある" },
                { id: "BLANK3", options: ["がちだ", "ものだ", "つつある"], answer: "がちだ" }
            ]
        }
    },
    {
        id: 19,
        title: "Lesson 19: Evaluation, Judgment & Standard",
        grammar: [
            {
                point: "~ものだから / ~もの",
                english: "Because (excuse/reason)",
                structure: "Verb / Adj (Plain form) + ものだから / もの",
                nuance: "Used to give a personal, subjective reason or excuse, often carrying a slightly childish, emotional, or defensive nuance. '~もの' is conversational and often used by women or children.",
                metaphor: "It's like a child caught with their hand in the cookie jar saying, 'Well, *because* it looked so delicious!' It's an earnest, emotional justification.",
                examples: [
                    { topic: "Daily Life", text: "遅くなってすみません。途中で大渋滞に巻き込まれたものですから。", eng: "I'm sorry I'm late. It's because I got caught in a massive traffic jam on the way." },
                    { topic: "Shopping", text: "つい欲しくなって買ってしまった。だって、セール中だったんだもの。", eng: "I ended up wanting it and bought it. Because it was during a sale!" },
                    { topic: "Work", text: "言い訳をするわけではありませんが、資料の数が多すぎたものですから。", eng: "Not that I'm making excuses, but it's because there were too many documents." },
                    { topic: "Health", text: "昨日の夜は眠れなかったものですから、今日は少し体調が悪いのです。", eng: "Because I couldn't sleep last night, I'm feeling a bit unwell today." },
                    { topic: "Dating", text: "連絡できなくてごめんね。スマホのバッテリーが切れていたものだから。", eng: "Sorry I couldn't contact you. It's because my smartphone battery died." }
                ],
                clickingGames: [
                    { prompt: "I'm sorry for shouting. Because I was really angry.", target: "大声を出してごめんなさい本当に怒っていたものですから", words: ["大声を出してごめんなさい", "本当に", "怒っていたものですから"] },
                    { prompt: "I failed the test. Because the questions were too difficult.", target: "テストに落ちてしまっただってもう問題が難しかったんだもの", words: ["テストに落ちてしまった", "だってもう", "問題が難しかったんだもの"] },
                    { prompt: "I'm late because I overslept.", target: "寝坊してしまったんです昨夜遅くまで起きいていたものですから", words: ["寝坊してしまったんです", "昨夜遅くまで", "起きいていたものですから"] },
                    { prompt: "I couldn't eat it all. Because the portion was too big.", target: "全部食べられなかっただって量が多すぎたんだもの", words: ["全部食べられなかった", "だって量が", "多すぎたんだもの"] },
                    { prompt: "I forgot my wallet because I was in a rush.", target: "慌てていたものですから財布を忘れてしまいました", words: ["慌てていたものですから", "財布を", "忘れてしまいました"] }
                ],
                dropdownGames: [
                    { before: "道に", options: ["迷ってしまったものですから", "迷ってしまうものですから", "迷ったのものですから"], answer: "迷ってしまったものですから", after: "、約束の時間に遅れた。" },
                    { before: "初めての", options: ["ことだったものですから", "ことであるものですから", "ことなものですから"], answer: "ことだったものですから", after: "、緊張してしまった。" },
                    { before: "欲しかったんだ", options: ["もの", "こと", "の"], answer: "もの", after: "、買ってもいいでしょう？" },
                    { before: "知らなかった", options: ["ものですから", "ことですから", "のですから"], answer: "ものですから", after: "、失礼なことを言ってすみません。" },
                    { before: "子供だったん", options: ["だもの", "ものだ", "ことだ"], answer: "だもの", after: "、許してほしい。" }
                ],
                opinionQuestions: [
                    { text: "遅刻や失敗をした時、「〜ものですから」と使ってしまいがちな言い訳は何ですか？", eng: "When you are late or make a mistake, what is an excuse you tend to use with 'It's because ~'?" },
                    { text: "誰かに買い物を咎められた時、「だって欲しかったんだもの！」と子供のように反論したことはありますか？", eng: "When someone reproaches you for shopping, have you ever argued like a child, saying 'Because I wanted it!'?" },
                    { text: "仕事でミスをした時、素直に謝りますか？それとも理由を説明しますか？", eng: "When you make a mistake at work, do you apologize honestly, or explain the reason?" }
                ]
            },
            {
                point: "~ものなら",
                english: "If one can (do something impossible or extreme)",
                structure: "Verb (potential form / dictionary) + ものなら",
                nuance: "Used to express a hypothetical condition that is normally very difficult, dangerous, or nearly impossible. If that condition *were* met, it would lead to an extreme action or result.",
                metaphor: "It's like saying, 'If you *actually* manage to climb Mount Everest in a pair of flip-flops, I'll buy you a mansion.'",
                examples: [
                    { topic: "Health", text: "戻れるものなら、学生時代に戻って人生をやり直したい。", eng: "If I could go back (though I know I can't), I'd want to return to my student days and redo my life." },
                    { topic: "Video games", text: "やれるものならやってみなさい。このボスは絶対に倒せないから。", eng: "Try it if you think you can! Because this boss is definitely unbeatable." },
                    { topic: "Travel", text: "今すぐ行けるものなら、ハワイのビーチででのんびりしたい。", eng: "If I could go right now, I'd want to relax on a beach in Hawaii." },
                    { topic: "Work", text: "定時に帰れるものなら、毎日でも早く帰りたいよ。", eng: "If I could leave work on time, I'd want to go home early every single day." },
                    { topic: "Dating", text: "許されるものなら、もう一度彼女にちゃんと謝りたい。", eng: "If it were allowed, I'd want to properly apologize to her one more time." }
                ],
                clickingGames: [
                    { prompt: "If I could fly in the sky, I'd go anywhere.", target: "空が飛べるものならどこへでも行きたい", words: ["空が飛べるものなら", "どこへでも", "行きたい"] },
                    { prompt: "If you can catch me, try your best.", target: "私を捕まえられるものなら捕まえてみろ", words: ["私を", "捕まえられるものなら", "捕まえてみろ"] },
                    { prompt: "If I could erase this embarrassing memory, I'd pay any price.", target: "この恥ずかしい記憶が消せるものならいくらでも払う", words: ["この恥ずかしい記憶が", "消せるものなら", "いくらでも払う"] },
                    { prompt: "If I could sleep all day, I would do it.", target: "一日中眠れるものならそうしたいよ", words: ["一日中", "眠れるものなら", "そうしたいよ"] },
                    { prompt: "If I could turn back time, I would fix that mistake.", target: "時間を巻き戻せるものならあの間違いを直したい", words: ["時間を巻き戻せるものなら", "あの間違いを直したい"] }
                ],
                dropdownGames: [
                    { before: "諦められる", options: ["ものなら", "ことなら", "のなら"], answer: "ものなら", after: "、今すぐすべてを投げ出したい。" },
                    { before: "宇宙旅行に", options: ["行けるものなら", "行くものなら", "行けるのなら"], answer: "行けるものなら", after: "、一度は行ってみたい。" },
                    { before: "彼の心を", options: ["変えられるものなら", "変えるものなら", "変えられるのなら"], answer: "変えられるものなら", after: "、どれだけ楽か。" },
                    { before: "若い頃に", options: ["戻れるものなら", "戻るものなら", "戻れるのなら"], answer: "戻れるものなら", after: "、もっと勉強しておきたかった。" },
                    { before: "許される", options: ["ものなら", "ことなら", "のなら"], answer: "ものなら", after: "、会社を休んで旅行に行きたい。" },
                ],
                opinionQuestions: [
                    { text: "「タイムマシンがあるなら、過去のいつに戻りたいですか？」と聞かれたらどう答えますか？", eng: "If asked, 'If there were a time machine, when in the past would you want to return to?', how would you answer?" },
                    { text: "「今すぐできるものなら、絶対にやりたいこと」は何ですか？", eng: "What is something you would 'definitely want to do if you could right now'?" },
                    { text: "ゲームやスポーツで、強敵に向かって「やれるものならやってみな！」と挑発したことはありますか？", eng: "Have you ever provoked a strong opponent in a game or sport, saying 'Try it if you can!'?" }
                ]
            },
            {
                point: "~ものだから / ~ものだからさ",
                english: "Because (objective explanation of a natural circumstance)",
                structure: "Noun / Verb / Adj (Plain form) + ものだから",
                nuance: "Very similar to '~もので', used to give a reason, but often highlights an unavoidable circumstance, external pressure, or natural reaction. It has a slightly softer, explaining tone.",
                metaphor: "It's opening your hands and showing your empty palms to say, 'Look, I didn't want this to happen, but circumstances forced my hand.'",
                examples: [
                    { topic: "General JLPT", text: "電車の切符を無くしてしまったものですから、駅員室で説明に時間がかかりました。", eng: "Because I lost my train ticket, it took time to explain things at the station office." },
                    { topic: "Business", text: "初めての大きなプレゼンだったものですから、緊張して声が震えてしまいました。", eng: "Because it was my first big presentation, I was nervous and my voice shook." },
                    { topic: "Weather", text: "急に大雨が降ってきたものですから、服がすっかり濡れてしまいました。", eng: "Because heavy rain suddenly started pouring down, my clothes got completely soaked." },
                    { topic: "Dating", text: "彼女へのサプライズを隠していたものですから、嘘をついてしまいました。", eng: "Because I was hiding a surprise for my girlfriend, I ended up telling a lie." },
                    { topic: "Computers", text: "新しいPCの設定に夢中になっていたものですから、時間をすっかり忘れていました。", eng: "Because I was so absorbed in setting up my new PC, I completely lost track of time." }
                ],
                clickingGames: [
                    { prompt: "Because I was busy with moving, I couldn't contact you.", target: "引っ越しで忙しかったものですから連絡できませんでした", words: ["引っ越しで", "忙しかったものですから", "連絡できませんでした"] },
                    { prompt: "Because the road was unfamiliar, I took a wrong turn.", target: "道に慣れていなかったものですから違う曲がり角に入った", words: ["道に慣れていなかったものですから", "違う曲がり角に入った"] },
                    { prompt: "Because I was deeply asleep, I didn't notice the phone call.", target: "ぐっすり眠っていたものですから電話に気づかなかった", words: ["ぐっすり眠っていたものですから", "電話に気づかなかった"] },
                    { prompt: "Because I didn't know the custom, I made a rude mistake.", target: "習慣を知らなかったものですから失礼なミスをしてしまった", words: ["習慣を知らなかったものですから", "失礼なミスをしてしまった"] },
                    { prompt: "Because I was so excited, I bought too many things.", target: "テンションが上がっていたものですから買いすぎてしまった", words: ["テンションが", "上がっていたものですから", "買いすぎてしまった"] }
                ],
                dropdownGames: [
                    { before: "子供が生まれた", options: ["ものですから", "ものだから", "ものですから"], answer: "ものですから", after: "、最近は夜なかなか眠れません。" },
                    { before: "あまりに美味しかった", options: ["ものですから", "もので", "ものだから"], answer: "ものですから", after: "、全部食べてしまいました。" },
                    { before: "日本語の敬語が難しかった", options: ["ものですから", "もので", "ものだから"], answer: "ものですから", after: "、失礼があったらすみません。" },
                    { before: "急用ができた", options: ["ものですから", "もので", "ものだから"], answer: "ものですから", after: "、今日の会議を欠席させてください。" },
                    { before: "視力が悪かった", options: ["ものですから", "もので", "ものだから"], answer: "ものですから", after: "、黒板の文字が見えませんでした。" }
                ],
                opinionQuestions: [
                    { text: "「うっかりミスをしてしまった時」、どんな自然な状況（〜ものですから）を理由に説明しますか？", eng: "When you make a careless mistake, what natural circumstance do you use as an explanation?" },
                    { text: "あまりの嬉しさや驚きで、思わずやってしまった行動を「〜ものですから」を使って説明してください。", eng: "Explain an action you instinctively did out of sheer joy or surprise using 'Because ~'." },
                    { text: "人に謝罪する時、誠意を伝えるためにどんな表現を心がけていますか？", eng: "When apologizing to people, what expressions do you keep in mind to convey sincerity?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Talking about work excuses and daydreaming about freedom.",
            text: "<p><strong>田中:</strong> 「昨日、会議に遅刻しちゃってさ。電車が止まっていた[BLANK1]って上司に言い訳したんだけど、怒られちゃったよ。」</p><p><strong>佐藤:</strong> 「そりゃお前、もっと早く家を出ないからだろ。行ける[BLANK2]、今すぐ会社を辞めて南の島で暮らしたいよな。」</p><p><strong>田中:</strong> 「本当にな。若い頃に戻れる[BLANK3]、もっと違う人生を選んでいたかもな。」</p><p><strong>佐藤:</strong> 「まあ、今からでも遅くないんじゃないか？…なんてな、お互い仕事に戻るとするか。」</p>",
            blanks: [
                { id: "BLANK1", options: ["ものだから", "ものなら", "もの"], answer: "ものだから" },
                { id: "BLANK2", options: ["ものなら", "もの", "ものだから"], answer: "ものなら" },
                { id: "BLANK3", options: ["ものなら", "ものだ", "ものだから"], answer: "ものなら" }
            ]
        },
        story: {
            title: "The Late Night Online Shopping Regret",
            text: "<p>夜中の2時、仕事のストレスと寝不足が重なり、私はパソコンの前でネットサーフィンをしていた。限定版の高級ヘッドホンがセールになっているのを見つけ、「欲しかった[BLANK1]、今買わないと売り切れてしまう」という衝動に駆られて、つい購入ボタンを押してしまった。</p><p>翌朝、冷静になって銀行口座の残高を確認すると、冷や汗が出てきた。「あの時、買わなければよかった」と激しく後悔したが、時すでに遅しである。手に入り[BLANK2]、あの限定モデルを手に入れた喜び自体は本物なのだから、自分を慰めるしかなかった。</p><p>届いた荷物を開けながら、妻には「仕事のモチベーションを上げるために買った[BLANK3]」と恥ずかしそうに言い訳をした。大人になっても、夜中のネットショッピングの誘惑にはなかなか勝てないものである。</p>",
            blanks: [
                { id: "BLANK1", options: ["ものだから", "ものなら", "もの"], answer: "もの" },
                { id: "BLANK2", options: ["ものなら", "もの", "ものだから"], answer: "ものなら" },
                { id: "BLANK3", options: ["ものだから", "ものなら", "もの"], answer: "ものだから" }
            ]
        }
    }
];