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
    }, {
        id: 20,
        title: "Lesson 20: Hypothesis, Condition & Supposition",
        grammar: [
            {
                point: "~としたら / とすれば / とすると",
                english: "Assuming that ~ / If it were the case that ~",
                structure: "Plain form + としたら / とすれば / とすると",
                nuance: "Used to set up a hypothetical situation or premise and then think about what the consequence, conclusion, or action would be based on that assumption.",
                metaphor: "It's like pressing 'pause' in a video game, changing one variable in the settings menu, and asking, 'If we change this rule, how will the rest of the game play out?'",
                examples: [
                    { topic: "Business", text: "もし明日から海外転勤になるとしたら、君は行くかい？", eng: "Assuming you were to be transferred overseas starting tomorrow, would you go?" },
                    { topic: "Travel", text: "今週末の天気予報が雨だとしたら、キャンプの計画は中止すべきだ。", eng: "Assuming this weekend's weather forecast is rain, we should cancel the camping plans." },
                    { topic: "Computers", text: "バックアップデータが消えていたとすれば、復旧には何時間もかかるだろう。", eng: "Assuming the backup data has vanished, recovery would likely take many hours." },
                    { topic: "Money", text: "宝くじで1億円当たったとすると、何に使いますか？", eng: "Assuming you won 100 million yen in the lottery, what would you use it for?" },
                    { topic: "General JLPT", text: "彼の言うことが本当だとしたら、事態は非常に深刻だ。", eng: "Assuming what he says is true, the situation is extremely serious." }
                ],
                clickingGames: [
                    { prompt: "Assuming you can choose any job, what would you want to do?", target: "もし好きな仕事を選べるとしたら何がしたいですか", words: ["もし好きな仕事を選べるとしたら", "何が", "したいですか"] },
                    { prompt: "Assuming the flight is delayed, we will miss our connection.", target: "もし飛行機が遅れるとしたら乗り継ぎに間に合わない", words: ["もし飛行機が遅れるとしたら", "乗り継ぎに", "間に合わない"] },
                    { prompt: "Assuming he rejects our offer, what's our plan B?", target: "彼が私たちの提案を断るとすれば次の作戦は何だ", words: ["彼が私たちの提案を断るとすれば", "次の作戦は何だ"] },
                    { prompt: "Assuming AI takes over all jobs, humans will have more free time.", target: "AIがすべての仕事を引き受けるとすると人間は自由時間が増える", words: ["AIがすべての仕事を引き受けるとすると", "人間は", "自由時間が増える"] },
                    { prompt: "Assuming we miss the last train, let's take a taxi.", target: "もし終電に乗り遅れたとしたらタクシーで行こう", words: ["もし終電に乗り遅れたとしたら", "タクシーで", "行こう"] }
                ],
                dropdownGames: [
                    { before: "もし宇宙旅行に行ける", options: ["としたら", "とするの", "としての"], answer: "としたら", after: "、一番最初に見たいのは地球だ。" },
                    { before: "その噂が本当だ", options: ["とすれば", "とするとの", "としての"], answer: "とすれば", after: "、大変なスキャンダルになる。" },
                    { before: "彼の計画に反対する", options: ["とすると", "としたらの", "としての"], answer: "とすると", after: "、代わりの案を出さなければならない。" },
                    { before: "もしタイムマシンが発明された", options: ["としたら", "とするの", "としての"], answer: "としたら", after: "、いつの時代に行ってみたい？" },
                    { before: "予算が半分になる", options: ["とすれば", "とするの", "としての"], answer: "とすれば", after: "、このプロジェクトは縮小せざるを得ない。" }
                ],
                opinionQuestions: [
                    { text: "「もし明日から1年間、仕事や学校を休んで自由に使えるとしたら」、何にその時間を使いますか？", eng: "Assuming you could take a year off from work or school starting tomorrow to use freely, what would you spend that time on?" },
                    { text: "「もし過去の自分に一言だけアドバイスできるとしたら」、なんて声をかけますか？", eng: "Assuming you could give just one piece of advice to your past self, what would you say?" },
                    { text: "「もし宝くじで大金が当たったとしたら」、最初に誰にそれを伝えますか？", eng: "Assuming you won a huge amount of money in the lottery, who is the very first person you would tell?" }
                ]
            },
            {
                point: "~ものなら",
                english: "If one can (do something impossible or extreme)",
                structure: "Verb (potential form) + ものなら",
                nuance: "Used to express a hypothetical condition that is normally very difficult, dangerous, or nearly impossible. If that condition *were* met, it would lead to an extreme action or result.",
                metaphor: "It's like saying, 'If you *actually* manage to climb Mount Everest in a pair of flip-flops, I'll buy you a mansion.'",
                examples: [
                    { topic: "Health", text: "治せるものなら、この頭痛を今すぐ消し去りたい。", eng: "If I could cure it, I'd want to make this headache vanish right now." },
                    { topic: "Travel", text: "今すぐ行けるものなら、ハワイのビーチででのんびりしたい。", eng: "If I could go right now, I'd want to relax on a beach in Hawaii." },
                    { topic: "Work", text: "定時に帰れるものなら、毎日でも早く帰りたいよ。", eng: "If I could leave work on time, I'd want to go home early every single day." },
                    { topic: "Dating", text: "許されるものなら、もう一度彼女にちゃんと謝りたい。", eng: "If it were allowed, I'd want to properly apologize to her one more time." },
                    { topic: "General JLPT", text: "時間を巻き戻せるものなら、あの間違いを直したい。", eng: "If I could turn back time, I'd want to fix that mistake." }
                ],
                clickingGames: [
                    { prompt: "If I could fly in the sky, I'd go anywhere.", target: "空が飛べるものならどこへでも行きたい", words: ["空が飛べるものなら", "どこへでも", "行きたい"] },
                    { prompt: "If you can catch me, try your best.", target: "私を捕まえられるものなら捕まえてみろ", words: ["私を", "捕まえられるものなら", "捕まえてみろ"] },
                    { prompt: "If I could erase this embarrassing memory, I'd pay any price.", target: "この恥ずかしい記憶が消せるものならいくらでも払う", words: ["この恥ずかしい記憶が", "消せるものなら", "いくらでも払う"] },
                    { prompt: "If I could sleep all day, I would do it.", target: "一日中眠れるものならそうしたいよ", words: ["一日中", "眠れるものなら", "そうしたいよ"] },
                    { prompt: "If I could change my past, I would fix my mistakes.", target: "過去を変えられるものなら過ちを直したい", words: ["過去を変えられるものなら", "過ちを直したい"] }
                ],
                dropdownGames: [
                    { before: "諦められる", options: ["ものなら", "ことなら", "のなら"], answer: "ものなら", after: "、今すぐすべてを投げ出したい。" },
                    { before: "宇宙旅行に", options: ["行けるものなら", "行くものなら", "行けるのなら"], answer: "行けるものなら", after: "、一度は行ってみたい。" },
                    { before: "彼の心を", options: ["変えられるものなら", "変えるものなら", "変えられるのなら"], answer: "変えられるものなら", after: "、どれだけ楽か。" },
                    { before: "若い頃に", options: ["戻れるものなら", "戻るものなら", "戻れるのなら"], answer: "戻れるものなら", after: "、もっと勉強しておきたかった。" },
                    { before: "許される", options: ["ものなら", "ことなら", "のなら"], answer: "ものなら", after: "、会社を休んで旅行に行きたい。" }
                ],
                opinionQuestions: [
                    { text: "「タイムマシンがあるなら、過去のいつに戻りたいですか？」と聞かれたらどう答えますか？", eng: "If asked, 'If there were a time machine, when in the past would you want to return to?', how would you answer?" },
                    { text: "「今すぐできるものなら、絶対にやりたいこと」は何ですか？", eng: "What is something you would 'definitely want to do if you could right now'?" },
                    { text: "ゲームやスポーツで、強敵に向かって「やれるものならやってみな！」と挑発したことはありますか？", eng: "Have you ever provoked a strong opponent in a game or sport, saying 'Try it if you can!'?" }
                ]
            },
            {
                point: "~たとえ ~ ても / たとえ ~ でも",
                english: "Even if ~",
                structure: "たとえ + Verb/Adj (て-form) も / Noun + でも",
                nuance: "Emphasizes a strong conditional concession. Even under extreme, worst-case circumstances, the ultimate intention, rule, or feeling will not change.",
                metaphor: "It's an unbreakable anchor during a violent sea storm. The waves crash all around, but the anchor holds firm.",
                examples: [
                    { topic: "General JLPT", text: "たとえどんなに困難であっても、私はこの夢を諦めない。", eng: "Even if it is no matter how difficult, I will not give up this dream." },
                    { topic: "Dating", text: "たとえ世界中の人が君を敵に回しても、僕は君の味方だ。", eng: "Even if people all over the world turn against you, I am on your side." },
                    { topic: "Business", text: "たとえ赤字になったとしても、この品質だけは落とせない。", eng: "Even if we run a deficit, we simply cannot lower this quality." },
                    { topic: "Weather", text: "たとえ大雨が降ろうとも、明日の屋外イベントは決行する。", eng: "Even if heavy rain falls, tomorrow's outdoor event will proceed as scheduled." },
                    { topic: "Study", text: "たとえ1時間しか眠れなくても、単語の暗記だけは続ける。", eng: "Even if I can only sleep for 1 hour, I will keep memorizing vocabulary." }
                ],
                clickingGames: [
                    { prompt: "Even if my friends oppose it, my mind won't change.", target: "たとえ友達に反対されても私の気持ちは変わらない", words: ["たとえ友達に反対されても", "私の気持ちは", "変わらない"] },
                    { prompt: "Even if I make mistakes, I won't be afraid of challenging myself.", target: "たとえ失敗しても新しい挑戦を恐れない", words: ["たとえ失敗しても", "新しい挑戦を", "恐れない"] },
                    { prompt: "Even if it costs a lot of money, this tool is necessary.", target: "たとえ大金がかかってもこの道具は必要だ", words: ["たとえ大金がかかっても", "この道具は必要だ"] },
                    { prompt: "Even if no one else understands, you should believe in yourself.", target: "たとえ他の誰も理解しなくても自分を信じろ", words: ["たとえ他の誰も理解しなくても", "自分を信じろ"] },
                    { prompt: "Even if I fail 100 times, I will stand up again.", target: "たとえ100回失敗しようとも私は何度でも立ち上がる", words: ["たとえ100回失敗しようとも", "私は何度でも立ち上がる"] }
                ],
                dropdownGames: [
                    { before: "たとえ周囲に", options: ["反対されても", "反対するても", "反対しなくても"], answer: "反対されても", after: "、自分の道を進む。" },
                    { before: "たとえどんなに", options: ["辛くても", "辛いでも", "辛くてもな"], answer: "辛くても", after: "、最後までやり通す。" },
                    { before: "たとえ結果が", options: ["悪くても", "悪いでも", "悪くてもの"], answer: "悪くても", after: "、後悔はしない。" },
                    { before: "たとえ明日", options: ["世界が滅びても", "世界が滅びるでも", "世界が滅びてもの"], answer: "世界が滅びても", after: "、私はリンゴの木を植える。" },
                    { before: "たとえお酒を", options: ["飲まなくても", "飲まないでも", "飲まなくてもな"], answer: "飲まなくても", after: "、楽しい時は楽しい。" }
                ],
                opinionQuestions: [
                    { text: "あなたにとって、「たとえ何を犠牲にしても守りたいもの」は何ですか？", eng: "For you, what is something you want to protect 'even if you have to sacrifice anything'?" },
                    { text: "「たとえ失敗することが分かっていても、挑戦してみたい」と思うことはありますか？", eng: "Is there something where you think 'Even if I knew I would fail, I want to try'?" },
                    { text: "困難な状況に直面した時、あなたを支える座右の銘や信念はありますか？", eng: "When facing a difficult situation, do you have a motto or belief that supports you?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Discussing big life choices and risks.",
            text: "<p><strong>田中:</strong> 「もし今の会社を辞めて独立する[BLANK1]、お前ならどうする？」</p><p><strong>佐藤:</strong> 「急だな！でも、たとえリスクが[BLANK2]、自分のやりたいことなら挑戦すべきだと思うぞ。」</p><p><strong>田中:</strong> 「だよな。安定を取るか、夢を取るか……たとえ失敗する[BLANK3]、後悔だけはしたくないからな。」</p><p><strong>佐藤:</strong> 「その意気だ！応援してるぜ。」</p>",
            blanks: [
                { id: "BLANK1", options: ["としたら", "ものなら", "としても"], answer: "としたら" },
                { id: "BLANK2", options: ["大きかったとしても", "大きかったものなら", "大きかったとしたら"], answer: "大きかったとしても" },
                { id: "BLANK3", options: ["としても", "ものなら", "としたら"], answer: "としても" }
            ]
        },
        story: {
            title: "The Ultimate Choice",
            text: "<p>人生において大きな決断を下す瞬間は幾度となく訪れる。もしタイムマシンがあって過去に戻れる[BLANK1]、私はもっと若い頃にプログラミングを学び、自分のビジネスを立ち上げていただろうか。そんな想像をすることは誰にでもある。</p><p>しかし、過去の選択を悔やんでも時間は戻らない。たとえ厳しい現実に直面する[BLANK2]、今自分にできる最善の選択を積み重ねていくしかないのだ。もし明日から世界が激変する[BLANK3]、私は愛する家族と一緒に穏やかな時間を過ごしたい。</p><p>未来のことは誰にも分からないからこそ、私たちは毎日の瞬間を大切に生きるべきなのだろう。そう考えながら、私は今日もコーヒーを片手に仕事のデスクに向かうのであった。</p>",
            blanks: [
                { id: "BLANK1", options: ["ものなら", "としたら", "としても"], answer: "ものなら" },
                { id: "BLANK2", options: ["としても", "ものなら", "としたら"], answer: "としても" },
                { id: "BLANK3", options: ["としたら", "ものなら", "としても"], answer: "としたら" }
            ]
        }
    },
    {
        id: 21,
        title: "Lesson 21: Inevitability & Natural Consequence",
        grammar: [
            {
                point: "~ものだ (Natural Law)",
                english: "It is natural that / Things are bound to ~",
                structure: "Verb / Adj (Plain form) + ものだ",
                nuance: "Expressing what naturally or inevitably happens in the course of human nature or life experience.",
                metaphor: "The sun rising in the east and setting in the west.",
                examples: [
                    { topic: "General JLPT", text: "人間は誰しも、失敗から学びながら成長していくものだ。", eng: "Naturally, human beings all grow while learning from their failures." },
                    { topic: "Life", text: "時間が経てば、どんな悲しみも少しずつ癒えるものだ。", eng: "Naturally, as time passes, any sadness heals little by little." },
                    { topic: "Business", text: "新しい環境に入れば、最初は誰もが戸惑うものだ。", eng: "When entering a new environment, naturally everyone feels bewildered at first." },
                    { topic: "Society", text: "努力を続けいれば、いつか必ず報われるものだと信じたい。", eng: "I want to believe that if you keep putting in effort, you are bound to be rewarded someday." },
                    { topic: "Travel", text: "旅先で食べる美味しい料理は、旅の最高の思い出になるものだ。", eng: "Delicious food eaten at a travel destination is naturally bound to become the best memory of the trip." }
                ],
                clickingGames: [
                    { prompt: "Secrets naturally leak out eventually.", target: "秘密というものはいつか必ず漏れるものだ", words: ["秘密というものは", "いつか必ず", "漏れるものだ"] },
                    { prompt: "People naturally want to return to their hometowns.", target: "人間は誰しも故郷が恋しくなるものだ", words: ["人間は誰しも", "故郷が恋しくなる", "ものだ"] },
                    { prompt: "Learning a foreign language takes time.", target: "外国語の習得には時間がかかるものだ", words: ["外国語の習得には", "時間がかかる", "ものだ"] },
                    { prompt: "When I was young, I used to play video games all night.", target: "若い頃はよく徹夜でゲームをしたものだ", words: ["若い頃はよく", "徹夜でゲームをした", "ものだ"] },
                    { prompt: "A true friend is someone who helps you in trouble.", target: "本当の友とは困った時に助け合うものだ", words: ["本当の友とは", "困った時に助け合う", "ものだ"] }
                ],
                dropdownGames: [
                    { before: "子供は", options: ["よく遊ぶものだ", "よく遊ぶのだった", "よく遊ぶだ"], answer: "よく遊ぶものだ", after: "、それが健全な成長だ。" },
                    { before: "昔は、よくこの川で", options: ["泳いだものだ", "泳いだのだった", "泳ぐものだ"], answer: "泳いだものだ", after: "。" },
                    { before: "苦しい時こそ、", options: ["笑顔を忘れないものだ", "笑顔を忘れないのだった", "笑顔を忘れないだ"], answer: "笑顔を忘れないものだ", after: "。" },
                    { before: "他人の", options: ["優しさは身に染みるものだ", "優しさは身に染みるのだった", "優しさは身に染みるだ"], answer: "優しさは身に染みるものだ", after: "。" },
                    { before: "人生は、", options: ["思い通りにいかないものだ", "思い通りにいかないのだった", "思い通りにいかないだ"], answer: "思い通りにいかないものだ", after: "。" }
                ],
                opinionQuestions: [
                    { text: "「時間が解決してくれる（時間が経てば癒えるものだ）」という言葉を信じますか？", eng: "Do you believe the saying 'Time heals all wounds (naturally heals as time passes)'?" },
                    { text: "あなたが子供の頃に「よくやったな」と懐かしく思い出す思い出は何ですか？", eng: "What is a memory from your childhood that you fondly remember doing?" },
                    { text: "「人間とはこういうものだ」とあなたが人生経験から学んだことは何ですか？", eng: "What have you learned from life experience about 'how humans naturally are'?" }
                ]
            },
            {
                point: "~わけがない / ~わけはない",
                english: "There is no reason / It's out of the question that ~",
                structure: "Plain form + わけがない",
                nuance: "Strong logical negation based on common sense, proving that something is completely impossible.",
                metaphor: "A thick brick wall of cold logic stopping any false possibility dead in its tracks.",
                examples: [
                    { topic: "General JLPT", text: "彼は毎日日本語を勉強しているから、N2に落ちるわけがない。", eng: "Since he studies Japanese every day, there is no reason he would fail N2." },
                    { topic: "Business", text: "これほど完璧に準備した企画が失敗するわけがない。", eng: "There is no reason a project prepared this perfectly would fail." },
                    { topic: "Dating", text: "彼女が浮気するわけがない。彼女を信じている。", eng: "There is no way she would cheat. I trust her." },
                    { topic: "Money", text: "1万円の高級牛肉が1000円で買えるわけがない。何か裏があるはずだ。", eng: "There's no way you can buy 10,000 yen high-end beef for 1,000 yen. There must be a catch." },
                    { topic: "Video games", text: "このゲームのラストステージが初見でクリアできるわけがない。", eng: "There's no reason anyone could clear the final stage of this game on the first try." }
                ],
                clickingGames: [
                    { prompt: "There's no way he would tell a lie like that.", target: "彼がそんな嘘をつくわけがない", words: ["彼が", "そんな嘘をつく", "わけがない"] },
                    { prompt: "There's no reason a beginner could beat a professional.", target: "初心者がプロに勝てるわけがない", words: ["初心者が", "プロに勝てる", "わけがない"] },
                    { prompt: "It's impossible for him to forget our important promise.", target: "彼が私たちの大切な約束を忘れるわけがない", words: ["彼が私たちの", "大切な約束を忘れる", "わけがない"] },
                    { prompt: "There's no way the weather will clear up instantly in this heavy storm.", target: "この大嵐の中で天気がすぐに晴れるわけがない", words: ["この大嵐の中で", "天気がすぐに晴れる", "わけがない"] },
                    { prompt: "There's no reason he would betray his friends.", target: "彼が仲間を裏切るわけがない", words: ["彼が仲間を", "裏切る", "わけがない"] }
                ],
                dropdownGames: [
                    { before: "彼は昨日からずっと寝ていないんだから、疲れて", options: ["いないわけがない", "いないのわけがない", "いないなわけがない"], answer: "いないわけがない", after: "。" },
                    { before: "こんな簡単な問題、大人なら", options: ["間違うわけがない", "間違えるわけがない", "間違ったわけがない"], answer: "間違えるわけがない", after: "。" },
                    { before: "彼ほどの才能があれば、オーディションに", options: ["落ちるわけがない", "落ちたわけがない", "落ちるのわけがない"], answer: "落ちるわけがない", after: "。" },
                    { before: "ちゃんと言いつけたんだから、彼が", options: ["忘れるわけがない", "忘れたわけがない", "忘れるのわけがない"], answer: "忘れるわけがない", after: "。" },
                    { before: "この高級ブランドの本物が1000円で", options: ["買えるわけがない", "買えたわけがない", "買えるのわけがない"], answer: "買えるわけがない", after: "。絶対に偽物だ。" }
                ],
                opinionQuestions: [
                    { text: "「これだけは絶対にあり得ない（〜わけがない）」とあなたが確信していることは何ですか？", eng: "What is something you are convinced 'there is no way this could ever happen' about?" },
                    { text: "ネットで怪しい商品や詐欺を見つけた時、「こんなの引っかかるわけがない」と思いますか？", eng: "When you find suspicious goods or scams online, do you think 'There's no way anyone falls for this'?" },
                    { text: "努力を重ねた人が、本番で実力を発揮して成功した時、「失敗するわけがない」と思いますか？", eng: "When someone who has put in a lot of effort performs and succeeds on the real stage, do you think 'There's no reason they would fail'?" }
                ]
            },
            {
                point: "~にほかならない",
                english: "Nothing but / None other than",
                structure: "Noun + にほかならない",
                nuance: "A definitive, ultimate logical conclusion pointing to the exact core cause or truth of a matter.",
                metaphor: "The closing gavel bang in a courtroom trial.",
                examples: [
                    { topic: "Business", text: "今回の快挙は、全員のチームワークの結果にほかならない。", eng: "This recent triumph is nothing but the result of everyone's teamwork." },
                    { topic: "General JLPT", text: "彼が怒っているのは、君のことを心配しているからにほかならない。", eng: "The fact that he is angry is for no other reason than that he is worried about you." },
                    { topic: "Society", text: "この事故は、会社の安全管理の甘さにほかならない。", eng: "This accident is due to nothing but the company's lax safety management." },
                    { topic: "Sports", text: "今回の優勝は、毎日の厳しいトレーニングの結果にほかならない。", eng: "This championship is nothing but the result of severe daily training." },
                    { topic: "Technology", text: "AIの急速な発展は、データ処理能力の向上にほかならない。", eng: "The rapid development of AI is due to nothing but the improvement of data processing capabilities." }
                ],
                clickingGames: [
                    { prompt: "My current success is thanks to my parents' support.", target: "今の成功は両親のサポートのおかげにほかならない", words: ["今の成功は", "両親のサポートのおかげに", "ほかならない"] },
                    { prompt: "This problem is due to a lack of communication.", target: "この問題はコミュニケーション不足にほかならない", words: ["この問題は", "コミュニケーション不足に", "ほかならない"] },
                    { prompt: "My study abroad experience is a precious treasure.", target: "留学の経験は人生の貴重な財産にほかならない", words: ["留学の経験は", "人生の貴重な財産に", "ほかならない"] },
                    { prompt: "The drop in sales is due to a lack of market research.", target: "売上の低下は市場調査の不足にほかならない", words: ["売上の低下は", "市場調査の不足に", "ほかならない"] },
                    { prompt: "His words are a sign of his deep affection.", target: "彼の言葉は深い愛情の表れにほかならない", words: ["彼の言葉は", "深い愛情の表れに", "ほかならない"] }
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
                    { text: "あなたが今の趣味を続けている理由は、「〜からにほかならない」とどう説明しますか？", eng: "How would you explain the reason you continue your current hobbies using 'It is for no other reason than ~'?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Discussing an old friend's sudden success.",
            text: "<p><strong>田中:</strong> 「お前、学生時代の同級生の佐藤が、大企業の社長になったってニュース見たか？」</p><p><strong>佐藤:</strong> 「見た見た！あいつが社長だなんて、最初は信じられなかったよな。」</p><p><strong>田中:</strong> 「でも、あいつが学生時代から誰よりも努力してたのを知ってるから、成功する[BLANK1]って今は納得してるよ。」</p><p><strong>佐藤:</strong> 「だよな。偶然のまぐれなんかじゃなく、あれは実力の[BLANK2]だな。」</p><p><strong>田中:</strong> 「もし俺たちも今からあいつみたいに本気を出した[BLANK3]、少しは人生が変わるかな？」</p>",
            blanks: [
                { id: "BLANK1", options: ["わけがない", "にほかならない", "としたら"], answer: "わけがない" },
                { id: "BLANK2", options: ["結果にほかならない", "わけがない", "としたら"], answer: "結果にほかならない" },
                { id: "BLANK3", options: ["としたら", "にほかならない", "わけがない"], answer: "としたら" }
            ]
        },
        story: {
            title: "The Logic of Success",
            text: "<p>世の中には『運が良かったから成功した』と言う人がいる。しかし、長年ビジネスの世界で生き抜いてきた私に言わせれば、それは大きな間違いだ。大きな成果を上げた人が、何もせずに偶然その地位にたどり着いた[BLANK1]。</p><p>水面下でどれだけの努力と失敗を重ねてきたか。その泥臭いプロセスを知っていれば、彼の成功は当然の結果[BLANK2]であり、偶然などではないことがよく分かる。</p><p>もし私たちが今からでも同じだけの情熱を注ぎ込める[BLANK3]、きっと新しい道が開けるはずだ。年齢を言い訳にせず、今日も前を向いて進んでいこう。</p>",
            blanks: [
                { id: "BLANK1", options: ["わけがない", "にほかならない", "としたら"], answer: "わけがない" },
                { id: "BLANK2", options: ["にほかならない", "わけがない", "としたら"], answer: "にほかならない" },
                { id: "BLANK3", options: ["としたら", "にほかならない", "わけがない"], answer: "としたら" }
            ]
        }
    }, {
        id: 22,
        title: "Lesson 22: Feelings, Desires & Empathy",
        grammar: [
            {
                point: "~てたまらない",
                english: "Can't stand how... / Unbearably...",
                structure: "Verb / Adj (て-form) + たまらない",
                nuance: "Used to express a physical sensation or emotional desire that is so strong it cannot be suppressed or endured.",
                metaphor: "It's like an itch on your back that you just can't reach. It's driving you absolutely crazy and you can't ignore it.",
                examples: [
                    { topic: "Weather", text: "今日はエアコンが壊れていて、暑くてたまらない。", eng: "The AC is broken today, and it's unbearably hot." },
                    { topic: "Family", text: "一人暮らしを始めたばかりで、家族に会いたくてたまらない。", eng: "I just started living alone, and I want to see my family so badly I can't stand it." },
                    { topic: "Shopping", text: "あの新作の時計が、どうしても欲しくてたまらない。", eng: "I want that new watch so badly it's unbearable." },
                    { topic: "Sports", text: "決勝戦で負けてしまって、悔しくてたまらない。", eng: "I lost in the finals, and I am unbearably frustrated." },
                    { topic: "Health", text: "昨日から歯が痛くてたまらないので、歯医者に行く。", eng: "My tooth hurts so much since yesterday that I can't stand it, so I'm going to the dentist." }
                ],
                clickingGames: [
                    { prompt: "I haven't slept for two days, so I am unbearably sleepy.", target: "二日間寝ていないので眠くてたまらない", words: ["二日間寝ていないので", "眠くて", "たまらない"] },
                    { prompt: "I am unbearably worried about tomorrow's interview.", target: "明日の面接のことが心配でたまらない", words: ["明日の面接のことが", "心配で", "たまらない"] },
                    { prompt: "I ate too much spicy food and am unbearably thirsty.", target: "辛いものを食べすぎて喉が渇いてたまらない", words: ["辛いものを食べすぎて", "喉が渇いて", "たまらない"] },
                    { prompt: "I'm so curious about the continuation of the anime that I can't stand it.", target: "アニメの続きが気になってたまらない", words: ["アニメの続きが", "気になって", "たまらない"] },
                    { prompt: "I bought a new game and want to play it unbearably.", target: "新しいゲームを買ったので遊びたくてたまらない", words: ["新しいゲームを買ったので", "遊びたくて", "たまらない"] }
                ],
                dropdownGames: [
                    { before: "試験の結果が", options: ["気になってたまらない", "気になるてたまらない", "気になりてたまらない"], answer: "気になってたまらない", after: "。" },
                    { before: "クーラーがない部屋は", options: ["暑くてたまらない", "暑いでたまらない", "暑いなたまらない"], answer: "暑くてたまらない", after: "。" },
                    { before: "遠くに住んでいる恋人に", options: ["会いたくてたまらない", "会いたいでたまらない", "会いたいにてたまらない"], answer: "会いたくてたまらない", after: "。" },
                    { before: "手術の前日で、", options: ["不安でたまらない", "不安くてたまらない", "不安にたまらない"], answer: "不安でたまらない", after: "。" },
                    { before: "虫に刺されたところが", options: ["痒くてたまらない", "痒いでたまらない", "痒いにたまらない"], answer: "痒くてたまらない", after: "。" }
                ],
                opinionQuestions: [
                    { text: "あなたが最近「〜てたまらない」と感じるほど欲しかったものは何ですか？", eng: "What is something you recently wanted so badly you felt 'I can't stand how much I want it'?" },
                    { text: "「気になってたまらない」という理由で、夜更かししてしまったことはありますか？", eng: "Have you ever stayed up late because you were 'unbearably curious' about something?" },
                    { text: "夏の暑い日、「〜てたまらない」時に一番食べたい（飲みたい）ものは何ですか？", eng: "On a hot summer day, when you are 'unbearably ~', what do you most want to eat or drink?" }
                ]
            },
            {
                point: "~てならない",
                english: "Cannot help but feel... / Dying to...",
                structure: "Verb / Adj (て-form) + ならない",
                nuance: "Similar to 'てたまらない', but slightly more formal and written. It is uniquely used with verbs of spontaneous emotion or thought (e.g., 思える, 気がする, 感じる), meaning a feeling naturally wells up inside you and you can't suppress it.",
                metaphor: "It's like a dark cloud of a specific feeling naturally forming in your mind without your control. It just appears.",
                examples: [
                    { topic: "General JLPT", text: "彼のこれからの将来が心配でならない。", eng: "I cannot help but feel worried about his future." },
                    { topic: "Mystery", text: "この事件には、何か裏があると思えてならない。", eng: "I cannot help but think there is some hidden motive behind this incident." },
                    { topic: "Nostalgia", text: "祖父と一緒に過ごした日々が懐かしくてならない。", eng: "I cannot help but feel deeply nostalgic about the days I spent with my grandfather." },
                    { topic: "Anime", text: "あのキャラクターが死んでしまったのが悲しくてならない。", eng: "I cannot help but feel devastated that that character died." },
                    { topic: "Society", text: "最近の若者のマナーの悪さが残念でならない。", eng: "I cannot help but feel disappointed by the poor manners of recent young people." }
                ],
                clickingGames: [
                    { prompt: "I cannot help but feel that he is telling a lie.", target: "彼が嘘をついているような気がしてならない", words: ["彼が嘘をついているような", "気がして", "ならない"] },
                    { prompt: "I am unbearably sad that my pet passed away.", target: "ペットが死んでしまったことが悲しくてならない", words: ["ペットが死んでしまったことが", "悲しくて", "ならない"] },
                    { prompt: "I cannot help but feel sorry for letting him do the work.", target: "彼に仕事を任せてしまったことが申し訳なくてならない", words: ["彼に仕事を任せてしまったことが", "申し訳なくて", "ならない"] },
                    { prompt: "I cannot help but feel it's a waste to throw this away.", target: "これを捨ててしまうのはもったいなくてならない", words: ["これを捨ててしまうのは", "もったいなくて", "ならない"] },
                    { prompt: "I cannot help but be bothered by the loud noise next door.", target: "隣の部屋の騒音が気になってならない", words: ["隣の部屋の騒音が", "気になって", "ならない"] }
                ],
                dropdownGames: [
                    { before: "どうにも嫌な予感が", options: ["してならない", "するてならない", "しるならない"], answer: "してならない", after: "。" },
                    { before: "昔の友人に会いたくて", options: ["会いたくてならない", "会いたいでならない", "会いたいにらない"], answer: "会いたくてならない", after: "。" },
                    { before: "彼の成功が", options: ["羨ましくてならない", "羨ましいでならない", "羨ましにらない"], answer: "羨ましくてならない", after: "。" },
                    { before: "親としては、子供のことが", options: ["心配でならない", "心配くてならない", "心配なならない"], answer: "心配でならない", after: "。" },
                    { before: "あんな酷いことを言ってしまった自分が", options: ["情けなくてならない", "情けないでならない", "情けなでならない"], answer: "情けなくてならない", after: "。" }
                ],
                opinionQuestions: [
                    { text: "最近のニュースを見ていて、「〜でならない（残念でならない、心配でならない等）」と感じることは何ですか？", eng: "Watching recent news, what is something you feel 'I cannot help but feel ~ (disappointed, worried, etc.)' about?" },
                    { text: "昔のアルバムを見返した時、「懐かしくてならない」と感じる思い出は何ですか？", eng: "When looking back at old albums, what is a memory that makes you feel 'I cannot help but feel nostalgic'?" },
                    { text: "「どうしても〜という気がしてならない」と、強い直感を感じた経験はありますか？", eng: "Have you ever had a strong intuition where you felt 'I cannot help but feel that ~'?" }
                ]
            },
            {
                point: "~ないではいられない / ~ずにはいられない",
                english: "Can't help but do... / Can't stop myself from...",
                structure: "Verb (ない-form) + ではいられない / Verb (ない-form, drop ない) + ずにはいられない (*する becomes せずにはいられない)",
                nuance: "Used when your emotions are so stirred up that you automatically, almost reflexively, take an action. You try to suppress the urge, but it's impossible.",
                metaphor: "It's like a sneeze. You can pinch your nose and try to hold it in, but eventually, the pressure builds up and you just have to let it out.",
                examples: [
                    { topic: "Comedy", text: "彼の冗談が面白すぎて、笑わずにはいられなかった。", eng: "His joke was so funny I couldn't help but laugh." },
                    { topic: "Anime", text: "あの感動的なラストシーンを見て、泣かないではいられなかった。", eng: "Watching that touching final scene, I couldn't help but cry." },
                    { topic: "Food", text: "目の前に大好きなケーキがあったら、食べずにはいられない。", eng: "If my favorite cake is right in front of me, I can't help but eat it." },
                    { topic: "Anger", text: "あんな理不尽なことを言われたら、怒らないではいられない。", eng: "If I'm told such unreasonable things, I can't help but get angry." },
                    { topic: "Shopping", text: "セールで半額になっているのを見ると、買わずにはいられない。", eng: "When I see it's half price on sale, I can't stop myself from buying it." }
                ],
                clickingGames: [
                    { prompt: "When I see a cute cat, I can't help but touch it.", target: "可愛い猫を見ると触らずにはいられない", words: ["可愛い猫を見ると", "触らずには", "いられない"] },
                    { prompt: "Hearing that music, I can't help but dance.", target: "あの音楽を聞くと踊らないではいられない", words: ["あの音楽を聞くと", "踊らないでは", "いられない"] },
                    { prompt: "He is so rude, I couldn't help but complain.", target: "彼があまりに失礼なので文句を言わずにはいられなかった", words: ["彼があまりに失礼なので", "文句を言わずには", "いられなかった"] },
                    { prompt: "When a new iPhone comes out, I can't help but check it.", target: "新しいiPhoneが出るとチェックせずにはいられない", words: ["新しいiPhoneが出ると", "チェックせずには", "いられない"] },
                    { prompt: "The pain was so bad I couldn't help but scream.", target: "あまりの痛みに叫ばないではいられなかった", words: ["あまりの痛みに", "叫ばないでは", "いられなかった"] }
                ],
                dropdownGames: [
                    { before: "感動して、涙を", options: ["流さずにはいられなかった", "流さないずにはいられなかった", "流してずにはいられなかった"], answer: "流さずにはいられなかった", after: "。" },
                    { before: "彼の態度が悪すぎて、", options: ["注意せずにはいられなかった", "注意さずにはいられなかった", "注意しないずにはいられなかった"], answer: "注意せずにはいられなかった", after: "。" },
                    { before: "大好きなバンドのライブに行ったら、", options: ["叫ばないではいられない", "叫ぶないではいられない", "叫ばないずにはいられない"], answer: "叫ばないではいられない", after: "。" },
                    { before: "美味しそうな匂いがして、", options: ["食べずにはいられない", "食べないずにはいられない", "食べてずにはいられない"], answer: "食べずにはいられない", after: "。" },
                    { before: "あの映画の結末を見たら、誰でも", options: ["驚かずにはいられない", "驚きずにはいられない", "驚かないずにはいられない"], answer: "驚かずにはいられない", after: "だろう。" }
                ],
                opinionQuestions: [
                    { text: "あなたが「これを目の前にしたら、買わずにはいられない！」と思うものは何ですか？", eng: "What is something where you think 'If this is right in front of me, I can't stop myself from buying it!'?" },
                    { text: "映画やアニメで、思わず「泣かずにはいられなかった」作品は何ですか？", eng: "What is a movie or anime where you 'couldn't help but cry'?" },
                    { text: "理不尽な状況で、「文句を言わずにはいられなかった」経験はありますか？", eng: "Have you ever had an experience in an unreasonable situation where you 'couldn't help but complain'?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Discussing an addiction to collecting expensive hobbies.",
            text: "<p><strong>田中:</strong> 「なあ、また新しいサバゲーの電動ガンを買っちゃったよ。妻には絶対に内緒にしてるんだけどさ。」</p><p><strong>佐藤:</strong> 「お前、先月も新しいやつ買ってたよな？よくそんなにお金が続くよな。」</p><p><strong>田中:</strong> 「限定モデルの予約開始の案内を見たら、どうしても欲しく[BLANK1]んだよ。指が勝手に購入ボタンを押してしまうんだ。」</p><p><strong>佐藤:</strong> 「完全に依存症じゃないか。奥さんにバレたら、大目玉を食らうような気がし[BLANK2]よ。」</p><p><strong>田中:</strong> 「わかってるよ。でも、あの金属の重みと質感を感じると、コレクションに加え[BLANK3]んだよな……。」</p><p><strong>佐藤:</strong> 「お前のその物欲は、いつになっても治りそうにないな。まあ、自己破産だけはしないように気をつけろよ。」</p><p><strong>田中:</strong> 「ああ、来月から本気で節約するよ。たぶんな。」</p>",
            blanks: [
                { id: "BLANK1", options: ["てたまらない", "てならない", "ずにはいられない"], answer: "てたまらない" },
                { id: "BLANK2", options: ["てならない", "てたまらない", "ずにはいられない"], answer: "てならない" },
                { id: "BLANK3", options: ["ずにはいられない", "てならない", "てたまらない"], answer: "ずにはいられない" }
            ]
        },
        story: {
            title: "The Irresistible Urge of the Late-Night Snack",
            text: "<p>私は現在、健康のために厳しいダイエットを行っている。40歳を超えてからというもの、健康診断の数値が気になっ[BLANK1]からだ。医者からも「このままでは生活習慣病になりますよ」と釘を刺されている。</p><p>そのため、夜8時以降は絶対に何も食べないと心に誓った。最初の数日は順調だったが、金曜日の夜中、テレビでラーメン特集の番組を見てしまったのが運の尽きだった。画面の中で湯気を立てる濃厚な豚骨スープを見た瞬間、お腹が空い[BLANK2]。</p><p>「いけない、これは罠だ」と自分に言い聞かせ、水を飲んで気を紛らわそうとした。しかし、頭の中は完全にラーメンに支配されていた。気がつけば、私はパジャマのまま財布を握りしめ、近所のコンビニへと走り出していた。深夜に食べるカップ麺の罪悪感と背徳感は、ダイエット中だからこそ格別なのだ。</p><p>お湯を注ぎ、3分待っている間のワクワク感。一口目をすすった時の、あの体に染み渡る塩分。健康に悪いと知りながらも、私はスープの最後の一滴まで飲み干さ[BLANK3]。そして翌朝、体重計に乗って激しい自己嫌悪に陥るのである。人間の意志とは、かくも弱いものなのだ。</p>",
            blanks: [
                { id: "BLANK1", options: ["てならない", "てたまらない", "ずにはいられない"], answer: "てならない" },
                { id: "BLANK2", options: ["てたまらない", "てならない", "ずにはいられない"], answer: "てたまらない" },
                { id: "BLANK3", options: ["ずにはいられなかった", "てたまらなかった", "てならなかった"], answer: "ずにはいられなかった" }
            ]
        }
    },
    {
        id: 23,
        title: "Lesson 23: Claims, Impressions & Tendencies",
        grammar: [
            {
                point: "~気味 (ぎみ)",
                english: "A slight tendency to... / Looking slightly...",
                structure: "Noun / Verb (stem) + 気味",
                nuance: "Used to describe a current state or tendency that is slightly leaning toward a negative direction. It’s not a full-blown condition, but the speaker notices the symptoms.",
                metaphor: "It's the 'Check Engine' light flickering on your dashboard. The car isn't fully broken down yet, but something definitely feels a bit off.",
                examples: [
                    { topic: "Health", text: "最近、寝不足で少し疲れ気味だ。", eng: "Recently, due to lack of sleep, I am feeling a bit tired." },
                    { topic: "Economy", text: "今月の会社の売上は下がり気味だ。", eng: "This month's company sales are on a slight downward trend." },
                    { topic: "Dieting", text: "お正月でお餅を食べすぎて、最近太り気味です。", eng: "I ate too much mochi over New Year's, and recently I'm tending to put on a little weight." },
                    { topic: "Business", text: "彼は最近、仕事に対して焦り気味に見える。", eng: "Lately, he looks slightly panicked/rushed regarding his work." },
                    { topic: "General JLPT", text: "ちょっと風邪気味なので、今日は早く帰ります。", eng: "I have a slight cold, so I'll go home early today." }
                ],
                clickingGames: [
                    { prompt: "Because I sit all day, I have a slight lack of exercise.", target: "一日中座っているので運動不足気味だ", words: ["一日中座っているので", "運動不足", "気味だ"] },
                    { prompt: "The prices of vegetables have been on a slight upward trend lately.", target: "最近野菜の値段が上がり気味だ", words: ["最近野菜の値段が", "上がり", "気味だ"] },
                    { prompt: "He is tending to be late for meetings recently.", target: "彼は最近会議に遅れ気味だ", words: ["彼は最近", "会議に", "遅れ気味だ"] },
                    { prompt: "Since I started working from home, I tend to get slightly stressed.", target: "在宅勤務になってからストレスが溜まり気味だ", words: ["在宅勤務になってから", "ストレスが", "溜まり気味だ"] },
                    { prompt: "My computer's performance has been slightly dropping lately.", target: "パソコンの性能が最近落ち気味だ", words: ["パソコンの性能が", "最近", "落ち気味だ"] }
                ],
                dropdownGames: [
                    { before: "少し", options: ["風邪気味", "風邪の気味", "風邪な気味"], answer: "風邪気味", after: "だから、薬を飲んで寝ます。" },
                    { before: "最近の成績は、少し", options: ["下がり気味", "下がる気味", "下がって気味"], answer: "下がり気味", after: "で心配だ。" },
                    { before: "お酒の飲みすぎで、彼は最近", options: ["太り気味", "太る気味", "太った気味"], answer: "太り気味", after: "だ。" },
                    { before: "新入社員は、仕事の量に少し", options: ["疲れ気味", "疲れる気味", "疲れて気味"], answer: "疲れ気味", after: "のようだ。" },
                    { before: "今の若者は、テレビを", options: ["離れ気味", "離れる気味", "離れて気味"], answer: "離れ気味", after: "だと言われている。" }
                ],
                opinionQuestions: [
                    { text: "最近、仕事や勉強で「少し疲れ気味だな」と感じることはありますか？", eng: "Recently, do you feel 'I'm a bit tired' from work or studying?" },
                    { text: "冬の時期、「風邪気味」になった時、あなたはどうやって治しますか？", eng: "During winter, when you get a 'slight cold', how do you cure it?" },
                    { text: "最近の世の中のニュースを見て、何か「〜気味だな（上がり気味、下がり気味など）」と思う傾向はありますか？", eng: "Watching recent news, is there a trend you think is 'tending slightly toward ~ (going up, going down, etc.)'?" }
                ]
            },
            {
                point: "~げ",
                english: "Looks like / Seems like (vibe/appearance)",
                structure: "Adj (drop い/な) / Verb (stem) + げ",
                nuance: "Attached to emotion words to describe the *appearance* or *vibe* someone is giving off. It is more formal and literary than '~そう'. You can't use it for yourself (e.g., you can't say 'I am 悲しげ').",
                metaphor: "It's the visible aura or aura-color floating around an anime character that represents their internal mood to the viewers.",
                examples: [
                    { topic: "Empathy", text: "彼女は何か言いたげな顔でこちらを見ていた。", eng: "She was looking at me with a face that seemed like she wanted to say something." },
                    { topic: "Pets", text: "捨てられた子犬が、悲しげに鳴いている。", eng: "The abandoned puppy is whining sadly (with a sad vibe)." },
                    { topic: "Business", text: "彼は自信ありげにプレゼンを始めた。", eng: "He started the presentation seemingly full of confidence." },
                    { topic: "General JLPT", text: "老人が公園のベンチで寂しげに座っている。", eng: "An old man is sitting on the park bench looking lonely." },
                    { topic: "Dating", text: "彼は不満げな態度で彼女の話を聞いていた。", eng: "He was listening to her story with a dissatisfied-looking attitude." }
                ],
                clickingGames: [
                    { prompt: "The child is looking at the toys with a wanting vibe.", target: "子供が欲しげにオモチャを見ている", words: ["子供が", "欲しげに", "オモチャを見ている"] },
                    { prompt: "He muttered with a lonely look.", target: "彼は寂しげな表情でつぶやいた", words: ["彼は", "寂しげな表情で", "つぶやいた"] },
                    { prompt: "The dog looked up at me with an apologetic vibe.", target: "犬が申し訳なさげに私を見上げた", words: ["犬が", "申し訳なさげに", "私を見上げた"] },
                    { prompt: "He accepted the conditions with a dissatisfied look.", target: "彼は不満げにその条件を受け入れた", words: ["彼は", "不満げに", "その条件を受け入れた"] },
                    { prompt: "She answered the question with a proud look.", target: "彼女は得意げに質問に答えた", words: ["彼女は", "得意げに", "質問に答えた"] }
                ],
                dropdownGames: [
                    { before: "彼は何か", options: ["言いたげな", "言いたいげな", "言うげな"], answer: "言いたげな", after: "顔をしていた。" },
                    { before: "彼女は", options: ["悲しげに", "悲しいげに", "悲しむげに"], answer: "悲しげに", after: "うつむいた。" },
                    { before: "テストで100点を取った彼は、", options: ["得意げに", "得意なげに", "得意だげに"], answer: "得意げに", after: "笑った。" },
                    { before: "お腹を空かせた野良猫が、", options: ["寂しげに", "寂しいげに", "寂しむげに"], answer: "寂しげに", after: "鳴いている。" },
                    { before: "彼の提案に対して、部長は", options: ["不満げな", "不満だげな", "不満するげな"], answer: "不満げな", after: "表情を浮かべた。" }
                ],
                opinionQuestions: [
                    { text: "あなたの周りに、いつも「自信ありげに」振る舞っている人はいますか？", eng: "Is there someone around you who always behaves 'seemingly full of confidence'?" },
                    { text: "犬や猫が「何か言いたげな」顔をしてこちらを見ている時、何を考えていると思いますか？", eng: "When dogs or cats look at you with a face 'that seems like they want to say something', what do you think they are thinking?" },
                    { text: "もし友達が「悲しげな」様子で座っていたら、あなたはどうやって声をかけますか？", eng: "If a friend was sitting looking 'sad/lonely', how would you talk to them?" }
                ]
            },
            {
                point: "~っぽい",
                english: "Looks like / Acts like / Tends to (Casual)",
                structure: "Noun / Verb (stem) / Adj (drop い) + っぽい",
                nuance: "A highly casual suffix. When attached to nouns, it means it shares the characteristics of that noun (e.g., childish). When attached to verbs, it means someone has a strong, often negative tendency to do that action easily (e.g., gets angry easily, forgets easily).",
                metaphor: "It's like a knock-off brand. It's not the real thing, but it strongly resembles or acts like the real thing.",
                examples: [
                    { topic: "Personality", text: "彼は40歳なのに、とても子供っぽい性格だ。", eng: "Even though he is 40 years old, he has a very childish personality." },
                    { topic: "Emotions", text: "最近、彼女は少し怒りっぽくなった気がする。", eng: "Recently, I feel like she has become somewhat quick to anger (easily gets angry)." },
                    { topic: "Memory", text: "祖父は年齢のせいで、かなり忘れっぽくなった。", eng: "Due to his age, my grandfather has become quite forgetful." },
                    { topic: "Fashion", text: "そのジャケットは少し安っぽく見えるね。", eng: "That jacket looks a bit cheap-ish." },
                    { topic: "Appearance", text: "今日のスーツ、ちょっと黒っぽくてお葬式みたいだよ。", eng: "Today's suit is a bit black-ish and looks like it's for a funeral." }
                ],
                clickingGames: [
                    { prompt: "My boss tends to get angry easily and is hard to deal with.", target: "上司は怒りっぽいので付き合うのが大変だ", words: ["上司は怒りっぽいので", "付き合うのが", "大変だ"] },
                    { prompt: "This material looks cheap, doesn't it?", target: "この素材はなんだか安っぽく見えるね", words: ["この素材は", "なんだか", "安っぽく見えるね"] },
                    { prompt: "He always makes childish excuses.", target: "彼はいつも子供っぽい言い訳ばかりする", words: ["彼はいつも", "子供っぽい", "言い訳ばかりする"] },
                    { prompt: "As I get older, I've become forgetful.", target: "年を取ってから私は忘れっぽくなった", words: ["年を取ってから", "私は", "忘れっぽくなった"] },
                    { prompt: "This water looks cloudy and white.", target: "この水はなんだか白っぽく濁っている", words: ["この水はなんだか", "白っぽく", "濁っている"] }
                ],
                dropdownGames: [
                    { before: "最近疲れているのか、彼はとても", options: ["怒りっぽく", "怒るっぽく", "怒ってっぽく"], answer: "怒りっぽく", after: "なった。" },
                    { before: "いい大人なんだから、そんな", options: ["子供っぽい", "子供のっぽい", "子供だっぽい"], answer: "子供っぽい", after: "態度はやめなさい。" },
                    { before: "このプラスチックのケースは、少し", options: ["安っぽく", "安いっぽく", "安のっぽく"], answer: "安っぽく", after: "見える。" },
                    { before: "私は昔から", options: ["飽きっぽくて", "飽きるっぽくて", "飽きてっぽくて"], answer: "飽きっぽくて", after: "、何事も長続きしないんです。" },
                    { before: "彼の服はいつも", options: ["黒っぽい", "黒いっぽい", "黒のっぽい"], answer: "黒っぽい", after: "色ばかりだ。" }
                ],
                opinionQuestions: [
                    { text: "あなたの周りに、「怒りっぽい」または「忘れっぽい」人はいますか？その人はどんな時にそうなりますか？", eng: "Is there someone around you who is 'quick to anger' or 'forgetful'? When do they get like that?" },
                    { text: "大人になっても「子供っぽい」趣味や一面を持ち続けることは、良いことだと思いますか？", eng: "Do you think it's a good thing to continue having a 'childish' hobby or side even as an adult?" },
                    { text: "自分が「飽きっぽい」と感じて、途中でやめてしまった習い事やゲームはありますか？", eng: "Have you ever quit a lesson or game halfway through because you felt you were 'quick to lose interest'?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Discussing stress, aging, and changing personalities.",
            text: "<p><strong>田中:</strong> 「最近、どうも疲れ[BLANK1]なんだよな。夜もよく眠れないし、仕事中も集中力が続かないんだ。」</p><p><strong>佐藤:</strong> 「40代になると無理がきかなくなるからな。お前、最近ちょっとしたことでもイライラして、怒り[BLANK2]なってるんじゃないか？」</p><p><strong>田中:</strong> 「言われてみれば、そうかもしれない。後輩の小さなミスにも、つい声を荒げてしまうことが増えたよ。後になって反省するんだけどな。」</p><p><strong>佐藤:</strong> 「ストレスが溜まってる証拠だ。この前、お前がデスクでため息をついているのを見た時、なんだかすごく寂し[BLANK3]見えたぞ。」</p><p><strong>田中:</strong> 「マジかよ。それはちょっと恥ずかしいな。来週は有給を取って、温泉にでも行ってリフレッシュしてくるよ。」</p><p><strong>佐藤:</strong> 「それがいい。たまには仕事のプレッシャーから離れないと、心が持たないからな。」</p>",
            blanks: [
                { id: "BLANK1", options: ["気味", "っぽい", "げ"], answer: "気味" },
                { id: "BLANK2", options: ["っぽく", "気味に", "げに"], answer: "っぽく" },
                { id: "BLANK3", options: ["げに", "気味に", "っぽく"], answer: "げに" }
            ]
        },
        story: {
            title: "Observations from a Cafe Window",
            text: "<p>日曜日の午後、私は駅前のカフェでコーヒーを飲みながら、窓の外を行き交う人々をぼんやりと観察していた。現代社会はスピードが速すぎているせいか、道を行くサラリーマンたちは皆、スマホの画面を見つめながら少し急ぎ[BLANK1]に歩いている。誰かに追われているかのような、余裕のない表情だ。</p><p>ふと視線を向けると、公園のベンチに座っている一人のお年寄りが目に入った。彼は誰を待つわけでもなく、ただ落ちていく枯れ葉をじっと見つめていた。その横顔はどこか悲し[BLANK2]で、彼がこれまでに歩んできた長い人生の孤独を感じさせるようだった。私には声をかける勇気はなかったが、心の中で彼の幸せを少しだけ祈った。</p><p>そのすぐ横の広場では、高校生くらいの若者たちが大きな声で笑い合いながら、ふざけ合っていた。彼らの行動は少し子供[BLANK3]見えたが、その無邪気なエネルギーは、疲れ切った大人たちには眩しすぎるほどだった。</p><p>一つの窓枠から見える景色の中に、焦り、孤独、そして純粋な活力が混ざり合っている。私もまた、そんな群像劇の一部なのだと思いながら、冷めかけたコーヒーをゆっくりと飲み干した。</p>",
            blanks: [
                { id: "BLANK1", options: ["気味", "っぽい", "げ"], answer: "気味" },
                { id: "BLANK2", options: ["げ", "気味", "っぽい"], answer: "げ" },
                { id: "BLANK3", options: ["っぽく", "気味に", "げに"], answer: "っぽく" }
            ]
        }
    }, {
        id: 24,
        title: "Lesson 24: Limits & Scope",
        grammar: [
            {
                point: "~限り / ~ない限り (かぎり)",
                english: "As long as / Unless",
                structure: "Verb (dictionary / ている / ない) / Nounである + 限り",
                nuance: "Sets a strict condition or time limit. It means 'as long as state A continues, state B will also continue.' If used in the negative (ない限り), it means 'unless X happens, Y won't happen.'",
                metaphor: "It's like the battery life of a flashlight. 'As long as' the battery has power, the light stays on. Once the condition ends, the result ends.",
                examples: [
                    { topic: "Business", text: "私が社長である限り、この会社の雇用は絶対に守る。", eng: "As long as I am the president, I will absolutely protect this company's employment." },
                    { topic: "Airsoft", text: "体が動く限り、私はサバゲーの運営とプレイを続けたい。", eng: "As long as my body moves, I want to continue managing and playing airsoft." },
                    { topic: "Weather", text: "大雨が降らない限り、明日の屋外イベントは予定通り行われます。", eng: "As long as it doesn't rain heavily, tomorrow's outdoor event will be held as scheduled." },
                    { topic: "General JLPT", text: "私の知る限り、彼はそんな無責任なことをする人ではない。", eng: "As far as I know, he is not the kind of person to do such an irresponsible thing." },
                    { topic: "Technology", text: "パスワードを入力しない限り、この機密データにはアクセスできません。", eng: "Unless you enter the password, you cannot access this confidential data." }
                ],
                clickingGames: [
                    { prompt: "As long as I have this PC, I can work from anywhere.", target: "このPCがある限りどこでも仕事ができる", words: ["このPCがある限り", "どこでも", "仕事ができる"] },
                    { prompt: "As far as I investigated, there are no bugs in the system.", target: "私が調べた限りシステムにバグはありません", words: ["私が調べた限り", "システムにバグは", "ありません"] },
                    { prompt: "As long as I am a student, I want to study hard.", target: "学生である限りしっかり勉強したい", words: ["学生である限り", "しっかり", "勉強したい"] },
                    { prompt: "Unless there are serious injuries, please continue the training.", target: "大きな怪我がない限り訓練を続けてください", words: ["大きな怪我がない限り", "訓練を", "続けてください"] },
                    { prompt: "As long as I live in Japan, I want to improve my language skills.", target: "日本に住んでいる限り語学力を向上させたい", words: ["日本に住んでいる限り", "語学力を", "向上させたい"] }
                ],
                dropdownGames: [
                    { before: "私が", options: ["知る限り", "知った限り", "知って限り"], answer: "知る限り", after: "、その情報はすでに古いです。" },
                    { before: "体力が", options: ["続く限り", "続くの限り", "続くな限り"], answer: "続く限り", after: "、現役のプレイヤーでいたい。" },
                    { before: "マネージャー", options: ["である限り", "だ限り", "の限り"], answer: "である限り", after: "、チームの責任は私が取る。" },
                    { before: "自分で", options: ["諦めない限り", "諦めないの限り", "諦めないである限り"], answer: "諦めない限り", after: "、可能性はゼロではない。" },
                    { before: "昨日私が", options: ["見た限り", "見る限り", "見ている限り"], answer: "見た限り", after: "、サーバーに異常はありませんでした。" }
                ],
                opinionQuestions: [
                    { text: "あなたが「生きている限り続けたい」と思う趣味や習慣は何ですか？", eng: "What is a hobby or habit you think 'I want to continue as long as I live'?" },
                    { text: "「私の知る限り、この店が一番美味しい」と思えるレストランはどこですか？", eng: "Where is a restaurant you think 'As far as I know, this place is the most delicious'?" },
                    { text: "「〜しない限り、日本語は上達しない」と思う条件は何ですか？", eng: "What is a condition where you think 'Unless you do ~, your Japanese will not improve'?" }
                ]
            },
            {
                point: "~に限って (にかぎって)",
                english: "Of all things / Only / Specifically",
                structure: "Noun + に限って",
                nuance: "Expresses frustration that something bad happens *specifically* at the worst possible time, or a strong blind trust that *specifically* this person wouldn't do something bad. It highlights a frustrating coincidence or exception.",
                metaphor: "It's Murphy's Law. It's spending hours washing your car, and *of course*, that is the exact day a massive flock of birds decides to fly over.",
                examples: [
                    { topic: "General JLPT", text: "急いでいる日に限って、乗る予定の電車が遅延する。", eng: "Of all days, the train I plan to ride is delayed on the day I'm in a hurry." },
                    { topic: "Weather", text: "傘を持っていない時に限って、突然の大雨が降る。", eng: "Of all times, sudden heavy rain falls when I don't have an umbrella." },
                    { topic: "Trust", text: "長年の親友である彼に限って、そんな裏切りをするはずがない。", eng: "Him of all people, my best friend of many years, there is no way he would commit such a betrayal." },
                    { topic: "Health", text: "ずっと楽しみにしていた休日に限って、高熱を出して体調を崩してしまう。", eng: "Of all days, I run a high fever and ruin my health on the holiday I was looking forward to for so long." },
                    { topic: "Pets", text: "うちの愛犬に限って、他人を噛むなんて絶対にあり得ない。", eng: "Our beloved dog of all dogs, it's absolutely impossible that it would bite another person." }
                ],
                clickingGames: [
                    { prompt: "Of all times, my PC freezes right before saving.", target: "保存する直前に限ってPCがフリーズする", words: ["保存する直前に限って", "PCが", "フリーズする"] },
                    { prompt: "Of all days, it snows heavily on the day of the exam.", target: "試験の日に限って大雪が降る", words: ["試験の日に限って", "大雪が", "降る"] },
                    { prompt: "Her of all people, she wouldn't tell such a lie.", target: "彼女に限ってそんな嘘をつくはずがない", words: ["彼女に限って", "そんな嘘を", "つくはずがない"] },
                    { prompt: "Of all times I'm super busy, the phone rings endlessly.", target: "超忙しい時に限って電話が鳴り続ける", words: ["超忙しい時に限って", "電話が", "鳴り続ける"] },
                    { prompt: "Our team of all teams, we wouldn't lose to them.", target: "私たちのチームに限って彼らに負けるはずがない", words: ["私たちのチームに限って", "彼らに", "負けるはずがない"] }
                ],
                dropdownGames: [
                    { before: "忙しい", options: ["時に限って", "時が限って", "時の限って"], answer: "時に限って", after: "、厄介なトラブルが立て続けに起きるものだ。" },
                    { before: "彼", options: ["に限って", "が限って", "の限って"], answer: "に限って", after: "、会社の機密情報を漏らすような真似はしない。" },
                    { before: "今日", options: ["に限って", "に限りて", "の限って"], answer: "に限って", after: "、財布を家に忘れてきてしまった。" },
                    { before: "急いでいる", options: ["日に限って", "日を限って", "日が限って"], answer: "日に限って", after: "、信号が全部赤になる気がする。" },
                    { before: "うちの子", options: ["に限って", "の限って", "だ限って"], answer: "に限って", after: "、いじめなんてするはずがありません。" }
                ],
                opinionQuestions: [
                    { text: "「〜な時に限って、いつも悪いことが起きる」という、あなた自身のマーフィーの法則は何ですか？", eng: "What is your own Murphy's Law where 'Of all times when ~, something bad always happens'?" },
                    { text: "あなたが「この人に限って絶対に裏切らない」と心から信じている人は誰ですか？", eng: "Who is someone you truly believe 'This person of all people will absolutely not betray me'?" },
                    { text: "「休日に限って〜してしまう」という、よくある失敗談を教えてください。", eng: "Tell me a common failure story where 'Of all days on a holiday, I end up doing ~'." }
                ]
            },
            {
                point: "~に限らず (にかぎらず)",
                english: "Not limited to ~ / Not only ~ but also",
                structure: "Noun + に限らず",
                nuance: "Similar to 'だけでなく', but literally means 'without limiting the scope to just X'. It shows that a trend, rule, or fact applies broadly to other things as well.",
                metaphor: "An all-access VIP pass. It doesn't just open the front door; it opens the back door, the staff rooms, and the VIP lounge too.",
                examples: [
                    { topic: "Video games", text: "このゲームは子供に限らず、大人にも非常に人気がある。", eng: "This game is highly popular not limited to children, but also with adults." },
                    { topic: "Airsoft", text: "最近は男性に限らず、女性のサバゲープレイヤーもどんどん増えている。", eng: "Recently, not limited to men, female airsoft players are also steadily increasing." },
                    { topic: "Work", text: "彼は休日に限らず、平日も夜遅くまでカフェで働いている。", eng: "Not limited to holidays, he works late into the night at cafes on weekdays too." },
                    { topic: "Food", text: "日本料理に限らず、私はスパイスの効いた辛い食べ物が全般的に好きだ。", eng: "Not limited to Japanese food, I generally like spicy foods with strong spices." },
                    { topic: "Anime", text: "日本のアニメは国内に限らず、世界中で広く愛されている。", eng: "Japanese anime is widely loved all over the world, not limited to within the country." }
                ],
                clickingGames: [
                    { prompt: "Not limited to summer, you can enjoy ice cream in winter too.", target: "夏に限らず冬でもアイスクリームを楽しめる", words: ["夏に限らず", "冬でも", "アイスクリームを楽しめる"] },
                    { prompt: "Not limited to students, adults also study English actively.", target: "学生に限らず大人も積極的に英語を勉強している", words: ["学生に限らず", "大人も積極的に", "英語を勉強している"] },
                    { prompt: "Not limited to weekends, the popular gym is crowded.", target: "週末に限らずその人気のジムは混雑している", words: ["週末に限らず", "その人気のジムは", "混雑している"] },
                    { prompt: "Not limited to PCs, smartphones can also play heavy games.", target: "PCに限らずスマホでも重いゲームができる", words: ["PCに限らず", "スマホでも", "重いゲームができる"] },
                    { prompt: "Not limited to experts, anyone can easily participate.", target: "専門家に限らず誰でも気軽に参加できる", words: ["専門家に限らず", "誰でも気軽に", "参加できる"] }
                ],
                dropdownGames: [
                    { before: "若者", options: ["に限らず", "の限らず", "な限らず"], answer: "に限らず", after: "、お年寄りもスマートフォンを使いこなす時代だ。" },
                    { before: "国内", options: ["に限らず", "の限らず", "だ限らず"], answer: "に限らず", after: "、海外の市場も視野に入れてビジネスを展開する。" },
                    { before: "平日", options: ["に限らず", "を限らず", "が限らず"], answer: "に限らず", after: "、このテーマパークは常に観光客でいっぱいだ。" },
                    { before: "女性", options: ["に限らず", "な限らず", "の限らず"], answer: "に限らず", after: "、最近は美容に気を使う男性が増えてきている。" },
                    { before: "一部の地域", options: ["に限らず", "が限らず", "の限らず"], answer: "に限らず", after: "、全国的に記録的な猛暑となっている。" }
                ],
                opinionQuestions: [
                    { text: "あなたの趣味は、「特定の年齢層に限らず」幅広い人に楽しまれていますか？", eng: "Is your hobby enjoyed by a wide range of people 'not limited to a specific age group'?" },
                    { text: "「休日に限らず、平日も」あなたが毎日欠かさずやっているルーティンは何ですか？", eng: "What is a routine you do every single day without fail, 'not limited to holidays, but also on weekdays'?" },
                    { text: "「日本に限らず、世界中で」今後もっと流行すると思うものは何ですか？", eng: "What do you think will become more popular in the future 'not limited to Japan, but all over the world'?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Discussing the challenges of organizing large weekend hobby events.",
            text: "<p><strong>田中:</strong> 「来月のサバゲーの貸切イベントなんだけど、参加者の集まり具合はどう？」</p><p><strong>佐藤:</strong> 「それがさ、今回はいつもの常連メンバー[BLANK1]、初心者や女性の参加者もかなり多くて、すでに定員オーバーになりそうなんだよ。」</p><p><strong>田中:</strong> 「おっ、それは素晴らしいことじゃないか。コミュニティが広がるのは大歓迎だよ。ただ、初心者が多いとなると、安全管理のルール説明はいつも以上に徹底しないとダメだな。」</p><p><strong>佐藤:</strong> 「ああ、もちろんだ。みんながルールを守ってくれる[BLANK2]、重大な事故は起きないはずだけど、運営側としては全く気が抜けないよ。」</p><p><strong>田中:</strong> 「それにしても、俺たちがイベントの幹事をやる日に[BLANK3]、なぜかいつも天気が崩れたり、レンタル用の銃が壊れたりするんだよな。マーフィーの法則ってやつか？」</p><p><strong>佐藤:</strong> 「ハハハ、違いないな。でもまあ、トラブルも後になればいい酒のつまみになるさ。俺たちの体力が続く[BLANK4]、このグループを盛り上げていこうぜ。」</p><p><strong>田中:</strong> 「そうだな。よし、当日のマニュアルをもう一度見直しておくよ。」</p>",
            blanks: [
                { id: "BLANK1", options: ["に限らず", "に限って", "限り"], answer: "に限らず" },
                { id: "BLANK2", options: ["限り", "に限らず", "に限って"], answer: "限り" },
                { id: "BLANK3", options: ["に限って", "限り", "に限らず"], answer: "に限って" },
                { id: "BLANK4", options: ["限り", "に限らず", "に限って"], answer: "限り" }
            ]
        },
        story: {
            title: "The Dream House in Kurihama",
            text: "<p>今年の初め、私は長年の夢だったマイホームを横須賀の久里浜に購入した。賃貸のマンションとは違い、自分自身の持ち家である[BLANK1]、壁紙の張り替えから庭のレイアウトまで、自分の思い通りにカスタマイズできる自由がある。特に、リビングルームには巨大なスクリーンと最新のサラウンドスピーカーを設置し、自分専用のホームシアターを構築した。映画やゲームを愛する私にとって、これは何物にも代えがたい最高の空間だ。</p><p>しかし、一軒家の所有というものは、楽しいことばかりではない。引っ越しを済ませて荷解きが終わった直後、なぜか私が一番楽しみにしていた金曜日の夜[BLANK2]、購入したばかりの給湯器がエラーコード「113」を点滅させて動かなくなってしまったのだ。よりによって冷え込みの厳しい冬の夜に、お湯が出ないというトラブルに見舞われるとは。私は凍えながら、分厚いマニュアルと格闘する羽目になった。</p><p>さらに、家を持つと税金や保険料など、住宅ローン[BLANK3]様々な維持費がかかるという現実にも直面している。それでも、朝起きて自分の庭に足を踏み入れ、そこで育てている激辛のハラペーニョやハバネロの苗が少しずつ成長しているのを見るたびに、「やっぱり家を買ってよかった」と心から思えるのだ。住宅ローンの返済が続く[BLANK4]、私はこの静かな街で、新しい生活を全力で楽しむつもりだ。</p>",
            blanks: [
                { id: "BLANK1", options: ["限り", "に限って", "に限らず"], answer: "限り" },
                { id: "BLANK2", options: ["に限って", "に限らず", "限り"], answer: "に限って" },
                { id: "BLANK3", options: ["に限らず", "限り", "に限って"], answer: "に限らず" },
                { id: "BLANK4", options: ["限り", "に限って", "に限らず"], answer: "限り" }
            ]
        }
    },
    {
        id: 25,
        title: "Lesson 25: Advice, Directives & Intentions",
        grammar: [
            {
                point: "~べきだ / ~べきではない",
                english: "Should / Should not (Strong advice)",
                structure: "Verb (Dictionary form) + べきだ (*する -> するべき / すべき)",
                nuance: "Expresses a strong personal opinion, societal expectation, or moral duty of what is the 'right' thing to do. It is not used for official rules, but rather for strong, logical advice. Use with caution towards superiors.",
                metaphor: "A wise mentor giving you a firm, unyielding piece of life advice. It's not a light suggestion; it's a moral imperative.",
                examples: [
                    { topic: "Business", text: "一度引き受けた仕事なら、最後まで責任を持ってやり遂げるべきだ。", eng: "If it's a job you took on once, you should see it through to the end with responsibility." },
                    { topic: "Society", text: "親しい友人であっても、他人のプライバシーに過度に干渉するべきではない。", eng: "Even if it's a close friend, you should not interfere excessively with other people's privacy." },
                    { topic: "Study", text: "語学を習得したい学生は、恐れずにどんどんネイティブと話すべきだ。", eng: "Students who want to acquire a language should talk with native speakers more and more without fear." },
                    { topic: "Safety", text: "少しでもお酒を飲んだのなら、絶対に車を運転するべきではない。", eng: "If you have drunk even a little alcohol, you absolutely should not drive a car." },
                    { topic: "Life", text: "他人の目を気にせず、自分の本当にやりたいことに挑戦すべきだ。", eng: "Without worrying about the eyes of others, you should challenge what you truly want to do." }
                ],
                clickingGames: [
                    { prompt: "You should apologize immediately if you make a mistake.", target: "ミスをしたらすぐに謝るべきだ", words: ["ミスをしたら", "すぐに", "謝るべきだ"] },
                    { prompt: "You should not force others to drink alcohol.", target: "他人に酒を無理に飲ませるべきではない", words: ["他人に酒を", "無理に", "飲ませるべきではない"] },
                    { prompt: "You should rest properly when you are sick.", target: "病気の時はしっかり休むべきだ", words: ["病気の時は", "しっかり", "休むべきだ"] },
                    { prompt: "You should check the manual carefully before using it.", target: "使う前にマニュアルをよく確認すべきだ", words: ["使う前にマニュアルを", "よく", "確認すべきだ"] },
                    { prompt: "You should not tell lies to your important friends.", target: "大切な友達に嘘をつくべきではない", words: ["大切な友達に", "嘘を", "つくべきではない"] }
                ],
                dropdownGames: [
                    { before: "社会人として、約束の時間は", options: ["守るべきだ", "守ったべきだ", "守ってべきだ"], answer: "守るべきだ", after: "。" },
                    { before: "体調が悪い時は、絶対に無理を", options: ["するべきではない", "したべきではない", "しないべきではない"], answer: "するべきではない", after: "。" },
                    { before: "明日は大事な会議があるから、早く", options: ["寝るべきだ", "寝たべきだ", "寝てべきだ"], answer: "寝るべきだ", after: "。" },
                    { before: "会社の秘密を、外部の人に", options: ["話すべきではない", "話したべきではない", "話してべきではない"], answer: "話すべきではない", after: "。" },
                    { before: "自分の将来のために、若いうちにもっと", options: ["勉強すべきだ", "勉強したべきだ", "勉強してべきだ"], answer: "勉強すべきだ", after: "。" }
                ],
                opinionQuestions: [
                    { text: "プロの社会人として、「これだけは絶対に守るべきだ」と思うビジネスマナーは何ですか？", eng: "As a professional working adult, what is a business manner you think 'You absolutely should observe this one thing'?" },
                    { text: "人間関係を壊さないために、「親しい友人にも言うべきではないこと」は何だと思いますか？", eng: "To not destroy relationships, what do you think is 'something you should not say even to a close friend'?" },
                    { text: "日本語の学習者が、N2に合格するために「毎日やるべきこと」は何だとアドバイスしますか？", eng: "What would you advise is 'something a Japanese learner should do every day' to pass N2?" }
                ]
            },
            {
                point: "~まい / ~まいか",
                english: "Will definitely not / Intend not to",
                structure: "Verb (Dictionary form for Group 1, Stem for Group 2) + まい",
                nuance: "A strong, highly literary expression of negative intention ('I swear I will never do X again') or negative deduction ('It is highly unlikely that X will happen'). In everyday speech, people usually say '〜ないつもりだ'.",
                metaphor: "A heavy steel vault door slamming shut and locking from the inside. The possibility of the action happening is completely closed off.",
                examples: [
                    { topic: "Business", text: "このような初歩的なミスは、二度と繰り返すまいと心に固く誓った。", eng: "I firmly swore in my heart that I will absolutely never repeat such a basic mistake again." },
                    { topic: "Shopping", text: "接客態度があまりに酷かったので、あの店にはもう行くまいと決めた。", eng: "Because the customer service attitude was so terrible, I decided I will never go to that store again." },
                    { topic: "Trust", text: "彼が何度も約束を破るので、彼の言い訳にはもう騙されまい。", eng: "Because he breaks his promises so often, I intend not to be deceived by his excuses anymore." },
                    { topic: "Weather", text: "こんなに激しい台風の中で、わざわざ外に出かける人などいるまい。", eng: "There is probably no one who would go out of their way to go outside in such a fierce typhoon." },
                    { topic: "Secrecy", text: "この重大な秘密は、死ぬまで誰にも話すまいと決意している。", eng: "I have resolved that I will not tell this grave secret to anyone until I die." }
                ],
                clickingGames: [
                    { prompt: "I decided I will never drink strong tequila again.", target: "強いテキーラは二度と飲むまいと決心した", words: ["強いテキーラは", "二度と飲むまいと", "決心した"] },
                    { prompt: "I swear I will never forget the frustration of this defeat.", target: "この敗北の悔しさは決して忘れるまいと誓った", words: ["この敗北の悔しさは", "決して忘れるまいと", "誓った"] },
                    { prompt: "I will absolutely not give up until the very end.", target: "最後の最後まで絶対に諦めるまい", words: ["最後の最後まで", "絶対に", "諦めるまい"] },
                    { prompt: "I promised myself I won't waste money on games anymore.", target: "もうゲームで無駄遣いはすまいと自分に約束した", words: ["もうゲームで無駄遣いは", "すまいと", "自分に約束した"] },
                    { prompt: "There's probably no one who can clear this impossibly hard game.", target: "この激ムズのゲームをクリアできる人はいるまい", words: ["この激ムズのゲームを", "クリアできる人は", "いるまい"] }
                ],
                dropdownGames: [
                    { before: "あんなにひどいレストランには、二度と", options: ["行くまい", "行ったまい", "行ってまい"], answer: "行くまい", after: "と家族で話し合った。" },
                    { before: "お客様の前で、同じミスは決して", options: ["するまい", "したまい", "してまい"], answer: "するまい", after: "と深く反省した。" },
                    { before: "私の本当の過去なんて、誰も", options: ["知るまい", "知ったまい", "知ってまい"], answer: "知るまい", after: "。" },
                    { before: "どんなに辛い状況でも、絶対に", options: ["泣くまい", "泣いたまい", "泣いてまい"], answer: "泣くまい", after: "と奥歯を噛み締めた。" },
                    { before: "あんな卑怯（ひきょう）なライバルには絶対に", options: ["負けるまい", "負けたまい", "負けてまい"], answer: "負けるまい", after: "と練習に励んだ。" }
                ],
                opinionQuestions: [
                    { text: "あなたが過去の失敗から学んで、「これは二度と繰り返すまい」と誓ったことは何ですか？", eng: "What is something you learned from a past failure and swore 'I will never repeat this again'?" },
                    { text: "「こんな過酷な条件で、〜できる人はいるまい」とあなたが思う、非常に難しい挑戦は何ですか？", eng: "What is an extremely difficult challenge where you think 'Under such harsh conditions, there is probably no one who could ~'?" },
                    { text: "絶対に誰にも「話すまい」と心に決めている、ちょっとした秘密はありますか？", eng: "Do you have a little secret that you have firmly decided in your heart you 'will not tell' anyone?" }
                ]
            },
            {
                point: "~ことだ",
                english: "Should / Must (Advice or Warning)",
                structure: "Verb (Dictionary form / ない-form) + ことだ",
                nuance: "Used to give direct advice, a warning, or a strong recommendation. It is slightly softer than べきだ, and is very often used by someone with more experience (a senior, a teacher, a boss) speaking to someone with less experience. It implies 'The best/most necessary thing to do is X.'",
                metaphor: "It's like a seasoned doctor writing a prescription pad for a patient. 'Take these pills, drink water, and sleep. This is what you must do to get better.'",
                examples: [
                    { topic: "Language", text: "日本語がもっと上手になりたいなら、毎日声に出して話すことだ。", eng: "If you want to become better at Japanese, you should speak it out loud every day." },
                    { topic: "Health", text: "風邪を早く治したいのなら、温かいスープを飲んで早く寝ることだ。", eng: "If you want to cure your cold quickly, you should drink warm soup and sleep early." },
                    { topic: "Work", text: "仕事で分からないことがあったら、勝手に判断せずにすぐ質問することだ。", eng: "If there is something you don't understand at work, you should ask immediately without judging on your own." },
                    { topic: "Dieting", text: "本気でダイエット中なら、夜遅くに甘いチョコレートを食べないことだ。", eng: "If you are seriously on a diet, you should not eat sweet chocolate late at night." },
                    { topic: "Airsoft", text: "サバゲーの試合で勝ちたいなら、まずは基本の安全ルールを徹底的に守ることだ。", eng: "If you want to win in an airsoft match, you must first thoroughly follow the basic safety rules." }
                ],
                clickingGames: [
                    { prompt: "If you are tired, you should rest without pushing yourself.", target: "疲れているなら無理をせず休むことだ", words: ["疲れているなら", "無理をせず", "休むことだ"] },
                    { prompt: "You should absolutely not give up on your dreams.", target: "自分の夢を決して諦めないことだ", words: ["自分の夢を", "決して", "諦めないことだ"] },
                    { prompt: "You should listen carefully to the opinions of experienced people.", target: "経験者の意見をしっかり聞くことだ", words: ["経験者の意見を", "しっかり", "聞くことだ"] },
                    { prompt: "You shouldn't buy expensive things immediately on impulse.", target: "高いものを衝動ですぐに買わないことだ", words: ["高いものを衝動で", "すぐに", "買わないことだ"] },
                    { prompt: "If you want to pass, you must solve past exams repeatedly.", target: "合格したいなら過去問を繰り返し解くことだ", words: ["合格したいなら", "過去問を繰り返し", "解くことだ"] }
                ],
                dropdownGames: [
                    { before: "トラブルが起きたら、まずは冷静になって状況を", options: ["把握することだ", "把握したことだ", "把握してことだ"], answer: "把握することだ", after: "。" },
                    { before: "結果が出るまでは、焦らずにじっと", options: ["待つことだ", "待ったことだ", "待ってことだ"], answer: "待つことだ", after: "。" },
                    { before: "職場の人間関係を良くしたいなら、他人の悪口を", options: ["言わないことだ", "言わなかったことだ", "言わなくてことだ"], answer: "言わないことだ", after: "。" },
                    { before: "大きな目標に向かって、毎日少しずつ", options: ["努力することだ", "努力したことだ", "努力してことだ"], answer: "努力することだ", after: "。" },
                    { before: "二日酔いになりたくないなら、空腹でお酒を無理に", options: ["飲まないことだ", "飲まなかったことだ", "飲まなくてことだ"], answer: "飲まないことだ", after: "。" }
                ],
                opinionQuestions: [
                    { text: "あなたの仕事（または趣味）で、新人にアドバイスをするとしたら、「まずは〜ことだ」と何を伝えますか？", eng: "If you were to give advice to a rookie in your work (or hobby), what would you tell them using 'First, you should ~'?" },
                    { text: "健康を維持するために、日常生活で「絶対に〜ないことだ」と思うルールは何ですか？", eng: "To maintain health, what is a rule in your daily life that you think 'You absolutely should not ~'?" },
                    { text: "日本語のリスニング力を鍛えるためには、「〜ことだ」とどんな方法をオススメしますか？", eng: "To train your Japanese listening skills, what method would you recommend using 'You should ~'?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Discussing an English training program at their HR department.",
            text: "<p><strong>田中:</strong> 「佐藤さん、今期からラクスルで新しく導入した社員向けの英語研修プログラムなんだけど、進捗はどうかな？」</p><p><strong>佐藤:</strong> 「それが、参加している社員からの不満が多くてね。どうやら課題の量が多すぎて、通常業務を圧迫しているらしいんだ。人事部として、すぐに研修のカリキュラムを見直す[BLANK1]と思うよ。」</p><p><strong>田中:</strong> 「なるほど。確かに、社員を成長させるための研修が、逆にモチベーションを下げてしまっては本末転倒だからな。去年の厳しいだけの研修と同じ失敗は、二度と繰り返す[BLANK2]。」</p><p><strong>佐藤:</strong> 「ああ。語学の習得は一朝一夕にはいかないからね。社員には焦らせず、まずは毎日15分でもいいから、英語に触れる習慣を作らせる[BLANK3]よ。」</p><p><strong>田中:</strong> 「その通りだな。よし、明日の朝一番で、現場のマネージャーたちとスケジュールの緩和についてミーティングを設定しよう。彼らの意見もしっかりと聞く[BLANK4]からね。」</p><p><strong>佐藤:</strong> 「頼んだぞ。俺も社員向けのアンケートを作成しておくよ。」</p>",
            blanks: [
                { id: "BLANK1", options: ["べきだ", "まい", "ことだ"], answer: "べきだ" },
                { id: "BLANK2", options: ["まい", "べきだ", "ことだ"], answer: "まい" },
                { id: "BLANK3", options: ["ことだ", "べきだ", "まい"], answer: "ことだ" },
                { id: "BLANK4", options: ["べきだ", "まい", "ことだ"], answer: "べきだ" }
            ]
        },
        story: {
            title: "Handling the Reaper",
            text: "<p>私は最近、自宅の庭で激辛のチリペッパーを種から育てるという、少し風変わりな趣味に熱中している。特に『キャロライナ・リーパー』や『ブート・ジョロキア』といった世界トップクラスの辛さを誇る品種の栽培は、温度や湿度の管理が非常に難しく、園芸の奥深さを教えてくれる。しかし、これらの植物を扱う際には、絶対に忘れてはならない厳しい鉄則がある。それは、収穫や調理の際に「素手で絶対に触る[BLANK1]」ということだ。</p><p>実は去年の夏、私はそのルールを甘く見ていた。ほんの少しなら大丈夫だろうと、素手でジョロキアの実を刻んでしまったのだ。その直後、うっかりその手で自分の目を擦ってしまい、地獄のような激痛に数時間も苦しめられることになった。あの涙と痛みにまみれた悲惨な経験だけは、今後の人生で二度と繰り返す[BLANK2]と、心に深く刻み込んでいる。</p><p>だからこそ、今年から新しく激辛唐辛子の栽培を始めようとしている友人には、私は先輩として強い口調でアドバイスをしている。「もし本気でリーパーを育てるなら、厚手のゴム手袋と防護メガネを必ず用意する[BLANK3]。そして、少しでも危険を感じたら無理をしない[BLANK4]よ」と。刺激的な趣味は、徹底した安全管理の上に成り立っているのだ。</p>",
            blanks: [
                { id: "BLANK1", options: ["べきではない", "まい", "ことだ"], answer: "べきではない" },
                { id: "BLANK2", options: ["まい", "べきだ", "ことだ"], answer: "まい" },
                { id: "BLANK3", options: ["ことだ", "まい", "べきではない"], answer: "ことだ" },
                { id: "BLANK4", options: ["ことだ", "べきだ", "まい"], answer: "ことだ" }
            ]
        }
    }, {
        id: 26,
        title: "Lesson 26: States & Simultaneous Actions",
        grammar: [
            {
                point: "~きり / ~きりだ",
                english: "Since ~ / Only ~",
                structure: "Verb (た-form) + きり / Noun + きり",
                nuance: "Has two meanings: 1) An action happened once and the state has remained unchanged ever since (often implies something expected hasn't happened). 2) A strict limit or 'only' (like 二人きり = just the two of us).",
                metaphor: "Think of a clock that completely stopped ticking the moment an event happened. Time has been frozen in that exact state ever since.",
                examples: [
                    { topic: "Dating", text: "彼女とは5年前に別れたきり、一度も会っていない。", eng: "Since we broke up 5 years ago, I haven't seen her even once." },
                    { topic: "Business", text: "会議室には社長と私の二人きりになり、非常に緊張した。", eng: "It became just the two of us, the president and me, in the meeting room, and I was extremely nervous." },
                    { topic: "Daily Life", text: "今朝コーヒーを一杯飲んだきり、何も食べていない。", eng: "Since I drank one cup of coffee this morning, I haven't eaten anything." },
                    { topic: "Travel", text: "彼は「ちょっと外に出る」と言って出かけたきり、戻ってこなかった。", eng: "He went out saying 'I'm stepping out for a bit' and hasn't returned since." },
                    { topic: "Computers", text: "その古いパソコンは、一度フリーズしたきり、全く動かなくなった。", eng: "Since that old PC froze once, it stopped working completely." }
                ],
                clickingGames: [
                    { prompt: "My son entered his room and hasn't come out since.", target: "息子は部屋に入ったきり出てこない", words: ["息子は", "部屋に入ったきり", "出てこない"] },
                    { prompt: "It's been a long time since I went on a trip with just my wife.", target: "妻と二人きりで旅行に行くのは久しぶりだ", words: ["妻と二人きりで", "旅行に行くのは", "久しぶりだ"] },
                    { prompt: "Since I lent him money, I haven't heard from him.", target: "お金を貸したきり彼から連絡がない", words: ["お金を貸したきり", "彼から", "連絡がない"] },
                    { prompt: "Since I last went to Japan, I haven't traveled overseas.", target: "最後に日本へ行ったきり海外旅行をしていない", words: ["最後に日本へ", "行ったきり", "海外旅行をしていない"] },
                    { prompt: "This book has been sleeping on the shelf since I read it once.", target: "この本は一度読んだきり本棚に眠っている", words: ["この本は一度", "読んだきり", "本棚に眠っている"] }
                ],
                dropdownGames: [
                    { before: "一年前に", options: ["帰国したきり", "帰国するきり", "帰国してきり"], answer: "帰国したきり", after: "、彼に会っていない。" },
                    { before: "部屋には私と彼", options: ["の二人きり", "と二人きり", "二人きり"], answer: "二人きり", after: "だった。" },
                    { before: "そのゲームは一度", options: ["遊んだきり", "遊ぶきり", "遊びきり"], answer: "遊んだきり", after: "、箱にしまってある。" },
                    { before: "朝に電話で", options: ["話したきり", "話すきり", "話してきり"], answer: "話したきり", after: "、音沙汰がない。" },
                    { before: "この作業は", options: ["これっきり", "これのきり", "これなきり"], answer: "これっきり", after: "にして、帰りましょう。" }
                ],
                opinionQuestions: [
                    { text: "「一度〜したきり、ずっと使っていない」というアイテムは家にありますか？", eng: "Do you have an item in your house that 'since you used it once, you haven't used it at all'?" },
                    { text: "誰かと「二人きり」になると、どうしても緊張してしまう相手はいますか？", eng: "Is there someone you invariably get nervous around when it's 'just the two of you'?" },
                    { text: "最後に大泣きした（または大笑いした）のはいつ「きり」ですか？", eng: "When was the last time 'since' you cried hard (or laughed hard)?" }
                ]
            },
            {
                point: "~ぬく",
                english: "To do something completely to the end (through hardship)",
                structure: "Verb (stem) + ぬく",
                nuance: "Indicates doing something completely to the very end, especially emphasizing the immense effort, endurance, or difficulty involved. It carries a stronger sense of struggle and willpower than `〜きる`.",
                metaphor: "Like running a grueling marathon and forcing yourself to cross the finish line despite severe cramps and complete exhaustion.",
                examples: [
                    { topic: "Business", text: "どんなに困難なプロジェクトでも、最後までやりぬく覚悟だ。", eng: "No matter how difficult the project, I am prepared to carry it through to the end." },
                    { topic: "Sports", text: "足が痛かったが、42キロのマラソンを走りぬいた。", eng: "My legs hurt, but I ran the 42-kilometer marathon to the very end." },
                    { topic: "Video games", text: "100時間以上かけて、この難解なRPGを遊びぬいた。", eng: "Taking over 100 hours, I played this complex RPG to the absolute end." },
                    { topic: "Life", text: "自分で決めた道なのだから、最後まで生きぬきたい。", eng: "Since it is a path I chose myself, I want to live it out to the end." },
                    { topic: "Study", text: "わからない単語をすべて調べぬいて、ついに論文を完成させた。", eng: "After thoroughly looking up every single unknown word, I finally completed the thesis." }
                ],
                clickingGames: [
                    { prompt: "I fought through my first airsoft match to the very end.", target: "初めてのサバゲーの試合を最後まで戦いぬいた", words: ["初めてのサバゲーの試合を", "最後まで", "戦いぬいた"] },
                    { prompt: "Only those who endure strict training can become professionals.", target: "厳しい訓練を耐えぬいた者だけがプロになれる", words: ["厳しい訓練を", "耐えぬいた者だけが", "プロになれる"] },
                    { prompt: "I thought it through all night and created a new design.", target: "徹夜で考えぬいて新しいデザインを生み出した", words: ["徹夜で", "考えぬいて", "新しいデザインを生み出した"] },
                    { prompt: "There is no need to agonize over this problem entirely alone.", target: "この問題を一人で悩みぬく必要はない", words: ["この問題を", "一人で", "悩みぬく必要はない"] },
                    { prompt: "He has the power to survive any adversity to the end.", target: "彼はどんな逆境も生きぬく力を持っている", words: ["彼はどんな逆境も", "生きぬく", "力を持っている"] }
                ],
                dropdownGames: [
                    { before: "途中から雨が降ってきたが、最後まで", options: ["走りぬいた", "走るぬいた", "走ってぬいた"], answer: "走りぬいた", after: "。" },
                    { before: "どんな困難も", options: ["耐えぬく", "耐えるぬく", "耐えてぬく"], answer: "耐えぬく", after: "精神力が必要だ。" },
                    { before: "この過酷なプロジェクトを", options: ["やりぬく", "やるぬく", "やってぬく"], answer: "やりぬく", after: "自信がありますか。" },
                    { before: "色々と", options: ["考えぬいた", "考えるぬいた", "考えてぬいた"], answer: "考えぬいた", after: "結果、会社を辞めることにした。" },
                    { before: "彼は激動の時代を", options: ["生きぬいた", "生きるぬいた", "生きてぬいた"], answer: "生きぬいた", after: "素晴らしい人物だ。" }
                ],
                opinionQuestions: [
                    { text: "あなたが過去に「最後までやりぬいた」と誇りに思えることは何ですか？", eng: "What is something from your past that you are proud to say you 'carried through to the very end'?" },
                    { text: "どんなに苦しい状況でも「耐えぬく」ための、あなたのモチベーションは何ですか？", eng: "What is your motivation to 'endure to the end' no matter how painful the situation is?" },
                    { text: "人生で一番「悩みぬいて」決断したことは何ですか？", eng: "What is the decision you made after 'agonizing over it completely' the most in your life?" }
                ]
            },
            {
                point: "~がてら",
                english: "While doing A, doing B / Using the opportunity to...",
                structure: "Noun / Verb (stem) + がてら",
                nuance: "You go somewhere or do something as the primary action (A), but you use that convenient opportunity to also accomplish a secondary action (B). Often involves movement verbs (walking, shopping, visiting).",
                metaphor: "Killing two birds with one stone, but clearly acknowledging that one bird was your main target and the second bird was just a convenient bonus along the way.",
                examples: [
                    { topic: "Daily Life", text: "散歩がてら、コンビニで牛乳を買ってきてくれませんか。", eng: "While you're out for a walk, could you buy milk at the convenience store?" },
                    { topic: "Business", text: "出張で東京へ行くがてら、昔の友達に会うつもりだ。", eng: "Taking the opportunity of going to Tokyo on a business trip, I plan to meet an old friend." },
                    { topic: "Travel", text: "京都へ観光に行くがてら、有名な神社でお守りを買った。", eng: "While going sightseeing in Kyoto, I bought an amulet at a famous shrine." },
                    { topic: "Social", text: "近くまで来たので、挨拶がてら寄らせていただきました。", eng: "Since I came to the neighborhood, I stopped by to say hello while I was at it." },
                    { topic: "Exercise", text: "ダイエットの運動がてら、隣の駅まで歩いてみた。", eng: "As a diet exercise while I was at it, I tried walking to the next station." }
                ],
                clickingGames: [
                    { prompt: "Let's go to the new cafe while we're out for a drive.", target: "ドライブがてら新しいカフェに行ってみよう", words: ["ドライブがてら", "新しいカフェに", "行ってみよう"] },
                    { prompt: "I took a short break at the park while I was out shopping.", target: "買い物がてら公園で少し休憩した", words: ["買い物がてら", "公園で", "少し休憩した"] },
                    { prompt: "I went to take pictures while going to see the cherry blossoms.", target: "桜のお花見がてら写真を撮りに行った", words: ["桜のお花見がてら", "写真を", "撮りに行った"] },
                    { prompt: "I soaked in the local hot spring while returning to my hometown.", target: "帰省がてら地元の温泉に浸かってきた", words: ["帰省がてら", "地元の温泉に", "浸かってきた"] },
                    { prompt: "I check the letters in the mailbox while taking out the trash.", target: "ゴミ出しがてらポストの手紙を確認する", words: ["ゴミ出しがてら", "ポストの", "手紙を確認する"] }
                ],
                dropdownGames: [
                    { before: "犬の", options: ["散歩がてら", "散歩するがてら", "散歩してがてら"], answer: "散歩がてら", after: "、タバコを買ってきた。" },
                    { before: "友達を", options: ["見送りがてら", "見送るがてら", "見送ってがてら"], answer: "見送りがてら", after: "、駅の近くで本を買った。" },
                    { before: "仕事の", options: ["報告がてら", "報告するがてら", "報告してがてら"], answer: "報告がてら", after: "、一緒にお酒でも飲みませんか。" },
                    { before: "東京のオフィスへ", options: ["出張がてら", "出張するがてら", "出張してがてら"], answer: "出張がてら", after: "、秋葉原のパソコンショップに寄った。" },
                    { before: "近所に", options: ["買い物がてら", "買い物するがてら", "買い物してがてら"], answer: "買い物がてら", after: "、彼の家に寄った。" }
                ],
                opinionQuestions: [
                    { text: "週末、「〜がてら」よく行く場所や、ついでにしてしまうことはありますか？", eng: "On weekends, is there a place you often go 'while doing ~', or something you do as a bonus?" },
                    { text: "旅行でどこかに行く時、「観光がてら」絶対にやりたいことは何ですか？", eng: "When you travel somewhere, what is something you absolutely want to do 'while sightseeing'?" },
                    { text: "仕事や学校の「帰りがてら」、いつも寄ってしまうお店はありますか？", eng: "Is there a shop you always stop by 'while on your way home' from work or school?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Catching up at a cafe after not seeing each other for a long time.",
            text: "<p><strong>田中:</strong> 「おーい佐藤！久しぶりだな。最後にお前の顔を見たのは、去年の忘年会で飲んだ[BLANK1]じゃないか？」</p><p><strong>佐藤:</strong> 「本当だな。あの日はお前、終電を逃してうちのソファで寝た[BLANK2]、翌日の昼過ぎまで全く起きなかったからな。まあ、今日はお互いの近況報告[BLANK3]、ゆっくりコーヒーでも飲もうぜ。」</p><p><strong>田中:</strong> 「そうだな。実は最近、会社のプロジェクトが炎上しててさ。毎日クレーム対応に追われてるんだよ。ただでさえ人手不足なのに、上司からは『何があっても最後までやり[BLANK4]』ってプレッシャーをかけられてて、正直もう限界に近いんだ。」</p><p><strong>佐藤:</strong> 「それはキツイな…。40代になると、気合いだけで乗り[BLANK5]のも限界があるからな。無理して体を壊したら元も子もないぞ。」</p><p><strong>田中:</strong> 「分かってるよ。だから今日は、お前に愚痴を聞いてもらい[BLANK6]、この後、駅前のマッサージ店に寄って帰ろうと思ってるんだ。」</p><p><strong>佐藤:</strong> 「それがいい。俺も最近、休日は愛犬の散歩[BLANK7]、近所の公園でボーッとする時間を意図的に作るようにしてるんだ。頭を空っぽにする時間がないと、本当に潰れちゃうからな。」</p><p><strong>田中:</strong> 「愛犬の散歩か、平和でいいな。俺も何かリフレッシュできる新しい趣味を見つけないと、このままじゃ会社と家の往復で人生が終わってしまいそうだよ。」</p>",
            blanks: [
                { id: "BLANK1", options: ["きり", "がてら", "ぬく"], answer: "きり" },
                { id: "BLANK2", options: ["きり", "がてら", "ぬいた"], answer: "きり" },
                { id: "BLANK3", options: ["がてら", "きり", "ぬいて"], answer: "がてら" },
                { id: "BLANK4", options: ["ぬけ", "がてら", "きり"], answer: "ぬけ" },
                { id: "BLANK5", options: ["きる", "がてら", "きり"], answer: "きる" },
                { id: "BLANK6", options: ["がてら", "ぬき", "きり"], answer: "がてら" },
                { id: "BLANK7", options: ["がてら", "きり", "ぬき"], answer: "がてら" }
            ]
        },
        story: {
            title: "The 24-Hour Endurance Game",
            text: "<p>私たちのサバゲーコミュニティでは、年に一度だけ特別なイベントが開催される。「24時間耐久サバイバルゲーム」だ。文字通り、昼夜を問わず24時間ぶっ通しでフィールドに留まり、敵チームと陣地を奪い合うという過酷極まりないルールのゲームである。普段の気軽な週末のゲームとは異なり、参加するには強靭な体力と精神力が求められる。</p><p>私はこれまで何度も普通の試合に参加してきたが、この耐久イベントに出るのは今年が初めてだった。夕方にゲームがスタートした[BLANK1]、最初の数時間はアドレナリンが出ていて非常に楽しかった。しかし、深夜の冷え込みがフィールドを覆い始めた頃から、状況は一変した。暗闇の中でいつ敵が襲ってくるか分からない恐怖と、極度の睡眠不足がプレイヤーたちの体力を確実に奪っていったのだ。</p><p>午前3時、私のチームの半分はすでに疲れ果ててセーフティエリアのテントで眠り込んでいた。「ちょっと休憩する」と言ってテントに入った[BLANK2]、彼らは朝まで全く姿を見せなかった。残された私たちは、眠い目をこすりながら、なんとか夜明けまで陣地を守り[BLANK3]必要があった。</p><p>太陽が昇り始めた時の美しさと安堵感は、今でもはっきりと覚えている。冷え切った体を温めるため、私たちは周囲のパトロール[BLANK4]、フィールドの端に設置された焚き火の場所まで歩き、そこで飲んだインスタントコーヒーの味は格別だった。24時間という果てしなく長い時間を戦い[BLANK5]後の達成感は、日常のどんな仕事の成功よりも強烈なものだった。来年もまた、あの極限状態を味わい[BLANK6]、新しい装備を試してみたいと密かに考えている自分がいる。</p>",
            blanks: [
                { id: "BLANK1", options: ["きり", "がてら", "ぬく"], answer: "きり" },
                { id: "BLANK2", options: ["きり", "がてら", "ぬいた"], answer: "きり" },
                { id: "BLANK3", options: ["ぬく", "きり", "がてら"], answer: "ぬく" },
                { id: "BLANK4", options: ["がてら", "きり", "ぬく"], answer: "がてら" },
                { id: "BLANK5", options: ["ぬいた", "きり", "がてら"], answer: "ぬいた" },
                { id: "BLANK6", options: ["がてら", "きり", "ぬく"], answer: "がてら" }
            ]
        }
    },
    {
        id: 27,
        title: "Lesson 27: Evaluation, Definition & Assertions",
        grammar: [
            {
                point: "~にすぎない",
                english: "Nothing more than ~ / Merely",
                structure: "Noun / Verb (Plain form) + にすぎない",
                nuance: "Emphasizes that something is only a small, insignificant, or basic thing, and absolutely not anything great, important, or extraordinary.",
                metaphor: "Looking at an iceberg and reminding yourself that the visible part is just the very tip, nothing more.",
                examples: [
                    { topic: "Business", text: "私は一介の社員にすぎないので、会社の大きな決定権はありません。", eng: "Since I am merely a rank-and-file employee, I have no major decision-making authority in the company." },
                    { topic: "Study", text: "これはただの基本的なミスにすぎない。落ち込む必要はない。", eng: "This is nothing more than a basic mistake. There's no need to feel down." },
                    { topic: "Video games", text: "今の敵はチュートリアルの練習相手にすぎない。本番はこれからだ。", eng: "The current enemy is merely a practice opponent in the tutorial. The real thing starts now." },
                    { topic: "Language", text: "スマホの翻訳機能は便利なツールにすぎず、言葉のニュアンスまでは伝わらない。", eng: "Smartphone translation features are merely convenient tools, and cannot convey the nuances of language." },
                    { topic: "Money", text: "お金は幸せになるための手段にすぎず、目的ではない。", eng: "Money is nothing more than a means to become happy, not the goal." }
                ],
                clickingGames: [
                    { prompt: "He is just making excuses.", target: "彼はただ言い訳をしているにすぎない", words: ["彼はただ", "言い訳をしている", "にすぎない"] },
                    { prompt: "That rumor is merely speculation.", target: "その噂は単なる憶測にすぎない", words: ["その噂は", "単なる憶測に", "すぎない"] },
                    { prompt: "I merely followed his advice.", target: "私は彼のアドバイスに従ったにすぎません", words: ["私は彼の", "アドバイスに従った", "にすぎません"] },
                    { prompt: "This success is merely the result of chance.", target: "今回の成功は偶然の結果にすぎない", words: ["今回の成功は", "偶然の結果に", "すぎない"] },
                    { prompt: "That is merely a superficial problem and won't be a fundamental solution.", target: "それは表面的な問題にすぎず根本的な解決にはならない", words: ["それは表面的な", "問題にすぎず", "根本的な解決にはならない"] }
                ],
                dropdownGames: [
                    { before: "それは彼の個人的な", options: ["意見にすぎない", "意見であるにすぎない", "意見なすぎない"], answer: "意見にすぎない", after: "から、気にしなくていい。" },
                    { before: "私は少し手伝いを", options: ["したにすぎない", "するにすぎない", "してにすぎない"], answer: "したにすぎない", after: "のに、こんなに感謝されて驚いた。" },
                    { before: "これは数ある方法の", options: ["一つにすぎない", "一つなすぎない", "一つのすぎない"], answer: "一つにすぎない", after: "から、別のやり方も試してみよう。" },
                    { before: "彼はただ愛想笑いを", options: ["浮かべているにすぎない", "浮かべているのすぎない", "浮かべているなすぎない"], answer: "浮かべているにすぎない", after: "。" },
                    { before: "ほんの少し提出が", options: ["遅れたにすぎない", "遅れたのすぎない", "遅れたなすぎない"], answer: "遅れたにすぎない", after: "のに、ひどく怒られた。" }
                ],
                opinionQuestions: [
                    { text: "AI（人工知能）は、人間にとって「便利なツールにすぎない」と思いますか？", eng: "Do you think AI (Artificial Intelligence) is 'merely a convenient tool' for humans?" },
                    { text: "他人から見たらすごいことでも、あなたにとっては「ただの〜にすぎない」と思う特技はありますか？", eng: "Is there a special skill you have that others might think is amazing, but to you is 'nothing more than just ~'?" },
                    { text: "お金は人生において「手段にすぎない」という意見に賛成ですか？", eng: "Do you agree with the opinion that money is 'merely a means' in life?" }
                ]
            },
            {
                point: "~というものだ",
                english: "That is exactly what ~ is / That's the nature of ~",
                structure: "Plain form + というものだ",
                nuance: "Used to confidently state a conclusion, universal truth, or evaluation. It essentially means 'That is what we naturally call X' or 'That is the very definition of X'.",
                metaphor: "A judge firmly banging a gavel and declaring exactly what a situation represents under the universal laws of human nature.",
                examples: [
                    { topic: "Business", text: "失敗を他人のせいにするのは、無責任というものだ。", eng: "Blaming one's failures on others is exactly what irresponsibility is." },
                    { topic: "General JLPT", text: "一度も練習せずに大会で勝とうなんて、虫がいいというものだ。", eng: "Trying to win a tournament without practicing even once is exactly what asking too much (being selfish) is." },
                    { topic: "Dating", text: "困っている時に助け合うのが、本当の愛情というものだ。", eng: "Helping each other when in trouble is the very definition of true love." },
                    { topic: "Work", text: "どんなに疲れていても期限を守るのが、プロというものだ。", eng: "Keeping the deadline no matter how tired you are is exactly what being a professional is." },
                    { topic: "Life", text: "努力しても必ず報われるわけではないのが、人生というものだ。", eng: "The fact that effort is not always rewarded is the very nature of life." }
                ],
                clickingGames: [
                    { prompt: "Going home without even saying a greeting is extremely rude.", target: "挨拶もせずに帰るのは失礼というものだ", words: ["挨拶もせずに帰るのは", "失礼という", "ものだ"] },
                    { prompt: "Thinking only of your own profit is exactly what selfishness is.", target: "自分の利益だけを考えるのは自分勝手というものだ", words: ["自分の利益だけを考えるのは", "自分勝手という", "ものだ"] },
                    { prompt: "Repeating the same mistake over and over is exactly what carelessness is.", target: "何度も同じミスを繰り返すのは不注意というものだ", words: ["何度も同じミスを繰り返すのは", "不注意という", "ものだ"] },
                    { prompt: "Giving up immediately is exactly what a waste is.", target: "すぐに諦めてしまうのはもったいないというものだ", words: ["すぐに諦めてしまうのは", "もったいないという", "ものだ"] },
                    { prompt: "Devoting yourself without asking for anything in return is what true friendship is.", target: "見返りを求めずに尽くすのが真の友情というものだ", words: ["見返りを求めずに尽くすのが", "真の友情という", "ものだ"] }
                ],
                dropdownGames: [
                    { before: "自分だけ楽をしようとするのは", options: ["図々しいというものだ", "図々しいのというものだ", "図々しいなというものだ"], answer: "図々しいというものだ", after: "。" },
                    { before: "人の話を最後まで聞かないのは", options: ["失礼というものだ", "失礼だというものだ", "失礼なというものだ"], answer: "失礼というものだ", after: "。" },
                    { before: "自分が悪いのに言い訳ばかりするのは", options: ["見苦しいというものだ", "見苦しいのというものだ", "見苦しいだというものだ"], answer: "見苦しいというものだ", after: "。" },
                    { before: "努力せずに結果を求めるのは", options: ["甘いというものだ", "甘いのというものだ", "甘いなというものだ"], answer: "甘いというものだ", after: "。" },
                    { before: "これだけの作業を一日で終わらせろというのは", options: ["無理というものだ", "無理だというものだ", "無理なというものだ"], answer: "無理というものだ", after: "。" }
                ],
                opinionQuestions: [
                    { text: "あなたが「これこそがプロというものだ」と思うのはどんな行動ですか？", eng: "What kind of action makes you think 'This is exactly what being a professional is'?" },
                    { text: "社会人として「それは無責任というものだ」と思うのはどんな人ですか？", eng: "As a working adult, what kind of person makes you think 'That is exactly what irresponsibility is'?" },
                    { text: "どんな時、「人生は思い通りにいかないというものだ」と実感しますか？", eng: "When do you truly realize that 'The nature of life is that it doesn't go exactly as you want'?" }
                ]
            },
            {
                point: "~に相違ない (にそういない)",
                english: "Without a doubt ~ / Must be ~",
                structure: "Plain form + に相違ない",
                nuance: "The formal, written equivalent of `〜に違いない`. Used heavily in official contexts, news, legal documents, or extremely rigid logical deductions to say something is definitely true.",
                metaphor: "A heavy, formalized wax stamp of guarantee pressed onto an official document to verify its absolute authenticity.",
                examples: [
                    { topic: "Crime/News", text: "現場に残された証拠から見て、彼が犯人に相違ない。", eng: "Looking at the evidence left at the scene, he is without a doubt the culprit." },
                    { topic: "Business", text: "この新しい戦略は、我が社の利益を大きく向上させるに相違ない。", eng: "This new strategy will without a doubt vastly improve our company's profits." },
                    { topic: "History", text: "この古文書は、数百年前に書かれたものに相違ない。", eng: "This ancient document is without a doubt something written several hundred years ago." },
                    { topic: "Sports", text: "彼ほどの圧倒的な実力があれば、次回のオリンピックで金メダルを取るに相違ない。", eng: "With overwhelming ability like his, he will without a doubt take the gold medal at the next Olympics." },
                    { topic: "Technology", text: "AIの技術は、今後さらに我々の社会を根底から変えるに相違ない。", eng: "AI technology will without a doubt further change our society from the ground up in the future." }
                ],
                clickingGames: [
                    { prompt: "That testimony is without a doubt the truth.", target: "あの証言は事実であるに相違ない", words: ["あの証言は", "事実である", "に相違ない"] },
                    { prompt: "The one who presented these strict conditions is without a doubt him.", target: "この厳しい条件を提示したのは彼に相違ない", words: ["この厳しい条件を", "提示したのは", "彼に相違ない"] },
                    { prompt: "The global economy will without a doubt receive a massive impact.", target: "世界中の経済が大きな影響を受けるに相違ない", words: ["世界中の経済が", "大きな影響を受ける", "に相違ない"] },
                    { prompt: "The cause of this trouble is without a doubt a system error.", target: "今回のトラブルの原因はシステムのエラーに相違ない", words: ["今回のトラブルの原因は", "システムのエラーに", "相違ない"] },
                    { prompt: "If you continue efforts like this, you can absolutely achieve your goal without a doubt.", target: "このまま努力を続ければ必ず目標を達成できるに相違ない", words: ["このまま努力を続ければ", "必ず目標を達成できる", "に相違ない"] }
                ],
                dropdownGames: [
                    { before: "本人の署名があるのだから、書類は本物", options: ["に相違ない", "であるに相違ない", "なに相違ない"], answer: "に相違ない", after: "。" },
                    { before: "あの足跡は、大型の野生動物の", options: ["ものに相違ない", "ものであるに相違ない", "ものなに相違ない"], answer: "ものに相違ない", after: "。" },
                    { before: "データがこれほど明確なのだから、彼の仮説は", options: ["正しいに相違ない", "正しいであるに相違ない", "正しいのに相違ない"], answer: "正しいに相違ない", after: "。" },
                    { before: "新しい法律は、市民の生活に多大な影響を", options: ["与えるに相違ない", "与えたるに相違ない", "与えてに相違ない"], answer: "与えるに相違ない", after: "。" },
                    { before: "あの男がすべての事件を裏で", options: ["操っているに相違ない", "操っているのに相違ない", "操っているな相違ない"], answer: "操っているに相違ない", after: "。" }
                ],
                opinionQuestions: [
                    { text: "今後10年間で、「私たちの生活はこう変わるに相違ない」と確信していることは何ですか？", eng: "In the next 10 years, what are you convinced 'without a doubt our lives will change like this' about?" },
                    { text: "誰かの行動を見て、「彼は絶対に〇〇に相違ない」と強く推理した経験はありますか？", eng: "Have you ever looked at someone's actions and strongly deduced 'Without a doubt, he is ~'?" },
                    { text: "現在の気候変動について、「このままでは〇〇になるに相違ない」と危惧していることはありますか？", eng: "Regarding current climate change, is there anything you fear that 'if things continue like this, it will without a doubt become ~'?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Discussing an emerging tech startup in their industry.",
            text: "<p><strong>田中:</strong> 「最近話題になっているあの新しいAIスタートアップ企業のニュース、見たか？」</p><p><strong>佐藤:</strong> 「ああ、見たよ。独自のアルゴリズムで業務効率を劇的に上げるって触れ込みのやつだろ。でも、俺は正直疑ってるんだよな。あれは投資家から資金を集めるための、ただの大げさなプレゼン[BLANK1]気がするんだ。」</p><p><strong>田中:</strong> 「お前は相変わらず疑り深いな。確かに、まだプロトタイプの段階だし、現状では単なるテストツール[BLANK2]かもしれない。でも、彼らの開発チームには、かつて業界を牽引した天才エンジニアが何人も参加しているんだぞ。」</p><p><strong>佐藤:</strong> 「なるほど、それは知らなかった。もしそのエンジニアたちが本気を出しているのだとしたら、数年後には我々の業界の構造を根底から覆す[BLANK3]な。」</p><p><strong>田中:</strong> 「そうなんだよ。新しい技術を最初から否定して目を背けるのは、時代遅れの老害[BLANK4]よ。我々も早いうちに情報を集めて、自分たちのビジネスにどう活かせるか研究しておくべきだと思うんだ。」</p><p><strong>佐藤:</strong> 「痛いところを突くね。確かに、変化を恐れて現状維持にしがみつくのは、ビジネスマンとして怠慢[BLANK5]。来週のミーティングで、彼らの技術について少し分析してみるか。」</p><p><strong>田中:</strong> 「それがいい。俺たちもまだまだ若い世代には負けてられないからな。」</p>",
            blanks: [
                { id: "BLANK1", options: ["にすぎない", "に相違ない", "というものだ"], answer: "にすぎない" },
                { id: "BLANK2", options: ["にすぎない", "に相違ない", "というものだ"], answer: "にすぎない" },
                { id: "BLANK3", options: ["に相違ない", "というものだ", "にすぎない"], answer: "に相違ない" },
                { id: "BLANK4", options: ["というものだ", "にすぎない", "に相違ない"], answer: "というものだ" },
                { id: "BLANK5", options: ["というものだ", "に相違ない", "にすぎない"], answer: "というものだ" }
            ]
        },
        story: {
            title: "Evaluating the Heirloom",
            text: "<p>私の実家は古くから続く旧家で、蔵の中には先祖代々受け継がれてきた古い品々が山のように眠っている。先日、実家の整理を手伝っていた際、木箱に厳重に保管された一つの古い茶碗を見つけた。父は生前、「これは歴史的に非常に価値のある名品だ」と誇らしげに語っていた。私はその言葉を信じ、高名な骨董品の鑑定士に鑑定を依頼することにした。</p><p>鑑定士は虫眼鏡を取り出し、茶碗の底や表面の模様を鋭い目つきで数十分間にわたって無言で観察し続けた。やがて彼は深くため息をつき、静かに口を開いた。「結論から申し上げますと、これは江戸時代の名品を真似て作られた、単なる明治時代のレプリカ[BLANK1]。」</p><p>私は耳を疑った。「しかし、箱には由緒ある文字が書かれていますし、父は国宝級だと言っていたんですよ！」と反論した。鑑定士は首を横に振り、「箱の文字は後から誰かが書き足したもの[BLANK2]。土の質感と釉薬のヒビの入り方を見れば、現代の技術が使われていることは明らかです。専門家の目をごまかせるものではありません」と冷酷に言い放った。</p><p>私は大きなショックを受けたが、冷静になって考えてみれば、素人の父が骨董市で騙されて買ってきた品である可能性は十分にあった。自分の都合の良いストーリーだけを信じ込み、客観的な事実を見落としていたのだ。「専門家の知識を軽視し、自分の希望的観測を事実だと思い込むのは、人間の愚かさ[BLANK3]」と、私は深く反省した。この茶碗に金銭的な価値はなかったが、私に重要な人生の教訓を教えてくれたことは[BLANK4]。</p>",
            blanks: [
                { id: "BLANK1", options: ["にすぎません", "に相違ありません", "というものです"], answer: "にすぎません" },
                { id: "BLANK2", options: ["に相違ありません", "にすぎません", "というものです"], answer: "に相違ありません" },
                { id: "BLANK3", options: ["というものだ", "にすぎない", "に相違ない"], answer: "というものだ" },
                { id: "BLANK4", options: ["に相違ない", "というものだ", "にすぎない"], answer: "に相違ない" }
            ]
        }
    }, {
        id: 28,
        title: "Lesson 28: Emphasizing & Highlighting",
        grammar: [
            {
                point: "~てばかりいる / ~ばかり",
                english: "Only doing / Nothing but",
                structure: "Verb (て-form) + ばかりいる / Noun + ばかり",
                nuance: "Expresses criticism, exasperation, or surprise that someone does the exact same (usually negative) action repeatedly, to the complete exclusion of other things.",
                metaphor: "It's a broken record playing the exact same annoying track over and over again without ever switching songs.",
                examples: [
                    { topic: "Gaming", text: "休日は部屋に引きこもって、Steamでゲームをしてばかりいる。", eng: "On holidays, I shut myself in my room and do nothing but play games on Steam." },
                    { topic: "Work", text: "新入社員は自分で考えず、先輩に質問してばかりいる。", eng: "The new employee doesn't think for himself and does nothing but ask seniors questions." },
                    { topic: "Dieting", text: "ダイエット中なのに、甘いお菓子を食べてばかりいる。", eng: "Even though I'm on a diet, I do nothing but eat sweet snacks." },
                    { topic: "Smart Home", text: "最近の家電は便利すぎて、ロボット掃除機に頼ってばかりいる。", eng: "Recent home appliances are too convenient, so I'm doing nothing but relying on the robot vacuum." },
                    { topic: "Language", text: "単語の暗記をしてばかりいては、会話力は伸びない。", eng: "If you do nothing but memorize vocabulary, your conversational skills won't improve." }
                ],
                clickingGames: [
                    { prompt: "My dog does nothing but sleep on the sofa all day.", target: "愛犬は一日中ソファで寝てばかりいる", words: ["愛犬は一日中", "ソファで", "寝てばかりいる"] },
                    { prompt: "He is doing nothing but complaining about the company.", target: "彼は会社の文句を言ってばかりいる", words: ["彼は会社の", "文句を", "言ってばかりいる"] },
                    { prompt: "Because he does nothing but drink alcohol, his liver is bad.", target: "お酒を飲んでばかりいるので肝臓が悪い", words: ["お酒を", "飲んでばかりいるので", "肝臓が悪い"] },
                    { prompt: "If you do nothing but watch YouTube, your eyes will get tired.", target: "YouTubeを見てばかりいると目が疲れる", words: ["YouTubeを", "見てばかりいると", "目が疲れる"] },
                    { prompt: "He buys nothing but expensive airsoft gear.", target: "彼は高いサバゲーの装備ばかり買っている", words: ["彼は高い", "サバゲーの装備", "ばかり買っている"] }
                ],
                dropdownGames: [
                    { before: "休みの日は、家で", options: ["ゴロゴロしてばかりいる", "ゴロゴロするばかりいる", "ゴロゴロしたばかりいる"], answer: "ゴロゴロしてばかりいる", after: "。" },
                    { before: "彼は会議中、スマホを", options: ["見てばかりいる", "見るばかりいる", "見てのばかりいる"], answer: "見てばかりいる", after: "。" },
                    { before: "肉", options: ["ばかり食べている", "ばかり食べるいる", "なばかり食べている"], answer: "ばかり食べている", after: "と、健康に悪いですよ。" },
                    { before: "彼女は自分の", options: ["自慢話ばかりしている", "自慢話してばかりしている", "自慢話なばかりしている"], answer: "自慢話ばかりしている", after: "。" },
                    { before: "失敗を", options: ["恐れてばかりいては", "恐れるばかりいては", "恐れたばかりいては"], answer: "恐れてばかりいては", after: "、前に進めない。" }
                ],
                opinionQuestions: [
                    { text: "あなたが休日に、つい「〜てばかりいる」ことは何ですか？", eng: "What is something you end up 'doing nothing but ~' on your days off?" },
                    { text: "周りの人で、「文句を言ってばかりいる」または「スマホを見てばかりいる」人はいますか？", eng: "Is there someone around you who 'does nothing but complain' or 'does nothing but look at their smartphone'?" },
                    { text: "健康のために、「〜ばかり食べていては（飲んでいては）いけない」と思うものは何ですか？", eng: "For your health, what is something you think 'I shouldn't be eating (or drinking) nothing but ~'?" }
                ]
            },
            {
                point: "~さえ / ~でさえ",
                english: "Even",
                structure: "Noun + (で)さえ / Particle + さえ",
                nuance: "Gives an extreme or highly unusual example to imply that if *this* extreme case is true, then of course regular, easier cases are true.",
                metaphor: "Proving a knife is sharp by cleanly slicing through a solid brick. If it can easily cut a brick, it can definitely cut a tomato.",
                examples: [
                    { topic: "Cooking", text: "キャロライナ・リーパーは、ほんの少し触れただけでさえ指が痛くなる。", eng: "The Carolina Reaper makes your fingers hurt even if you just touch it a little bit." },
                    { topic: "Airsoft", text: "20年の経験を持つ彼でさえ、その過酷な耐久戦では疲れ果てていた。", eng: "Even he, with 20 years of experience, was completely exhausted in that grueling endurance battle." },
                    { topic: "Technology", text: "スマホの操作でさえ難しい祖父にとって、PCの設定は不可能だ。", eng: "For my grandfather who finds even operating a smartphone difficult, PC setup is impossible." },
                    { topic: "Daily Life", text: "今日は忙しすぎて、シャワーを浴びる時間さえなかった。", eng: "I was so busy today that I didn't even have time to take a shower." },
                    { topic: "Language", text: "日常会話でさえ苦労するのだから、ビジネス会議なんてまだ無理だ。", eng: "Since I struggle with even daily conversation, business meetings are still impossible." }
                ],
                clickingGames: [
                    { prompt: "Even adults can't solve such a difficult math problem.", target: "そんな難しい数学の問題は大人でさえ解けない", words: ["そんな難しい数学の問題は", "大人でさえ", "解けない"] },
                    { prompt: "I don't even have 100 yen in my wallet today.", target: "今日は財布の中に100円さえ入っていない", words: ["今日は財布の中に", "100円さえ", "入っていない"] },
                    { prompt: "I was so shocked that I couldn't even shed a tear.", target: "ショックのあまり涙さえ出なかった", words: ["ショックのあまり", "涙さえ", "出なかった"] },
                    { prompt: "He can't even remember his own phone number.", target: "彼は自分の電話番号さえ覚えられない", words: ["彼は自分の", "電話番号さえ", "覚えられない"] },
                    { prompt: "Even professional gamers struggled to clear this stage.", target: "プロゲーマーでさえこのステージのクリアには苦労した", words: ["プロゲーマーでさえ", "このステージのクリアには", "苦労した"] }
                ],
                dropdownGames: [
                    { before: "こんな簡単な漢字、", options: ["小学生でさえ", "小学生なさえ", "小学生のさえ"], answer: "小学生でさえ", after: "読めるよ。" },
                    { before: "忙しくて、", options: ["水さえ飲む", "水を飲むさえ", "水を飲むことさえ"], answer: "水を飲むことさえ", after: "忘れていた。" },
                    { before: "熱が高くて、", options: ["起き上がることさえ", "起き上がるのさえ", "起き上がるにさえ"], answer: "起き上がることさえ", after: "できない。" },
                    { before: "専門家", options: ["でさえ", "にさえ", "をさえ"], answer: "でさえ", after: "、そのウイルスの原因を特定できなかった。" },
                    { before: "彼は、", options: ["親にさえ", "親でさえ", "親をさえ"], answer: "親にさえ", after: "自分の本当の気持ちを話さない。" }
                ],
                opinionQuestions: [
                    { text: "あなたが「プロでさえ失敗するほど難しい」と思うスポーツやゲームは何ですか？", eng: "What is a sport or game you think is 'so difficult that even professionals fail at it'?" },
                    { text: "今までで一番忙しかった時、「〜する時間さえなかった」という経験はありますか？", eng: "When you were the busiest you've ever been, did you have an experience where you 'didn't even have time to ~'?" },
                    { text: "外国語の勉強で、「簡単な挨拶でさえ〜」と苦労したことはありますか？", eng: "In foreign language study, have you ever struggled, thinking 'Even simple greetings are ~'?" }
                ]
            },
            {
                point: "~てこそ",
                english: "Only when you do ~ / Precisely because you do ~",
                structure: "Verb (て-form) + こそ",
                nuance: "Emphasizes that an action is an absolute prerequisite to truly understand, achieve, or appreciate something. It highlights the indispensable value of that specific experience.",
                metaphor: "The physical key that unlocks a treasure chest. You can stare at the chest all day, but *only by turning the key* do you actually get the gold inside.",
                examples: [
                    { topic: "Experience", text: "何度も失敗を経験してこそ、本当の実力が身につく。", eng: "Only when you experience failure many times do you acquire true ability." },
                    { topic: "Cooking", text: "自分で苦労してスパイスを配合してこそ、最高のカレーが完成する。", eng: "Precisely because you take the trouble to blend the spices yourself, the best curry is completed." },
                    { topic: "Airsoft", text: "ルールを厳格に守ってこそ、サバゲーは安全に楽しめるスポーツになる。", eng: "Only by strictly following the rules does airsoft become a safely enjoyable sport." },
                    { topic: "Travel", text: "現地の人々と直接話してこそ、その国の本当の文化が理解できる。", eng: "Only when you talk directly with the local people can you understand the true culture of that country." },
                    { topic: "Management", text: "チームの意見に耳を傾けてこそ、リーダーとして信頼される。", eng: "Only when you listen to the team's opinions are you trusted as a leader." }
                ],
                clickingGames: [
                    { prompt: "Only when we cooperate can we achieve this big project.", target: "協力し合ってこそこの大きなプロジェクトは達成できる", words: ["協力し合ってこそ", "この大きなプロジェクトは", "達成できる"] },
                    { prompt: "Only by overcoming hardships does life become interesting.", target: "苦労を乗り越えてこそ人生は面白くなる", words: ["苦労を乗り越えてこそ", "人生は", "面白くなる"] },
                    { prompt: "Only by going to the actual location can you understand the atmosphere.", target: "実際に現地へ行ってこそその雰囲気が理解できる", words: ["実際に現地へ", "行ってこそ", "その雰囲気が理解できる"] },
                    { prompt: "Precisely because you convey your feelings in your own words, the other person's heart will be moved.", target: "自分の言葉で気持ちを伝えてこそ相手の心は動く", words: ["自分の言葉で", "気持ちを伝えてこそ", "相手の心は動く"] },
                    { prompt: "Only when you practice daily does your skill improve.", target: "毎日練習を続けてこそ技術は向上する", words: ["毎日練習を続けてこそ", "技術は", "向上する"] }
                ],
                dropdownGames: [
                    { before: "親元を", options: ["離れてこそ", "離れるこそ", "離れたこそ"], answer: "離れてこそ", after: "、家族のありがたみが分かる。" },
                    { before: "たくさん", options: ["本を読んでこそ", "本を読むこそ", "本を読んだこそ"], answer: "本を読んでこそ", after: "、豊かな語彙力が身につく。" },
                    { before: "健康な", options: ["体があってこそ", "体があるこそ", "体があったこそ"], answer: "体があってこそ", after: "、仕事も遊びも全力で楽しめる。" },
                    { before: "お互いに", options: ["本音をぶつけ合ってこそ", "本音をぶつけ合うこそ", "本音をぶつけ合ったこそ"], answer: "本音をぶつけ合ってこそ", after: "、真の友情が生まれる。" },
                    { before: "自分で", options: ["汗を流して働いてこそ", "汗を流す働いてこそ", "汗を流した働いてこそ"], answer: "汗を流して働いてこそ", after: "、お金の価値が理解できる。" }
                ],
                opinionQuestions: [
                    { text: "あなたの仕事や趣味において、「〜してこそ本当の楽しさが分かる」と思うことは何ですか？", eng: "In your work or hobby, what is something you think 'only by doing ~ can you understand the true fun'?" },
                    { text: "「親元を離れてこそ（または一人暮らしをしてこそ）、家族のありがたみが分かる」という意見に賛成ですか？", eng: "Do you agree with the opinion that 'only by leaving your parents' home (or living alone) do you appreciate your family'?" },
                    { text: "語学の学習において、「〜してこそ実力が伸びる」と思う一番の方法は何ですか？", eng: "In learning a language, what is the best method where you think 'only by doing ~ does your ability grow'?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Discussing the difficult art of growing and eating super-hot chili peppers.",
            text: "<p><strong>田中:</strong> 「最近、庭の家庭菜園にすっかりハマっててさ。特に、ハバネロとかキャロライナ・リーパーみたいな激辛の唐辛子を育てて[BLANK1]んだよ。」</p><p><strong>佐藤:</strong> 「キャロライナ・リーパーって、あの世界一辛いって言われてるやつか？激辛料理が好きな俺[BLANK2]、さすがにあの辛さには耐えられなかった記憶があるぞ。あれはもはや兵器だろ。」</p><p><strong>田中:</strong> 「そうなんだよ。育てるのも温度管理や水やりがすごく難しくてね。ちょっと気を抜くとすぐ枯れちゃうんだ。でも、毎日丁寧に手入れをして、苦労して育て[BLANK3]、収穫した時の達成感が半端じゃないんだよ。」</p><p><strong>佐藤:</strong> 「なるほどな。でも、収穫した激辛唐辛子はどうやって食べるんだ？まさかそのままかじるわけじゃないだろ？」</p><p><strong>田中:</strong> 「まさか。特製のメキシコ料理のサルサソースに混ぜたり、スパイスカレーの隠し味に使ったりするんだ。辛みの中にフルーティーな香りがあるんだよ。今度週末にうちに来いよ、俺が作った最高のタコスを振る舞ってやるからさ。」</p><p><strong>佐藤:</strong> 「おっ、それは楽しみだな。胃薬をしっかり準備して遊びに行かせてもらうよ。」</p>",
            blanks: [
                { id: "BLANK1", options: ["ばかりいる", "さえ", "こそ"], answer: "ばかりいる" },
                { id: "BLANK2", options: ["でさえ", "ばかり", "てこそ"], answer: "でさえ" },
                { id: "BLANK3", options: ["てこそ", "でさえ", "てばかりいて"], answer: "てこそ" }
            ]
        },
        story: {
            title: "Tuning the Perfect Home Theater",
            text: "<p>新しい家に引っ越してからというもの、休日は完全に部屋に引きこもり、暗くしたリビングで映画を見て[BLANK1]。念願だった自分専用のホームシアターを構築したからだ。天井にAnkerの4K対応プロジェクターを吊るし、正面にはデノンの高性能センタースピーカー、さらに部屋の隅には重低音を地響きのように響かせるSVSのサブウーファーを配置した。</p><p>機材さえ揃えばすぐに最高の環境が手に入ると思っていたが、オーディオの世界はそんなに甘くはなかった。機材の配線やアンプの設定は非常に複雑で、長年さまざまな電子機器を触ってきた私[BLANK2]、最初は各スピーカーの音のバランスを取るのに四苦八苦した。低音が強すぎてセリフが聞き取れなかったり、映像と音声のタイミングが微妙にズレたりしたのだ。</p><p>しかし、オーディオ設定の難解なマニュアルと格闘し、壁の反響やスピーカーの角度をミリ単位で調整し、休日の何時間も費やして音響をセッティングし[BLANK3]、映画館にも劣らない究極の没入感を手に入れることができるのだ。今では、週末に焼きたてのピザを食べながら、最高の音響でSF映画やアクション映画を見るのが至福の時間となっている。大人の趣味としては、これ以上贅沢な時間はないだろう。</p>",
            blanks: [
                { id: "BLANK1", options: ["ばかりいる", "さえ", "こそ"], answer: "ばかりいる" },
                { id: "BLANK2", options: ["でさえ", "ばかり", "てこそ"], answer: "でさえ" },
                { id: "BLANK3", options: ["てこそ", "でさえ", "てばかりいて"], answer: "てこそ" }
            ]
        }
    },
    {
        id: 29,
        title: "Lesson 29: Speculation & Possibility",
        grammar: [
            {
                point: "~恐れがある (おそれがある)",
                english: "There is a fear that / Danger of",
                structure: "Verb (Dictionary form) / Noun + の + 恐れがある",
                nuance: "Used in formal warnings, news reports, and manuals to state that a bad outcome is objectively possible. It implies a sense of impending danger.",
                metaphor: "A weather siren blaring loudly before a tornado strikes. It is an official, objective warning that bad things are highly likely to happen.",
                examples: [
                    { topic: "Weather", text: "台風が接近しているため、明日の屋外イベントは中止になる恐れがある。", eng: "Because a typhoon is approaching, there is a fear that tomorrow's outdoor event will be canceled." },
                    { topic: "Security", text: "簡単なパスワードを使い回すと、アカウントを乗っ取られる恐れがある。", eng: "If you reuse simple passwords, there is a danger of your account being hijacked." },
                    { topic: "Health", text: "激辛のジョロキアを素手で触ると、皮膚が炎症を起こす恐れがある。", eng: "If you touch a super-hot Jolokia with bare hands, there is a fear that your skin will become inflamed." },
                    { topic: "Business", text: "このまま売上が低下し続ければ、プロジェクトが凍結される恐れがある。", eng: "If sales continue to decline like this, there is a fear that the project will be frozen." },
                    { topic: "Airsoft", text: "フィールド内でゴーグルを着用しないと、失明する恐れがある。", eng: "If you don't wear goggles inside the field, there is a danger of losing your eyesight." }
                ],
                clickingGames: [
                    { prompt: "If you work too much, there is a fear you will damage your health.", target: "働きすぎると健康を害する恐れがある", words: ["働きすぎると", "健康を害する", "恐れがある"] },
                    { prompt: "Due to the heavy snow, there is a fear the trains will stop.", target: "大雪のため電車が止まる恐れがある", words: ["大雪のため", "電車が止まる", "恐れがある"] },
                    { prompt: "If personal information is leaked, it will become a huge problem.", target: "個人情報が漏洩する恐れがある", words: ["個人情報が", "漏洩する", "恐れがある"] },
                    { prompt: "If we don't improve the product, there is a fear we will lose customers.", target: "製品を改良しないと客を失う恐れがある", words: ["製品を改良しないと", "客を失う", "恐れがある"] },
                    { prompt: "There is a fear of infection if you don't wash your hands.", target: "手を洗わないと感染の恐れがある", words: ["手を洗わないと", "感染の", "恐れがある"] }
                ],
                dropdownGames: [
                    { before: "強い地震の後は、津波", options: ["の恐れがある", "な恐れがある", "恐れがある"], answer: "の恐れがある", after: "ため海に近づかないでください。" },
                    { before: "この薬は、強い眠気を", options: ["引き起こす恐れがある", "引き起こした恐れがある", "引き起こして恐れがある"], answer: "引き起こす恐れがある", after: "。" },
                    { before: "システムの欠陥により、顧客データが", options: ["消える恐れがある", "消えた恐れがある", "消えて恐れがある"], answer: "消える恐れがある", after: "。" },
                    { before: "この建物の壁は、老朽化により", options: ["崩れる恐れがある", "崩れて恐れがある", "崩れた恐れがある"], answer: "崩れる恐れがある", after: "。" },
                    { before: "不適切な発言は、大きな誤解を", options: ["招く恐れがある", "招いた恐れがある", "招いて恐れがある"], answer: "招く恐れがある", after: "。" }
                ],
                opinionQuestions: [
                    { text: "あなたの仕事や学校で、「ルールを守らないと〇〇になる恐れがある」と警告されていることは何ですか？", eng: "In your work or school, what are you warned about, saying 'If you don't follow the rules, there is a fear that ~'?" },
                    { text: "インターネットを使う際、一番「個人情報が漏れる恐れがある」と感じる瞬間はいつですか？", eng: "When using the internet, when do you most feel 'there is a fear that personal information will leak'?" },
                    { text: "最近の環境問題を見ていて、「将来〇〇になる恐れがある」と心配していることは何ですか？", eng: "Watching recent environmental issues, what are you worried about, thinking 'There is a fear it will become ~ in the future'?" }
                ]
            },
            {
                point: "~得る / ~得ない (うる / えない)",
                english: "Can / Cannot / Possible to",
                structure: "Verb (stem) + 得る / 得ない",
                nuance: "Focuses on objective possibility or impossibility, not on personal ability. It means 'it can happen' or 'it cannot happen' in reality.",
                metaphor: "Flipping a coin. Landing on heads or tails is 'possible' (あり得る), but landing on a totally new, unpainted color is completely 'impossible' (あり得ない).",
                examples: [
                    { topic: "Technology", text: "AIの進化により、これまで不可能だったデータ処理が可能になり得る。", eng: "Due to the evolution of AI, data processing that was previously impossible can become possible." },
                    { topic: "Business", text: "彼のようなベテランが、あんな初歩的なミスをするとはあり得ない。", eng: "It's impossible that a veteran like him would make such a basic mistake." },
                    { topic: "Future", text: "私たちが100歳まで生きることも、現代の医学なら十分にあり得る話だ。", eng: "With modern medicine, us living to 100 years old is a completely possible story." },
                    { topic: "Trust", text: "あのチームが約束を破るなんて、絶対にあり得ないことだ。", eng: "It is absolutely impossible that that team would break their promise." },
                    { topic: "Gaming", text: "バグを利用しない限り、このゲームを1分でクリアするなんてあり得ない。", eng: "Unless you exploit a bug, clearing this game in 1 minute is impossible." }
                ],
                clickingGames: [
                    { prompt: "Such a severe accident could happen to anyone.", target: "あんな大事故は誰にでも起こり得る", words: ["あんな大事故は", "誰にでも", "起こり得る"] },
                    { prompt: "It is impossible that my smartphone was hacked.", target: "私のスマホがハッキングされたなんてあり得ない", words: ["私のスマホが", "ハッキングされたなんて", "あり得ない"] },
                    { prompt: "We must consider all possible risks in advance.", target: "考え得るすべてのリスクを事前に検討すべきだ", words: ["考え得るすべての", "リスクを事前に", "検討すべきだ"] },
                    { prompt: "It's impossible that he would betray his comrades.", target: "彼が仲間を裏切るなんて信じ得ないことだ", words: ["彼が仲間を", "裏切るなんて", "信じ得ないことだ"] },
                    { prompt: "Is a scenario where we win still possible?", target: "我々が勝利するシナリオはまだあり得るのか", words: ["我々が勝利する", "シナリオはまだ", "あり得るのか"] }
                ],
                dropdownGames: [
                    { before: "あの温厚な彼が暴力を振るうなんて、絶対に", options: ["あり得ない", "ある得ない", "あって得ない"], answer: "あり得ない", after: "。" },
                    { before: "宇宙人が存在することも、科学的には十分に", options: ["あり得る", "ある得る", "あって得る"], answer: "あり得る", after: "話だ。" },
                    { before: "想定し", options: ["得る", "得るの", "得たの"], answer: "得る", after: "最悪の事態に備えておく必要がある。" },
                    { before: "これ以上のコスト削減は、今の技術では", options: ["なし得ない", "なす得ない", "なし得るない"], answer: "なし得ない", after: "。" },
                    { before: "彼が一人で会社を立ち上げるなんて、十分に", options: ["考え得る", "考える得る", "考えて得る"], answer: "考え得る", after: "選択肢だ。" }
                ],
                opinionQuestions: [
                    { text: "あなたの人生で、「あんな奇跡が起きるなんてあり得ない！」と驚いた出来事はありますか？", eng: "In your life, have you ever been surprised by an event, thinking 'It's impossible for such a miracle to happen!'?" },
                    { text: "10年後の未来で、空飛ぶ車が普及することは「あり得る」と思いますか？", eng: "Do you think it is 'possible' that flying cars will become widespread in the future 10 years from now?" },
                    { text: "仕事やプロジェクトで、「考え得る最悪の事態」を想定して動くタイプですか？", eng: "In work or projects, are you the type to act by anticipating 'the worst possible situation'?" }
                ]
            },
            {
                point: "~ようがない / ~ようもない",
                english: "There is no way to / Cannot possibly",
                structure: "Verb (stem) + ようがない",
                nuance: "It is physically or logically impossible to do something because the means, methods, or tools are completely missing. You want to do it, but the path is blocked.",
                metaphor: "Being asked to paint a beautiful masterpiece, but you have no canvas, no paint, and no brushes. There is literally no way to do it.",
                examples: [
                    { topic: "Computers", text: "バックアップを取る前にPCが壊れてしまったので、データを復元しようがない。", eng: "Because the PC broke before I took a backup, there is no way to restore the data." },
                    { topic: "Communication", text: "スマホを落として連絡先をすべて消してしまったので、彼に謝りようがない。", eng: "Because I dropped my smartphone and erased all contacts, there is no way to apologize to him." },
                    { topic: "Expression", text: "この4K映像の圧倒的な美しさは、言葉では表現しようがない。", eng: "The overwhelming beauty of this 4K footage has no way of being expressed in words." },
                    { topic: "Directions", text: "地図もスマホもない状態では、初めての目的地にたどり着きようがない。", eng: "In a state with no map or smartphone, there is no way to reach a first-time destination." },
                    { topic: "Cooking", text: "火をつけたまま寝て焦げて真っ黒になった肉は、もうどう調理しようもない。", eng: "Meat that has become pitch-black burnt from sleeping with the fire on has no way to be cooked anymore." }
                ],
                clickingGames: [
                    { prompt: "Since he isn't answering the phone, there is no way to contact him.", target: "彼が電話に出ないのだから連絡の取りようがない", words: ["彼が電話に出ないのだから", "連絡の", "取りようがない"] },
                    { prompt: "I don't know the reason, so there is no way to fix the bug.", target: "理由がわからないのでバグの直ししようがない", words: ["理由がわからないので", "バグの", "直ししようがない"] },
                    { prompt: "Since I didn't see the evidence, there is no way to believe it.", target: "証拠を見ていないのだから信じようがない", words: ["証拠を見ていないのだから", "信じ", "ようがない"] },
                    { prompt: "The vase shattered completely, so there is no way to repair it.", target: "花瓶が粉々に割れてしまったので修理しようがない", words: ["花瓶が粉々に割れてしまったので", "修理し", "ようがない"] },
                    { prompt: "His excuse was so absurd I had no way to reply.", target: "彼の言い訳があまりにひどくて返答のしようがなかった", words: ["彼の言い訳があまりにひどくて", "返答の", "しようがなかった"] }
                ],
                dropdownGames: [
                    { before: "これだけ情報が少ないと、彼を探し", options: ["ようがない", "ようもない", "るようがない"], answer: "ようがない", after: "。" },
                    { before: "あまりにも素晴らしい景色で、言葉で表現し", options: ["ようがない", "ようもない", "てようがない"], answer: "ようがない", after: "。" },
                    { before: "相手の名前も顔も知らないのだから、文句の言い", options: ["ようがない", "ようがない", "るようがない"], answer: "ようがない", after: "。" },
                    { before: "パスワードを忘れてしまったら、システムにログインし", options: ["ようがない", "ようもない", "るようがない"], answer: "ようがない", after: "。" },
                    { before: "彼がどこに住んでいるか分からないから、荷物を送り", options: ["ようがない", "ようもない", "るようがない"], answer: "ようがない", after: "。" }
                ],
                opinionQuestions: [
                    { text: "あまりにも感動して（または驚いて）、「言葉では表現しようがない」と感じた景色や体験はありますか？", eng: "Is there a scenery or experience you were so moved (or surprised) by that you felt 'There is no way to express this in words'?" },
                    { text: "パソコンやスマホが壊れてしまって、データが「復元しようがなかった」という悲しい経験はありますか？", eng: "Do you have a sad experience where your PC or smartphone broke and the data had 'no way to be restored'?" },
                    { text: "道に迷った時、スマホも地図もなくて「たどり着きようがなかった」ことはありますか？", eng: "When lost, have you ever had 'no way to reach your destination' because you had no smartphone or map?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Discussing the risks and conveniences of automating their homes.",
            text: "<p><strong>田中:</strong> 「先月、家中のスイッチやカーテンをSwitchBotで自動化してスマートホームにしたんだ。毎朝決まった時間にカーテンが開いて太陽の光で起きられるのは、想像以上に快適だよ。」</p><p><strong>佐藤:</strong> 「俺も興味はあるんだけど、ネットワークの不具合で突然動かなくなったりする[BLANK1]って考えると、導入をためらっちゃうんだよね。もし真冬に暖房がつかなくなったら最悪だろ？」</p><p><strong>田中:</strong> 「確かに、Wi-Fiのルーターがダウンした時は、電気の消し方すら分からなくなってどうし[BLANK2]状況になったことはあるよ。スマホがないと物理的にも操作できない機器があるからな。」</p><p><strong>佐藤:</strong> 「やっぱりそうか。アナログな物理スイッチのほうが、結局は一番確実で安心なんじゃないか？」</p><p><strong>田中:</strong> 「まあ、一理ある。でも、ベッドに寝転がったまま『おやすみ』と声をかけるだけで、家中の照明やエアコン、さらには施錠まですべてオフになる便利さを一度味わってしまったら、もう昔のアナログな生活には戻り[BLANK3]んだよ。人間って、一度楽を覚えると本当に怠惰になる生き物だな。」</p><p><strong>佐藤:</strong> 「ははは、間違いないな。じゃあ、俺もまずはリスクの少ないリビングの照明だけでもスマート化してみるかな。」</p>",
            blanks: [
                { id: "BLANK1", options: ["恐れがある", "得る", "ようがない"], answer: "恐れがある" },
                { id: "BLANK2", options: ["ようがない", "得る", "恐れがある"], answer: "ようがない" },
                { id: "BLANK3", options: ["得ない", "恐れがある", "ようがない"], answer: "得ない" }
            ]
        },
        story: {
            title: "Implementing Modern English Training",
            text: "<p>ラクスルの人事部に所属している私の重要なミッションの一つは、社員向けの英語研修カリキュラムを企画・運営することだ。事業のグローバル化が進む中、社内の公用語を英語にする動きも視野に入っており、社員の語学力向上は急務となっている。しかし、通常業務で常に忙しいエンジニアやセールスのメンバーに対して、過度な課題や長時間の講義を強制的に押し付けてしまっては、彼らの働くモチベーションを完全に削いでしまう[BLANK1]。</p><p>そのため、私は研修のあり方を根本から見直し、負担の少ないオンラインのショートセッションを毎日のルーティンに組み込む方針を打ち出した。最初は「今の激務の中で、毎日英語の勉強時間を確保するなんてあり[BLANK2]」と反発するマネージャー陣も多かった。</p><p>しかし、私は各部署のリーダーたちと何度も面談を重ね、業務時間の一部を研修に充てる妥協点を見つけ出した。語学の習得は一朝一夕で成し遂げられるものではない。魔法のように全員が急に英語をペラペラ話し始めるなどという都合の良い話は、この世に存在し[BLANK3]のだ。だからこそ、日々の小さな積み重ねをしっかりと評価し、長期的な視点で社員の成長をサポートする環境を作ることが、人事としての私の最大の責任である。</p>",
            blanks: [
                { id: "BLANK1", options: ["恐れがある", "得ない", "ようがない"], answer: "恐れがある" },
                { id: "BLANK2", options: ["得ない", "ようがない", "恐れがある"], answer: "得ない" },
                { id: "BLANK3", options: ["ようがない", "得ない", "恐れがある"], answer: "ようがない" }
            ]
        }
    }, {
        id: 30,
        title: "Lesson 30: Extremes, Causes & Perspectives",
        grammar: [
            {
                point: "~どころか",
                english: "Far from ~ (It's actually the opposite)",
                structure: "Verb / Adj (Plain form) / Noun + どころか",
                nuance: "Used to strongly deny an expectation or assumption, stating that the reality is completely the opposite, or that the situation is far more extreme than anticipated.",
                metaphor: "It's like expecting a gentle breeze and getting hit by a category 5 hurricane instead. The reality completely obliterates the initial expectation.",
                examples: [
                    { topic: "Health", text: "少し休めば治ると思ったが、良くなるどころかますます悪化している。", eng: "I thought it would heal if I rested a little, but far from getting better, it's getting worse." },
                    { topic: "Business", text: "このプロジェクトは利益が出るどころか、大赤字を生み出している。", eng: "Far from generating a profit, this project is producing a massive deficit." },
                    { topic: "Language", text: "彼は英語が話せるどころか、フランス語と中国語もペラペラだ。", eng: "Far from just being able to speak English, he is also fluent in French and Chinese." },
                    { topic: "Dating", text: "彼女は怒っているどころか、むしろ呆れて言葉も出ないようだった。", eng: "Far from being angry, she seemed rather so exasperated she couldn't even speak." },
                    { topic: "Weather", text: "今日は涼しいどころか、凍えるほど寒い。", eng: "Far from being cool today, it is freezing cold." }
                ],
                clickingGames: [
                    { prompt: "Far from saving money, my expenses are actually increasing.", target: "貯金できるどころか出費は増える一方だ", words: ["貯金できる", "どころか", "出費は増える一方だ"] },
                    { prompt: "Far from being quiet, the neighbor's room is incredibly noisy.", target: "静かなどころか隣の部屋はものすごくうるさい", words: ["静かなどころか", "隣の部屋は", "ものすごくうるさい"] },
                    { prompt: "Far from praising me, the boss got furiously angry.", target: "褒められるどころか上司に激怒されてしまった", words: ["褒められる", "どころか", "上司に激怒されてしまった"] },
                    { prompt: "Far from losing weight, I gained 3 kilograms.", target: "痩せるどころか逆に3キロも太ってしまった", words: ["痩せるどころか", "逆に", "3キロも太ってしまった"] },
                    { prompt: "Far from being a beginner, he is a top-level pro gamer.", target: "彼は初心者どころかトップレベルのプロゲーマーだ", words: ["彼は初心者どころか", "トップレベルの", "プロゲーマーだ"] }
                ],
                dropdownGames: [
                    { before: "今日の会議は", options: ["早く終わるどころか", "早く終わったどころか", "早く終わってどころか"], answer: "早く終わるどころか", after: "、深夜まで延長された。" },
                    { before: "そのホテルは", options: ["綺麗などころか", "綺麗なだどころか", "綺麗のどころか"], answer: "綺麗などころか", after: "、廃墟のようにボロボロだった。" },
                    { before: "薬を飲んだのに、", options: ["治るどころか", "治るのどころか", "治ってどころか"], answer: "治るどころか", after: "熱がさらに上がってきた。" },
                    { before: "彼は反省", options: ["しているどころか", "しているのどころか", "しているだどころか"], answer: "しているどころか", after: "、他人のせいにしている。" },
                    { before: "夏休みは", options: ["暇などころか", "暇だどころか", "暇いどころか"], answer: "暇などころか", after: "、仕事の締め切りに追われて地獄だった。" }
                ],
                opinionQuestions: [
                    { text: "あなたが最近経験した、「〜どころか、むしろ〜だった」という驚きの出来事は何ですか？", eng: "What is a surprising event you recently experienced where 'Far from ~, it was actually ~'?" },
                    { text: "映画やゲームで、「つまらないどころか、最高傑作だった！」という作品はありますか？", eng: "Is there a movie or game where you thought 'Far from being boring, it was a masterpiece!'?" },
                    { text: "「節約するどころか、逆にお金を使ってしまった」という買い物の失敗談を教えてください。", eng: "Tell me a shopping failure story where 'Far from saving money, you actually spent more'." }
                ]
            },
            {
                point: "~ばかりに",
                english: "Simply because ~ (Caused a negative result)",
                structure: "Verb (た-form) / Adj / Noun + ばかりに",
                nuance: "Expresses deep regret or frustration that one single, often minor, action or condition caused a terribly negative outcome. It implies 'If only I hadn't done that one thing...'",
                metaphor: "It's like tripping over a single tiny pebble on the sidewalk and watching your magnificent, multi-tiered wedding cake fall out of your hands and smash onto the ground.",
                examples: [
                    { topic: "Business", text: "少し確認を怠ったばかりに、数百万の損失を出してしまった。", eng: "Simply because I neglected to check for a moment, I caused a loss of several millions." },
                    { topic: "Dating", text: "つまらない意地を張ったばかりに、一番大切な彼女を失ってしまった。", eng: "Simply because I was stubbornly prideful over something silly, I lost my most important girlfriend." },
                    { topic: "Travel", text: "パスポートを忘れたばかりに、飛行機に乗れなかった。", eng: "Simply because I forgot my passport, I couldn't get on the airplane." },
                    { topic: "Computers", text: "怪しいリンクをクリックしたばかりに、パソコンがウイルスに感染した。", eng: "Simply because I clicked a suspicious link, my PC got infected with a virus." },
                    { topic: "Airsoft", text: "ルールを破ってゴーグルを外したばかりに、目に大怪我を負った。", eng: "Simply because he broke the rule and took off his goggles, he suffered a severe eye injury." }
                ],
                clickingGames: [
                    { prompt: "Simply because I overslept, I missed the important meeting.", target: "寝坊したばかりに重要な会議に遅刻してしまった", words: ["寝坊した", "ばかりに", "重要な会議に遅刻してしまった"] },
                    { prompt: "Simply because he is kind, he gets pushed with bothersome tasks.", target: "彼は親切なばかりに面倒な仕事を押し付けられる", words: ["彼は親切な", "ばかりに", "面倒な仕事を押し付けられる"] },
                    { prompt: "Simply because I got drunk, I revealed a terrible secret.", target: "お酒に酔ったばかりにひどい秘密を暴露してしまった", words: ["お酒に酔った", "ばかりに", "ひどい秘密を暴露してしまった"] },
                    { prompt: "Simply because I misunderstood the time, I made the customer wait.", target: "時間を勘違いしたばかりに客を待たせてしまった", words: ["時間を勘違いした", "ばかりに", "客を待たせてしまった"] },
                    { prompt: "Simply because I bought a cheap cable, the device broke.", target: "安いケーブルを買ったばかりに機器が壊れた", words: ["安いケーブルを買った", "ばかりに", "機器が壊れた"] }
                ],
                dropdownGames: [
                    { before: "私が余計な一言を", options: ["言ったばかりに", "言うばかりに", "言ってばかりに"], answer: "言ったばかりに", after: "、彼を深く傷つけてしまった。" },
                    { before: "スマホを家に", options: ["忘れたばかりに", "忘れるばかりに", "忘れてばかりに"], answer: "忘れたばかりに", after: "、今日一日何も連絡が取れなかった。" },
                    { before: "彼女は気が", options: ["弱いばかりに", "弱いのばかりに", "弱くばかりに"], answer: "弱いばかりに", after: "、いつも損をしている。" },
                    { before: "社長", options: ["であるばかりに", "だばかりに", "なばかりに"], answer: "であるばかりに", after: "、会社のすべての借金を背負うことになった。" },
                    { before: "確認ボタンを", options: ["押し間違えたばかりに", "押し間違えるばかりに", "押し間違えてばかりに"], answer: "押し間違えたばかりに", after: "、データがすべて消去された。" }
                ],
                opinionQuestions: [
                    { text: "過去に「〜したばかりに、とんでもないことになった」と後悔している失敗談はありますか？", eng: "Do you have a failure story from the past where you regretted, 'Simply because I did ~, a terrible thing happened'?" },
                    { text: "「親切なばかりに、損をしている」と感じる人はあなたの周りにいますか？", eng: "Is there someone around you who you feel 'suffers a loss simply because they are kind'?" },
                    { text: "日常のちょっとした不注意（確認を怠ったばかりに等）で、トラブルになった経験はありますか？", eng: "Have you ever had a little daily carelessness (simply because you neglected to check, etc.) turn into trouble?" }
                ]
            },
            {
                point: "~からいうと / ~からいえば",
                english: "From the perspective of / Judging from",
                structure: "Noun + からいうと / からいえば / からいって",
                nuance: "Used to state a judgment or evaluation based on a specific standpoint, fact, or aspect. It highlights the exact criteria being used to make the judgment.",
                metaphor: "Looking at a multi-faceted diamond through a jeweler's magnifying glass. You are choosing to focus on one specific angle (e.g., clarity) to judge its value, ignoring its weight or color for the moment.",
                examples: [
                    { topic: "Business", text: "私の経験からいうと、このプロジェクトは来月までに終わらない。", eng: "Judging from my experience, this project won't finish by next month." },
                    { topic: "Technology", text: "スペックからいえば、このパソコンが今の市場で最高だ。", eng: "From the perspective of specs, this PC is the best in the current market." },
                    { topic: "General JLPT", text: "現状のデータからいって、売上の回復は絶望的です。", eng: "Judging from the current data, sales recovery is hopeless." },
                    { topic: "Real Estate", text: "家賃の安さからいうと魅力的だが、駅から遠すぎる。", eng: "From the perspective of cheap rent it's attractive, but it's too far from the station." },
                    { topic: "Airsoft", text: "フィールドの広さからいうと、長距離のスナイパーライフルが有利だ。", eng: "Judging from the size of the field, long-range sniper rifles are advantageous." }
                ],
                clickingGames: [
                    { prompt: "Judging from the current symptoms, it's highly likely to be influenza.", target: "現在の症状からいうとインフルエンザの可能性が高い", words: ["現在の症状", "からいうと", "インフルエンザの可能性が高い"] },
                    { prompt: "From the perspective of consumers, cheaper prices are better.", target: "消費者の立場からいえば価格は安い方がいい", words: ["消費者の立場", "からいえば", "価格は安い方がいい"] },
                    { prompt: "Judging from the user reviews, this game is a masterpiece.", target: "ユーザーの評価からいってこのゲームは名作だ", words: ["ユーザーの評価", "からいって", "このゲームは名作だ"] },
                    { prompt: "From a professional's perspective, his form is completely wrong.", target: "プロの視点からいうと彼のフォームは全く間違っている", words: ["プロの視点", "からいうと", "彼のフォームは全く間違っている"] },
                    { prompt: "Judging from her personality, she won't accept this offer.", target: "彼女の性格からいってこの提案は受け入れないだろう", words: ["彼女の性格", "からいって", "この提案は受け入れないだろう"] }
                ],
                dropdownGames: [
                    { before: "コストの面", options: ["からいうと", "にからいうと", "をからいうと"], answer: "からいうと", after: "、このプランは現実的ではありません。" },
                    { before: "経営者", options: ["の立場からいえば", "の立場にからいえば", "の立場をからいえば"], answer: "の立場からいえば", after: "、人員削減は避けられない決断だ。" },
                    { before: "過去のデータ", options: ["からいって", "にからいって", "をからいって"], answer: "からいって", after: "、この時期は必ず売上が落ちます。" },
                    { before: "栄養のバランス", options: ["からいうと", "にからいうと", "をからいうと"], answer: "からいうと", after: "、その食事は最悪です。" },
                    { before: "彼の技術力", options: ["からいえば", "にからいえば", "をからいえば"], answer: "からいえば", after: "、この程度のシステムは一日で作れるはずだ。" }
                ],
                opinionQuestions: [
                    { text: "あなたの仕事（または趣味）の「経験からいうと」、初心者が一番失敗しやすいポイントは何ですか？", eng: "Judging from your 'experience' in your work (or hobby), what is the point where beginners are most likely to fail?" },
                    { text: "「消費者の立場からいえば」、今の社会で改善してほしいサービスやルールは何ですか？", eng: "From the 'perspective of a consumer', what is a service or rule in current society you want improved?" },
                    { text: "「コストパフォーマンス（コスパ）の面からいうと」、あなたの一番おすすめのアイテムは何ですか？", eng: "From the 'perspective of cost performance', what is your most recommended item?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Discussing a recent risky investment and the danger of overconfidence.",
            text: "<p><strong>田中:</strong> 「なあ佐藤、お前も知ってる例の仮想通貨の案件なんだけどさ。実は先月、かなりの額を突っ込んじゃったんだよ。最初は順調に利益が出ていたんだけど、ここ数日で相場が大暴落してしまってね。利益が出る[BLANK1]、貯金が半分にまで減ってしまったんだ。」</p><p><strong>佐藤:</strong> 「マジかよ！あんな得体の知れないコインに大金をつぎ込むなんて、どうかしてるぞ。俺が『リスクが高すぎるからやめておけ』って何度も忠告しただろ？専門家の分析[BLANK2]、あの相場は完全にバブルだったんだから。」</p><p><strong>田中:</strong> 「ああ、お前の言う通りだったよ。ネットの怪しいインフルエンサーの甘い言葉を信じてしまった[BLANK3]、こんな大惨事になってしまった。まさか自分がこんな詐欺まがいの相場に引っかかるとは夢にも思わなかったよ。家族には絶対に言えない秘密ができてしまった。」</p><p><strong>佐藤:</strong> 「本当にバカだな。少しの欲をかいた[BLANK4]、これまでの地道な貯金を一瞬で溶かすなんて。現在の損害額[BLANK5]、今すぐ損切りをして撤退するのが一番賢明な判断だぞ。これ以上傷口を広げるな。」</p><p><strong>田中:</strong> 「分かってる。未練を断ち切って、今夜全て売却するよ。楽して稼げる[BLANK6]、高い授業料を払う羽目になってしまったな。明日からまた、地道にサービス残業を頑張るしかないよ……。」</p>",
            blanks: [
                { id: "BLANK1", options: ["どころか", "ばかりに", "からいうと"], answer: "どころか" },
                { id: "BLANK2", options: ["からいうと", "どころか", "ばかりに"], answer: "からいうと" },
                { id: "BLANK3", options: ["ばかりに", "どころか", "からいうと"], answer: "ばかりに" },
                { id: "BLANK4", options: ["ばかりに", "どころか", "からいえば"], answer: "ばかりに" },
                { id: "BLANK5", options: ["からいえば", "ばかりに", "どころか"], answer: "からいえば" },
                { id: "BLANK6", options: ["どころか", "ばかりに", "からいうと"], answer: "どころか" }
            ]
        },
        story: {
            title: "The Disaster of the DIY PC Build",
            text: "<p>先日、長年愛用してきたデスクトップPCの動作が重くなってきたため、私は新しいゲーミングPCを自作することにした。既製品を買うよりも安く上がり、自分好みのスペックにカスタマイズできると考えたからだ。しかし、私の浅い知識と慢心が、週末の楽しいはずのDIYを大惨事へと変えてしまった。</p><p>ネットの組み立て動画を見ただけで「これなら自分にも簡単にできる」と思い込んだのが間違いの始まりだった。組み立て作業はスムーズに進む[BLANK1]、規格の合わないパーツを無理やり押し込んだり、配線の手順を間違えたりと、トラブルの連続だった。そしてついに、マザーボードの繊細なピンを力任せに曲げてしまった[BLANK2]、数万円もする高価なパーツを一瞬でゴミに変えてしまったのだ。</p><p>電源ボタンを押してもファンは回らず、画面は真っ暗なままだった。「節約して高性能なPCを手に入れる」という当初の目的を達成する[BLANK3]、無駄なパーツ代と絶望感だけが手元に残った。自分の技術力と知識レベル[BLANK4]、おとなしく保証のついたBTOパソコン（受注生産PC）を買うべきだったと、後悔しても遅すぎた。</p><p>結局、私は曲がったピンを眺めながら深い深いため息をつき、翌日近所のパソコンショップに駆け込んでプロに修理と組み立てを依頼することになった。安物買いの銭失い[BLANK5]、自分のプライドが招いた高い授業料であった。次からはプロの仕事を素直に頼ることにしよう。</p>",
            blanks: [
                { id: "BLANK1", options: ["どころか", "ばかりに", "からいえば"], answer: "どころか" },
                { id: "BLANK2", options: ["ばかりに", "どころか", "からいって"], answer: "ばかりに" },
                { id: "BLANK3", options: ["どころか", "ばかりに", "からいうと"], answer: "どころか" },
                { id: "BLANK4", options: ["からいえば", "ばかりに", "どころか"], answer: "からいえば" },
                { id: "BLANK5", options: ["どころか", "ばかりに", "からいって"], answer: "どころか" } // While 'dokoroka' technically works as "far from X, it was Y", wait, let's use 'dokoroka' - far from penny wise pound foolish, it was pride? No, wait. "安物買いの銭失いどころか" - Far from just 'penny wise pound foolish', it was an expensive lesson invited by pride. Perfect.
            ]
        }
    },
    {
        id: 31,
        title: "Lesson 31: Endings, Limits & Exhaustion",
        grammar: [
            {
                point: "~次第 (しだい)",
                english: "As soon as",
                structure: "Verb (stem) + 次第",
                nuance: "Used for formal business or official announcements. It means 'As soon as X happens, I will immediately do Y.' Y is always a future, intentional action.",
                metaphor: "Like a relay race baton handoff. The absolute instant the baton touches your hand, you start sprinting forward. There is no hesitation.",
                examples: [
                    { topic: "Business", text: "会議のスケジュールが決まり次第、皆様にメールでご連絡いたします。", eng: "As soon as the meeting schedule is decided, I will contact everyone by email." },
                    { topic: "Logistics", text: "新しい部品が工場に到着し次第、すぐに組み立て作業を開始します。", eng: "As soon as the new parts arrive at the factory, we will immediately start the assembly work." },
                    { topic: "Travel", text: "空港に着き次第、ホテルに向かうタクシーを手配してください。", eng: "As soon as you arrive at the airport, please arrange a taxi to head to the hotel." },
                    { topic: "Computers", text: "システムの復旧が完了し次第、公式ウェブサイトで発表します。", eng: "As soon as the system restoration is complete, we will announce it on the official website." },
                    { topic: "Daily Life", text: "雨が止み次第、テントの片付けを始めましょう。", eng: "As soon as the rain stops, let's start packing up the tent." }
                ],
                clickingGames: [
                    { prompt: "As soon as the preparations are complete, please start the event.", target: "準備が完了し次第イベントを開始してください", words: ["準備が", "完了し次第", "イベントを開始してください"] },
                    { prompt: "As soon as the date is set, I will let you know.", target: "日程が分かり次第すぐにお知らせします", words: ["日程が", "分かり次第", "すぐにお知らせします"] },
                    { prompt: "As soon as the room is cleaned, we will guide you inside.", target: "部屋の掃除が終わり次第中へご案内します", words: ["部屋の掃除が", "終わり次第", "中へご案内します"] },
                    { prompt: "As soon as I arrive at the station, I will call you.", target: "駅に着き次第すぐに電話をかけます", words: ["駅に", "着き次第", "すぐに電話をかけます"] },
                    { prompt: "As soon as we receive the money, we will ship the product.", target: "入金を確認し次第商品を発送いたします", words: ["入金を", "確認し次第", "商品を発送いたします"] }
                ],
                dropdownGames: [
                    { before: "詳しい状況が", options: ["分かり次第", "分かる次第", "分かった次第"], answer: "分かり次第", after: "、改めてご報告いたします。" },
                    { before: "社長が", options: ["戻り次第", "戻る次第", "戻って次第"], answer: "戻り次第", after: "、この決裁書にサインをもらいます。" },
                    { before: "新しいアプリの開発が", options: ["終わり次第", "終わる次第", "終わった次第"], answer: "終わり次第", after: "、テストプレイを開始しよう。" },
                    { before: "在庫が", options: ["入り次第", "入る次第", "入った次第"], answer: "入り次第", after: "、お客様にご連絡をお願いします。" },
                    { before: "会場の準備が", options: ["でき次第", "できる次第", "できた次第"], answer: "でき次第", after: "、お客様をご案内してください。" }
                ],
                opinionQuestions: [
                    { text: "あなたが仕事で、「〇〇が終わり次第、すぐに連絡します」とよく使うシチュエーションは何ですか？", eng: "In your work, what is a situation where you often use 'As soon as X is finished, I will contact you immediately'?" },
                    { text: "長期の休みに入り次第、真っ先にやりたいことは何ですか？", eng: "As soon as you enter a long vacation, what is the very first thing you want to do?" },
                    { text: "家に帰り次第、いつも一番最初にやるルーティンは何ですか？", eng: "As soon as you get home, what is the very first routine you always do?" }
                ]
            },
            {
                point: "~以上(は) (いじょうは)",
                english: "Now that / Since it is the case",
                structure: "Verb (Plain form) / Noun + である + 以上(は)",
                nuance: "Very similar to '〜からには'. It expresses a strong determination, duty, or obligation because a certain fact or condition has already been established.",
                metaphor: "It's like signing a binding legal contract. Now that your signature is in ink on the paper, you must fulfill your duties and there is no turning back.",
                examples: [
                    { topic: "Business", text: "プロジェクトのリーダーを引き受けた以上は、必ず成功させる責任がある。", eng: "Now that I have taken on the project leader role, I have a responsibility to absolutely make it succeed." },
                    { topic: "Study", text: "高い学費を払って大学に入った以上、真剣に勉強するべきだ。", eng: "Since you entered university paying high tuition fees, you should study seriously." },
                    { topic: "General JLPT", text: "日本で生活する以上は、日本の法律とマナーを守らなければならない。", eng: "Now that you live in Japan, you must obey Japanese laws and manners." },
                    { topic: "Sports", text: "プロの選手である以上、常に結果を求められるのは当然だ。", eng: "Since you are a professional athlete, it is natural that results are constantly demanded of you." },
                    { topic: "Airsoft", text: "このサバゲーチームに参加する以上、安全ルールは絶対厳守だ。", eng: "Now that you are participating in this airsoft team, strict adherence to safety rules is absolute." }
                ],
                clickingGames: [
                    { prompt: "Now that I've decided to do it, I want to keep trying until the end.", target: "やると決めた以上は最後まで頑張りたい", words: ["やると", "決めた以上は", "最後まで頑張りたい"] },
                    { prompt: "Since he is a student, studying is his first priority.", target: "学生である以上勉強を第一に考えるべきだ", words: ["学生である以上", "勉強を第一に", "考えるべきだ"] },
                    { prompt: "Now that I signed the contract, I can't cancel it.", target: "契約書にサインした以上キャンセルはできない", words: ["契約書に", "サインした以上", "キャンセルはできない"] },
                    { prompt: "Since I promised, I absolutely have to keep it.", target: "約束した以上は絶対に守らなければならない", words: ["約束した以上は", "絶対に", "守らなければならない"] },
                    { prompt: "Now that I've become a member of society, taking responsibility is natural.", target: "社会人になった以上責任を持つのは当然だ", words: ["社会人に", "なった以上", "責任を持つのは当然だ"] }
                ],
                dropdownGames: [
                    { before: "自分でやると", options: ["言った以上は", "言う以上は", "言って以上は"], answer: "言った以上は", after: "、誰にも文句は言えない。" },
                    { before: "会社の代表", options: ["である以上", "だ以上", "な以上"], answer: "である以上", after: "、軽率な発言は許されない。" },
                    { before: "これほど高価なパソコンを", options: ["買った以上", "買う以上", "買って以上"], answer: "買った以上", after: "、使いこなさなければもったいない。" },
                    { before: "試合に", options: ["出る以上は", "出た以上は", "出て以上は"], answer: "出る以上は", after: "、必ず優勝を狙うつもりだ。" },
                    { before: "給料を", options: ["もらう以上", "もらった以上", "もらって以上"], answer: "もらう以上", after: "、プロとしての仕事をしなければならない。" }
                ],
                opinionQuestions: [
                    { text: "あなたが「社会人である以上、これだけは守るべきだ」と思うルールは何ですか？", eng: "What is a rule you think 'Since I am a working adult, I should at least follow this'?" },
                    { text: "「高いお金を払って〜を買った以上は」、絶対に元を取りたいと思うものはありますか？", eng: "Is there something where you think 'Now that I paid a lot of money to buy ~, I absolutely want to get my money's worth'?" },
                    { text: "「日本に住む以上は」、必ず経験しておくべきだと思うことは何ですか？", eng: "What is something you think one absolutely should experience 'now that they live in Japan'?" }
                ]
            },
            {
                point: "~折に(は) (おりに)",
                english: "When / On the occasion of",
                structure: "Verb (Dictionary / た-form) / Noun + の + 折に",
                nuance: "A highly formal and elegant equivalent of '〜の時に'. It is heavily used in business emails, formal letters, or polite conversation to refer to a specific opportunity, chance, or past/future occasion.",
                metaphor: "Running into an important acquaintance at an elegant gala and using that specific, rare opportunity to politely discuss a business idea.",
                examples: [
                    { topic: "Business", text: "来日された折には、ぜひ弊社のオフィスにもお立ち寄りください。", eng: "On the occasion that you come to Japan, please by all means stop by our office." },
                    { topic: "Polite Speech", text: "先日お会いした折に、素晴らしいお話を伺うことができました。", eng: "On the occasion we met the other day, I was able to hear a wonderful story." },
                    { topic: "Shopping", text: "近くへお越しの折には、また当店をご利用くださいませ。", eng: "On the occasion you come nearby, please use our store again." },
                    { topic: "General JLPT", text: "次回の会議の折に、詳しい資料をお渡しいたします。", eng: "On the occasion of the next meeting, I will hand you the detailed documents." },
                    { topic: "Travel", text: "京都へ旅行に行った折に、この美しいお茶碗を買いました。", eng: "When I went on a trip to Kyoto, I bought this beautiful tea bowl." }
                ],
                clickingGames: [
                    { prompt: "When I returned to my hometown, I visited my old school.", target: "帰省した折に昔通っていた学校を訪ねた", words: ["帰省した折に", "昔通っていた学校を", "訪ねた"] },
                    { prompt: "On the occasion you come to Tokyo, I will show you around.", target: "東京へお越しの折には私がご案内します", words: ["東京へ", "お越しの折には", "私がご案内します"] },
                    { prompt: "When I met the president, I received words of encouragement.", target: "社長にお会いした折に激励の言葉をいただいた", words: ["社長に", "お会いした折に", "激励の言葉をいただいた"] },
                    { prompt: "On the occasion of moving, I threw away old furniture.", target: "引っ越しの折に古い家具をすべて捨てた", words: ["引っ越しの折に", "古い家具を", "すべて捨てた"] },
                    { prompt: "When you have free time, please read this book.", target: "お暇な折にでもこの本を読んでみてください", words: ["お暇な折にでも", "この本を", "読んでみてください"] }
                ],
                dropdownGames: [
                    { before: "前回ご訪問", options: ["した折に", "する折に", "して折に"], answer: "した折に", after: "、お忘れ物がありましたので保管しております。" },
                    { before: "出張", options: ["の折に", "な折に", "である折に"], answer: "の折に", after: "、地元の名物料理を楽しむのが好きです。" },
                    { before: "またお会いできる", options: ["折には", "折のには", "折なには"], answer: "折には", after: "、ゆっくりお酒でも飲みましょう。" },
                    { before: "帰国", options: ["の折に", "な折に", "だ折に"], answer: "の折に", after: "、空港でたくさんのお土産を買った。" },
                    { before: "上京", options: ["された折には", "される折には", "されて折には"], answer: "された折には", after: "、ぜひお声がけください。" }
                ],
                opinionQuestions: [
                    { text: "ビジネスメールで「お近くへお越しの折には〜」という表現を使った（または見た）ことはありますか？", eng: "Have you ever used (or seen) the expression 'On the occasion you come nearby~' in a business email?" },
                    { text: "あなたが最近「旅行の折に」買って、今でも大切にしているお土産は何ですか？", eng: "What is a souvenir you recently bought 'on the occasion of a trip' that you still cherish?" },
                    { text: "もし憧れの人に「お会いできた折には」、どんな質問をしてみたいですか？", eng: "If you had the 'occasion to meet' someone you admire, what question would you want to ask them?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Discussing an important client visit and the heavy responsibilities of their roles.",
            text: "<p><strong>田中:</strong> 「佐藤、来週の火曜日にアメリカの本社から重要エリアのクライアントが視察に来る件だけど、スケジュールの調整は終わったか？」</p><p><strong>佐藤:</strong> 「ああ、現在最終の確認中だ。彼らの正確なフライトの到着時間が分かり[BLANK1]、すぐにハイヤーの手配をして、お前にも詳細なタイムテーブルを共有するよ。なんせVIPの対応だから、一つでもミスがあったら命取りだからな。」</p><p><strong>田中:</strong> 「頼んだぞ。俺たちがこの大型プロジェクトの責任者を引き受けた[BLANK2]、どんな不測の事態が起きても完璧にエスコートして、契約を勝ち取る義務があるからな。プレッシャーで胃が痛くなりそうだよ。」</p><p><strong>佐藤:</strong> 「心配するな。以前、彼らが来日された[BLANK3]、俺たちが紹介した料亭の和食をものすごく気に入ってくれただろ？今回もあそこの個室をすでに押さえてある。美味い飯と酒があれば、商談もスムーズに進むはずさ。」</p><p><strong>田中:</strong> 「さすが佐藤、準備がいいな！会議の資料も完璧に仕上げておくよ。よし、この視察が無事に終わり[BLANK4]、週末は二人でパーッと飲みに行こうぜ。俺のおごりでな。」</p><p><strong>佐藤:</strong> 「その言葉、絶対に忘れるなよ！約束した[BLANK5]、銀座の一番高い寿司屋を予約させてもらうからな。」</p>",
            blanks: [
                { id: "BLANK1", options: ["次第", "以上は", "折に"], answer: "次第" },
                { id: "BLANK2", options: ["以上は", "折に", "次第"], answer: "以上は" },
                { id: "BLANK3", options: ["折に", "次第", "以上は"], answer: "折に" },
                { id: "BLANK4", options: ["次第", "以上は", "折に"], answer: "次第" },
                { id: "BLANK5", options: ["以上は", "次第", "折に"], answer: "以上は" }
            ]
        },
        story: {
            title: "The Airsoft Event Organizer's Burden",
            text: "<p>私は週末になると、関東近郊のフィールドでサバイバルゲームの貸切イベントを主催している。参加者は毎回50人を超え、初心者から20年以上のキャリアを持つベテランまで幅広い。これだけ多くの人を集めてイベントを主催する[BLANK1]、全員が安全に、そして最高に楽しめる環境を提供するという重い責任が私にはある。参加費をもらって運営している以上、ただの「趣味の延長」という甘い言い訳は通用しないのだ。</p><p>イベントの当日は、朝から息をつく暇もない。フィールドのスタッフと打ち合わせを行い、レンタル銃の数が確定し[BLANK2]、すぐに参加者のチーム分けとルールのブリーフィングを開始する。初心者が多い回では、特にゴーグルの着用やセーフティエリアでの銃口の向きについて、少し厳しい口調で注意を促すこともある。これも全て、怪我人を出さないための絶対条件だからだ。</p><p>先日、長年一緒にプレイしてきた古い友人が久しぶりにイベントに参加してくれた。彼と昼の休憩時間に言葉を交わした[BLANK3]、「お前が仕切るイベントは昔からルールが徹底されていて、本当に安心して遊べるよ」と褒められた。その一言で、数週間にわたる準備の疲れが吹き飛ぶような気がした。</p><p>イベントの全日程が無事に終了し、全員の怪我がないことを確認し[BLANK4]、私の肩の荷はようやく下りる。ボロボロになった迷彩服を車に積み込みながら、私は「来月もまた最高のゲームを作ろう」と静かに決意を新たにするのだ。</p>",
            blanks: [
                { id: "BLANK1", options: ["以上は", "次第", "折に"], answer: "以上は" },
                { id: "BLANK2", options: ["次第", "折に", "以上は"], answer: "次第" },
                { id: "BLANK3", options: ["折に", "次第", "以上は"], answer: "折に" },
                { id: "BLANK4", options: ["次第", "以上は", "折に"], answer: "次第" }
            ]
        }
    }, {
        id: 32,
        title: "Lesson 32: Conditions, Results & Dependencies",
        grammar: [
            {
                point: "~たところ",
                english: "When I did ~ / As a result of doing ~",
                structure: "Verb (た-form) + ところ",
                nuance: "Used to express that an action was taken, and as a direct result, a specific (often new or surprising) fact was discovered or a consequence occurred.",
                metaphor: "Like opening a sealed envelope to check the contents. The act of opening it (doing the action) immediately reveals the letter inside (the result).",
                examples: [
                    { topic: "Business", text: "担当者に確認したところ、明日の会議は午後3時からでした。", eng: "When I checked with the person in charge, I found out tomorrow's meeting is from 3 PM." },
                    { topic: "Computers", text: "PCの内部を掃除したところ、ファンの異音が完全に消えた。", eng: "As a result of cleaning the inside of the PC, the abnormal fan noise completely disappeared." },
                    { topic: "Health", text: "新しいジムで運動してみたところ、翌日ひどい筋肉痛になった。", eng: "When I tried exercising at the new gym, I got terrible muscle pain the next day." },
                    { topic: "Shopping", text: "欲しかったゲームの値段を調べたところ、予想以上に高かった。", eng: "When I looked up the price of the game I wanted, I discovered it was more expensive than expected." },
                    { topic: "Airsoft", text: "古い電動ガンを分解してみたところ、ギアが完全に欠けていた。", eng: "When I tried taking apart the old electric gun, I found out the gears were completely chipped." }
                ],
                clickingGames: [
                    { prompt: "When I tried making the curry, it was overwhelmingly spicy.", target: "カレーを作ってみたところ圧倒的に辛かった", words: ["カレーを", "作ってみたところ", "圧倒的に辛かった"] },
                    { prompt: "When I asked my boss, I easily got permission.", target: "上司に尋ねたところあっさりと許可が出た", words: ["上司に", "尋ねたところ", "あっさりと許可が出た"] },
                    { prompt: "When I looked out the window, snow was piling up.", target: "窓の外を見たところ雪が積もっていた", words: ["窓の外を", "見たところ", "雪が積もっていた"] },
                    { prompt: "When I used the new software, it was very convenient.", target: "新しいソフトを使ったところとても便利だった", words: ["新しいソフトを", "使ったところ", "とても便利だった"] },
                    { prompt: "When I checked the schedule, I had no free time.", target: "スケジュールを確認したところ空き時間がなかった", words: ["スケジュールを", "確認したところ", "空き時間がなかった"] }
                ],
                dropdownGames: [
                    { before: "サポートセンターに", options: ["問い合わせたところ", "問い合わせるのところ", "問い合わせてところ"], answer: "問い合わせたところ", after: "、すぐに解決策を教えてくれた。" },
                    { before: "新しいアプリを", options: ["インストールしたところ", "インストールするのところ", "インストールしてところ"], answer: "インストールしたところ", after: "、スマホの動作が重くなった。" },
                    { before: "友人に", options: ["相談したところ", "相談するのところ", "相談してところ"], answer: "相談したところ", after: "、良いアドバイスをもらえた。" },
                    { before: "試しに少し", options: ["飲んでみたところ", "飲んでみるのところ", "飲んでみてところ"], answer: "飲んでみたところ", after: "、とても苦いお茶だった。" },
                    { before: "体重計に", options: ["乗ったところ", "乗るのところ", "乗ってところ"], answer: "乗ったところ", after: "、3キロも減っていた。" }
                ],
                opinionQuestions: [
                    { text: "最近、何かを「調べてみたところ」、驚くべき事実を知った経験はありますか？", eng: "Recently, have you had an experience where 'upon looking into' something, you discovered a surprising fact?" },
                    { text: "新しいガジェットやツールを「実際に使ってみたところ」、どう感じましたか？", eng: "When you 'actually tried using' a new gadget or tool, how did you feel?" },
                    { text: "仕事や人間関係で、誰かに「相談してみたところ」、状況が好転したことはありますか？", eng: "In work or relationships, have you ever 'tried consulting' someone and the situation improved?" }
                ]
            },
            {
                point: "~上で / ~上の (うえで)",
                english: "Upon doing ~ / In the process of ~",
                structure: "Verb (た-form) + 上で / Verb (Dictionary form) + 上で",
                nuance: "When attached to the past tense (た-form), it means Action A must be completed as a necessary preparation *before* doing Action B. When attached to the dictionary form, it means 'in the process of' or 'for the purpose of' doing something.",
                metaphor: "It's building the foundation of a house. You cannot build the walls or the roof until the concrete foundation has been fully laid down first.",
                examples: [
                    { topic: "Business", text: "見積もりを確認した上で、契約書にサインします。", eng: "I will sign the contract upon (after) confirming the estimate." },
                    { topic: "Real Estate", text: "実際に物件を見学した上で、購入するかどうか決めたい。", eng: "I want to decide whether to buy or not upon actually touring the property." },
                    { topic: "Language", text: "外国語を学ぶ上で、毎日少しずつ続けることが一番大切だ。", eng: "In the process of learning a foreign language, continuing little by little every day is the most important thing." },
                    { topic: "Health", text: "医師と相談した上で、この薬を飲むようにしてください。", eng: "Please make sure to take this medicine upon consulting with a doctor." },
                    { topic: "Computers", text: "セキュリティを強化する上で、パスワードの管理は欠かせない。", eng: "In the process of strengthening security, password management is indispensable." }
                ],
                clickingGames: [
                    { prompt: "I will decide the plan after discussing it with my family.", target: "家族と話し合った上で計画を決定します", words: ["家族と", "話し合った上で", "計画を決定します"] },
                    { prompt: "Please reply after thoroughly reading the documents.", target: "資料を熟読した上でご返事をお願いします", words: ["資料を", "熟読した上で", "ご返事をお願いします"] },
                    { prompt: "In the process of living in Japan, Kanji is necessary.", target: "日本で生活する上で漢字は必要不可欠だ", words: ["日本で", "生活する上で", "漢字は必要不可欠だ"] },
                    { prompt: "After receiving an explanation of the rules, we start the game.", target: "ルールの説明を受けた上でゲームを始めます", words: ["ルールの説明を", "受けた上で", "ゲームを始めます"] },
                    { prompt: "In building a team, trust is the most important.", target: "チームを作る上で信頼が最も重要だ", words: ["チームを", "作る上で", "信頼が最も重要だ"] }
                ],
                dropdownGames: [
                    { before: "内容を十分に", options: ["理解した上で", "理解する上で", "理解しての上で"], answer: "理解した上で", after: "、サインをお願いします。" },
                    { before: "健康を", options: ["維持する上で", "維持した上で", "維持しての上で"], answer: "維持する上で", after: "、十分な睡眠は欠かせません。" },
                    { before: "両親の意見を", options: ["聞いた上で", "聞く上で", "聞いての上で"], answer: "聞いた上で", after: "、最終的な進路を決めます。" },
                    { before: "プロジェクトを", options: ["成功させる上で", "成功させた上で", "成功させての上で"], answer: "成功させる上で", after: "、事前の市場調査が必要だ。" },
                    { before: "リスクを", options: ["承知した上で", "承知する上で", "承知しての上で"], answer: "承知した上で", after: "、この投資に挑戦する。" }
                ],
                opinionQuestions: [
                    { text: "あなたが大きな買い物（家や車など）をする時、必ず「〜した上で」決める条件は何ですか？", eng: "When making a major purchase (house, car, etc.), what is the condition you always decide 'upon doing ~'?" },
                    { text: "あなたの仕事や趣味を「楽しむ上で（成功させる上で）」、一番大切なことは何ですか？", eng: "In 'the process of enjoying (or succeeding in)' your work or hobby, what is the most important thing?" },
                    { text: "他人に何か重要なアドバイスをする時、「必ず〜を確認した上で」伝えていることはありますか？", eng: "When giving important advice to others, is there something you convey 'upon making sure to check ~'?" }
                ]
            },
            {
                point: "~次第で / ~次第では (しだいで)",
                english: "Depending on ~",
                structure: "Noun + 次第で(は) / 次第だ",
                nuance: "Indicates that an outcome, decision, or result relies entirely on one specific variable or factor. It implies that if the variable changes, the outcome completely changes.",
                metaphor: "A balancing scale. The exact weight of the sand you place on the left side completely controls the position of the right side.",
                examples: [
                    { topic: "Business", text: "今後の努力次第で、まだこのプロジェクトを成功させることは可能だ。", eng: "Depending on our future efforts, it is still possible to make this project succeed." },
                    { topic: "Weather", text: "明日の天気次第では、屋外でのサバゲーは延期になるかもしれない。", eng: "Depending on tomorrow's weather, the outdoor airsoft game might be postponed." },
                    { topic: "Language", text: "勉強のやり方次第で、日本語の文法はもっと簡単に理解できる。", eng: "Depending on the study method, Japanese grammar can be understood much more easily." },
                    { topic: "Life", text: "人生が楽しいかどうかなんて、自分の考え方次第だ。", eng: "Whether life is fun or not depends entirely on your own way of thinking." },
                    { topic: "Computers", text: "追加するパーツ次第では、今のPCも最新ゲームが動くようになる。", eng: "Depending on the parts you add, even your current PC will become able to run the latest games." }
                ],
                clickingGames: [
                    { prompt: "Depending on the exam results, I might give up studying abroad.", target: "試験の成績次第では留学を諦めるかもしれない", words: ["試験の成績次第では", "留学を", "諦めるかもしれない"] },
                    { prompt: "Whether you win or lose the match depends on teamwork.", target: "試合の勝敗はチームワーク次第だ", words: ["試合の勝敗は", "チームワーク", "次第だ"] },
                    { prompt: "Depending on his attitude, I might get angry.", target: "彼の態度次第では私は怒るかもしれない", words: ["彼の態度次第では", "私は", "怒るかもしれない"] },
                    { prompt: "Whether the product sells or not depends on the design.", target: "商品が売れるかどうかはデザイン次第だ", words: ["商品が売れるかどうかは", "デザイン", "次第だ"] },
                    { prompt: "Depending on the situation, we might have to change the plan.", target: "状況次第では計画を変更しなければならない", words: ["状況次第では", "計画を変更", "しなければならない"] }
                ],
                dropdownGames: [
                    { before: "明日の", options: ["体調次第で", "体調の次第で", "体調な次第で"], answer: "体調次第で", after: "、パーティーに参加するか決めます。" },
                    { before: "上司の", options: ["判断次第では", "判断の次第では", "判断だ次第では"], answer: "判断次第では", after: "、この企画はボツになる。" },
                    { before: "すべては君の", options: ["やる気次第だ", "やる気の次第だ", "やる気な次第だ"], answer: "やる気次第だ", after: "。頑張りなさい。" },
                    { before: "会社の", options: ["業績次第で", "業績の次第で", "業績な次第で"], answer: "業績次第で", after: "、今年のボーナスの額が決まる。" },
                    { before: "使い方", options: ["次第では", "の次第では", "な次第では"], answer: "次第では", after: "、そのツールは非常に強力な武器になる。" }
                ],
                opinionQuestions: [
                    { text: "あなたの人生において、「これからの〇〇次第で未来が変わる」と思うものは何ですか？", eng: "In your life, what is something where you think 'depending on ~ from here on, the future will change'?" },
                    { text: "仕事のモチベーションは、「〇〇次第だ」と言えますか？それは何ですか？", eng: "Can you say that your work motivation 'depends on ~'? What is it?" },
                    { text: "週末の予定は、いつも何「次第」で決まることが多いですか？", eng: "What do your weekend plans usually 'depend on' to be decided?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Discussing an English training program at their HR department.",
            text: "<p><strong>田中:</strong> 「佐藤さん、先月ラクスルで新しく導入した社員向けの英語研修プログラムの件だけど、参加者にアンケートを実施してみたんだよ。」</p><p><strong>佐藤:</strong> 「おっ、そうか。それで、実際に彼らのフィードバックを読んだ[BLANK1]、どんな評価だったんだ？」</p><p><strong>田中:</strong> 「それがね、カリキュラム自体は素晴らしいという声が多かったんだけど、通常業務と研修のバランスを取るのが難しいという意見が目立ったんだ。アンケートの結果を慎重に分析した[BLANK2]、我々人事部としてはスケジュールを少し緩和する方向で調整すべきだと結論付けたんだよ。」</p><p><strong>佐藤:</strong> 「なるほど。確かに、語学の習得は重要だが、それで本業のパフォーマンスが落ちてしまっては本末転倒だからな。社員一人一人の業務の繁忙期[BLANK3]、研修の受講ペースを柔軟に変えられるようなシステムが必要かもしれない。」</p><p><strong>田中:</strong> 「そうなんだよ。だから、来週の会議でその柔軟な制度を提案してみるつもりだ。結局のところ、研修が成功するかどうかは、社員が無理なく続けられる環境を作れるか[BLANK4]だからね。」</p><p><strong>佐藤:</strong> 「その通りだ。研修の内容をブラッシュアップする[BLANK5]、社員の声に耳を傾けるプロセスは絶対に欠かせないな。俺も資料作りを手伝うよ。」</p><p><strong>田中:</strong> 「助かるよ！この施策の成果[BLANK6]、来期の採用アピールにも繋がるはずだから、気合を入れていこう。」</p>",
            blanks: [
                { id: "BLANK1", options: ["ところ", "上で", "次第で"], answer: "ところ" },
                { id: "BLANK2", options: ["上で", "ところ", "次第で"], answer: "上で" },
                { id: "BLANK3", options: ["次第で", "ところで", "上で"], answer: "次第で" },
                { id: "BLANK4", options: ["どうか次第だ", "どうかのところだ", "どうかの上のことだ"], answer: "どうか次第だ" },
                { id: "BLANK5", options: ["上で", "ところで", "次第で"], answer: "上で" },
                { id: "BLANK6", options: ["次第では", "ところでは", "上では"], answer: "次第では" }
            ]
        },
        story: {
            title: "The Ultimate Home Theater Calibration",
            text: "<p>新居のリビングに憧れのホームシアターを構築してからというもの、私は毎週末をオーディオのセッティングに費やしている。デノンのセンタースピーカーとSVSの巨大なサブウーファーを配置したものの、最初は低音が部屋全体に響きすぎて、映画のセリフが全く聞き取れなかった。そこで、海外のオーディオフォーラムを徹底的に調べた[BLANK1]、壁の反響音を抑えるための吸音パネルが必要不可欠だという事実を知った。</p><p>さっそくAmazonで専用の吸音パネルを注文し、部屋の四隅に設置してみた[BLANK2]、音の輪郭が劇的にクリアになり、まるでプロの映画館にいるかのような圧倒的な臨場感を手に入れることができた。やはり、高価な機材をただ繋ぐだけではなく、部屋の環境という基礎を整えた[BLANK3]、初めてその真価が発揮されるのだと痛感した。</p><p>もちろん、これで完成というわけではない。休日の気分や、観る映画のジャンル（静かなドラマか、激しいアクション映画か）[BLANK4]、アンプのイコライザー設定を微調整する作業は永遠に続く。究極の音質を追求する[BLANK5]、妥協という言葉は存在しない。この終わりのない探求こそが、大人の趣味の最大の醍醐味なのである。</p>",
            blanks: [
                { id: "BLANK1", options: ["ところ", "上で", "次第で"], answer: "ところ" },
                { id: "BLANK2", options: ["ところ", "上で", "次第で"], answer: "ところ" },
                { id: "BLANK3", options: ["上で", "ところ", "次第で"], answer: "上で" },
                { id: "BLANK4", options: ["次第で", "ところで", "上で"], answer: "次第で" },
                { id: "BLANK5", options: ["上で", "ところで", "次第で"], answer: "上で" }
            ]
        }
    },
    {
        id: 33,
        title: "Lesson 33: Time, Impossibility & Deep Emotion",
        grammar: [
            {
                point: "~て以来 (ていらい)",
                english: "Ever since ~",
                structure: "Verb (て-form) + 以来",
                nuance: "Indicates that after a specific, defining event in the past, a certain state or action has continued uninterrupted right up to the present. Often implies a long duration.",
                metaphor: "A river that changed its course after a massive earthquake, and has been flowing steadily in that new exact direction every single day since.",
                examples: [
                    { topic: "Lifestyle", text: "横須賀に引っ越してきて以来、毎週末のように海を見に行っている。", eng: "Ever since I moved to Yokosuka, I have been going to see the ocean almost every weekend." },
                    { topic: "Pets", text: "あの犬を飼い始めて以来、私の生活はとても明るく充実している。", eng: "Ever since I started keeping that dog, my life has been very bright and fulfilling." },
                    { topic: "Technology", text: "自宅をスマートホーム化して以来、物理的なスイッチを触っていない。", eng: "Ever since I made my house a smart home, I haven't touched a physical switch." },
                    { topic: "Dieting", text: "健康診断で注意されて以来、激辛の食べ物は少し控えている。", eng: "Ever since I was warned at my health checkup, I have been holding back a bit on super spicy foods." },
                    { topic: "Friendship", text: "大学を卒業して以来、彼とは一度も連絡を取っていない。", eng: "Ever since we graduated from university, I haven't contacted him even once." }
                ],
                clickingGames: [
                    { prompt: "Ever since I started playing airsoft, my weekends have been fulfilling.", target: "サバゲーを始めて以来週末の生活が充実している", words: ["サバゲーを", "始めて以来", "週末の生活が充実している"] },
                    { prompt: "Ever since he bought the new PC, he's only been playing games.", target: "新しいPCを買って以来彼はゲームばかりしている", words: ["新しいPCを", "買って以来", "彼はゲームばかりしている"] },
                    { prompt: "Ever since I got sick, I haven't drunk any alcohol.", target: "病気になって以来お酒は一滴も飲んでいない", words: ["病気になって以来", "お酒は一滴も", "飲んでいない"] },
                    { prompt: "Ever since the company went bankrupt, his whereabouts are unknown.", target: "会社が倒産して以来彼の行方は分からない", words: ["会社が", "倒産して以来", "彼の行方は分からない"] },
                    { prompt: "Ever since we met in Tokyo, we've been great friends.", target: "東京で出会って以来私たちは大親友だ", words: ["東京で", "出会って以来", "私たちは大親友だ"] }
                ],
                dropdownGames: [
                    { before: "あの事件が", options: ["起きて以来", "起きる以来", "起きた以来"], answer: "起きて以来", after: "、この地域のセキュリティは非常に厳しくなった。" },
                    { before: "日本に", options: ["来て以来", "来る以来", "来た以来"], answer: "来て以来", after: "、ずっと同じ街に住んでいます。" },
                    { before: "彼と大喧嘩", options: ["して以来", "する以来", "した以来"], answer: "して以来", after: "、一言も口をきいていない。" },
                    { before: "オンライン英会話を", options: ["始めて以来", "始める以来", "始めた以来"], answer: "始めて以来", after: "、リスニング力が飛躍的に伸びた。" },
                    { before: "その映画を", options: ["見て以来", "見る以来", "見た以来"], answer: "見て以来", after: "、私は完全にあの監督のファンになった。" }
                ],
                opinionQuestions: [
                    { text: "あなたが「〜して以来、ずっと続けている（またはやめている）習慣」は何ですか？", eng: "What is a habit that 'Ever since doing ~, I have continued (or stopped) doing'?" },
                    { text: "「あの人に出会って以来、私の人生は変わった」と思えるような出会いはありますか？", eng: "Do you have an encounter where you feel 'Ever since meeting that person, my life changed'?" },
                    { text: "あなたが今の街に「引っ越してきて以来」、一番気に入っているお気に入りのスポットはどこですか？", eng: "Where is your favorite spot that you love the most 'ever since moving to' your current city?" }
                ]
            },
            {
                point: "~どころではない / ~どころじゃない",
                english: "Far from being able to / This is not the time for",
                structure: "Noun / Verb (Dictionary form / ている) + どころではない",
                nuance: "Strongly rejects a suggestion or expectation because the current situation (usually negative, like being too busy, poor, or sick) makes it absolutely impossible to do something enjoyable or relaxed.",
                metaphor: "Someone asking if you want to play a round of golf while your house is currently on fire. It's an absurd suggestion given the emergency.",
                examples: [
                    { topic: "Business", text: "明日が大規模なプロジェクトの締め切りで、今は休んでいるどころではない。", eng: "Tomorrow is the deadline for a massive project, and right now is far from the time to be resting." },
                    { topic: "Real Estate", text: "土地の権利手続きでトラブルが起きて、のんびり引っ越しの準備をしているどころじゃない。", eng: "Trouble occurred with the land rights procedures, and it's far from the time to be leisurely preparing to move." },
                    { topic: "Health", text: "ひどい二日酔いで、朝ご飯を食べるどころではない。", eng: "I have a terrible hangover, and it's far from the time to be eating breakfast." },
                    { topic: "Money", text: "今年はボーナスがカットされたので、海外旅行に行くどころではない。", eng: "Because the bonus was cut this year, it's far from the time to be going on an overseas trip." },
                    { topic: "Weather", text: "外は猛烈な台風で、サバゲーどころではない。", eng: "It's a fierce typhoon outside, and it's far from the time for airsoft." }
                ],
                clickingGames: [
                    { prompt: "I'm so busy with work that it's not the time to go drinking.", target: "仕事が忙しすぎて飲みに行くどころではない", words: ["仕事が忙しすぎて", "飲みに行く", "どころではない"] },
                    { prompt: "I'm broke and it's far from the time to buy a new PC.", target: "金欠で新しいPCを買うどころじゃない", words: ["金欠で", "新しいPCを", "買うどころじゃない"] },
                    { prompt: "My head hurts and it's not the time to be studying.", target: "頭が痛くて勉強しているどころではない", words: ["頭が痛くて", "勉強している", "どころではない"] },
                    { prompt: "A fire broke out, and it's far from the time to be sleeping.", target: "火事が起きて寝ているどころではなくなった", words: ["火事が起きて", "寝ている", "どころではなくなった"] },
                    { prompt: "It's far from the time for a date; I have to do overtime.", target: "デートどころではない今日は残業しなければならない", words: ["デートどころではない", "今日は", "残業しなければならない"] }
                ],
                dropdownGames: [
                    { before: "明日は重要な試験があるので、ゲームを", options: ["しているどころではない", "しているどころか", "しているばかりに"], answer: "しているどころではない", after: "。" },
                    { before: "会社のシステムがダウンして、今は昼休み", options: ["どころではない", "どころか", "ばかりに"], answer: "どころではない", after: "状況だ。" },
                    { before: "咳が止まらなくて、カラオケ", options: ["どころじゃない", "どころか", "ばかりに"], answer: "どころじゃない", after: "よ。" },
                    { before: "急に引っ越しが決まって、週末はゆっくり", options: ["休んでいるどころではない", "休んでいるどころか", "休んでいるばかりに"], answer: "休んでいるどころではない", after: "。" },
                    { before: "あまりに寒すぎて、外でバーベキュー", options: ["どころではない", "どころか", "ばかりに"], answer: "どころではない", after: "。家に入ろう。" }
                ],
                opinionQuestions: [
                    { text: "過去に、「忙しすぎて（または体調が悪くて）、〇〇どころではなかった」という過酷な経験はありますか？", eng: "In the past, have you had a harsh experience where 'I was so busy (or sick) that it was far from the time to ~'?" },
                    { text: "友達に遊びに誘われたけれど、「今はそれどころじゃない！」と断ったことはありますか？どんな理由でしたか？", eng: "Have you ever turned down a friend's invitation to hang out, saying 'Now is not the time for that!'? What was the reason?" },
                    { text: "仕事のトラブルが起きた時、「慌てているどころではない、すぐに行動しなければ」と思った経験を教えてください。", eng: "When trouble occurred at work, tell me about an experience where you thought 'This is not the time to be panicking, I must act immediately'." }
                ]
            },
            {
                point: "~ことか",
                english: "How ~ ! / What a ~ ! (Expressing deep emotion)",
                structure: "Question Word (どんなに / どれほど / 何回) + Verb/Adj (Plain form) + ことか",
                nuance: "A rhetorical exclamation used to emphasize the immeasurable depth of a feeling, the extreme frequency of an action, or a profound sigh of relief. It's not a real question, but a deep emotional reflection.",
                metaphor: "Standing at the edge of the Grand Canyon and exhaling a deep breath. You aren't asking for the measurements; you are expressing pure awe at the scale of it.",
                examples: [
                    { topic: "Accomplishment", text: "自分の家をやっと手に入れた時、どれほど嬉しかったことか。", eng: "When I finally got my own house, how incredibly happy I was!" },
                    { topic: "Hardship", text: "この土地の権利書を整理するために、何回役所に足を運んだことか。", eng: "To organize the title deeds for this land, how many times did I trudge to the city hall!" },
                    { topic: "Regret", text: "あの時、彼にもっと優しく接していれば、どんなに良かったことか。", eng: "If I had treated him more kindly back then, how wonderful it would have been!" },
                    { topic: "Language", text: "日本語の複雑な敬語には、何度泣かされたことか。", eng: "By Japan's complex honorifics, how many times have I been made to cry!" },
                    { topic: "Nature", text: "頂上から見るこの壮大な景色は、言葉にできないほど美しいことか。", eng: "This magnificent scenery seen from the summit, how unspeakably beautiful it is!" }
                ],
                clickingGames: [
                    { prompt: "How many times have I wanted to quit this job!", target: "この仕事を辞めたいと何度思ったことか", words: ["この仕事を辞めたいと", "何度思った", "ことか"] },
                    { prompt: "How relieved I was when the problem was solved!", target: "問題が解決した時どれほど安心したことか", words: ["問題が解決した時", "どれほど安心した", "ことか"] },
                    { prompt: "How lonely it is to live alone in a foreign country!", target: "外国で一人暮らしをするのはどんなに寂しいことか", words: ["外国で一人暮らしをするのは", "どんなに寂しい", "ことか"] },
                    { prompt: "How fun it must be to travel around the world!", target: "世界中を旅行するのはどんなに楽しいことか", words: ["世界中を旅行するのは", "どんなに楽しい", "ことか"] },
                    { prompt: "How long I have waited for this day!", target: "この日が来るのをどれほど待ち望んだことか", words: ["この日が来るのを", "どれほど待ち望んだ", "ことか"] }
                ],
                dropdownGames: [
                    { before: "試験に合格したと知った時、", options: ["どんなに嬉しかったことか", "どんなに嬉しかったのか", "どんなに嬉しかったことだ"], answer: "どんなに嬉しかったことか", after: "。涙が止まらなかった。" },
                    { before: "新しいPCを組むために、", options: ["何時間マニュアルを読んだことか", "何時間マニュアルを読んだのか", "何時間マニュアルを読んだことだ"], answer: "何時間マニュアルを読んだことか", after: "。" },
                    { before: "自然の中で過ごす時間は、", options: ["どれほどリラックスできることか", "どれほどリラックスできるのか", "どれほどリラックスできることだ"], answer: "どれほどリラックスできることか", after: "。" },
                    { before: "あの辛い時期を乗り越えるのが、", options: ["どんなに大変だったことか", "どんなに大変だったのか", "どんなに大変だったことだ"], answer: "どんなに大変だったことか", after: "、誰にも分からないだろう。" },
                    { before: "パスワードを忘れて、", options: ["何度ログインに失敗したことか", "何度ログインに失敗したのか", "何度ログインに失敗したことだ"], answer: "何度ログインに失敗したことか", after: "。" }
                ],
                opinionQuestions: [
                    { text: "あなたの人生で、「あの時はどんなに嬉しかった（または大変だった）ことか！」と深く記憶に残っている出来事は何ですか？", eng: "In your life, what is an event deeply etched in your memory where you thought 'How happy (or tough) that time was!'?" },
                    { text: "日本語の勉強で、「この文法（または漢字）には何度悩まされたことか！」と思うものはありますか？", eng: "In your Japanese studies, is there a grammar point (or Kanji) where you think 'How many times have I been troubled by this!'?" },
                    { text: "もしタイムマシンで未来に行けたら、「どんなにワクワクすることか！」と思いますか？それとも怖いですか？", eng: "If you could go to the future in a time machine, do you think 'How exciting it would be!'? Or is it scary?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Discussing the severe stress of moving and buying real estate.",
            text: "<p><strong>田中:</strong> 「佐藤、先週末はやっと新居の引っ越しが終わったよ。横須賀の久里浜に家を買うって決めて[BLANK1]、本当に長くて過酷な数ヶ月だったよ。」</p><p><strong>佐藤:</strong> 「お疲れ様！マイホームの購入なんて、人生で一番大きな買い物だもんな。鍵を受け取って新しい家のドアを開けた瞬間、どれほど嬉しかった[BLANK2]、俺にも想像がつくよ。」</p><p><strong>田中:</strong> 「ああ、嬉しかったのは間違いないんだけど、その裏の苦労がヤバかったんだよ。不動産屋のミスで土地の面積の修正契約とか、私道の所有権の移転トラブルが同時に発生してさ。4月の仕事が一番忙しい時期に、役所と銀行を何往復した[BLANK3]……。」</p><p><strong>佐藤:</strong> 「うわぁ、それは地獄だな。マイホームの夢に浸っている[BLANK4]って感じだな。」</p><p><strong>田中:</strong> 「まさにその通り。荷造りの段ボールに囲まれながら、行政の難しい書類を夜中まで読んでたんだから。もう二度と引っ越しはしたくないよ。」</p><p><strong>佐藤:</strong> 「まあ、その苦労を乗り越えたからこそ、自分の城がより愛おしくなるってもんさ。今度、新居の庭でビールでも奢ってくれよ。」</p>",
            blanks: [
                { id: "BLANK1", options: ["て以来", "どころではない", "ことか"], answer: "て以来" },
                { id: "BLANK2", options: ["ことか", "て以来", "どころではない"], answer: "ことか" },
                { id: "BLANK3", options: ["ことか", "て以来", "どころではない"], answer: "ことか" },
                { id: "BLANK4", options: ["どころではない", "て以来", "ことか"], answer: "どころではない" }
            ]
        },
        story: {
            title: "Settling Down in Kurihama",
            text: "<p>私のパートナーであるシャンダと共に、ついに横須賀の久里浜に念願のマイホームを購入し、鍵の引き渡しが無事に完了した。この静かな港町に引っ越してき[BLANK1]、毎朝潮風の香りで目覚めるという、都心では考えられなかった豊かな生活を送っている。</p><p>しかし、家を買うという決断は決して簡単なものではなかった。住宅ローンの審査から始まり、土地の測量面積の修正、私道の所有権トラブルなど、次から次へと専門的な行政手続きが押し寄せてきたのだ。英語の翻訳業務などを仕事でこなしている私でさえ、日本の複雑な不動産用語には何度頭を抱えた[BLANK2]。特に4月の上旬は、引っ越しの準備と仕事のピークが重なり、休日だからといってのんびり映画を見ている[BLANK3]過酷な状況だった。</p><p>それでも、すべての手続きを終え、初めて自分たちのリビングに最新のホームシアターシステムを設置した時の感動は、どれほど言葉を尽くしても表現できない[BLANK4]。苦労が大きかった分だけ、ソファに深く腰掛けて大画面の4K映像を楽しむ瞬間の喜びは格別だ。これからはこの新しい拠点で、愛する家族と共に、庭でのバーベキューや趣味のサバゲー装備のメンテナンスなど、穏やかで充実した日々を築いていきたいと心から願っている。</p>",
            blanks: [
                { id: "BLANK1", options: ["て以来", "どころではない", "ことか"], answer: "て以来" },
                { id: "BLANK2", options: ["ことか", "て以来", "どころではない"], answer: "ことか" },
                { id: "BLANK3", options: ["どころではない", "て以来", "ことか"], answer: "どころではない" },
                { id: "BLANK4", options: ["ことか", "どころではない", "て以来"], answer: "ことか" }
            ]
        }
    }, {
        id: 34,
        title: "Lesson 34: Expectations, Emotions & Weak Affirmations",
        grammar: [
            {
                point: "~ないことはない / ~ないこともない",
                english: "It's not that I can't / It's not impossible",
                structure: "Verb (ない-form) + ことはない / こともない",
                nuance: "A weak or conditional affirmation. It means 'I *can* do it, but...' or 'It *is* possible, but...' It implies hesitation, reluctance, or that special conditions are required.",
                metaphor: "It's like a blinking yellow traffic light. It's not a green light saying 'Absolutely yes!', but it's not a red light saying 'Absolutely no!' either. You proceed with caution.",
                examples: [
                    { topic: "Food", text: "激辛カレーを食べられないことはないが、あまり好きではない。", eng: "It's not that I can't eat super spicy curry, but I don't really like it." },
                    { topic: "Computers", text: "自分でPCを修理できないこともないが、プロに頼む方が安全だ。", eng: "It's not impossible for me to repair the PC myself, but it's safer to ask a pro." },
                    { topic: "Business", text: "明日までに資料を完成させられないことはないですが、残業になります。", eng: "It's not that I can't complete the documents by tomorrow, but it will require overtime." },
                    { topic: "Money", text: "その高級な時計を買えないことはないが、貯金がゼロになってしまう。", eng: "It's not that I can't buy that luxury watch, but my savings would drop to zero." },
                    { topic: "Language", text: "漢字を書けないこともないが、スマホで変換する方が早い。", eng: "It's not that I can't write Kanji, but converting it on a smartphone is faster." }
                ],
                clickingGames: [
                    { prompt: "It's not that I can't drink alcohol, but I get drunk quickly.", target: "お酒を飲めないことはないがすぐに酔ってしまう", words: ["お酒を飲めない", "ことはないが", "すぐに酔ってしまう"] },
                    { prompt: "It's not impossible to fix the bug, but it will take time.", target: "バグを修正できないこともないが時間がかかる", words: ["バグを修正できない", "こともないが", "時間がかかる"] },
                    { prompt: "It's not that I don't understand the rules, but I'm not used to them.", target: "ルールを理解していないことはないが慣れていない", words: ["ルールを理解していない", "ことはないが", "慣れていない"] },
                    { prompt: "It's not impossible to wake up early, but I am weak in the mornings.", target: "早起きできないこともないが朝は苦手だ", words: ["早起きできない", "こともないが", "朝は苦手だ"] },
                    { prompt: "It's not that I don't want to go to the drinking party, but I'm busy.", target: "飲み会に行きたくないことはないが忙しい", words: ["飲み会に行きたくない", "ことはないが", "忙しい"] }
                ],
                dropdownGames: [
                    { before: "納豆は", options: ["食べないことはない", "食べることはない", "食べてことはない"], answer: "食べないことはない", after: "が、好んでは食べません。" },
                    { before: "条件次第では、その仕事を", options: ["引き受けないこともない", "引き受けることもない", "引き受けたこともない"], answer: "引き受けないこともない", after: "。" },
                    { before: "彼の言い分も", options: ["分からないことはない", "分からなかったことはない", "分かりことはない"], answer: "分からないことはない", after: "が、やはり納得できない。" },
                    { before: "少し無理をすれば、この荷物を一人で", options: ["運べないことはない", "運ぶことはない", "運んでことはない"], answer: "運べないことはない", after: "。" },
                    { before: "自転車で隣の県まで", options: ["行けないこともない", "行くこともない", "行けたこともない"], answer: "行けないこともない", after: "が、体力が持たないだろう。" }
                ],
                opinionQuestions: [
                    { text: "「できないことはないけれど、あまりやりたくない」と思う仕事や家事はありますか？", eng: "Is there a work task or chore where you think 'It's not that I can't do it, but I don't really want to'?" },
                    { text: "「高くて買えないことはないけれど、買うのをためらっている」ものは何ですか？", eng: "What is something that 'It's not that it's so expensive I can't buy it, but I'm hesitating to buy'?" },
                    { text: "苦手な食べ物について、「絶対に無理」ですか、それとも「食べられないことはない」ですか？", eng: "Regarding a food you dislike, is it 'absolutely impossible' or 'not that you can't eat it'?" }
                ]
            },
            {
                point: "~ことだから / ~のことだから",
                english: "Because it's [Person] / Knowing [Person]",
                structure: "Noun (Person) + のことだから",
                nuance: "Used when making a confident guess or prediction about someone's behavior, based on your deep knowledge of their typical character, personality, or habits.",
                metaphor: "It's like looking at a weather radar. If you know exactly how a certain storm system behaves based on years of observation, you can confidently predict where it will rain next.",
                examples: [
                    { topic: "Business", text: "真面目な田中さんのことだから、今日の会議には一番に来ているはずだ。", eng: "Knowing the serious Mr. Tanaka, he is surely the first one to arrive at today's meeting." },
                    { topic: "Dating", text: "優しい彼女のことだから、私がミスをしても許してくれるだろう。", eng: "Because it's my kind girlfriend, I'm sure she will forgive me even if I make a mistake." },
                    { topic: "Friends", text: "時間にルーズな彼のことだから、また遅刻するに決まっている。", eng: "Knowing him and how loose he is with time, he's definitely going to be late again." },
                    { topic: "Shopping", text: "ガジェット好きな彼のことだから、すでに最新のスマホを予約しているはずだ。", eng: "Because it's him, a gadget lover, he must have already pre-ordered the latest smartphone." },
                    { topic: "Sports", text: "負けず嫌いな先輩のことだから、次の試合に向けて猛特訓しているだろう。", eng: "Knowing my senior who hates to lose, he is probably training fiercely for the next match." }
                ],
                clickingGames: [
                    { prompt: "Knowing him who is busy, he probably forgot about the drinking party.", target: "忙しい彼のことだから飲み会のことは忘れているだろう", words: ["忙しい彼の", "ことだから", "飲み会のことは忘れているだろう"] },
                    { prompt: "Because it's the game-loving son, he must be staying up all night.", target: "ゲーム好きな息子のことだから徹夜しているに違いない", words: ["ゲーム好きな息子の", "ことだから", "徹夜しているに違いない"] },
                    { prompt: "Knowing the strict manager, he won't forgive this mistake.", target: "厳しい部長のことだからこのミスは許さないはずだ", words: ["厳しい部長の", "ことだから", "このミスは許さないはずだ"] },
                    { prompt: "Because it's the careful her, she probably checked it multiple times.", target: "慎重な彼女のことだから何度も確認しただろう", words: ["慎重な彼女の", "ことだから", "何度も確認しただろう"] },
                    { prompt: "Knowing him who loves alcohol, he will definitely drink until morning.", target: "お酒好きな彼のことだから絶対に朝まで飲むだろう", words: ["お酒好きな彼の", "ことだから", "絶対に朝まで飲むだろう"] }
                ],
                dropdownGames: [
                    { before: "几帳面（きちょうめん）な佐藤さん", options: ["のことだから", "なことだから", "のことだからこそ"], answer: "のことだから", after: "、資料の準備は完璧に違いない。" },
                    { before: "忘れっぽい父", options: ["のことだから", "のことなから", "にことだから"], answer: "のことだから", after: "、また傘を電車に置いてきたのだろう。" },
                    { before: "料理が得意な母", options: ["のことだから", "のことなので", "のことだからこそ"], answer: "のことだから", after: "、きっと豪華な夕食を作って待っている。" },
                    { before: "映画オタクの彼", options: ["のことだから", "なことだから", "にことだから"], answer: "のことだから", after: "、そのマイナーな作品も絶対に知っている。" },
                    { before: "いつも元気な彼女", options: ["のことだから", "のことなから", "なことだから"], answer: "のことだから", after: "、風邪くらいすぐに治すだろう。" }
                ],
                opinionQuestions: [
                    { text: "あなたの性格を考えた時、「〇〇なあなたのことだから、〜するだろう」と友達からどう予測されると思いますか？", eng: "Thinking about your personality, how do you think friends would predict your actions saying 'Knowing you who are X, you will probably ~'?" },
                    { text: "「時間にルーズな彼のことだから〜」のように、周りの人の行動を予測して当たったことはありますか？", eng: "Have you ever accurately predicted someone's actions, like 'Knowing him who is loose with time...'?" },
                    { text: "「動物（ペット）のことだから、きっとこう思っている」と予想することはありますか？", eng: "Do you ever guess things like 'Knowing my pet, they are probably thinking this'?" }
                ]
            },
            {
                point: "~ことに(は)",
                english: "To my (surprise / joy / sadness) ...",
                structure: "Verb (た-form) / Adj (い/な) + ことに",
                nuance: "Brings the speaker's strong emotion to the absolute front of the sentence, acting as an emotional spotlight *before* explaining the event that caused that emotion. Extremely useful for storytelling.",
                metaphor: "A movie director putting a massive, intense close-up on the actor's crying or laughing face in the very first frame, before panning the camera out to show the audience *why* they are reacting that way.",
                examples: [
                    { topic: "General JLPT", text: "驚いたことに、誰もいないはずの部屋から物音がした。", eng: "To my surprise, there was a noise from a room that was supposed to be empty." },
                    { topic: "Business", text: "ありがたいことに、私たちの企画がコンペで優勝しました。", eng: "To our gratitude/joy, our project won the competition." },
                    { topic: "Technology", text: "残念なことに、バックアップを取る前にデータが消えてしまった。", eng: "To my disappointment, the data was erased before I took a backup." },
                    { topic: "Dating", text: "嬉しいことに、彼女が僕のプロポーズを受け入れてくれた。", eng: "To my joy, she accepted my proposal." },
                    { topic: "Daily Life", text: "悔しいことに、あと1点でN2の試験に不合格になってしまった。", eng: "To my deep frustration, I failed the N2 exam by just 1 point." }
                ],
                clickingGames: [
                    { prompt: "To my surprise, the PC fixed itself.", target: "驚いたことにPCが自然に直っていた", words: ["驚いたことに", "PCが", "自然に直っていた"] },
                    { prompt: "To my joy, the game I wanted was on sale.", target: "嬉しいことに欲しかったゲームがセールになっていた", words: ["嬉しいことに", "欲しかったゲームが", "セールになっていた"] },
                    { prompt: "To my sadness, my favorite restaurant closed down.", target: "悲しいことにお気に入りのレストランが閉店してしまった", words: ["悲しいことに", "お気に入りのレストランが", "閉店してしまった"] },
                    { prompt: "To my frustration, my colleague got promoted before me.", target: "悔しいことに同僚が私より先に昇進した", words: ["悔しいことに", "同僚が私より先に", "昇進した"] },
                    { prompt: "To my gratitude, many people helped me.", target: "ありがたいことに多くの人が私を助けてくれた", words: ["ありがたいことに", "多くの人が", "私を助けてくれた"] }
                ],
                dropdownGames: [
                    { before: "予想外", options: ["なことに", "のことに", "だことに"], answer: "なことに", after: "、その動画は世界中で大バズりした。" },
                    { before: "とても", options: ["残念なことに", "残念のことに", "残念ことに"], answer: "残念なことに", after: "、明日のイベントは雨で中止となりました。" },
                    { before: "本当に", options: ["腹立たしいことに", "腹立たしいのことに", "腹立たしいだことに"], answer: "腹立たしいことに", after: "、彼は一度も謝罪にこなかった。" },
                    { before: "信じられない", options: ["ことに", "ことな", "ことで"], answer: "ことに", after: "、宝くじで一等が当たった。" },
                    { before: "ラッキー", options: ["なことに", "のことに", "だことに"], answer: "なことに", after: "、最後の一個の在庫を買うことができた。" }
                ],
                opinionQuestions: [
                    { text: "最近、「驚いたことに」または「嬉しいことに」から始まるような出来事はありましたか？", eng: "Recently, have you had an event that would start with 'To my surprise' or 'To my joy'?" },
                    { text: "これまでの人生で、「残念なことに〜」と最もガッカリした出来事は何ですか？", eng: "In your life so far, what was the most disappointing event where you thought 'To my disappointment...'?" },
                    { text: "「ありがたいことに〜」と、周りの人に深く感謝したエピソードを教えてください。", eng: "Tell me an episode where you deeply thanked the people around you, saying 'To my gratitude...'." }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Waiting at a cafe for their notoriously unpunctual friend, Yamada, before heading to an electronics store.",
            text: "<p><strong>田中:</strong> 「おい佐藤、もう約束の時間から30分も過ぎてるぞ。山田のやつ、いくらなんでも遅すぎるんじゃないか？電話をかけても繋がらないし、また寝坊してるんじゃないだろうな。」</p><p><strong>佐藤:</strong> 「まあまあ、落ち着けよ。時間にルーズな山田[BLANK1]、前日の夜に遅くまでゲームをしていて、アラームをかけ忘れたに違いないさ。あいつの遅刻癖は、学生時代から20年経っても全く治らないな。」</p><p><strong>田中:</strong> 「全くだよ。今日は俺が新居のホームシアター用にデノンのアンプを買うっていう大事な日なんだぞ。あいつが車を出してくれるって言うから待ってるのに、これじゃあ夕方になっちまう。自力で電車で運べ[BLANK2]けど、あんな重い機材を持ち歩くのはアラフォーの腰にはキツイんだよ。」</p><p><strong>佐藤:</strong> 「確かに、あの巨大なアンプを電車で運ぶのは地獄だな。……おっ、噂をすれば山田からLINEが来たぞ。えーっと、『ごめん、車のバッテリーが上がっててエンジンがかからない！今からJAFを呼ぶ！』だってさ。」</p><p><strong>田中:</strong> 「はあ！？マジかよ。寝坊どころか車のトラブルかよ！」</p><p><strong>佐藤:</strong> 「驚いた[BLANK3]、あいつすでに家を出ようとはしてたみたいだな。いつもの寝坊じゃなかっただけ、少しは成長してるじゃないか。」</p><p><strong>田中:</strong> 「そんなことで感心してる場合か！残念な[BLANK4]、今日の秋葉原での買い物は中止だな。仕方ない、今日はこのカフェで山田が来るまで粘って、あいつの奢りで一番高いランチでも食ってやる。」</p><p><strong>佐藤:</strong> 「それがいい。あいつ[BLANK5]、平謝りしながら特大のハンバーグでも奢ってくれるだろうさ。」</p>",
            blanks: [
                { id: "BLANK1", options: ["のことだから", "ないことはない", "ことに"], answer: "のことだから" },
                { id: "BLANK2", options: ["ないこともない", "ことに", "のことだから"], answer: "ないこともない" },
                { id: "BLANK3", options: ["ことに", "のことだから", "ないことはない"], answer: "ことに" },
                { id: "BLANK4", options: ["ことに", "のことだから", "ないこともない"], answer: "ことに" },
                { id: "BLANK5", options: ["のことだから", "ことに", "ないことはない"], answer: "のことだから" }
            ]
        },
        story: {
            title: "A Turn of Events in the Airsoft Management",
            text: "<p>私が運営チームの一員として関わっているサバイバルゲームのコミュニティ『AOJ』は、設立から数年が経過し、メンバーの数も安定してきた。しかし、安定というのは時に停滞を生む。最近の定例イベントでは、毎回同じような顔ぶれが集まり、ゲームの進行や戦術もマンネリ化しつつあった。運営メンバーとして新しい企画やルールを導入でき[BLANK1]が、どうしても安全性を最優先に考えると、斬新なアイデアを実行に移すのには躊躇してしまっていたのだ。</p><p>そんなある日、ありがたい[BLANK2]、近隣の別のサバゲーチームから「合同で大規模な交流戦を行わないか」という打診があった。これは我々のコミュニティに新しい風を吹き込む絶好のチャンスだった。しかし、合同戦となると参加者は100名を超え、連携ミスやルール解釈の違いによるトラブルが発生するリスクも跳ね上がる。少し不安もあったが、常に新しい刺激を求めているメンバーたちの[BLANK3]、間違いなくこの提案に大賛成するだろうと確信し、私はそのオファーを快諾した。</p><p>イベント当日。予想外な[BLANK4]、相手チームのリーダーは私が20年前のサバゲーデビュー戦でボコボコにされた、当時の凄腕プレイヤーだったのだ。彼は私の顔を見るなり大笑いし、「お前がまだこの業界で頑張っていたとはな！」と肩を叩いてきた。長年のライバルであり戦友でもある彼が相手チームを率いているのだ。経験豊富な彼らの[BLANK5]、安全でクリーンな素晴らしいゲームを展開してくれるに違いない。私は緊張よりも深い高揚感に包まれ、愛用の東京マルイのライフルを強く握りしめた。</p>",
            blanks: [
                { id: "BLANK1", options: ["ないこともない", "のことだから", "ことに"], answer: "ないこともない" },
                { id: "BLANK2", options: ["ことに", "のことだから", "ないことはない"], answer: "ことに" },
                { id: "BLANK3", options: ["のことだから", "ことに", "ないこともない"], answer: "のことだから" },
                { id: "BLANK4", options: ["ことに", "のことだから", "ないことはない"], answer: "ことに" },
                { id: "BLANK5", options: ["のことだから", "ことに", "ないこともない"], answer: "のことだから" }
            ]
        }
    },
    {
        id: 35,
        title: "Lesson 35: Prerequisites, Bypasses & Supremacy",
        grammar: [
            {
                point: "~てからでないと / ~てからでなければ",
                english: "Unless ~ is done first / Until ~",
                structure: "Verb (て-form) + からでないと / からでなければ",
                nuance: "Sets a strict, non-negotiable prerequisite. It means that Action B absolutely cannot happen, or is completely forbidden, until Action A has been fully completed first.",
                metaphor: "A highly secure bank vault. Unless you punch in the exact numeric code and turn both heavy keys simultaneously (Action A), the vault door simply will not budge (Action B).",
                examples: [
                    { topic: "Business", text: "上司の許可を得てからでないと、この契約は進められません。", eng: "Unless we get the boss's permission first, we cannot proceed with this contract." },
                    { topic: "Health", text: "傷が完全に治ってからでなければ、激しい運動はしてはいけません。", eng: "Until the wound is completely healed, you must not do intense exercise." },
                    { topic: "Computers", text: "古いデータをバックアップしてからでないと、システムの初期化は危険だ。", eng: "Unless you back up the old data first, initializing the system is dangerous." },
                    { topic: "Food", text: "手を綺麗に洗ってからでなければ、ご飯を食べてはいけません。", eng: "Unless you wash your hands cleanly first, you must not eat a meal." },
                    { topic: "Airsoft", text: "安全講習を受けてからでないと、フィールドには入れません。", eng: "Unless you take the safety lecture first, you cannot enter the field." }
                ],
                clickingGames: [
                    { prompt: "Unless you read the manual first, you cannot assemble it.", target: "マニュアルを読んでからでないと組み立てられません", words: ["マニュアルを読んで", "からでないと", "組み立てられません"] },
                    { prompt: "Until the test is over, I cannot play games.", target: "テストが終わってからでなければゲームはできない", words: ["テストが", "終わってからでなければ", "ゲームはできない"] },
                    { prompt: "Unless I check the actual item first, I don't want to buy it.", target: "実物を確認してからでないと買いたくない", words: ["実物を確認して", "からでないと", "買いたくない"] },
                    { prompt: "Until I get a reply via email, I cannot move forward.", target: "メールの返事が来てからでなければ動けない", words: ["メールの返事が来て", "からでなければ", "動けない"] },
                    { prompt: "Unless I drink coffee first, my brain doesn't wake up.", target: "コーヒーを飲んでからでないと頭が働かない", words: ["コーヒーを飲んで", "からでないと", "頭が働かない"] }
                ],
                dropdownGames: [
                    { before: "全員の意見を", options: ["聞いてからでないと", "聞くからでないと", "聞いたからでないと"], answer: "聞いてからでないと", after: "、決定を下すことはできません。" },
                    { before: "基礎の文法をしっかり", options: ["学んでからでなければ", "学ぶからでなければ", "学んだからでなければ"], answer: "学んでからでなければ", after: "、応用問題は解けません。" },
                    { before: "熱が完全に", options: ["下がってからでないと", "下がるからでないと", "下がったからでないと"], answer: "下がってからでないと", after: "、出社してはいけません。" },
                    { before: "実家の親に", options: ["相談してからでなければ", "相談するからでなければ", "相談したからでなければ"], answer: "相談してからでなければ", after: "、家を買う決断はできない。" },
                    { before: "十分な安全確認を", options: ["してからでないと", "するからでないと", "したからでないと"], answer: "してからでないと", after: "、機械を動かさないでください。" }
                ],
                opinionQuestions: [
                    { text: "あなたの仕事で、「必ず〇〇してからでないと、次に進めない」という厳しいルールはありますか？", eng: "In your work, is there a strict rule where 'Unless you absolutely do X first, you cannot proceed to the next'?" },
                    { text: "日常の習慣で、「これを終わらせてからでないと、リラックスできない」と思うことは何ですか？", eng: "In your daily habits, what is something where you feel 'Unless I finish this first, I cannot relax'?" },
                    { text: "新しい趣味を始める時、「〇〇を準備してからでないと始めない」タイプですか、それともとりあえずやってみるタイプですか？", eng: "When starting a new hobby, are you the type who 'won't start unless I prepare X first', or the type to just try it anyway?" }
                ]
            },
            {
                point: "~ことなく",
                english: "Without doing ~",
                structure: "Verb (Dictionary form) + ことなく",
                nuance: "A formal, written expression meaning to do an action while entirely bypassing or skipping another action that would normally be expected. It highlights a continuous or resolute state.",
                metaphor: "A marathon runner who speeds straight past a water station without breaking stride or stopping to take a drink, entirely focused on the finish line.",
                examples: [
                    { topic: "General JLPT", text: "彼は一度も休むことなく、最後まで走り切った。", eng: "Without resting even once, he ran all the way to the end." },
                    { topic: "Business", text: "このプロジェクトは、遅れることなく無事に完了した。", eng: "This project was safely completed without being delayed." },
                    { topic: "Nature", text: "川の水は止まることなく、海へと流れ続けている。", eng: "The river water continues to flow to the sea without stopping." },
                    { topic: "Study", text: "諦めることなく毎日勉強を続ければ、必ず合格できる。", eng: "If you continue studying every day without giving up, you can absolutely pass." },
                    { topic: "Computers", text: "システムはエラーを起こすことなく、24時間稼働している。", eng: "The system has been operating for 24 hours without causing any errors." }
                ],
                clickingGames: [
                    { prompt: "He stared into my eyes without averting his gaze.", target: "彼は目をそらすことなく私の目を見つめた", words: ["彼は目を", "そらすことなく", "私の目を見つめた"] },
                    { prompt: "She continued to smile without showing tears.", target: "彼女は涙を見せることなく笑顔を保ち続けた", words: ["彼女は涙を", "見せることなく", "笑顔を保ち続けた"] },
                    { prompt: "The negotiations were concluded without conflicting.", target: "交渉は対立することなく円満にまとまった", words: ["交渉は", "対立することなく", "円満にまとまった"] },
                    { prompt: "He accepted his fate without panicking.", target: "彼は慌てることなく自分の運命を受け入れた", words: ["彼は", "慌てることなく", "自分の運命を受け入れた"] },
                    { prompt: "I continued the airsoft match without taking a break.", target: "休憩することなくサバゲーの試合を続けた", words: ["休憩する", "ことなく", "サバゲーの試合を続けた"] }
                ],
                dropdownGames: [
                    { before: "彼は一度も", options: ["振り返ることなく", "振り返るのことなく", "振り返ってことなく"], answer: "振り返ることなく", after: "、真っ直ぐに歩いて行った。" },
                    { before: "天候に", options: ["左右されることなく", "左右されるのことなく", "左右されてことなく"], answer: "左右されることなく", after: "、スケジュール通りに進行した。" },
                    { before: "私は他人の意見に", options: ["流されることなく", "流されるのことなく", "流されてことなく"], answer: "流されることなく", after: "、自分の道を選んだ。" },
                    { before: "彼女は決して", options: ["怒ることなく", "怒るのことなく", "怒ってことなく"], answer: "怒ることなく", after: "、優しく諭してくれた。" },
                    { before: "その時計は100年間、一度も", options: ["止まることなく", "止まるのことなく", "止まってことなく"], answer: "止まることなく", after: "時を刻んでいる。" }
                ],
                opinionQuestions: [
                    { text: "あなたが過去に、「一度も諦めることなく」最後までやり遂げた大きな挑戦は何ですか？", eng: "What is a major challenge in your past that you completed to the end 'without giving up even once'?" },
                    { text: "仕事や社会で、「他人の意見に流されることなく」自分の信念を貫くことは難しいと思いますか？", eng: "Do you think it is difficult to stick to your own beliefs 'without being swayed by the opinions of others' in work or society?" },
                    { text: "「休むことなく」ずっと稼働し続けている現代のサービスで、一番ありがたいと思うものは何ですか？", eng: "What is the modern service you are most grateful for that operates continuously 'without resting'?" }
                ]
            },
            {
                point: "~にかけては",
                english: "When it comes to ~ / In the area of ~",
                structure: "Noun + にかけては",
                nuance: "Used to single out a specific topic, skill, or area in order to strongly praise someone (or yourself) for having absolute superiority or unbeatable confidence in that one specific thing.",
                metaphor: "A specialized sniper in a team. They might be terrible at hand-to-hand combat or driving, but *when it comes to* long-range shooting, absolutely nobody can beat them.",
                examples: [
                    { topic: "Skills", text: "彼はプログラミングにかけては、社内で右に出る者はいない。", eng: "When it comes to programming, there is no one in the company who surpasses him." },
                    { topic: "Cooking", text: "メキシコ料理の辛さの知識にかけては、誰にも負けない自信がある。", eng: "When it comes to knowledge about the spiciness of Mexican food, I have the confidence that I won't lose to anyone." },
                    { topic: "Airsoft", text: "森の中での隠密行動にかけては、彼の技術はトップクラスだ。", eng: "When it comes to stealth action in the forest, his skills are top-class." },
                    { topic: "Language", text: "英語の文法にかけては自信があるが、スピーキングは苦手だ。", eng: "When it comes to English grammar, I have confidence, but I am bad at speaking." },
                    { topic: "Hobbies", text: "レトロゲームの収集にかけては、彼以上のオタクを見たことがない。", eng: "When it comes to collecting retro games, I have never seen a bigger geek than him." }
                ],
                clickingGames: [
                    { prompt: "When it comes to singing, she is completely unbeatable.", target: "歌を歌うことにかけては彼女の右に出る者はいない", words: ["歌を歌うことに", "かけては", "彼女の右に出る者はいない"] },
                    { prompt: "When it comes to the speed of assembling a PC, he is a genius.", target: "パソコンを組み立てる速さにかけては彼は天才だ", words: ["パソコンを組み立てる", "速さにかけては", "彼は天才だ"] },
                    { prompt: "When it comes to stamina, our team is the best.", target: "体力の限界まで走ることにかけてはうちのチームが一番だ", words: ["体力の限界まで", "走ることにかけては", "うちのチームが一番だ"] },
                    { prompt: "When it comes to knowledge of history, he is essentially a walking dictionary.", target: "歴史の知識にかけては彼はまさに生き字引だ", words: ["歴史の知識に", "かけては", "彼はまさに生き字引だ"] },
                    { prompt: "When it comes to loving cameras, no one can beat him.", target: "カメラを愛することにかけては誰にも負けない", words: ["カメラを愛することに", "かけては", "誰にも負けない"] }
                ],
                dropdownGames: [
                    { before: "語学の", options: ["センスにかけては", "センスをかけては", "センスがかけては"], answer: "センスにかけては", after: "、彼女は本当に素晴らしい才能を持っている。" },
                    { before: "美味しいラーメン屋の", options: ["情報にかけては", "情報にかけたら", "情報をかけては"], answer: "情報にかけては", after: "、彼に聞くのが一番だ。" },
                    { before: "数字の", options: ["計算にかけては", "計算にかけの", "計算をかけては"], answer: "計算にかけては", after: "、絶対にミスをしない自信がある。" },
                    { before: "人を", options: ["笑わせることにかけては", "笑わせるにかけては", "笑わせるのをかけては"], answer: "笑わせることにかけては", after: "、彼はプロのお笑い芸人並みだ。" },
                    { before: "サバゲーの", options: ["戦術にかけては", "戦術にかけの", "戦術をかけては"], answer: "戦術にかけては", after: "、我々のリーダーが最も優れている。" }
                ],
                opinionQuestions: [
                    { text: "あなたが「これにかけては誰にも負けない！」と少し自慢できる特技や知識は何ですか？", eng: "What is a special skill or knowledge you can slightly boast about, saying 'When it comes to this, I won't lose to anyone!'?" },
                    { text: "あなたの周りに、「〇〇にかけては天才的だ」と思えるような才能を持った人はいますか？", eng: "Is there someone around you with a talent that makes you think 'When it comes to X, they are a genius'?" },
                    { text: "今後、「〇〇にかけてはプロレベルになりたい」と思っている分野は何ですか？", eng: "In the future, what is a field where you think 'When it comes to X, I want to become pro-level'?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Helping out a mutual friend who is trying to open a new restaurant.",
            text: "<p><strong>田中:</strong> 「そういえば、学生時代の後輩の健太が、来月自分のカレー屋をオープンするらしいぞ。あいつ、ついに長年の夢を叶えるんだな。」</p><p><strong>佐藤:</strong> 「へえ、健太が！あいつ、昔から世界中のスパイスの知識[BLANK1]、素人の域を完全に超えてたからな。絶対に美味しいカレーを作るはずだ。でも、飲食店の経営ってのは、料理が美味いだけじゃ絶対に成功しない厳しい世界だぞ。」</p><p><strong>田中:</strong> 「そうなんだよ。あいつも経営や経理のことは全くの素人だから、毎晩頭を抱えてるらしい。店の立地やターゲット層のマーケティングをしっかり終わらせ[BLANK2]、内装工事に取り掛かるのは危険だと俺も忠告したんだ。」</p><p><strong>佐藤:</strong> 「お前の言う通りだ。勢いだけで突き進んで、多額の借金を背負うのだけは避けさせたいからな。それに、オープンしてからも客を飽きさせる[BLANK3]、新しいメニューを開発し続ける体力が必要だ。」</p><p><strong>田中:</strong> 「今週末、健太のプレオープンに招待されてるんだけど、一緒に行かないか？俺たちの社会人としての経験から、色々とアドバイスをしてやろうぜ。」</p><p><strong>佐藤:</strong> 「いいな、行こう。ビジネスの厳しい現実を教え[BLANK4]、あいつの店に投資する価値はないからな。……というのは冗談で、純粋にあいつの激辛カレーが食べたいだけだけどな。」</p><p><strong>田中:</strong> 「ははは、健太のスパイス配合の腕[BLANK5]、俺たちを唸らせるのは間違いないだろうな。週末が楽しみだ。」</p>",
            blanks: [
                { id: "BLANK1", options: ["にかけては", "ことなく", "てからでないと"], answer: "にかけては" },
                { id: "BLANK2", options: ["てからでないと", "ことなく", "にかけては"], answer: "てからでないと" },
                { id: "BLANK3", options: ["ことなく", "てからでないと", "にかけては"], answer: "ことなく" },
                { id: "BLANK4", options: ["てからでないと", "ことなく", "にかけては"], answer: "てからでないと" },
                { id: "BLANK5", options: ["にかけては", "ことなく", "てからでないと"], answer: "にかけては" }
            ]
        },
        story: {
            title: "Mastering the Japanese Language",
            text: "<p>私が日本に住み始めてから数年が経つが、日本語の学習は今でも私の日常における最大の挑戦であり続けている。来月にはJLPTのN1という最も難関な試験に挑む予定だが、これまでの道のりは決して平坦ではなかった。漢字の暗記や複雑な敬語のルールには何度も挫折しそうになったが、私は一日たりとも勉強を休む[BLANK1]、毎朝机に向かい続けてきた。</p><p>語学学習において私が学んだ最も重要な教訓は、基礎を疎かにしてはならないということだ。N2レベルの基礎文法や語彙を完全に理解し、頭の中で瞬時に組み立てられるようになっ[BLANK2]、N1の高度で抽象的な長文読解に太刀打ちすることは絶対に不可能なのだ。ただ単語を眺めるだけではなく、実際に口に出し、文脈の中でどう使われるかを徹底的に反復する泥臭いプロセスが必要となる。</p><p>しかし、こうした苦労の裏には確かな喜びもある。アニメや漫画のセリフ、あるいは日本の歴史や文化の深い理解[BLANK3]、私は以前の自分とは比べ物にならないほどの知識と自信を身につけた。今では、字幕に頼る[BLANK4]、日本の友人たちと政治や社会問題について深い議論を交わすことができるまでになったのだ。</p><p>言語とは、その国の魂そのものである。文法や単語をマスターし[BLANK5]、その奥にある日本人の繊細な感情や思いやりの精神を真に理解することはできないだろう。N1合格はゴールではなく、日本社会により深く根を下ろすための新たなスタート地点に過ぎない。私はこれからも、焦る[BLANK6]自分のペースで、この美しい言語の探求を続けていく覚悟だ。</p>",
            blanks: [
                { id: "BLANK1", options: ["ことなく", "てからでないと", "にかけては"], answer: "ことなく" },
                { id: "BLANK2", options: ["てからでないと", "ことなく", "にかけては"], answer: "てからでないと" },
                { id: "BLANK3", options: ["にかけては", "ことなく", "てからでないと"], answer: "にかけては" },
                { id: "BLANK4", options: ["ことなく", "てからでないと", "にかけては"], answer: "ことなく" },
                { id: "BLANK5", options: ["てからでないと", "ことなく", "にかけては"], answer: "てからでないと" },
                { id: "BLANK6", options: ["ことなく", "てからでないと", "にかけては"], answer: "ことなく" }
            ]
        }
    }, {
        id: 36,
        title: "Lesson 36: Regardless, Ignoring & Disregard",
        grammar: [
            {
                point: "~を問わず (をとわず)",
                english: "Regardless of (Age, Gender, Time, etc.)",
                structure: "Noun + を問わず",
                nuance: "Used with nouns that have multiple categories or opposites (e.g., age, gender, nationality, day/night, experience). It means the rule or fact applies to absolutely all of them without exception.",
                metaphor: "An 'All Access' VIP pass. It doesn't matter if you are young, old, male, or female; the doors open for everyone equally.",
                examples: [
                    { topic: "Business", text: "この会社は、国籍や性別を問わず、優秀な人材を採用している。", eng: "This company hires excellent talent regardless of nationality or gender." },
                    { topic: "Airsoft", text: "私たちのサバゲーチームは、経験の有無を問わずメンバーを歓迎します。", eng: "Our airsoft team welcomes members regardless of whether they have experience or not." },
                    { topic: "Technology", text: "このスマートホームのシステムは、昼夜を問わず家を監視してくれる。", eng: "This smart home system monitors the house regardless of day or night." },
                    { topic: "Language", text: "そのウェブサイトは、年齢を問わず多くの日本語学習者に利用されている。", eng: "That website is used by many Japanese learners regardless of age." },
                    { topic: "Shopping", text: "このネットショップは、季節を問わずいつでも新鮮なスパイスが買える。", eng: "At this online shop, you can buy fresh spices anytime, regardless of the season." }
                ],
                clickingGames: [
                    { prompt: "This game can be enjoyed regardless of whether you are a pro or amateur.", target: "このゲームはプロアマを問わず楽しむことができる", words: ["このゲームは", "プロアマを問わず", "楽しむことができる"] },
                    { prompt: "That gym is open regardless of day or night.", target: "あのジムは昼夜を問わず営業している", words: ["あのジムは", "昼夜を問わず", "営業している"] },
                    { prompt: "We are recruiting participants regardless of academic background.", target: "学歴を問わず広く参加者を募集しています", words: ["学歴を問わず", "広く参加者を", "募集しています"] },
                    { prompt: "He calls me regardless of the time.", target: "彼は時間を問わず私に電話をかけてくる", words: ["彼は", "時間を問わず", "私に電話をかけてくる"] },
                    { prompt: "You can enjoy this beautiful scenery regardless of the season.", target: "四季を問わずこの美しい景色を堪能できる", words: ["四季を問わず", "この美しい景色を", "堪能できる"] }
                ],
                dropdownGames: [
                    { before: "参加者の", options: ["年齢を問わず", "年齢に問わず", "年齢が問わず"], answer: "年齢を問わず", after: "、誰でもエントリー可能です。" },
                    { before: "このサービスは、個人の", options: ["性別を問わず", "性別に問わず", "性別が問わず"], answer: "性別を問わず", after: "平等に提供されます。" },
                    { before: "彼は、", options: ["洋の東西を問わず", "洋の東西に問わず", "洋の東西が問わず"], answer: "洋の東西を問わず", after: "幅広い歴史の知識を持っている。" },
                    { before: "弊社では、", options: ["経験の有無を問わず", "経験の有無に問わず", "経験の有無が問わず"], answer: "経験の有無を問わず", after: "熱意のある方を求めています。" },
                    { before: "私のチームは", options: ["昼夜を問わず", "昼夜に問わず", "昼夜が問わず"], answer: "昼夜を問わず", after: "サーバーの監視を行っている。" }
                ],
                opinionQuestions: [
                    { text: "あなたの仕事や趣味のコミュニティは、「年齢や性別を問わず」誰でも参加しやすい環境ですか？", eng: "Is your work or hobby community an environment that is easy for anyone to join 'regardless of age or gender'?" },
                    { text: "「時間を問わず」ついつい熱中してしまう趣味やゲームは何ですか？", eng: "What is a hobby or game that you get absorbed in 'regardless of the time'?" },
                    { text: "「季節を問わず」あなたが一年中冷蔵庫にストックしている食べ物や飲み物は何ですか？", eng: "What is a food or drink you stock in your fridge all year round, 'regardless of the season'?" }
                ]
            },
            {
                point: "~にかかわらず / ~に（は）かかわりなく",
                english: "Regardless of (Condition/State) / Whether or not",
                structure: "Noun / Verb (Dictionary / ない-form) + にかかわらず",
                nuance: "Similar to を問わず, but more often used with changing conditions (weather, distance, likes/dislikes) or paired verbs (行く行かない = whether you go or not). It means the resulting action will happen no matter what the condition is.",
                metaphor: "A mail carrier delivering letters. Neither snow, nor rain, nor heat, nor gloom of night will stop them from completing their route.",
                examples: [
                    { topic: "Weather", text: "明日のサバゲーの試合は、天候にかかわらず予定通り決行します。", eng: "Tomorrow's airsoft match will proceed as scheduled, regardless of the weather." },
                    { topic: "Business", text: "この商品は、景気の良し悪しにかかわらず安定して売れている。", eng: "This product sells steadily regardless of whether the economy is good or bad." },
                    { topic: "Event", text: "参加するしないにかかわらず、明日の朝までに返事をください。", eng: "Regardless of whether you participate or not, please give me a reply by tomorrow morning." },
                    { topic: "Education", text: "英語の成績にかかわらず、すべての社員が海外研修を受けられる。", eng: "Regardless of their English grades, all employees can take the overseas training." },
                    { topic: "Shopping", text: "商品を使う使わないにかかわらず、開封後の返品はできません。", eng: "Regardless of whether you use the product or not, items cannot be returned after opening." }
                ],
                clickingGames: [
                    { prompt: "I will drink alcohol tonight regardless of the meeting's results.", target: "会議の結果にかかわらず今夜はお酒を飲む", words: ["会議の", "結果にかかわらず", "今夜はお酒を飲む"] },
                    { prompt: "Please contact me regardless of whether you succeed or fail.", target: "成功失敗にかかわらず必ず私に連絡してください", words: ["成功失敗に", "かかわらず", "必ず私に連絡してください"] },
                    { prompt: "This plant grows well regardless of the temperature.", target: "気温の高低にかかわらずこの植物はよく育つ", words: ["気温の", "高低にかかわらず", "この植物はよく育つ"] },
                    { prompt: "I will go to the gym regardless of whether I am busy or not.", target: "忙しい忙しくないにかかわらずジムには通う", words: ["忙しい忙しくないに", "かかわらず", "ジムには通う"] },
                    { prompt: "Shipping is free regardless of the distance.", target: "距離の遠近にかかわらず送料は無料です", words: ["距離の", "遠近にかかわらず", "送料は無料です"] }
                ],
                dropdownGames: [
                    { before: "好き", options: ["嫌いにかかわらず", "嫌いをかかわらず", "嫌いがかかわらず"], answer: "嫌いにかかわらず", after: "、野菜はバランスよく食べなさい。" },
                    { before: "明日の試験は、天候", options: ["にかかわらず", "をかかわらず", "がかかわらず"], answer: "にかかわらず", after: "実施されます。" },
                    { before: "試合に", options: ["勝つ負けるにかかわらず", "勝つ負けるをかかわらず", "勝つ負けるがかかわらず"], answer: "勝つ負けるにかかわらず", after: "、全力を尽くすことが大切だ。" },
                    { before: "経験の", options: ["有無にかかわらず", "有無をかかわらず", "有無がかかわらず"], answer: "有無にかかわらず", after: "、この仕事は基礎から学んでもらいます。" },
                    { before: "彼が", options: ["来る来ないにかかわらず", "来る来ないをかかわらず", "来る来ないがかかわらず"], answer: "来る来ないにかかわらず", after: "、時間になったら出発します。" }
                ],
                opinionQuestions: [
                    { text: "あなたの仕事で、「個人の好き嫌いにかかわらず」やらなければならない業務は何ですか？", eng: "In your work, what is a task you must do 'regardless of personal likes or dislikes'?" },
                    { text: "「天候にかかわらず」あなたが毎日楽しんでいる趣味や習慣はありますか？", eng: "Do you have a hobby or habit you enjoy every day 'regardless of the weather'?" },
                    { text: "買い物の際、「値段の高さにかかわらず」どうしても買ってしまうものは何ですか？", eng: "When shopping, what is something you absolutely end up buying 'regardless of how high the price is'?" }
                ]
            },
            {
                point: "~もかまわず",
                english: "Without caring about / Without worrying about",
                structure: "Noun + もかまわず / Verb (Dictionary) + のもかまわず",
                nuance: "Doing something without caring about social norms, appearances, danger, or what other people think. It often expresses the speaker's surprise at an extreme or socially unusual action.",
                metaphor: "Running straight through a massive mud puddle in a pure white tuxedo to catch a train. You completely abandon all care for how you look or what happens to your suit.",
                examples: [
                    { topic: "Emotions", text: "彼女は人目もかまわず、駅のホームで大声で泣き出した。", eng: "Without caring about public eyes, she started crying loudly on the station platform." },
                    { topic: "Airsoft", text: "彼は泥だらけになるのもかまわず、地面を這って敵に近づいた。", eng: "Without caring about getting covered in mud, he crawled on the ground to approach the enemy." },
                    { topic: "Food", text: "彼はスーツにカレーが跳ねるのもかまわず、勢いよくうどんをすべり込んだ。", eng: "Without worrying about curry splashing on his suit, he vigorously slurped the udon." },
                    { topic: "Business", text: "社長は深夜であるのもかまわず、私の携帯に電話をかけてきた。", eng: "Without caring that it was late at night, the president called my cell phone." },
                    { topic: "Hobbies", text: "彼は値段もかまわず、最新のホームシアター機材を次々と購入した。", eng: "Without worrying about the price, he bought the latest home theater equipment one after another." }
                ],
                clickingGames: [
                    { prompt: "He laughed loudly without caring about his surroundings.", target: "彼は周囲の迷惑もかまわず大声で笑った", words: ["彼は", "周囲の迷惑もかまわず", "大声で笑った"] },
                    { prompt: "She rushed out without caring about the heavy rain.", target: "彼女は土砂降りの雨もかまわず飛び出していった", words: ["彼女は", "土砂降りの雨もかまわず", "飛び出していった"] },
                    { prompt: "I fell asleep without caring about my dirty clothes.", target: "服が汚れているのもかまわずベッドで寝てしまった", words: ["服が汚れているの", "もかまわず", "ベッドで寝てしまった"] },
                    { prompt: "He ate the hot food without caring about getting burned.", target: "彼は火傷するのもかまわず熱い料理を食べた", words: ["彼は", "火傷するのもかまわず", "熱い料理を食べた"] },
                    { prompt: "I argued with my boss without caring about being fired.", target: "クビになるのもかまわず上司と口論した", words: ["クビになるの", "もかまわず", "上司と口論した"] }
                ],
                dropdownGames: [
                    { before: "彼は", options: ["人目もかまわず", "人目をかまわず", "人目がかまわず"], answer: "人目もかまわず", after: "、道端で土下座をして謝った。" },
                    { before: "靴が", options: ["濡れるのもかまわず", "濡れるをかまわず", "濡れるがかまわず"], answer: "濡れるのもかまわず", after: "、彼は川に入って犬を助けた。" },
                    { before: "終電が", options: ["なくなるのもかまわず", "なくなるをかまわず", "なくなるがかまわず"], answer: "なくなるのもかまわず", after: "、私たちは朝まで語り合った。" },
                    { before: "彼は", options: ["体裁（ていさい）もかまわず", "体裁をかまわず", "体裁がかまわず"], answer: "体裁（ていさい）もかまわず", after: "、必死に会社に許しを乞うた。" },
                    { before: "服が", options: ["破れるのもかまわず", "破れるをかまわず", "破れるがかまわず"], answer: "破れるのもかまわず", after: "、森の中を走り抜けた。" }
                ],
                opinionQuestions: [
                    { text: "あなたが過去に、「周囲の目（人目）もかまわず」感情を爆発させた（泣いた、怒ったなど）経験はありますか？", eng: "Have you ever had an experience in the past where you exploded with emotion (cried, got angry, etc.) 'without caring about public eyes'?" },
                    { text: "どうしても欲しいものを見つけた時、「値段もかまわず」買ってしまうタイプですか？", eng: "When you find something you really want, are you the type to end up buying it 'without caring about the price'?" },
                    { text: "サバゲーやスポーツなどで、「服が汚れるのもかまわず」夢中になった思い出を教えてください。", eng: "Tell me a memory where you got so absorbed in airsoft or a sport 'without caring about getting your clothes dirty'." }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Discussing recruiting new members for their weekend hobby group.",
            text: "<p><strong>田中:</strong> 「最近、うちのサバゲーチームの参加人数が少し減ってきてるんだよな。結成して数年経つから、古参メンバーの熱が冷めてきてるのかもしれない。そろそろSNSを使って、年齢や性別[BLANK1]幅広く新規メンバーを募集しようかと思ってるんだ。」</p><p><strong>佐藤:</strong> 「それはいいアイデアだな。うちのチームは経験の有無[BLANK2]、誰でも安全に楽しめるのが売りだからな。ただ、初心者が増えると、ルールの徹底がより重要になるぞ。先日も別のチームで、ゲーム中にゴーグルを外して危うく失明しそうになった奴がいたらしいからな。」</p><p><strong>田中:</strong> 「ああ、安全管理だけは絶対に妥協できないよな。それに、雨の日でも天候[BLANK3]ゲームを決行するかどうかも、初心者には事前にしっかり伝えておかないとトラブルになるしな。」</p><p><strong>佐藤:</strong> 「全くだ。この前の貸切イベントなんて、土砂降りの雨だったのに、お前ら古参メンバーは服が泥だらけになるの[BLANK4]、地面を這いつくばって歓声を上げてただろ？あれを初心者に最初から求めるのはハードルが高すぎるぞ。」</p><p><strong>田中:</strong> 「ははは、確かにあれはやりすぎだったかもしれない。でも、あの泥臭さこそが大人の本気の遊びってやつさ。今度の週末も、泥だらけの迷彩服を奥さんに怒られるの[BLANK5]、最前線で突撃する予定だぜ。」</p><p><strong>佐藤:</strong> 「お前のその無鉄砲な熱意には呆れるよ。まあ、怪我だけはしないように気をつけろよ。」</p>",
            blanks: [
                { id: "BLANK1", options: ["を問わず", "にかかわらず", "もかまわず"], answer: "を問わず" },
                { id: "BLANK2", options: ["にかかわらず", "を問わず", "もかまわず"], answer: "にかかわらず" },
                { id: "BLANK3", options: ["にかかわらず", "を問わず", "もかまわず"], answer: "にかかわらず" },
                { id: "BLANK4", options: ["もかまわず", "を問わず", "にかかわらず"], answer: "もかまわず" },
                { id: "BLANK5", options: ["もかまわず", "にかかわらず", "を問わず"], answer: "もかまわず" }
            ]
        },
        story: {
            title: "Rolling Out the English Curriculum",
            text: "<p>私は現在、企業の人事部で社員向けの新しい英語研修プログラムの責任者を務めている。会社の急速なグローバル化に伴い、今後は部署や役職[BLANK1]、すべての社員が基礎的な英語でのコミュニケーション能力を身につけることが求められているからだ。しかし、この大規模なプロジェクトを社内に浸透させるのは容易なことではなかった。</p><p>導入の初期段階では、現場のマネージャーたちから「日々の業務が忙しいのに、英語の勉強まで強制されるのは困る」という強い反発の声が上がった。だが、海外展開を進める経営陣の決定である以上、社員の賛成反対[BLANK2]、この研修は必ずスケジュール通りに実行しなければならない。私は毎日のように各部署を回り、時に彼らの厳しい不満を浴びるの[BLANK3]、研修の長期的なメリットを説得し続けた。</p><p>システムが本格的に稼働して数ヶ月が経った現在、状況は少しずつ好転している。当初は不満を漏らしていたベテラン社員たちも、スキマ時間を活用してオンライン英会話に挑戦するようになったのだ。私は彼らが年齢[BLANK4]新しいスキルを吸収しようとする姿勢を見て、深い感銘を受けた。人事としての私の仕事は、ただ制度を作るだけではない。周囲の冷ややかな目[BLANK5]、社員一人ひとりの成長を信じて泥臭く伴走し続けることなのだと、今では強く確信している。</p>",
            blanks: [
                { id: "BLANK1", options: ["を問わず", "にかかわらず", "もかまわず"], answer: "を問わず" },
                { id: "BLANK2", options: ["にかかわらず", "を問わず", "もかまわず"], answer: "にかかわらず" },
                { id: "BLANK3", options: ["もかまわず", "を問わず", "にかかわらず"], answer: "もかまわず" },
                { id: "BLANK4", options: ["を問わず", "にかかわらず", "もかまわず"], answer: "を問わず" },
                { id: "BLANK5", options: ["もかまわず", "にかかわらず", "を問わず"], answer: "もかまわず" }
            ]
        }
    },
    {
        id: 37,
        title: "Lesson 37: Setting Aside & Exclusion",
        grammar: [
            {
                point: "~はともかく(として)",
                english: "Setting aside ~ / Whether ~ or not",
                structure: "Noun + はともかく(として)",
                nuance: "Used to put an issue or fact on hold. It means 'I won't evaluate A right now, because B is much more important.' It draws extreme focus to the second part of the sentence.",
                metaphor: "Taking a messy stack of papers off your desk and putting them in a drawer so you can focus entirely on the single, important document right in front of you.",
                examples: [
                    { topic: "Business", text: "彼の性格はともかくとして、プログラミングの技術は一流だ。", eng: "Setting aside his personality, his programming skills are first-class." },
                    { topic: "Food", text: "値段はともかく、このステーキの味は今まで食べた中で最高だ。", eng: "Setting aside the price, the taste of this steak is the best I've ever had." },
                    { topic: "Design", text: "デザインの良し悪しはともかく、このガジェットは実用性が高い。", eng: "Whether the design is good or bad aside, this gadget has high practicality." },
                    { topic: "Language", text: "発音はともかくとして、まずは自分の意見を英語で伝えることが重要だ。", eng: "Setting aside pronunciation, first it is important to convey your opinion in English." },
                    { topic: "Airsoft", text: "勝敗はともかく、今日は全員が安全に楽しめたことが一番の成果だ。", eng: "Setting aside winning or losing, everyone enjoying it safely today is the greatest result." }
                ],
                clickingGames: [
                    { prompt: "Setting aside the design, the performance of this PC is amazing.", target: "見た目はともかくこのPCの性能は素晴らしい", words: ["見た目は", "ともかく", "このPCの性能は素晴らしい"] },
                    { prompt: "Setting aside the cost, I want to prioritize safety.", target: "費用はともかくとして安全性を最優先したい", words: ["費用は", "ともかくとして", "安全性を最優先したい"] },
                    { prompt: "Setting aside whether he can do it or not, his attitude is good.", target: "できるかどうかはともかく彼の態度は立派だ", words: ["できるかどうかは", "ともかく", "彼の態度は立派だ"] },
                    { prompt: "Setting aside the past, what matters is the future.", target: "過去のことはともかくとして重要なのは未来だ", words: ["過去のことは", "ともかくとして", "重要なのは未来だ"] },
                    { prompt: "Whether it sells or not aside, I want to make a game I like.", target: "売れる売れないはともかく自分の好きなゲームを作りたい", words: ["売れる売れないは", "ともかく", "自分の好きなゲームを作りたい"] }
                ],
                dropdownGames: [
                    { before: "結果", options: ["はともかく", "にともかく", "をともかく"], answer: "はともかく", after: "、彼が努力したことは間違いない。" },
                    { before: "顔", options: ["はともかくとして", "にともかくとして", "をともかくとして"], answer: "はともかくとして", after: "、彼の性格は本当に優しい。" },
                    { before: "他の人", options: ["はともかく", "にともかく", "をともかく"], answer: "はともかく", after: "、私だけはあなたの味方です。" },
                    { before: "給料", options: ["はともかくとして", "にともかくとして", "をともかくとして"], answer: "はともかくとして", after: "、やりがいのある仕事を見つけたい。" },
                    { before: "行く行かない", options: ["はともかく", "にともかく", "をともかく"], answer: "はともかく", after: "、まずはスケジュールの確認をしよう。" }
                ],
                opinionQuestions: [
                    { text: "レストランを選ぶ時、「〇〇はともかくとして、味（または雰囲気）が重要だ」と思う〇〇は何ですか？", eng: "When choosing a restaurant, what is the X where you think 'Setting aside X, the taste (or atmosphere) is important'?" },
                    { text: "他人の性格や能力を評価する時、「〇〇はともかく、ここは尊敬できる」という経験はありますか？", eng: "When evaluating someone's personality or ability, have you ever experienced 'Setting aside X, I respect this about them'?" },
                    { text: "「他の人はともかく、私だけは〇〇が好きだ」と密かに思っているマニアックな趣味はありますか？", eng: "Do you have a geeky hobby where you secretly think 'Setting aside other people, I alone like X'?" }
                ]
            },
            {
                point: "~はさておき",
                english: "Setting aside ~ (often to change the subject)",
                structure: "Noun + はさておき",
                nuance: "Very similar to はともかく, but heavily used as a conversational transition to deliberately abandon the current, less-important topic and forcefully pivot to the main, urgent topic.",
                metaphor: "A referee blowing a whistle to break up a minor squabble between players so they can immediately get back to the main game.",
                examples: [
                    { topic: "Business", text: "冗談はさておき、来期の予算について真面目に話し合いましょう。", eng: "Jokes aside, let's discuss the budget for next term seriously." },
                    { topic: "Meeting", text: "個人的な感情はさておき、今はチームの利益を最優先するべきだ。", eng: "Setting aside personal feelings, we should prioritize the team's profit right now." },
                    { topic: "Greetings", text: "長々とした挨拶はさておき、早速本題に入らせていただきます。", eng: "Setting aside lengthy greetings, allow me to get straight to the main point." },
                    { topic: "Shopping", text: "細かいスペックはさておき、一番安いモデルをください。", eng: "Setting aside the detailed specs, please give me the cheapest model." },
                    { topic: "Dating", text: "誰が悪いかはさておき、まずは二人の関係を修復する方法を考えよう。", eng: "Setting aside who is at fault, first let's think of a way to repair our relationship." }
                ],
                clickingGames: [
                    { prompt: "Jokes aside, we need to focus on this trouble.", target: "冗談はさておきこのトラブルに集中しなければならない", words: ["冗談は", "さておき", "このトラブルに集中しなければならない"] },
                    { prompt: "Setting aside the details for now, I want to hear the conclusion.", target: "細かい話はさておきまずは結論を聞きたい", words: ["細かい話は", "さておき", "まずは結論を聞きたい"] },
                    { prompt: "Setting aside who is to blame, let's fix the bug first.", target: "誰の責任かはさておき先にバグを修正しよう", words: ["誰の責任かは", "さておき", "先にバグを修正しよう"] },
                    { prompt: "Setting aside my opinions, what does the president think?", target: "私の意見はさておき社長はどう考えているのですか", words: ["私の意見は", "さておき", "社長はどう考えているのですか"] },
                    { prompt: "Setting aside the price, is this really necessary?", target: "金額はさておきこれは本当に必要なものですか", words: ["金額は", "さておき", "これは本当に必要なものですか"] }
                ],
                dropdownGames: [
                    { before: "世間話", options: ["はさておき", "にさておき", "をさておき"], answer: "はさておき", after: "、早速プロジェクトの進捗を確認しよう。" },
                    { before: "過去の失敗", options: ["はさておき", "にさておき", "をさておき"], answer: "はさておき", after: "、これからの対策を立てるべきだ。" },
                    { before: "デザイン", options: ["はさておき", "にさておき", "をさておき"], answer: "はさておき", after: "、このカメラの画質は圧倒的だ。" },
                    { before: "誰がやるか", options: ["はさておき", "にさておき", "をさておき"], answer: "はさておき", after: "、このシステムは早急に改善が必要だ。" },
                    { before: "冗談", options: ["はさておき", "にさておき", "をさておき"], answer: "はさておき", after: "、あなたの本当の気持ちを聞かせてください。" }
                ],
                opinionQuestions: [
                    { text: "真面目な会議中に、誰かがふざけていた時、「冗談はさておき〜」と話を戻した経験はありますか？", eng: "During a serious meeting, when someone was messing around, have you ever brought the conversation back saying 'Jokes aside~'?" },
                    { text: "あなたが何か大きな問題に直面した時、「過去の失敗はさておき、今は〇〇を考えよう」と切り替えることは得意ですか？", eng: "When facing a big problem, are you good at switching gears by saying 'Setting aside past failures, let's think about X now'?" },
                    { text: "「細かいスペック（または値段）はさておき、見た目が好きだから買った」というアイテムはありますか？", eng: "Is there an item you bought thinking 'Setting aside detailed specs (or price), I bought it because I like how it looks'?" }
                ]
            },
            {
                point: "~を抜きにして（は） / ~抜きで（は）",
                english: "Without ~ / Leaving out ~",
                structure: "Noun + を抜きにして（は）",
                nuance: "Often used in the negative form (〜を抜きにしては〜できない) to strongly state that X is absolutely essential for Y to happen. If you take X out of the equation, the whole thing falls apart.",
                metaphor: "It's the keystone at the top of a stone arch. If you leave it out (抜きにして), the entire bridge collapses instantly.",
                examples: [
                    { topic: "Business", text: "彼のリーダーシップを抜きにしては、このプロジェクトの成功は語れない。", eng: "Without his leadership, we cannot talk about the success of this project." },
                    { topic: "Technology", text: "インターネットを抜きにして、現代のビジネスは成り立たない。", eng: "Without the internet, modern business cannot function." },
                    { topic: "Cooking", text: "スパイシーなチリペッパーを抜きにして、本場のメキシコ料理は作れない。", eng: "Without spicy chili peppers, you cannot make authentic Mexican food." },
                    { topic: "Leisure", text: "お世辞抜きで、あなたの作ったこのカレーは本当に美味しいです。", eng: "Flattery aside (without flattery), this curry you made is truly delicious." },
                    { topic: "Friendship", text: "仲間との協力を抜きにしては、あの厳しいサバゲーの試合には勝てなかった。", eng: "Without cooperation with my comrades, we couldn't have won that harsh airsoft match." }
                ],
                clickingGames: [
                    { prompt: "Without his support, I couldn't have achieved this.", target: "彼のサポートを抜きにしてはこれを達成できなかった", words: ["彼のサポートを", "抜きにしては", "これを達成できなかった"] },
                    { prompt: "I want to talk frankly with you today without titles.", target: "今日は役職抜きで率直に話し合いたい", words: ["今日は", "役職抜きで", "率直に話し合いたい"] },
                    { prompt: "Jokes aside, your presentation was wonderful.", target: "冗談抜きで君のプレゼンは素晴らしかったよ", words: ["冗談抜きで", "君のプレゼンは", "素晴らしかったよ"] },
                    { prompt: "Without smartphones, our lives are unimaginable.", target: "スマホを抜きにして私たちの生活は考えられない", words: ["スマホを", "抜きにして", "私たちの生活は考えられない"] },
                    { prompt: "Without hard training, victory is impossible.", target: "厳しい練習を抜きにして勝利はあり得ない", words: ["厳しい練習を", "抜きにして", "勝利はあり得ない"] }
                ],
                dropdownGames: [
                    { before: "彼の", options: ["存在を抜きにしては", "存在に抜きにしては", "存在が抜きにしては"], answer: "存在を抜きにしては", after: "、この会社の成長は語れません。" },
                    { before: "お世辞", options: ["抜きで", "抜きに", "抜きの"], answer: "抜きで", after: "、今日のあなたの服はとても似合っています。" },
                    { before: "ボランティアの", options: ["協力を抜きにしては", "協力に抜きにしては", "協力が抜きにしては"], answer: "協力を抜きにしては", after: "、この大規模なイベントは運営できない。" },
                    { before: "挨拶", options: ["抜きで", "抜きに", "抜きの"], answer: "抜きで", after: "、いきなり本題から話し始めた。" },
                    { before: "最新の", options: ["IT技術を抜きにしては", "IT技術に抜きにしては", "IT技術が抜きにしては"], answer: "IT技術を抜きにしては", after: "、今後の市場競争に勝つことは不可能だ。" }
                ],
                opinionQuestions: [
                    { text: "あなたの人生や生活において、「これを抜きにしては生きていけない！」と思うほど大切な物や人は何ですか？", eng: "In your life, what is an object or person so important that you think 'Without this, I cannot live!'?" },
                    { text: "「お世辞抜きで（本心から）」誰かを心から褒めた経験は最近ありますか？それはどんなことでしたか？", eng: "Have you recently had an experience where you sincerely praised someone 'without flattery'? What was it about?" },
                    { text: "スポーツや仕事において、「チームワークを抜きにしては」絶対に成功しないと感じたエピソードを教えてください。", eng: "In sports or work, tell me an episode where you felt that 'Without teamwork', success is absolutely impossible." }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Discussing a massive budget overrun on a recent smart home and AV equipment purchase.",
            text: "<p><strong>田中:</strong> 「なあ佐藤、聞いてくれよ。先週、リビングのホームシアター化をさらに進めようと思って、新しい4K有機ELテレビと、高級なサウンドバーを買っちゃったんだ。妻にはまだ内緒にしてるんだけどな。」</p><p><strong>佐藤:</strong> 「おいおい、またかよ！お前、先月も高いアンプを買ったばかりじゃないか。奥さんに怒られるかどうか[BLANK1]、お前の金銭感覚はどうなってるんだよ。完全に麻痺してるだろ。」</p><p><strong>田中:</strong> 「まあ、細かい金額[BLANK2]、とにかく映像と音の迫力が段違いなんだよ！特に暗闇のシーンの深みなんて、前の液晶テレビとは比べ物にならない。お世辞[BLANK3]、あれを見たらお前も絶対に欲しくなるはずだぜ。」</p><p><strong>佐藤:</strong> 「テレビの性能が素晴らしいのは分かった。だが、お前のその無計画な浪費癖[BLANK4]、まずはクレジットカードの引き落とし額をどうやって乗り切るかという深刻な現実を直視すべきだ。冗談[BLANK5]、本当に奥さんに家を追い出されかねないぞ。」</p><p><strong>田中:</strong> 「うっ……痛いところを突くね。確かに、機材のスペック[BLANK6]、来月の支払いが全く足りていないんだ。実は、お前に少しだけお金を貸してもらえないかと……。」</p><p><strong>佐藤:</strong> 「バカ言うな！いくら親友でも、そんな無駄遣いの尻拭いなんてするわけがないだろ。今すぐそのテレビを返品してこい！」</p>",
            blanks: [
                { id: "BLANK1", options: ["はともかく", "はさておき", "を抜きにしては"], answer: "はともかく" },
                { id: "BLANK2", options: ["はさておき", "はともかく", "を抜きにしては"], answer: "はさておき" },
                { id: "BLANK3", options: ["抜きで", "はともかく", "はさておき"], answer: "抜きで" },
                { id: "BLANK4", options: ["はさておき", "を抜きにしては", "はともかく"], answer: "はさておき" },
                { id: "BLANK5", options: ["抜きで", "はさておき", "はともかく"], answer: "抜きで" },
                { id: "BLANK6", options: ["はともかく", "はさておき", "を抜きにしては"], answer: "はともかく" }
            ]
        },
        story: {
            title: "A Night of Intense Spices and Deep Reflection",
            text: "<p>私は週末になると、キッチンにこもってスパイスの配合からこだわる本格的なメキシコ料理を作るのが日課になっている。先日、ついに海外から取り寄せた世界一辛いとされる「キャロライナ・リーパー」のパウダーが届き、さっそく特製のチリコンカンを作ることにした。料理の見た目の美しさ[BLANK1]、その暴力的なまでに突き抜けた辛さこそが、激辛マニアである私にとっての最大の追求テーマなのである。</p><p>完成した深紅のチリコンカンを一口食べた瞬間、舌を刺すような強烈な痛みが走り、瞬く間に全身から汗が噴き出した。一般人の味覚[BLANK2]、この強烈な刺激と、その奥にあるスパイスの複雑な旨味こそが、日々の仕事のストレスを完全に吹き飛ばしてくれるのだ。お世辞[BLANK3]、これまで自分が作ってきたどの料理よりも、攻撃的で、かつ奥深い味わいに仕上がっていた。</p><p>しかし、翌日の朝、私は自分の胃腸の限界を甘く見ていたことを深く後悔することになった。強烈な胃痛で目が覚め、午前中はベッドから起き上がることすらできなかったのだ。趣味への情熱[BLANK4]、40歳を超えた自分の肉体の衰えという現実を、私はもっと冷静に受け止めるべきだった。「健康な胃腸[BLANK5]、激辛料理の真の探求はあり得ない」と、トイレの中で冷や汗を流しながら、私は一つ大人の階段を登ったような気がした。来週末は、胃に優しいマイルドな和食でも作ろうと心に誓ったのである。</p>",
            blanks: [
                { id: "BLANK1", options: ["はともかく", "はさておき", "を抜きにしては"], answer: "はともかく" },
                { id: "BLANK2", options: ["はさておき", "はともかく", "を抜きにしては"], answer: "はさておき" },
                { id: "BLANK3", options: ["抜きで", "はともかく", "はさておき"], answer: "抜きで" },
                { id: "BLANK4", options: ["はさておき", "はともかく", "を抜きにしては"], answer: "はさておき" },
                { id: "BLANK5", options: ["を抜きにしては", "はさておき", "はともかく"], answer: "を抜きにしては" }
            ]
        }
    }, {
        id: 38,
        title: "Lesson 38: Merit, Worth & Expectations",
        grammar: [
            {
                point: "~だけあって / ~だけのことはある",
                english: "As expected of / It's no wonder",
                structure: "Noun / Verb / Adj (Plain form) + だけあって",
                nuance: "Used to praise someone or something because the excellent result perfectly matches their high status, experience, effort, or price. It carries a strong sense of admiration and agreement.",
                metaphor: "It's like dining at a 3-star Michelin restaurant. When you taste the food, you nod and think, 'Ah, it's no wonder this place is world-famous. The quality perfectly matches the reputation.'",
                examples: [
                    { topic: "Food", text: "彼はプロのシェフとして訓練を受けているだけあって、料理の腕前は完璧だ。", eng: "As expected of someone trained as a professional chef, his cooking skills are perfect." },
                    { topic: "Technology", text: "このプロジェクターは10万円以上しただけあって、4Kの画質が圧倒的に美しい。", eng: "It's no wonder this projector cost over 100,000 yen; the 4K image quality is overwhelmingly beautiful." },
                    { topic: "Airsoft", text: "20年のサバゲー経験があるだけあって、彼のフィールドでの動きは全く無駄がない。", eng: "As expected of someone with 20 years of airsoft experience, his movements on the field have absolutely no wasted effort." },
                    { topic: "Business", text: "外資系企業で働いていた彼女だけあって、英語のプレゼンは非常に堂々としている。", eng: "As expected of her who worked at a foreign-affiliated company, her English presentation is very confident." },
                    { topic: "Shopping", text: "あのレストランは毎日大行列ができているだけあって、ステーキの味が最高だ。", eng: "It's no wonder that restaurant has a huge line every day; the taste of the steak is the best." }
                ],
                clickingGames: [
                    { prompt: "As expected of the latest smartphone, the processing speed is extremely fast.", target: "最新のスマホだけあって処理速度がものすごく速い", words: ["最新のスマホ", "だけあって", "処理速度がものすごく速い"] },
                    { prompt: "It's no wonder he studies every day, his Japanese is fluent.", target: "毎日勉強しているだけあって彼の日本語は流暢だ", words: ["毎日勉強している", "だけあって", "彼の日本語は流暢だ"] },
                    { prompt: "As expected of a luxury hotel, the customer service is wonderful.", target: "高級ホテルだけあって接客のサービスが素晴らしい", words: ["高級ホテル", "だけあって", "接客のサービスが素晴らしい"] },
                    { prompt: "It's no wonder it's a popular game, the story is deeply moving.", target: "人気のゲームだけあってストーリーがとても感動的だ", words: ["人気のゲーム", "だけあって", "ストーリーがとても感動的だ"] },
                    { prompt: "As expected of someone who lived in America, his pronunciation is clean.", target: "アメリカに住んでいただけあって発音がとても綺麗だ", words: ["アメリカに住んでいた", "だけあって", "発音がとても綺麗だ"] }
                ],
                dropdownGames: [
                    { before: "長年トレーニングを", options: ["積んできただけあって", "積んできたのだけあって", "積んできただだけあって"], answer: "積んできただけあって", after: "、彼の筋肉はすごい。" },
                    { before: "このパソコンは高価", options: ["なだけあって", "のだけあって", "だだけあって"], answer: "なだけあって", after: "、動画編集もサクサク進む。" },
                    { before: "プロの", options: ["スポーツ選手だけあって", "スポーツ選手のだけあって", "スポーツ選手だだけあって"], answer: "スポーツ選手だけあって", after: "、体力が桁違いだ。" },
                    { before: "世界中で", options: ["売れているだけあって", "売れているのだけあって", "売れているなだけあって"], answer: "売れているだけあって", after: "、この製品は非常に使いやすい。" },
                    { before: "苦労して", options: ["育てただけあって", "育てるのだけあって", "育てただだけあって"], answer: "育てただけあって", after: "、庭のトマトは特別に美味しい。" }
                ],
                opinionQuestions: [
                    { text: "最近何かを買ったり経験したりして、「高いお金を出しただけあって素晴らしい！」と感動したことはありますか？", eng: "Recently, have you bought or experienced something and been moved, thinking 'As expected of paying a lot of money, it's wonderful!'?" },
                    { text: "あなたの周りに、「さすがプロ（または経験者）だけあってすごい」と尊敬できる人はいますか？", eng: "Is there someone around you who you respect, thinking 'As expected of a pro (or experienced person), they are amazing'?" },
                    { text: "日本のサービスや製品で、「世界中で人気があるだけあって質が高い」と思うものは何ですか？", eng: "What Japanese service or product do you think is 'high quality, as expected of something popular worldwide'?" }
                ]
            },
            {
                point: "~かいがあって (甲斐があって)",
                english: "It was worth doing / Rewarding",
                structure: "Verb (た-form) / Noun + の + かいがあって",
                nuance: "Expresses a deep sense of accomplishment and satisfaction that your hard work, effort, or patience finally paid off and produced a highly desirable result.",
                metaphor: "It's like spending hours climbing a steep, exhausting mountain trail, and finally reaching the summit to see a breathtaking sunrise. The view makes every drop of sweat completely worth it.",
                examples: [
                    { topic: "Study", text: "毎日夜遅くまで勉強したかいがあって、ついにJLPTのN1に合格した。", eng: "It was worth studying late every night; I finally passed JLPT N1." },
                    { topic: "Dieting", text: "半年間、甘いものを我慢したかいがあって、10キロのダイエットに成功した。", eng: "It was worth enduring without sweets for half a year; I succeeded in a 10-kilo diet." },
                    { topic: "Business", text: "チーム全員で徹夜で準備したかいがあって、クライアントとの契約が取れた。", eng: "It was worth the whole team preparing all night; we secured the contract with the client." },
                    { topic: "Sports", text: "厳しいトレーニングの甲斐があって、大会で優勝することができた。", eng: "Thanks to the strict training being worth it, I was able to win the championship at the tournament." },
                    { topic: "Gardening", text: "毎日丁寧に水をやったかいがあって、見事なハバネロが収穫できた。", eng: "It was worth watering it carefully every day; I was able to harvest splendid habaneros." }
                ],
                clickingGames: [
                    { prompt: "It was worth practicing every day, my English pronunciation improved.", target: "毎日練習したかいがあって英語の発音が良くなった", words: ["毎日練習した", "かいがあって", "英語の発音が良くなった"] },
                    { prompt: "It was worth saving up money, I was able to buy a new car.", target: "貯金したかいがあって新しい車を買うことができた", words: ["貯金した", "かいがあって", "新しい車を買うことができた"] },
                    { prompt: "The effort of waiting was worth it, I saw a beautiful starry sky.", target: "待ったかいがあって美しい星空を見ることができた", words: ["待ったかいがあって", "美しい星空を", "見ることができた"] },
                    { prompt: "It was worth searching thoroughly, I found a good property.", target: "徹底的に探したかいがあって良い物件が見つかった", words: ["徹底的に探した", "かいがあって", "良い物件が見つかった"] },
                    { prompt: "The surgery was worth it, my pet became completely healthy.", target: "手術のかいがあってペットはすっかり元気になった", words: ["手術の", "かいがあって", "ペットはすっかり元気になった"] }
                ],
                dropdownGames: [
                    { before: "長い間、治療を", options: ["続けたかいがあって", "続けるかいがあって", "続けてかいがあって"], answer: "続けたかいがあって", after: "、ついに病気が完治した。" },
                    { before: "努力", options: ["のかいがあって", "なかいがあって", "であるかいがあって"], answer: "のかいがあって", after: "、彼のビジネスは軌道に乗り始めた。" },
                    { before: "高い学費を", options: ["払ったかいがあって", "払うかいがあって", "払ってかいがあって"], answer: "払ったかいがあって", after: "、素晴らしい教育を受けることができた。" },
                    { before: "ジムに", options: ["通ったかいがあって", "通うかいがあって", "通ってかいがあって"], answer: "通ったかいがあって", after: "、筋肉がついてきた。" },
                    { before: "リハビリ", options: ["のかいがあって", "なかいがあって", "だかいがあって"], answer: "のかいがあって", after: "、再び歩けるようになった。" }
                ],
                opinionQuestions: [
                    { text: "あなたのこれまでの人生で、「あれは苦労したかいがあったな」と最も誇りに思う成果は何ですか？", eng: "In your life so far, what is the achievement you are most proud of, thinking 'That was worth the hardship'?" },
                    { text: "日本語の学習において、「頑張って勉強したかいがあった」と感じる瞬間はどんな時ですか？", eng: "In learning Japanese, when is the moment you feel 'It was worth studying hard'?" },
                    { text: "お金や時間をたくさん使って、「投資したかいがあった」と満足している趣味のアイテムはありますか？", eng: "Is there a hobby item you spent a lot of money and time on, and are satisfied thinking 'It was worth the investment'?" }
                ]
            },
            {
                point: "~かいもなく (甲斐もなく)",
                english: "Despite the effort / In vain",
                structure: "Verb (た-form) / Noun + の + かいもなく",
                nuance: "The exact opposite of `〜かいがあって`. Expresses profound disappointment, regret, or sadness that despite making a massive effort, spending a lot of money, or enduring hardship, the result was completely useless or ended in failure.",
                metaphor: "Building a beautiful, elaborate sandcastle on the beach for five hours, only to watch a single large wave instantly wash it away into nothingness.",
                examples: [
                    { topic: "Business", text: "徹夜でプレゼンの資料を作ったかいもなく、企画はボツになってしまった。", eng: "Despite the effort of staying up all night making presentation materials, the project was rejected." },
                    { topic: "Health", text: "高いお金を出してジムに通ったかいもなく、全く体重が減らなかった。", eng: "In vain despite paying a lot of money to go to the gym, my weight didn't decrease at all." },
                    { topic: "Dating", text: "勇気を出して告白したかいもなく、彼女にはあっさりと振られてしまった。", eng: "Despite the effort of gathering my courage to confess my love, I was easily rejected by her." },
                    { topic: "Technology", text: "高価なパーツでPCを組み立てたかいもなく、すぐに故障してしまった。", eng: "In vain despite building a PC with expensive parts, it broke down immediately." },
                    { topic: "General JLPT", text: "医者の懸命な治療のかいもなく、彼はついに息を引き取った。", eng: "Despite the doctors' desperate treatment efforts, he finally passed away." }
                ],
                clickingGames: [
                    { prompt: "Despite waiting for 3 hours, the concert was canceled.", target: "3時間も待ったかいもなくコンサートは中止になった", words: ["3時間も待った", "かいもなく", "コンサートは中止になった"] },
                    { prompt: "Despite practicing desperately, we lost in the first round.", target: "必死に練習したかいもなく一回戦で負けてしまった", words: ["必死に練習した", "かいもなく", "一回戦で負けてしまった"] },
                    { prompt: "In vain despite studying, I failed the exam.", target: "勉強のかいもなく試験に落ちてしまった", words: ["勉強の", "かいもなく", "試験に落ちてしまった"] },
                    { prompt: "Despite giving advice, he made the same mistake.", target: "忠告したかいもなく彼はまた同じミスをした", words: ["忠告した", "かいもなく", "彼はまた同じミスをした"] },
                    { prompt: "Despite watering it every day, the plant withered.", target: "毎日水をやったかいもなく植物は枯れてしまった", words: ["毎日水をやった", "かいもなく", "植物は枯れてしまった"] }
                ],
                dropdownGames: [
                    { before: "高価なサプリメントを", options: ["飲んだかいもなく", "飲むかいもなく", "飲んでかいもなく"], answer: "飲んだかいもなく", after: "、体調は全く良くならなかった。" },
                    { before: "必死の", options: ["説得のかいもなく", "説得なかいもなく", "説得だかいもなく"], answer: "説得のかいもなく", after: "、彼は会社を辞めてしまった。" },
                    { before: "何日もかけて", options: ["準備したかいもなく", "準備するかいもなく", "準備してかいもなく"], answer: "準備したかいもなく", after: "、イベントは台風で中止になった。" },
                    { before: "手術", options: ["のかいもなく", "なかいもなく", "だかいもなく"], answer: "のかいもなく", after: "、愛犬は天国へと旅立った。" },
                    { before: "プロに", options: ["頼んだかいもなく", "頼むかいもなく", "頼んでかいもなく"], answer: "頼んだかいもなく", after: "、水漏れは直らなかった。" }
                ],
                opinionQuestions: [
                    { text: "過去に「あんなに頑張ったかいもなく、無駄になってしまった」とひどく落ち込んだ経験はありますか？", eng: "In the past, have you had an experience where you were deeply depressed thinking 'Despite trying so hard, it was all in vain'?" },
                    { text: "お金や時間をかけたのに、「期待した結果が得られなかった（かいがなかった）」という買い物の失敗談を教えてください。", eng: "Tell me a shopping failure story where you spent money and time but 'didn't get the expected result (it was in vain)'." },
                    { text: "もし努力のかいもなく失敗してしまった時、あなたはどうやって気持ちを切り替えますか？", eng: "If you fail despite your efforts, how do you switch your mindset/recover?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Discussing the painful realities of home ownership and DIY projects over a few beers.",
            text: "<p><strong>田中:</strong> 「なあ佐藤、先週は休日の二日間を丸々潰して、自宅の庭にDIYでウッドデッキを作ってたんだよ。ホームセンターで高い木材を買ってきて、ネットの動画を見ながら徹夜で組み立てたんだ。」</p><p><strong>佐藤:</strong> 「へえ、お前がDIYなんて珍しいな。で、苦労して完成させた[BLANK1]、奥さんはさぞ喜んでくれたんだろ？」</p><p><strong>田中:</strong> 「それがさ、聞いてくれよ。完成した翌日、横須賀の海沿いに猛烈な台風が直撃してさ。強風であっという間に基礎からひっくり返って、バキバキに壊れちまったんだよ。あんなに高い材料費と時間をかけた[BLANK2]、たった一晩でただの粗大ゴミになっちまった。」</p><p><strong>佐藤:</strong> 「うわぁ、それは悲惨すぎるな。文字通り、努力が水の泡ってやつか。素人が見よう見まねで作るから、風の抵抗に対する強度が足りなかったんだろうな。」</p><p><strong>田中:</strong> 「そうなんだよ。プロの業者が作るウッドデッキが高いのは、やっぱりそれなりの技術と保証がある[BLANK3]って、今なら痛いほどよく分かるよ。結局、壊れた木材の撤去費用でさらに数万円飛んでいく始末さ。」</p><p><strong>佐藤:</strong> 「いい勉強代になったじゃないか。家を持つってことは、そういうメンテナンスのリスクも背負うってことだからな。まあ、今日くらいは俺が酒を奢ってやるから、飲んで忘れろよ。」</p><p><strong>田中:</strong> 「ありがとう。お前のその優しい慰めの言葉[BLANK4]、少しは救われる気がするよ。次は大人しく業者に頼むことにするよ。」</p>",
            blanks: [
                { id: "BLANK1", options: ["かいがあって", "だけあって", "かいもなく"], answer: "かいがあって" },
                { id: "BLANK2", options: ["かいもなく", "かいがあって", "だけあって"], answer: "かいもなく" },
                { id: "BLANK3", options: ["だけあって", "かいもなく", "かいがあって"], answer: "だけあって" },
                { id: "BLANK4", options: ["のかいがあって", "のだけあって", "のかいもなく"], answer: "のかいがあって" }
            ]
        },
        story: {
            title: "The Heartbreak of the Ghost Pepper",
            text: "<p>私は元プロのシェフとしての経験を活かし、休日は世界中の珍しいスパイスを集めてオリジナルの激辛ソースを作ることに情熱を注いでいる。市販のソースでは満足できなくなり、ついに自宅の庭で『ブート・ジョロキア』という世界有数の辛さを誇る唐辛子を種から栽培することに挑戦した。激辛マニアとしての意地もあり、土の成分からビニールハウスの温度管理に至るまで、徹底的にリサーチして完璧な環境を整えたつもりだった。</p><p>種を植えてから数ヶ月間、私は毎朝早起きして水やりをし、害虫がつかないようにピンセットで一匹ずつ駆除するという、文字通り我が子のように愛情を注いで育ててきた。その毎日の緻密な努力の[BLANK1]、夏が終わる頃には立派で真っ赤なジョロキアの実がいくつも実り始めた。「さすがは元料理人が徹底管理した[BLANK2]、市販品とは色艶が違う」と、私は一人庭でほくそ笑んでいた。</p><p>しかし、悲劇は突然訪れた。収穫を今週末に控えたある夜、近所の野良猫たちが庭に侵入し、私のジョロキアの苗を無残にも踏み荒らしてしまったのだ。翌朝、無惨に折れ曲がった茎と、土にまみれて潰れた真っ赤な実を見た時の絶望感は言葉では言い表せない。半年間の血のにじむような世話の[BLANK3]、私のオリジナル・デスソースの夢は、野良猫の運動会によって完全に破壊されてしまったのである。</p><p>私は崩れ落ちそうになりながらも、奇跡的に無傷で残っていた実を三つだけ回収した。たった三つの実だったが、苦労して育てた[BLANK4]、その辛さと香りは脳天を突き抜けるほど強烈で、私の舌と心に深い爪痕を残した。自然をコントロールすることの難しさを痛感した私は、来年こそは絶対に野良猫対策のフェンスを設置しようと、涙目で誓ったのだった。</p>",
            blanks: [
                { id: "BLANK1", options: ["かいがあって", "かいもなく", "だけあって"], answer: "かいがあって" },
                { id: "BLANK2", options: ["だけあって", "かいがあって", "かいもなく"], answer: "だけあって" },
                { id: "BLANK3", options: ["かいもなく", "かいがあって", "だけあって"], answer: "かいもなく" },
                { id: "BLANK4", options: ["だけあって", "かいもなく", "かいがあって"], answer: "だけあって" }
            ]
        }
    },
    {
        id: 39,
        title: "Lesson 39: Negative Outcomes & Endings",
        grammar: [
            {
                point: "~始末だ (しまつだ)",
                english: "Ended up in a bad state / Reached the point where",
                structure: "Verb (Dictionary form / ている) / この・その・あの + 始末だ",
                nuance: "Describes a situation that has been continuously deteriorating and has finally reached an extremely bad, deplorable, or pathetic conclusion. It carries a heavy tone of disgust, exasperation, or resignation.",
                metaphor: "A snowball rolling down a mountain. It starts small, but you ignore it, and it keeps gathering more snow until it finally crashes into your living room window. That disastrous final crash is '始末だ'.",
                examples: [
                    { topic: "Business", text: "彼は遅刻が多いだけでなく、最近では無断欠勤まで繰り返す始末だ。", eng: "Not only is he late often, but recently he has even ended up repeatedly taking unauthorized absences." },
                    { topic: "Family", text: "息子は毎日ゲームばかりして、ついに学校にも行かなくなる始末だ。", eng: "My son does nothing but play games every day, and has finally ended up not going to school." },
                    { topic: "Money", text: "ギャンブルで借金を重ね、親の財布からお金を盗む始末だ。", eng: "He accumulated debt through gambling and ended up stealing money from his parents' wallets." },
                    { topic: "Computers", text: "PCのメンテナンスを怠った結果、起動すらしない始末だ。", eng: "As a result of neglecting PC maintenance, it has ended up not even booting." },
                    { topic: "Health", text: "ダイエット中に暴飲暴食をして、以前より体重が増える始末だ。", eng: "I binge ate and drank during my diet, and ended up gaining more weight than before." }
                ],
                clickingGames: [
                    { prompt: "He complained and eventually ended up starting a fight.", target: "彼は文句を言い最後には喧嘩を始める始末だ", words: ["彼は文句を言い", "最後には", "喧嘩を始める始末だ"] },
                    { prompt: "My pet is spoiled and ends up biting people.", target: "ペットが甘やかされてついに人を噛む始末だ", words: ["ペットが甘やかされて", "ついに", "人を噛む始末だ"] },
                    { prompt: "I was careless and ended up losing my passport.", target: "不注意でついにパスポートまでなくす始末だ", words: ["不注意でついに", "パスポートまで", "なくす始末だ"] },
                    { prompt: "The argument escalated, and they ended up not talking.", target: "口論がエスカレートして口をきかない始末だ", words: ["口論がエスカレートして", "口をきかない", "始末だ"] },
                    { prompt: "He broke his promise and didn't even apologize.", target: "彼は約束を破り謝罪すらしない始末だ", words: ["彼は約束を破り", "謝罪すらしない", "始末だ"] }
                ],
                dropdownGames: [
                    { before: "お酒を飲みすぎて、駅の階段で", options: ["寝込む始末だ", "寝込んだ始末だ", "寝込んで始末だ"], answer: "寝込む始末だ", after: "。本当に情けない。" },
                    { before: "子供がワガママになり、スーパーの床で", options: ["泣き叫ぶ始末だ", "泣き叫んだ始末だ", "泣き叫んで始末だ"], answer: "泣き叫ぶ始末だ", after: "。" },
                    { before: "彼は何度も嘘をつき、ついに誰からも", options: ["信用されない始末だ", "信用されなかった始末だ", "信用されなくて始末だ"], answer: "信用されない始末だ", after: "。" },
                    { before: "部屋の掃除をサボり続け、ついに虫が", options: ["湧く始末だ", "湧いた始末だ", "湧いて始末だ"], answer: "湧く始末だ", after: "。" },
                    { before: "仕事のストレスから、夜中に一人で", options: ["泣き出す始末だ", "泣き出した始末だ", "泣き出して始末だ"], answer: "泣き出す始末だ", after: "。" }
                ],
                opinionQuestions: [
                    { text: "あなたの周りに、「最初は小さな問題だったのに、ついに〜する始末だ」と呆れてしまった人はいますか？", eng: "Is there someone around you where you were exasperated, thinking 'It was a small problem at first, but finally they ended up doing ~'?" },
                    { text: "過去に自分自身が怠けてしまって、「〜始末だ」と激しく自己嫌悪に陥った経験はありますか？", eng: "Have you ever been lazy in the past and fallen into intense self-hatred, realizing you 'ended up ~'?" },
                    { text: "現代社会のニュースを見て、「世の中もついにこんな事になる始末か」と嘆きたくなることは何ですか？", eng: "Watching modern news, what makes you want to lament, 'Has the world finally ended up like this?'" }
                ]
            },
            {
                point: "~ずじまい",
                english: "Ended up not doing ~ / Missed the chance to",
                structure: "Verb (ない-form, drop ない) + ずじまい (*する becomes せずじまい)",
                nuance: "Expresses a mild to moderate regret that you had the intention, desire, or opportunity to do something, but time ran out or the chance passed, and it never actually happened.",
                metaphor: "Holding a beautifully wrapped gift for a friend all day at a party, but never finding the right moment to hand it to them, and bringing it back home unopened.",
                examples: [
                    { topic: "Dating", text: "彼女に自分の本当の気持ちを、結局言えずじまいだった。", eng: "In the end, I ended up not telling her my true feelings." },
                    { topic: "Travel", text: "京都に行ったが、忙しくて有名な神社には行かずじまいだった。", eng: "I went to Kyoto, but I was busy and ended up not going to the famous shrines." },
                    { topic: "Shopping", text: "気になっていた服があったが、迷っているうちに買わずじまいになった。", eng: "There were clothes I was interested in, but while hesitating, I ended up not buying them." },
                    { topic: "Business", text: "会議で良いアイデアを思いついたが、緊張して発言せずじまいだった。", eng: "I thought of a good idea at the meeting, but I was nervous and ended up not speaking up." },
                    { topic: "Food", text: "たくさん料理を作ったが、お腹がいっぱいでケーキは食べずじまいだった。", eng: "I made a lot of food, but I was full and ended up not eating the cake." }
                ],
                clickingGames: [
                    { prompt: "I couldn't talk to the boss and ended up not consulting him.", target: "上司に声をかけられず相談せずじまいだった", words: ["上司に声をかけられず", "相談せずじまいで", "あった"] },
                    { prompt: "The game I bought is sleeping in the closet unplayed.", target: "買ったゲームは一度も遊ばずじまいで箱の中だ", words: ["買ったゲームは", "一度も遊ばずじまいで", "箱の中だ"] },
                    { prompt: "I ended up not riding the rollercoaster at the theme park.", target: "遊園地に行ったがジェットコースターには乗らずじまいだった", words: ["遊園地に行ったが", "ジェットコースターには", "乗らずじまいだった"] },
                    { prompt: "I brought the book but ended up not reading it.", target: "本を持ってきたが結局読まずじまいで帰った", words: ["本を持ってきたが", "結局読まずじまいで", "帰った"] },
                    { prompt: "I wrote an email but ended up not sending it.", target: "メールを書いたが結局送らずじまいになった", words: ["メールを書いたが", "結局送らずじまいに", "なった"] }
                ],
                dropdownGames: [
                    { before: "せっかく富士山に行ったのに、天気が悪くて山頂まで", options: ["登らずじまい", "登らないずじまい", "登らなくてじまい"], answer: "登らずじまい", after: "だった。" },
                    { before: "彼に謝りたかったが、タイミングを逃して", options: ["謝れずじまい", "謝れないずじまい", "謝られずじまい"], answer: "謝れずじまい", after: "になった。" },
                    { before: "高い英語の教材を買ったが、1ページも", options: ["開かずじまい", "開かないずじまい", "開かなくてじまい"], answer: "開かずじまい", after: "で捨てた。" },
                    { before: "その映画は話題になっていたが、忙しくて結局", options: ["見ずじまい", "見ないずじまい", "見なくてじまい"], answer: "見ずじまい", after: "だ。" },
                    { before: "ずっと気になっていたカフェだが、一度も", options: ["入らずじまい", "入らないずじまい", "入らなくてじまい"], answer: "入らずじまい", after: "で閉店してしまった。" }
                ],
                opinionQuestions: [
                    { text: "学生時代や過去に、「本当はやりたかったのに、結局やらずじまいだった」と後悔していることは何ですか？", eng: "What is something from your school days or past that you regret, thinking 'I really wanted to do it, but ended up never doing it'?" },
                    { text: "買ったのに「一度も使わずじまい（読まずじまい）」になっている物は家にありますか？", eng: "Do you have anything in your house that you bought but it 'ended up never being used (or read) even once'?" },
                    { text: "誰かに言いたかったけれど、「タイミングを逃して言えずじまいだった」言葉はありますか？", eng: "Are there words you wanted to say to someone, but 'missed the timing and ended up not being able to say them'?" }
                ]
            },
            {
                point: "~に至る / ~に至るまで (にいたる)",
                english: "Reach the point of / Lead to / Even extending to",
                structure: "Noun / Verb (Dictionary form) + に至る",
                nuance: "A highly formal expression indicating that a long process, discussion, or chain of events has finally arrived at a specific (often extreme) stage or conclusion. '~に至るまで' emphasizes the broad scope, meaning 'ranging all the way down/up to X'.",
                metaphor: "A long, winding river journey. You start at a tiny stream in the mountains, flow through valleys, past cities, and finally arrive (至る) at the massive ocean.",
                examples: [
                    { topic: "Business", text: "両社は数ヶ月にわたる交渉の末、ついに業務提携の契約に至った。", eng: "After months of negotiations, the two companies finally reached the point of a business alliance contract." },
                    { topic: "Crime", text: "些細な口論から、警察が出動する騒ぎに至った。", eng: "From a trivial argument, it led to a commotion where the police were dispatched." },
                    { topic: "History", text: "この小さな村が、現在の大都市に至るまでの歴史を学ぶ。", eng: "We will learn the history of how this small village reached the point of being a modern metropolis." },
                    { topic: "Education", text: "彼は文法から発音に至るまで、日本語を完璧にマスターしている。", eng: "Ranging all the way from grammar to pronunciation, he has perfectly mastered Japanese." },
                    { topic: "Technology", text: "この新型スマホは、外装の素材から内部のチップに至るまで最高級のものが使われている。", eng: "This new smartphone uses the highest quality materials extending all the way from the exterior to the internal chips." }
                ],
                clickingGames: [
                    { prompt: "The long argument finally reached a conclusion.", target: "長時間の議論の末ついに結論に至った", words: ["長時間の議論の末", "ついに", "結論に至った"] },
                    { prompt: "I checked thoroughly, even extending to the small details.", target: "細かい細部に至るまで徹底的に確認した", words: ["細かい細部に", "至るまで", "徹底的に確認した"] },
                    { prompt: "I read everything from his debut work up to his latest novel.", target: "デビュー作から最新作に至るまで彼の小説はすべて読んだ", words: ["デビュー作から最新作に", "至るまで", "彼の小説はすべて読んだ"] },
                    { prompt: "The small lie eventually led to the destruction of trust.", target: "小さな嘘が最終的に信用の崩壊に至った", words: ["小さな嘘が最終的に", "信用の崩壊に", "至った"] },
                    { prompt: "I explained how the accident occurred.", target: "事故が発生するに至った経緯を説明した", words: ["事故が発生するに", "至った経緯を", "説明した"] }
                ],
                dropdownGames: [
                    { before: "二人は長年のすれ違いの末、ついに離婚", options: ["に至った", "に及んだ", "に行き着いた"], answer: "に至った", after: "。" }, // All meaning similar, but testing specific grammar
                    { before: "企画から開発", options: ["に至るまで", "に達するまで", "の至るまで"], answer: "に至るまで", after: "、すべて彼一人が担当した。" },
                    { before: "事態がここ", options: ["に至って", "に至るて", "に至りの"], answer: "に至って", after: "は、もはや後戻りはできない。" },
                    { before: "彼は髪型から靴のブランド", options: ["に至るまで", "に至ったまで", "の至るまで"], answer: "に至るまで", after: "、強いこだわりを持っている。" },
                    { before: "様々な困難を乗り越え、今日の成功", options: ["に至りました", "に至りましたの", "な至りました"], answer: "に至りました", after: "。" }
                ],
                opinionQuestions: [
                    { text: "あなたが現在の職業や趣味を選ぶ「に至った」経緯（ストーリー）を簡単に教えてください。", eng: "Briefly tell me the background (story) of how you 'reached the point of' choosing your current profession or hobby." },
                    { text: "身の回りの製品で、「デザインから機能に至るまで完璧だ！」と思えるものはありますか？", eng: "Is there a product around you that you think is 'perfect extending all the way from its design to its functions'?" },
                    { text: "人間関係において、どんな小さな問題が「大きなトラブルに至る」と思いますか？", eng: "In human relationships, what kind of small problem do you think 'leads to a major trouble'?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Discussing an expensive impulse buy and a neglected hobby.",
            text: "<p><strong>田中:</strong> 「なあ佐藤、実は俺、去年めちゃくちゃ高いロードバイクを買ったんだよな。ツール・ド・フランスに出るプロの選手が乗るようなカーボンフレームのやつをさ。」</p><p><strong>佐藤:</strong> 「マジかよ。お前、普段は車通勤で運動なんて全くしないだろ？完全に宝の持ち腐れじゃないか。」</p><p><strong>田中:</strong> 「そうなんだよ。最初は『これで週末は海沿いを100キロ走るぞ』って意気込んでたんだけど、買ってすぐに冬になって寒くなったから、結局一度も外で乗ら[BLANK1]だったんだ。」</p><p><strong>佐藤:</strong> 「よくあるパターンだな。高い初期投資をしただけで満足しちゃったんだろ。で、その数十万円の自転車は今どうなってるんだ？」</p><p><strong>田中:</strong> 「リビングの片隅に置いたままホコリをかぶっててさ。最近じゃあ、濡れた洗濯物を干すための高級な物干し竿として使われる[BLANK2]よ。妻からは『ただの邪魔なオブジェね』と毎日チクチク嫌味を言われる始末さ。」</p><p><strong>佐藤:</strong> 「ははは、自業自得だな。高価な機材を買うからには、それなりの情熱と覚悟が必要だってことだ。そこまで放置される[BLANK3]、さすがに自転車も泣いてるぞ。」</p><p><strong>田中:</strong> 「全くだよ。せめてタイヤの空気圧からチェーンのサビ落とし[BLANK4]、今週末に一通りメンテナンスだけでもやろうと思うよ。乗るかどうかは別の話だけどな。」</p><p><strong>佐藤:</strong> 「そうやってメンテナンスだけで満足して、また乗ら[BLANK5]のが目に見えてるぜ。」</p>",
            blanks: [
                { id: "BLANK1", options: ["ずじまい", "始末だ", "に至る"], answer: "ずじまい" },
                { id: "BLANK2", options: ["始末だ", "に至るまで", "ずじまい"], answer: "始末だ" },
                { id: "BLANK3", options: ["に至っては", "始末だ", "ずじまい"], answer: "に至っては" },
                { id: "BLANK4", options: ["に至るまで", "始末だ", "ずじまい"], answer: "に至るまで" },
                { id: "BLANK5", options: ["ずじまい", "始末だ", "に至る"], answer: "ずじまい" }
            ]
        },
        story: {
            title: "The Ruined Weekend Project",
            text: "<p>私は週末になると、パソコンのパーツを集めて自作PCを組み立てたり、ソフトウェアの設定を最適化したりするのを趣味にしている。先週は、長年溜め込んでいたSteamの未プレイゲームを快適に遊ぶために、最新のグラフィックボードを購入した。しかし、仕事の疲れからか、平日は箱を開ける気力すら起きず、結局金曜日まで触ら[BLANK1]だった。</p><p>土曜日の朝、ようやく重い腰を上げてPCケースの蓋を開けた。しかし、マザーボードの規格と新しいグラフィックボードのサイズが微妙に合わず、無理やり押し込もうとした結果、重要なケーブルの接続部分を破損させてしまう[BLANK2]。「少し調べれば分かることだったのに」と後悔したが、時すでに遅しである。</p><p>その後、破損したパーツを何とか修復しようと、はんだごてや細かい配線ツール[BLANK3]持ち出して何時間も悪戦苦闘したが、事態はさらに悪化する一方だった。最終的には、PCの電源を入れてもモニターには何も映らず、マザーボードから焦げたような異臭が漂い始める[BLANK4]。</p><p>せっかくの休日を優雅にゲームで過ごすはずが、自分の無計画な行動のせいで、数万円の損害を出し、PCも使えなくなり、ストレスだけが最高潮[BLANK5]という最悪の結末を迎えてしまった。「プロに任せればよかった」と嘆いても、壊れた基盤は元には戻らない。高価な機材を扱う際は、事前の確認がいかに重要かを、痛すぎる授業料を払って学ぶことになったのである。</p>",
            blanks: [
                { id: "BLANK1", options: ["ずじまい", "始末だ", "に至るまで"], answer: "ずじまい" },
                { id: "BLANK2", options: ["始末だ", "ずじまい", "に至る"], answer: "始末だ" },
                { id: "BLANK3", options: ["に至るまで", "始末だ", "ずじまい"], answer: "に至るまで" },
                { id: "BLANK4", options: ["始末だ", "に至るまで", "ずじまい"], answer: "始末だ" },
                { id: "BLANK5", options: ["に至る", "始末だ", "ずじまい"], answer: "に至る" }
            ]
        }
    }, {
        id: 40,
        title: "Lesson 40: Causes, Trends & Constraints",
        grammar: [
            {
                point: "~ゆえに / ~ゆえの (故に)",
                english: "Because of / Due to (Formal)",
                structure: "Verb / Adj (Plain form) / Noun + である・の + ゆえに",
                nuance: "A formal, somewhat literary expression indicating the cause or reason for something. It is often used to describe situations where a specific characteristic or status inevitably leads to a certain result.",
                metaphor: "Like a royal decree. 'Because the King is the King, he must bear the heavy crown.' It feels highly inevitable and formal.",
                examples: [
                    { topic: "Business", text: "彼は完璧主義であるゆえに、仕事に時間がかかりすぎる。", eng: "Due to the fact that he is a perfectionist, his work takes too much time." },
                    { topic: "General JLPT", text: "知識が不足しているがゆえに、誤解が生じてしまった。", eng: "Because of a lack of knowledge, a misunderstanding occurred." },
                    { topic: "Technology", text: "このシステムは多機能であるゆえに、操作が非常に複雑だ。", eng: "Due to this system being multi-functional, the operation is extremely complex." },
                    { topic: "Nature", text: "その島は孤立しているゆえに、独自の生態系が保たれている。", eng: "Because that island is isolated, its unique ecosystem is preserved." },
                    { topic: "Human Nature", text: "若さゆえの過ちだったと、今になって深く反省している。", eng: "I am now deeply reflecting that it was a mistake due to youth." }
                ],
                clickingGames: [
                    { prompt: "Because he is a beginner, he couldn't grasp the situation.", target: "初心者であるゆえに状況を把握できなかった", words: ["初心者である", "ゆえに", "状況を把握できなかった"] },
                    { prompt: "Because it is a popular product, it sold out immediately.", target: "人気商品であるゆえにすぐに売り切れてしまった", words: ["人気商品であるゆえに", "すぐに", "売り切れてしまった"] },
                    { prompt: "Because of my impatience, I made a huge mistake.", target: "焦りゆえに大きな失敗を犯してしまった", words: ["焦り", "ゆえに", "大きな失敗を犯してしまった"] },
                    { prompt: "Due to his kindness, he was deceived.", target: "彼は優しすぎるがゆえに騙されてしまった", words: ["彼は優しすぎるが", "ゆえに", "騙されてしまった"] },
                    { prompt: "Because it's a manual process, errors easily occur.", target: "手作業であるゆえにエラーが発生しやすい", words: ["手作業である", "ゆえに", "エラーが発生しやすい"] }
                ],
                dropdownGames: [
                    { before: "彼はリーダー", options: ["であるゆえに", "だゆえに", "なゆえに"], answer: "であるゆえに", after: "、誰よりも重い責任を背負っている。" },
                    { before: "海外の製品", options: ["であるゆえに", "だゆえに", "なゆえに"], answer: "であるゆえに", after: "、修理の部品が手に入りにくい。" },
                    { before: "彼は才能が", options: ["あるゆえに", "あったゆえに", "あるのゆえに"], answer: "あるゆえに", after: "、周囲から妬まれることが多い。" },
                    { before: "経験不足", options: ["ゆえの", "ゆえな", "ゆえだ"], answer: "ゆえの", after: "トラブルが発生してしまった。" },
                    { before: "そのルールが", options: ["厳格であるゆえに", "厳格だゆえに", "厳格なゆえに"], answer: "厳格であるゆえに", after: "、安全性が保たれている。" }
                ],
                opinionQuestions: [
                    { text: "あなたが「経験不足（または若さ）ゆえに」やってしまった過去の失敗は何ですか？", eng: "What is a past mistake you made 'due to lack of experience (or youth)'?" },
                    { text: "あなたの性格で、「〇〇であるゆえに、少し損をしている」と感じる部分はありますか？", eng: "In your personality, is there a part you feel 'Due to being X, I am suffering a slight loss'?" },
                    { text: "「便利であるゆえに」、現代人が失ってしまったものは何だと思いますか？", eng: "What do you think modern people have lost 'due to things being convenient'?" }
                ]
            },
            {
                point: "~一方だ (いっぽうだ)",
                english: "Continuing to do / More and more",
                structure: "Verb (Dictionary form indicating change) + 一方だ",
                nuance: "Indicates that a situation is continuously changing in only one direction, without any sign of stopping or reversing. It is very frequently used for negative trends (decreasing, worsening, increasing bad things).",
                metaphor: "A snowball rolling down a steep hill. It can only get bigger and faster; it cannot naturally roll back up.",
                examples: [
                    { topic: "Economy", text: "物価が上がるばかりで、生活は苦しくなる一方だ。", eng: "With prices only going up, life is just getting harder and harder." },
                    { topic: "Health", text: "最近運動をしていないので、体力は衰える一方だ。", eng: "Because I haven't been exercising recently, my stamina is continuously declining." },
                    { topic: "Work", text: "トラブルが重なり、仕事の量は増える一方だ。", eng: "With troubles piling up, the amount of work is just continuing to increase." },
                    { topic: "Technology", text: "スマートフォンの機能は、ますます複雑になる一方だ。", eng: "Smartphone functions are just continuing to become more and more complex." },
                    { topic: "General JLPT", text: "国の借金は減るどころか、膨らむ一方である。", eng: "Far from decreasing, the country's debt is just continuing to swell." }
                ],
                clickingGames: [
                    { prompt: "My motivation to work is only decreasing.", target: "仕事へのモチベーションは下がる一方だ", words: ["仕事へのモチベーションは", "下がる", "一方だ"] },
                    { prompt: "Because I stay up all night, my fatigue is just accumulating.", target: "徹夜ばかりしているので疲れは溜まる一方だ", words: ["徹夜ばかりしているので", "疲れは溜まる", "一方だ"] },
                    { prompt: "The quality of service is just getting worse.", target: "サービスの質は悪化する一方だ", words: ["サービスの質は", "悪化する", "一方だ"] },
                    { prompt: "Information on the internet is just continuing to increase.", target: "インターネットの情報は増え続ける一方だ", words: ["インターネットの情報は", "増え続ける", "一方だ"] },
                    { prompt: "The number of young people moving away from TV is just increasing.", target: "若者のテレビ離れは進む一方だ", words: ["若者のテレビ離れは", "進む", "一方だ"] }
                ],
                dropdownGames: [
                    { before: "会社の業績は", options: ["下がる一方だ", "下がった一方だ", "下がって一方だ"], answer: "下がる一方だ", after: "。このままでは倒産しかねない。" },
                    { before: "年を取るにつれて、記憶力は", options: ["低下する一方だ", "低下した一方だ", "低下して一方だ"], answer: "低下する一方だ", after: "。" },
                    { before: "二人の関係は", options: ["冷え込む一方だ", "冷え込んだ一方だ", "冷え込んで一方だ"], answer: "冷え込む一方だ", after: "。修復の余地はないだろう。" },
                    { before: "新しいアプリのバグは", options: ["増える一方だ", "増えた一方だ", "増えて一方だ"], answer: "増える一方だ", after: "。開発チームは何をしているんだ。" },
                    { before: "円安の影響で、輸入品の価格は", options: ["上がる一方だ", "上がった一方だ", "上がって一方だ"], answer: "上がる一方だ", after: "。" }
                ],
                opinionQuestions: [
                    { text: "最近の世の中で、「〇〇は悪くなる一方だ」と心配していることは何ですか？", eng: "In the recent world, what is something you are worried about, thinking 'X is only getting worse'?" },
                    { text: "あなたの生活で、「最近、〇〇が増える一方だ」と困っていることはありますか？", eng: "In your life, is there something you are troubled by, thinking 'Recently, X is just continuing to increase'?" },
                    { text: "年齢を重ねるにつれて、「減る一方だな」と実感するものは何ですか？", eng: "As you get older, what is something you truly realize is 'just continuing to decrease'?" }
                ]
            },
            {
                point: "~わけにはいかない",
                english: "Cannot afford to / Must not",
                structure: "Verb (Dictionary form / ない-form) + わけにはいかない",
                nuance: "Indicates that you physically *can* do something, but you *must not* or *cannot afford to* do it because of social expectations, moral duties, psychological pressure, or strict common sense. It is driven by obligation.",
                metaphor: "Having a bright red 'Self Destruct' button on your desk. You have the physical ability to push it, but logic and a sense of duty scream at you that you absolutely cannot afford to press it.",
                examples: [
                    { topic: "Work", text: "明日がプロジェクトの締め切りなので、今日は早く帰るわけにはいかない。", eng: "Since tomorrow is the project deadline, I cannot afford to go home early today." },
                    { topic: "Duty", text: "社長に任された仕事だから、途中で投げ出すわけにはいかない。", eng: "Because it's a job entrusted by the president, I cannot afford to abandon it halfway." },
                    { topic: "Money", text: "住宅ローンがあるので、簡単に会社を辞めるわけにはいかない。", eng: "Since I have a mortgage, I cannot afford to easily quit my company." },
                    { topic: "Friendship", text: "親友が困っているのだから、助けないわけにはいかない。", eng: "Since my best friend is in trouble, I cannot bring myself to not help him." },
                    { topic: "Dieting", text: "本気でダイエット中なので、このケーキを食べるわけにはいかない。", eng: "Since I am seriously on a diet, I must not eat this cake." }
                ],
                clickingGames: [
                    { prompt: "Since everyone is working hard, I cannot afford to rest alone.", target: "皆が頑張っているのだから私だけ休むわけにはいかない", words: ["皆が頑張っているのだから", "私だけ休む", "わけにはいかない"] },
                    { prompt: "Since he paid, I cannot afford to not eat it.", target: "彼が奢ってくれたのだから食べないわけにはいかない", words: ["彼が奢ってくれたのだから", "食べない", "わけにはいかない"] },
                    { prompt: "Because I'm the leader, I cannot afford to cry.", target: "私がリーダーである以上ここで泣くわけにはいかない", words: ["私がリーダーである以上", "ここで泣く", "わけにはいかない"] },
                    { prompt: "Since it's an important match, we absolutely cannot afford to lose.", target: "大事な試合だから絶対に負けるわけにはいかない", words: ["大事な試合だから", "絶対に負ける", "わけにはいかない"] },
                    { prompt: "Since I made a promise, I cannot afford to break it.", target: "約束したのだから破るわけにはいかない", words: ["約束したのだから", "破る", "わけにはいかない"] }
                ],
                dropdownGames: [
                    { before: "明日は早朝から出張なので、今夜は遅くまで", options: ["飲むわけにはいかない", "飲んだわけにはいかない", "飲んでわけにはいかない"], answer: "飲むわけにはいかない", after: "。" },
                    { before: "せっかくここまで来たのだから、手ぶらで", options: ["帰るわけにはいかない", "帰ったわけにはいかない", "帰ってわけにはいかない"], answer: "帰るわけにはいかない", after: "。" },
                    { before: "彼に恩があるので、この依頼を", options: ["断るわけにはいかない", "断ったわけにはいかない", "断ってわけにはいかない"], answer: "断るわけにはいかない", after: "。" },
                    { before: "これだけ証拠が揃っている以上、事実を", options: ["認めないわけにはいかない", "認めなかったわけにはいかない", "認めなくてわけにはいかない"], answer: "認めないわけにはいかない", after: "。" },
                    { before: "お客様からのクレームなので、", options: ["無視するわけにはいかない", "無視したわけにはいかない", "無視してわけにはいかない"], answer: "無視するわけにはいかない", after: "。" }
                ],
                opinionQuestions: [
                    { text: "あなたが責任感や義務感から、「絶対に〜するわけにはいかない」と我慢していることは何ですか？", eng: "Out of a sense of responsibility or duty, what is something you endure, thinking 'I absolutely cannot afford to do ~'?" },
                    { text: "「親友の頼みだから、断るわけにはいかない」と、無理をして助けた経験はありますか？", eng: "Have you ever pushed yourself to help someone, thinking 'Since it's a request from a best friend, I can't bring myself to refuse'?" },
                    { text: "お金や仕事の事情で、「簡単に会社を辞めるわけにはいかない」と思った瞬間はありますか？", eng: "Have there been moments where you thought 'I cannot afford to easily quit the company' due to money or work circumstances?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Discussing the severe challenges and responsibilities of homeownership over a couple of beers.",
            text: "<p><strong>田中:</strong> 「なあ佐藤、マイホームを持ってからというもの、家の修繕費や税金の負担がマジで増える一方なんだよ。マンションに住んでいた頃とは比べ物にならないくらい、毎月の支出が重くのしかかってきてさ。」</p><p><strong>佐藤:</strong> 「持ち家の宿命だな。自分の資産であるゆえに、壁のひび割れや水回りのトラブルも全部自分で手配して金を払わなきゃならない。マンションの管理費を払うだけでよかった時代とは違うんだ。で、今度はどこが壊れたんだ？」</p><p><strong>田中:</strong> 「実は、冬の寒さのせいで給湯器が完全にイカれちまったんだよ。業者に見積もりを出してもらったら、新品の交換で20万以上かかると言われてさ。俺の素人DIY知識で直そうかとも思ったんだが、ガスが絡むからさすがに素人が手を出すわけにはいかないだろ？万が一爆発でもしたら笑えないからな。」</p><p><strong>佐藤:</strong> 「当たり前だ！そんな危険な部分をケチるわけにはいかないぞ。家族の命がかかっているんだから、プロに頼むゆえの安心感には代えられないさ。ただ、20万の出費は痛いな。お前の趣味のサバゲー装備の予算も、今年は削る一方になりそうだな。」</p><p><strong>田中:</strong> 「全くだよ。家を持つってのは自由で快適な反面、背負うものが大きすぎるな。だからといって、愛する家族と暮らす新居を簡単に手放すわけにはいかないから、明日からまた馬車馬のように働くしかないよ。」</p><p><strong>佐藤:</strong> 「まあ、それが大人の責任ってやつさ。お前が頑張っているのは知ってるよ。よし、今日のアテとビールは俺が奢ってやるから、明日への活力を養ってくれ。」</p>",
            blanks: [
                { id: "BLANK1", options: ["一方だ", "ゆえに", "わけにはいかない"], answer: "一方だ" },
                { id: "BLANK2", options: ["ゆえに", "一方だ", "わけにはいかない"], answer: "ゆえに" },
                { id: "BLANK3", options: ["わけにはいかない", "一方だ", "ゆえに"], answer: "わけにはいかない" },
                { id: "BLANK4", options: ["ゆえの", "一方の", "わけの"], answer: "ゆえの" },
                { id: "BLANK5", options: ["一方", "ゆえ", "わけにはいかない"], answer: "一方" },
                { id: "BLANK6", options: ["わけにはいかない", "一方だ", "ゆえに"], answer: "わけにはいかない" }
            ]
        },
        story: {
            title: "The Solitary Airsoft Leader",
            text: "<p>私が運営に関わっているサバイバルゲームのコミュニティ『AOJ』は、設立当初の数人の小さな集まりから、今では毎回のイベントに数十人が集まる大規模なグループへと成長した。これは非常に喜ばしいことだが、参加者の人数が増える一方である現状は、運営側の我々に重いプレッシャーを与え続けている。</p><p>特に問題なのは、初心者の安全管理だ。サバイバルゲームは一歩間違えれば失明や大怪我に繋がる危険なスポーツであるゆえに、フィールド内でのゴーグル着用や、セーフティエリアでの銃の安全装置の確認は絶対のルールである。しかし、最近はゲームの興奮ゆえに、休憩所でうっかり引き金に指をかけてしまうような初心者が増えているのだ。リーダーの立場にある私は、彼らがお客様であろうと、厳しく注意しないわけにはいかない。</p><p>イベントの雰囲気を明るく保ちたいという思いはあるが、重大な事故が一度でも起きてしまえば、このコミュニティは解散に追い込まれるだろう。私が嫌われ役を買って出るゆえに、他のメンバーが安全に心からゲームを楽しむことができるのだ。責任者である以上、和気あいあいとした雰囲気を優先して安全確認を怠るわけにはいかない。今日も私は迷彩服の襟を正し、メガホンを片手に厳しい表情でフィールドの安全チェックへと向かうのであった。</p>",
            blanks: [
                { id: "BLANK1", options: ["一方", "ゆえに", "わけにはいかない"], answer: "一方" },
                { id: "BLANK2", options: ["ゆえに", "一方", "わけにはいかない"], answer: "ゆえに" },
                { id: "BLANK3", options: ["ゆえに", "一方", "わけにはいかない"], answer: "ゆえに" },
                { id: "BLANK4", options: ["わけにはいかない", "一方", "ゆえに"], answer: "わけにはいかない" },
                { id: "BLANK5", options: ["ゆえに", "一方", "わけにはいかない"], answer: "ゆえに" },
                { id: "BLANK6", options: ["わけにはいかない", "一方", "ゆえに"], answer: "わけにはいかない" }
            ]
        }
    },
    {
        id: 41,
        title: "Lesson 41: Difficulties, Reluctance & Ideals",
        grammar: [
            {
                point: "~がたい",
                english: "Hard to / Difficult to (Emotionally)",
                structure: "Verb (stem) + がたい",
                nuance: "Expresses that something is psychologically, emotionally, or morally difficult to do (believe, forgive, understand, say). It is NOT used for physical difficulty (like 'this heavy box is hard to lift').",
                metaphor: "It's like trying to swallow a large, bitter pill without water. It physically fits in your mouth, but your body actively rejects it.",
                examples: [
                    { topic: "Trust", text: "長年の親友が私を裏切るなんて、到底信じがたいことだ。", eng: "That my best friend of many years would betray me is an utterly hard-to-believe thing." },
                    { topic: "Emotions", text: "彼が犯したあのような残虐な行為は、絶対に許しがたい。", eng: "Such a cruel act that he committed is absolutely unforgivable (hard to forgive)." },
                    { topic: "General JLPT", text: "彼女のその無責任な態度は、私には全く理解しがたい。", eng: "Her irresponsible attitude is completely hard to understand for me." },
                    { topic: "Business", text: "二つのプランはどちらも素晴らしく、甲乙つけがたい。", eng: "Both plans are wonderful, and it's hard to put one above the other (hard to rank)." },
                    { topic: "Nostalgia", text: "留学中のあの感動的な体験は、私にとって得がたい財産だ。", eng: "That moving experience during study abroad is an asset that is hard to obtain for me." }
                ],
                clickingGames: [
                    { prompt: "It's hard to believe that this PC broke in just one week.", target: "このPCがたった一週間で壊れたなんて信じがたい", words: ["このPCが", "たった一週間で壊れたなんて", "信じがたい"] },
                    { prompt: "His excuse was so absurd it was hard to understand.", target: "彼の言い訳はあまりにひどくて理解しがたいものだった", words: ["彼の言い訳はあまりにひどくて", "理解しがたい", "ものだった"] },
                    { prompt: "I spent an irreplaceable time with my family.", target: "家族と共に何物にも代えがたい時間を過ごした", words: ["家族と共に", "何物にも代えがたい時間を", "過ごした"] },
                    { prompt: "Abandoning my injured comrade is an unforgivable act.", target: "負傷した仲間を見捨てるなんて許しがたい行為だ", words: ["負傷した仲間を見捨てるなんて", "許しがたい", "行為だ"] },
                    { prompt: "To be honest, it is hard to say that this project is successful.", target: "正直に言ってこのプロジェクトは成功しているとは言いがたい", words: ["正直に言って", "このプロジェクトは成功しているとは", "言いがたい"] }
                ],
                dropdownGames: [
                    { before: "彼が会社のお金を横領（おうりょう）したなんて、", options: ["信じがたい", "信じるがたい", "信じてがたい"], answer: "信じがたい", after: "事実だ。" },
                    { before: "これほど素晴らしい二つの作品、どちらが上か", options: ["決めがたい", "決めるがたい", "決めてがたい"], answer: "決めがたい", after: "。" },
                    { before: "彼女の身勝手な発言は、チームのリーダーとして", options: ["許しがたい", "許すがたい", "許してがたい"], answer: "許しがたい", after: "。" },
                    { before: "現代の技術を使えば、かつては", options: ["実現しがたかった", "実現するがたかった", "実現してがたかった"], answer: "実現しがたかった", after: "夢も可能になる。" },
                    { before: "この過酷な環境を生き抜いた彼の精神力は、普通の人には", options: ["想像しがたい", "想像するがたい", "想像してがたい"], answer: "想像しがたい", after: "。" }
                ],
                opinionQuestions: [
                    { text: "最近のニュースや出来事で、「到底信じがたい（信じられない）」と驚いたことは何ですか？", eng: "In recent news or events, what were you surprised by, thinking 'That is utterly hard to believe'?" },
                    { text: "あなたの人生経験において、「何物にも代えがたい（他のものと交換できない）」と感じる一番の宝物は何ですか？", eng: "In your life experience, what is your number one treasure that you feel is 'hard to replace with anything else'?" },
                    { text: "他人の行動で、「これだけはどうしても許しがたい」と思うマナー違反は何ですか？", eng: "Regarding other people's actions, what is a breach of manners that you think 'This alone is absolutely hard to forgive'?" }
                ]
            },
            {
                point: "~かねる",
                english: "Cannot / Hesitant to do (Formal)",
                structure: "Verb (stem) + かねる",
                nuance: "A highly polite, formal expression used to decline a request or state an inability to do something, usually because of one's position, company policy, or lack of authority. It softens a direct 'No'.",
                metaphor: "A customer service representative smiling politely while holding up a velvet rope. They aren't physically pushing you away, but they are absolutely not letting you pass.",
                examples: [
                    { topic: "Business", text: "担当者が不在のため、私では詳しい状況は分かりかねます。", eng: "Because the person in charge is absent, I cannot understand (am unable to understand) the detailed situation." },
                    { topic: "Customer Service", text: "お客様の個人的な理由による返品は、お受けしかねます。", eng: "We cannot accept returns due to the customer's personal reasons." },
                    { topic: "Meetings", text: "その件につきましては、この場では即答しかねます。", eng: "Regarding that matter, I cannot give an immediate answer right here." },
                    { topic: "Disagreement", text: "あなたのその強引なやり方には、どうしても賛同しかねます。", eng: "I absolutely cannot agree with your pushy methods." },
                    { topic: "General JLPT", text: "彼の発言の真意は、私には測りかねる。", eng: "The true intention of his remark is something I cannot fathom." }
                ],
                clickingGames: [
                    { prompt: "I cannot agree to such an unreasonable demand.", target: "そのような理不尽な要求には同意しかねます", words: ["そのような理不尽な要求には", "同意し", "かねます"] },
                    { prompt: "I cannot judge right now, so please let me consult with my boss.", target: "現在判断しかねますので上司に相談させてください", words: ["現在判断しかねますので", "上司に", "相談させてください"] },
                    { prompt: "We cannot accept cancellations after the contract.", target: "契約後のキャンセルはいかなる理由でもお受けしかねます", words: ["契約後のキャンセルは", "いかなる理由でも", "お受けしかねます"] },
                    { prompt: "I cannot understand his true intentions at all.", target: "彼が何を考えているのか私には理解しかねる", words: ["彼が何を考えているのか", "私には", "理解しかねる"] },
                    { prompt: "We cannot guarantee that the product will definitely arrive by tomorrow.", target: "明日必ず商品が届くとはお約束しかねます", words: ["明日必ず商品が届くとは", "お約束し", "かねます"] }
                ],
                dropdownGames: [
                    { before: "申し訳ありませんが、私の一存では", options: ["決めかねます", "決めるかねます", "決めてかねます"], answer: "決めかねます", after: "。" },
                    { before: "これ以上のお値引きは、当店としては", options: ["対応しかねます", "対応するかねます", "対応してかねます"], answer: "対応しかねます", after: "。" },
                    { before: "プライバシーに関わるご質問には、", options: ["お答えしかねます", "お答えするかねます", "お答えしてかねます"], answer: "お答えしかねます", after: "。" },
                    { before: "彼の説明だけでは、システムの全容が", options: ["掴みかねる", "掴むかねる", "掴んでかねる"], answer: "掴みかねる", after: "。" },
                    { before: "大変申し訳ありませんが、そのご要望には", options: ["沿いかねます", "沿うかねます", "沿ってかねます"], answer: "沿いかねます", after: "。" }
                ],
                opinionQuestions: [
                    { text: "コールセンターやお店で、「〜しかねます」と丁寧にお断りされた経験はありますか？", eng: "Have you ever experienced being politely refused with 'I cannot ~' at a call center or shop?" },
                    { text: "職場で急な決断を迫られた時、「この場では決めかねます」と保留にしたことはありますか？", eng: "When pressed for a sudden decision at work, have you ever put it on hold saying 'I cannot decide right here'?" },
                    { text: "他人の意見に対して、「言いたいことは分かるが、賛同しかねる」と思った経験を教えてください。", eng: "Tell me an experience where you thought regarding someone else's opinion, 'I understand what you want to say, but I cannot agree'." }
                ]
            },
            {
                point: "~に越したことはない (にこしたことはない)",
                english: "There is nothing better than / It's best if",
                structure: "Verb / Adj / Noun (Plain form) + に越したことはない",
                nuance: "Expresses that while something isn't strictly 100% required or guaranteed to solve the problem, it is undeniably the safest, most ideal, or most beneficial option to have.",
                metaphor: "Bringing an umbrella on a cloudy day. You might not end up needing it, but having it is absolutely better than not having it.",
                examples: [
                    { topic: "Business", text: "納期はまだ先だが、仕事は早く終わるに越したことはない。", eng: "The deadline is still ahead, but there is nothing better than finishing the work early." },
                    { topic: "Money", text: "家を買うなら、貯金は多ければ多いに越したことはない。", eng: "If you are buying a house, there is nothing better than having as much savings as possible." },
                    { topic: "Health", text: "若いうちから健康に気をつけるに越したことはない。", eng: "There is nothing better than taking care of your health from a young age." },
                    { topic: "Technology", text: "パソコンのメモリは、大容量であるに越したことはない。", eng: "When it comes to PC memory, there is nothing better than having a large capacity." },
                    { topic: "General JLPT", text: "旅行の荷物は、少ないに越したことはない。", eng: "When it comes to travel luggage, there is nothing better than having little of it." }
                ],
                clickingGames: [
                    { prompt: "To prevent trouble, security is best if it is strict.", target: "トラブルを防ぐためセキュリティは厳重であるに越したことはない", words: ["トラブルを防ぐため", "セキュリティは厳重であるに", "越したことはない"] },
                    { prompt: "When it comes to the safety of airsoft, checking multiple times is best.", target: "サバゲーの安全確認は何度やってもやりすぎるに越したことはない", words: ["サバゲーの安全確認は", "何度やってもやりすぎるに", "越したことはない"] },
                    { prompt: "When choosing a home theater, a large screen is best.", target: "ホームシアターを選ぶなら画面は大きいに越したことはない", words: ["ホームシアターを選ぶなら", "画面は大きいに", "越したことはない"] },
                    { prompt: "If you get sick, it's best to go to the hospital immediately.", target: "病気になったらすぐに病院へ行くに越したことはない", words: ["病気になったら", "すぐに病院へ行くに", "越したことはない"] },
                    { prompt: "English vocabulary is best if you know a lot of it.", target: "英語の語彙力はたくさん知っているに越したことはない", words: ["英語の語彙力は", "たくさん知っているに", "越したことはない"] }
                ],
                dropdownGames: [
                    { before: "いざという時のために、備えは", options: ["あるに越したことはない", "あったに越したことはない", "あるのに越したことはない"], answer: "あるに越したことはない", after: "。" },
                    { before: "パスワードは複雑", options: ["であるに越したことはない", "だに越したことはない", "なに越したことはない"], answer: "であるに越したことはない", after: "。" },
                    { before: "夏のキャンプでは、飲み水は", options: ["多いに越したことはない", "多くに越したことはない", "多いくてに越したことはない"], answer: "多いに越したことはない", after: "。" },
                    { before: "謝罪する時は、できるだけ", options: ["丁寧であるに越したことはない", "丁寧だに越したことはない", "丁寧のに越したことはない"], answer: "丁寧であるに越したことはない", after: "。" },
                    { before: "家から駅までは、", options: ["近いに越したことはない", "近くてに越したことはない", "近くに越したことはない"], answer: "近いに越したことはない", after: "。" }
                ],
                opinionQuestions: [
                    { text: "あなたがパソコンやスマートフォンを買う時、「〇〇であるに越したことはない」と一番重視するスペックは何ですか？", eng: "When buying a PC or smartphone, what is the spec you emphasize most, thinking 'There is nothing better than it being ~'?" },
                    { text: "旅行に行く時、準備において「〇〇であるに越したことはない」と思うことは何ですか？", eng: "When traveling, what is something in preparation where you think 'There is nothing better than it being ~'?" },
                    { text: "仕事において、スキルや経験以外で「これがあるに越したことはない」と思う強みは何だと思いますか？", eng: "In work, besides skills and experience, what is a strength you think 'There is nothing better than having this'?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Talking about dealing with a notoriously difficult client at work.",
            text: "<p><strong>田中:</strong> 「佐藤、例の大口クライアントからの無茶な要求の件だけど、どう対応するつもりだ？あの予算とスケジュールで、今のシステムを全部作り直せなんて、正直俺には全く理解し[BLANK1]よ。」</p><p><strong>佐藤:</strong> 「ああ、俺も同感だ。いくら長年付き合いのある顧客とはいえ、あんな横暴な態度を許すのはちょっと納得し[BLANK2]な。昨日、先方の担当者に電話で直接交渉してみたんだけど、全く聞く耳を持たなくてさ。」</p><p><strong>田中:</strong> 「で、どう返答したんだ？」</p><p><strong>佐藤:</strong> 「『その条件では、弊社のリソースでは到底お引き受けし[BLANK3]』と丁寧に、でもきっぱりとお断りしたよ。そうしたら、相手が激怒して電話を切っちゃってさ。」</p><p><strong>田中:</strong> 「マジか。でも、あの無茶苦茶な要求を呑んで現場のエンジニアを潰してしまうよりはマシだ。事前のリスク回避は、厳重である[BLANK4]からな。」</p><p><strong>佐藤:</strong> 「だよな。ただ、上層部がこの対応をどう評価するかは少し測り[BLANK5]ところがある。後で部長から大目玉を食らうかもしれないな。」</p><p><strong>田中:</strong> 「その時は俺も一緒に頭を下げてやるよ。どんなに偉いクライアントでも、現場を守るためには戦う勇気も必要だからな。備えは十分である[BLANK6]、今日の午後にでも理論武装用の資料を一緒に作ろうぜ。」</p>",
            blanks: [
                { id: "BLANK1", options: ["がたい", "かねない", "に越したことはない"], answer: "がたい" },
                { id: "BLANK2", options: ["がたい", "かねる", "に越したことはない"], answer: "がたい" }, // Or かねる. "納得しかねる" works too. Let's use がたい for "hard to accept" or "hard to understand".
                { id: "BLANK3", options: ["かねます", "がたいです", "に越したことはありません"], answer: "かねます" },
                { id: "BLANK4", options: ["に越したことはない", "がたい", "かねる"], answer: "に越したことはない" },
                { id: "BLANK5", options: ["かねる", "がたい", "に越したことはない"], answer: "かねる" },
                { id: "BLANK6", options: ["に越したことはない", "がたい", "かねる"], answer: "に越したことはない" }
            ]
        },
        story: {
            title: "Safety First on the Battlefield",
            text: "<p>私が所属しているサバイバルゲームのチーム『AOJ』では、長年厳格な安全基準を維持してきた。サバゲーはエアガンを使うスポーツである以上、目や顔への被弾リスクは常に伴う。そのため、我々は「アイウェア（ゴーグル）の着用基準は、厳しすぎる[BLANK1]」というスローガンを掲げている。</p><p>しかし先日、他のチームから合同イベントに参加してきた若いプレイヤーたちの行動が、私にはどうしても許し[BLANK2]ものだった。彼らはゲーム中のフィールド内であるにもかかわらず、レンズが曇ったからという理由で、平気でゴーグルを外して顔を拭いていたのだ。万が一その瞬間に流れ弾が目に当たれば、失明という取り返しのつかない悲劇を招きかねない。</p><p>私はすぐにゲームを一時中断し、彼らの元へ走った。「他人のルールに口を出すのは出過ぎた真似かもしれない」と一瞬ためらい、直接注意するのをためらい[BLANK3]部分もあったが、事故が起きてからでは遅いのだ。「フィールド内でゴーグルを外すようなプレイヤーの参加は、今後一切認め[BLANK4]」と、私は非常に厳しいトーンで彼らに警告した。</p><p>彼らは最初は不満そうな顔をしていたが、私が過去の事故事例を交えて安全の重要性を語ると、最後には深く反省してくれた。大人が本気で遊ぶ趣味だからこそ、リスク管理は完璧である[BLANK5]。どんなに楽しいゲームでも、一生消え[BLANK6]傷を負ってしまっては元も子もないのだから。</p>",
            blanks: [
                { id: "BLANK1", options: ["に越したことはない", "がたい", "かねる"], answer: "に越したことはない" },
                { id: "BLANK2", options: ["がたい", "かねる", "に越したことはない"], answer: "がたい" },
                { id: "BLANK3", options: ["かねる", "がたい", "に越したことはない"], answer: "かねる" },
                { id: "BLANK4", options: ["かねます", "がたいです", "に越したことはありません"], answer: "かねます" },
                { id: "BLANK5", options: ["に越したことはない", "がたい", "かねる"], answer: "に越したことはない" },
                { id: "BLANK6", options: ["がたい", "かねる", "に越したことはない"], answer: "がたい" }
            ]
        }
    }, {
        id: 42,
        title: "Lesson 42: Locations, Spans & Simultaneous Changes",
        grammar: [
            {
                point: "~において / ~における",
                english: "In / At / Regarding (Formal)",
                structure: "Noun + において / Noun + における + Noun",
                nuance: "A highly formal and written equivalent of 'で' (indicating place, time, or situation). Used in news, business presentations, or official announcements to set the stage.",
                metaphor: "A theatrical spotlight illuminating the exact stage where the grand performance is about to take place.",
                examples: [
                    { topic: "Business", text: "本日の会議は、第二会議室において午後3時より行われます。", eng: "Today's meeting will be held in Conference Room 2 starting at 3 PM." },
                    { topic: "Society", text: "現代社会において、インターネットの存在は不可欠である。", eng: "In modern society, the existence of the internet is indispensable." },
                    { topic: "History", text: "日本の歴史において、その出来事は重要な意味を持っている。", eng: "In Japanese history, that event holds an important meaning." },
                    { topic: "Education", text: "教育現場におけるAIの活用について議論が交わされた。", eng: "Discussions were exchanged regarding the utilization of AI in educational settings." },
                    { topic: "Airsoft", text: "サバイバルゲームにおいて、安全ゴーグルの着用は絶対のルールだ。", eng: "In airsoft, wearing safety goggles is an absolute rule." }
                ],
                clickingGames: [
                    { prompt: "The international conference will be held in Tokyo.", target: "国際会議が東京において開催される", words: ["国際会議が", "東京において", "開催される"] },
                    { prompt: "His achievements in the field of science are magnificent.", target: "科学の分野における彼の功績は素晴らしい", words: ["科学の分野における", "彼の功績は", "素晴らしい"] },
                    { prompt: "In life, failure is sometimes necessary.", target: "人生において失敗が必要な時もある", words: ["人生において", "失敗が", "必要な時もある"] },
                    { prompt: "Communication is important in the workplace.", target: "職場におけるコミュニケーションは重要だ", words: ["職場における", "コミュニケーションは", "重要だ"] },
                    { prompt: "The graduation ceremony took place in the gymnasium.", target: "体育館において卒業式が行われた", words: ["体育館において", "卒業式が", "行われた"] }
                ],
                dropdownGames: [
                    { before: "グローバル社会", options: ["において", "における", "においた"], answer: "において", after: "、語学力は強力な武器となる。" },
                    { before: "医療の現場", options: ["における", "において", "においた"], answer: "における", after: "人手不足が深刻な問題となっている。" },
                    { before: "この地域", options: ["において", "における", "においた"], answer: "において", after: "、過去最大級の台風が観測された。" },
                    { before: "ゲームの開発", options: ["において", "における", "においた"], answer: "において", after: "、ユーザーの意見は非常に参考になる。" },
                    { before: "日本の法律", options: ["における", "において", "においた"], answer: "における", after: "著作権の扱いについて学ぶ。" }
                ],
                opinionQuestions: [
                    { text: "「現代社会において」、一番解決すべき問題は何だと思いますか？", eng: "What do you think is the most pressing problem to solve 'in modern society'?" },
                    { text: "あなたの仕事や趣味の「分野において」、一番有名な人は誰ですか？", eng: "Who is the most famous person 'in the field of' your work or hobby?" },
                    { text: "「人間関係において」、あなたが最も大切にしていることは何ですか？", eng: "What is the thing you value the most 'in human relationships'?" }
                ]
            },
            {
                point: "~にわたって / ~にわたり",
                english: "Over a period of / Over a wide area",
                structure: "Noun (Time / Area) + にわたって / にわたる + Noun",
                nuance: "Emphasizes the sheer scale, length, or breadth of an action or state. It implies that something didn't just happen briefly, but spanned a massive amount of time or physical distance.",
                metaphor: "A giant tarp being unrolled and stretched out until it covers the entire surface of a massive football field.",
                examples: [
                    { topic: "Weather", text: "台風の影響で、関東地方の広い範囲にわたって大雨が降った。", eng: "Due to the typhoon, heavy rain fell over a wide area of the Kanto region." },
                    { topic: "Business", text: "そのプロジェクトは、5年間にわたって続けられた。", eng: "That project was continued over a period of 5 years." },
                    { topic: "Event", text: "フェスティバルは3日間にわたり、盛大に開催された。", eng: "The festival was held grandly over a period of 3 days." },
                    { topic: "Technology", text: "全国にわたるネットワークの整備が完了した。", eng: "The maintenance of the network spanning the whole country has been completed." },
                    { topic: "Study", text: "彼は数十年にわたって、日本の古典文学を研究している。", eng: "He has been researching Japanese classical literature over a period of several decades." }
                ],
                clickingGames: [
                    { prompt: "The meeting continued over a period of 3 hours.", target: "会議は3時間にわたって続いた", words: ["会議は", "3時間にわたって", "続いた"] },
                    { prompt: "The cherry blossoms are blooming over a wide area.", target: "広い範囲にわたって桜が咲いている", words: ["広い範囲に", "わたって", "桜が咲いている"] },
                    { prompt: "The investigation over 10 years finally ended.", target: "10年間にわたる調査がついに終わった", words: ["10年間に", "わたる調査が", "ついに終わった"] },
                    { prompt: "Traffic jams are occurring over the entire region.", target: "地域全体にわたって渋滞が発生している", words: ["地域全体に", "わたって", "渋滞が発生している"] },
                    { prompt: "He contributed to the company over a long period.", target: "彼は長期間にわたって会社に貢献した", words: ["彼は長期間に", "わたって", "会社に貢献した"] }
                ],
                dropdownGames: [
                    { before: "1週間に", options: ["わたって", "わたる", "わたりて"], answer: "わたって", after: "、展示会が開催されます。" },
                    { before: "数ヶ月に", options: ["わたる", "わたって", "わたりて"], answer: "わたる", after: "厳しい訓練を終え、彼らはプロになった。" },
                    { before: "海岸線の5キロに", options: ["わたり", "わたる", "わたりて"], answer: "わたり", after: "、美しい砂浜が続いている。" },
                    { before: "長年に", options: ["わたって", "わたる", "わたりて"], answer: "わたって", after: "、この町の人々は伝統を守り続けている。" },
                    { before: "全国に", options: ["わたる", "わたって", "わたりて"], answer: "わたる", after: "調査の結果、驚くべき事実が判明した。" }
                ],
                opinionQuestions: [
                    { text: "あなたが「数年間にわたって」ずっと続けている趣味や習慣は何ですか？", eng: "What is a hobby or habit you have been continuing 'over a period of several years'?" },
                    { text: "「長期間にわたる」プロジェクトや仕事をやり遂げた時、どんな気持ちになりますか？", eng: "When you finish a project or job 'spanning a long period', how do you feel?" },
                    { text: "もし1ヶ月間にわたって自由に旅行できるなら、どこに行きたいですか？", eng: "If you could travel freely over a period of one month, where would you want to go?" }
                ]
            },
            {
                point: "~に伴って / ~に伴い / ~とともに",
                english: "Along with / As X happens, Y happens",
                structure: "Noun / Verb (Dictionary form) + に伴って (にともなって)",
                nuance: "A formal expression indicating that as one major change or phenomenon occurs, another change inevitably happens simultaneously in proportion to it. Often used in news or analytical contexts.",
                metaphor: "A shadow stretching longer and longer exactly in sync with the sun setting lower and lower in the sky.",
                examples: [
                    { topic: "Technology", text: "AI技術の発展に伴って、私たちの働き方は大きく変化している。", eng: "Along with the development of AI technology, our way of working is changing greatly." },
                    { topic: "Economy", text: "人口の減少に伴い、労働力不足が深刻化している。", eng: "Along with the decrease in population, the labor shortage is becoming serious." },
                    { topic: "Age", text: "年齢を重ねるに伴って、健康への関心が高まってきた。", eng: "As I get older (along with adding age), my interest in health has increased." },
                    { topic: "Business", text: "新システムの導入に伴って、業務のマニュアルが改訂された。", eng: "Along with the introduction of the new system, the business manual was revised." },
                    { topic: "Environment", text: "経済成長に伴って、深刻な環境問題が発生した。", eng: "Along with economic growth, serious environmental problems occurred." }
                ],
                clickingGames: [
                    { prompt: "Along with globalization, English skills became necessary.", target: "グローバル化に伴って英語力が必要になった", words: ["グローバル化に", "伴って", "英語力が必要になった"] },
                    { prompt: "As the temperature rises, sales of ice cream increase.", target: "気温の上昇に伴ってアイスの売上が伸びる", words: ["気温の上昇に", "伴って", "アイスの売上が伸びる"] },
                    { prompt: "Along with the move, I bought new home appliances.", target: "引っ越しに伴い新しい家電を購入した", words: ["引っ越しに", "伴い", "新しい家電を購入した"] },
                    { prompt: "As demand decreases, the price drops.", target: "需要が減るに伴って価格が下落する", words: ["需要が減るに", "伴って", "価格が下落する"] },
                    { prompt: "Along with the rule change, the system was updated.", target: "ルールの変更に伴ってシステムが更新された", words: ["ルールの変更に", "伴って", "システムが更新された"] }
                ],
                dropdownGames: [
                    { before: "スマートフォンが", options: ["普及するに伴って", "普及したに伴って", "普及してに伴って"], answer: "普及するに伴って", after: "、紙の辞書を使う人は激減した。" },
                    { before: "社長の", options: ["交代に伴い", "交代に伴う", "交代が伴い"], answer: "交代に伴い", after: "、組織の体制が大きく変わった。" },
                    { before: "技術の", options: ["進歩に伴って", "進歩に伴う", "進歩に伴いな"], answer: "進歩に伴って", after: "、古い仕事は消えていく運命にある。" },
                    { before: "規模の", options: ["拡大に伴う", "拡大に伴って", "拡大に伴い"], answer: "拡大に伴う", after: "リスクを事前に計算しておく必要がある。" },
                    { before: "景気の", options: ["悪化に伴って", "悪化に伴う", "悪化が伴って"], answer: "悪化に伴って", after: "、多くの企業が採用を減らしている。" }
                ],
                opinionQuestions: [
                    { text: "テクノロジーの進化に「伴って」、私たちの生活から失われてしまったものは何だと思いますか？", eng: "Along with the evolution of technology, what do you think has been lost from our lives?" },
                    { text: "年齢を重ねるに「伴って」、あなたの中で変化してきた価値観や考え方はありますか？", eng: "As you get older, are there values or ways of thinking that have changed within you?" },
                    { text: "働き方の多様化に「伴って」、これからの社会に最も必要なスキルは何になると思いますか？", eng: "Along with the diversification of work styles, what do you think will be the most necessary skill for society from now on?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Discussing an upcoming multi-day large-scale airsoft campaign and their changing physical endurance.",
            text: "<p><strong>田中:</strong> 「来月、千葉の広大なキャンプ場[BLANK1]開催される、大規模なサバゲーイベントのエントリーはもう済ませたか？今回はただの試合じゃなくて、2日間[BLANK2]夜通しで行われる耐久キャンペーンらしいぞ。」</p><p><strong>佐藤:</strong> 「もちろんエントリーしたよ。広大な森林エリア[BLANK3]陣取り合戦が行われるなんて、聞いただけでアドレナリンが出るな。しかし、俺たちももう40代だ。若い頃のノリで徹夜で走り回ったら、翌日は筋肉痛で動けなくなるぞ。」</p><p><strong>田中:</strong> 「全くだな。年齢を重ねる[BLANK4]、どうしても持久力は落ちてくるからな。昔は重いアサルトライフルを抱えて最前線を突っ走っていたが、最近は後方からのスナイパー支援のほうが性に合ってきたよ。」</p><p><strong>佐藤:</strong> 「ははは、プレイスタイルの変化[BLANK5]、装備も軽くしていく必要があるな。それにしても、あんな大規模なイベントを運営するスタッフの苦労は計り知れないな。数百人の参加者の安全を、長時間[BLANK6]監視しなければならないんだから。」</p><p><strong>田中:</strong> 「本当だな。運営の努力と安全管理があるからこそ、俺たちは安心して遊べるんだ。今回のイベント[BLANK7]は、俺たちベテラン勢が率先してルールを守って、初心者のお手本になろうぜ。」</p><p><strong>佐藤:</strong> 「当然だ。よし、来週は体力をつけるために、近所の山でもランニングしておくか。」</p>",
            blanks: [
                { id: "BLANK1", options: ["において", "にわたって", "に伴って"], answer: "において" },
                { id: "BLANK2", options: ["にわたって", "において", "に伴って"], answer: "にわたって" },
                { id: "BLANK3", options: ["において", "に伴って", "にわたって"], answer: "において" }, // Over a wide forest area -> could be において (in) or にわたって (spanning). Array says: において. Wait, "広大な森林エリアにおいて" means "in the vast forest area".
                { id: "BLANK4", options: ["に伴って", "において", "にわたって"], answer: "に伴って" },
                { id: "BLANK5", options: ["に伴って", "において", "にわたって"], answer: "に伴って" },
                { id: "BLANK6", options: ["にわたって", "において", "に伴って"], answer: "にわたって" },
                { id: "BLANK7", options: ["において", "にわたって", "に伴って"], answer: "において" }
            ]
        },
        story: {
            title: "Overhauling English Training at Raksul",
            text: "<p>私は現在、ラクスルの人事部[BLANK1]、社員のグローバルコミュニケーション能力を底上げするための新しい英語研修プログラムの責任者を務めている。会社の急速な海外進出[BLANK2]、社内の公用語を英語に移行するプロジェクトが進行しており、全社員の語学力向上が急務となっていたのだ。</p><p>この研修プロジェクトは、単なる一過性の講義ではない。来年の春から約半年間[BLANK3]実施される、非常に長期的かつ大規模なカリキュラムである。私は過去数ヶ月[BLANK4]、各部署のマネージャーたちと面談を繰り返し、業務の負担にならない最適な学習スケジュールを構築するために奔走してきた。IT企業[BLANK5]のスピード感を維持しながら、新しい学習習慣を根付かせるのは至難の業であった。</p><p>導入の初期段階では、「毎日の業務が忙しいのに、英語までやらされるのか」という反発も少なくなかった。しかし、研修システムをより実践的なオンライン英会話にシフトし、AIを活用した発音チェックツールを導入したこと[BLANK6]、社員の学習に対するモチベーションは目に見えて変化し始めた。学習時間の増加[BLANK7]、社内でのTOEICの平均スコアも着実に上昇カーブを描いている。</p><p>私はこの結果を見て、深い安堵と達成感を感じた。人事という仕事は、制度を作って終わりではない。長期間[BLANK8]社員の成長に伴走し、彼らが世界中のクライアントと堂々と英語で渡り合えるようになるその日まで、私のサポートは終わることはないのだ。</p>",
            blanks: [
                { id: "BLANK1", options: ["において", "にわたって", "に伴って"], answer: "において" },
                { id: "BLANK2", options: ["に伴い", "にわたり", "において"], answer: "に伴い" },
                { id: "BLANK3", options: ["にわたって", "において", "に伴って"], answer: "にわたって" },
                { id: "BLANK4", options: ["にわたって", "において", "に伴って"], answer: "にわたって" },
                { id: "BLANK5", options: ["における", "にわたる", "に伴う"], answer: "における" }, // Needs to modify スピード感, so noun modifier: における
                { id: "BLANK6", options: ["に伴って", "において", "にわたって"], answer: "に伴って" },
                { id: "BLANK7", options: ["に伴って", "において", "にわたって"], answer: "に伴って" },
                { id: "BLANK8", options: ["にわたって", "において", "に伴って"], answer: "にわたって" }
            ]
        }
    },
    {
        id: 43,
        title: "Lesson 43: Positive Causes, Preferences & Replacements",
        grammar: [
            {
                point: "~おかげで / ~おかげか",
                english: "Thanks to ~ (Positive result)",
                structure: "Verb (た-form) / Adj / Noun + の + おかげで",
                nuance: "Expresses a strong feeling of gratitude because someone's action, a tool, or a situation directly led to a successful or positive outcome. The exact opposite of '〜せいで'.",
                metaphor: "A sturdy, well-placed ladder that allowed you to climb out of a deep pit. You acknowledge that without the ladder, you'd still be stuck in the dark.",
                examples: [
                    { topic: "Business", text: "先輩が親切に教えてくれたおかげで、無事にプレゼンを終えることができた。", eng: "Thanks to my senior teaching me kindly, I was able to finish the presentation safely." },
                    { topic: "Technology", text: "スマートホームのシステムのおかげで、毎日の家事が格段に楽になった。", eng: "Thanks to the smart home system, daily chores have become exceptionally easier." },
                    { topic: "Health", text: "毎日ジョギングを続けたおかげか、最近は全く風邪を引かなくなった。", eng: "Perhaps thanks to continuing jogging every day, I haven't caught a cold at all recently." },
                    { topic: "Study", text: "先生の厳しい指導のおかげで、N2の試験に合格できました。", eng: "Thanks to the teacher's strict guidance, I was able to pass the N2 exam." },
                    { topic: "Travel", text: "天気が良かったおかげで、山頂から素晴らしい景色を見ることができた。", eng: "Thanks to the good weather, we were able to see a wonderful view from the summit." }
                ],
                clickingGames: [
                    { prompt: "Thanks to you, my PC was fixed.", target: "あなたが手伝ってくれたおかげでPCが直りました", words: ["あなたが手伝ってくれた", "おかげで", "PCが直りました"] },
                    { prompt: "Thanks to everyone's cooperation, the event was a success.", target: "皆様の協力のおかげでイベントは成功しました", words: ["皆様の協力の", "おかげで", "イベントは成功しました"] },
                    { prompt: "Perhaps thanks to the medicine, my headache is gone.", target: "薬を飲んだおかげか頭痛がすっかり治った", words: ["薬を飲んだ", "おかげか", "頭痛がすっかり治った"] },
                    { prompt: "Thanks to the navigation app, I arrived without getting lost.", target: "ナビアプリのおかげで道に迷わず到着できた", words: ["ナビアプリの", "おかげで", "道に迷わず到着できた"] },
                    { prompt: "Thanks to saving money, I was able to buy a house.", target: "一生懸命貯金したおかげでマイホームを買えた", words: ["一生懸命貯金した", "おかげで", "マイホームを買えた"] }
                ],
                dropdownGames: [
                    { before: "毎日の練習", options: ["のおかげで", "なおかげで", "だおかげで"], answer: "のおかげで", after: "、試合で素晴らしい結果を出せた。" },
                    { before: "優秀なスタッフが", options: ["集まったおかげで", "集まるのおかげで", "集まっておかげで"], answer: "集まったおかげで", after: "、プロジェクトは順調に進んでいる。" },
                    { before: "最新のセキュリティソフト", options: ["のおかげで", "なおかげで", "であるおかげで"], answer: "のおかげで", after: "、ウイルス感染を防ぐことができた。" },
                    { before: "早く家を", options: ["出たおかげで", "出るのおかげで", "出ておかげで"], answer: "出たおかげで", after: "、渋滞に巻き込まれずに済んだ。" },
                    { before: "彼の的確なアドバイス", options: ["のおかげか", "なおかげか", "だおかげか"], answer: "のおかげか", after: "、システムのトラブルはすぐに解決した。" }
                ],
                opinionQuestions: [
                    { text: "あなたのこれまでの人生で、「〇〇のおかげで今の自分がある」と一番感謝している人や物は何ですか？", eng: "In your life so far, what person or thing are you most grateful for, thinking 'Thanks to X, I am who I am today'?" },
                    { text: "最近買ったガジェットや家電で、「これのおかげで本当に生活が便利になった！」と思うものはありますか？", eng: "Among recently bought gadgets or appliances, is there something you think 'Thanks to this, my life has become truly convenient!'?" },
                    { text: "勉強やスポーツで、「あの時苦労したおかげで、今役に立っている」と感じる経験を教えてください。", eng: "In study or sports, tell me an experience where you feel 'Thanks to struggling back then, it's useful to me now'." }
                ]
            },
            {
                point: "~くらいなら / ~ぐらいなら",
                english: "Rather than doing X (I'd rather do Y)",
                structure: "Verb (Dictionary form) + くらいなら",
                nuance: "Used to express an extreme dislike for option A. The speaker is saying, 'I hate option A so much that I would actually prefer option B, even if option B is also bad or extreme.'",
                metaphor: "It's like choosing between eating a plate of raw bugs or fasting for a day. 'Rather than eat the bugs, I'll gladly starve.'",
                examples: [
                    { topic: "Business", text: "あんな理不尽な上司に謝るくらいなら、会社を辞めたほうがましだ。", eng: "Rather than apologize to such an unreasonable boss, I'd rather quit the company." },
                    { topic: "Dieting", text: "まずいダイエット食品を食べるくらいなら、何も食べない方がいい。", eng: "Rather than eat gross diet food, it's better to eat nothing." },
                    { topic: "Travel", text: "満員電車に1時間も揺られるくらいなら、自転車で通いたい。", eng: "Rather than being shaken in a crowded train for an hour, I want to commute by bicycle." },
                    { topic: "Quality", text: "すぐ壊れる安いPCを買うくらいなら、最初から高いものを買うべきだ。", eng: "Rather than buy a cheap PC that breaks immediately, you should buy an expensive one from the start." },
                    { topic: "Dating", text: "彼に浮気されて泣くくらいなら、ずっと一人でいる方が幸せだ。", eng: "Rather than cry over him cheating on me, I am happier being alone forever." }
                ],
                clickingGames: [
                    { prompt: "Rather than waiting for an hour, I'd rather walk.", target: "1時間も待つくらいなら歩いた方がましだ", words: ["1時間も", "待つくらいなら", "歩いた方がましだ"] },
                    { prompt: "Rather than lying, I'd rather tell the truth and be scolded.", target: "嘘をつくくらいなら本当のことを言って怒られたい", words: ["嘘をつくくらいなら", "本当のことを言って", "怒られたい"] },
                    { prompt: "Rather than doing halfway work, it's better not to do it.", target: "中途半端な仕事をするくらいならやらない方がいい", words: ["中途半端な仕事を", "するくらいなら", "やらない方がいい"] },
                    { prompt: "Rather than apologizing to him, I'd rather die.", target: "彼に頭を下げるくらいなら死んだ方がましだ", words: ["彼に頭を下げる", "くらいなら", "死んだ方がましだ"] },
                    { prompt: "Rather than renting forever, I'd rather buy a house.", target: "ずっと家賃を払い続けるくらいなら家を買いたい", words: ["ずっと家賃を", "払い続けるくらいなら", "家を買いたい"] }
                ],
                dropdownGames: [
                    { before: "あんな不味い料理を", options: ["食べるくらいなら", "食べたくらいなら", "食べてくらいなら"], answer: "食べるくらいなら", after: "、カップラーメンの方がずっといい。" },
                    { before: "休みの日に一日中寝て", options: ["過ごすくらいなら", "過ごしたくらいなら", "過ごしてくらいなら"], answer: "過ごすくらいなら", after: "、サバゲーに行って汗を流したい。" },
                    { before: "後になって後悔", options: ["するくらいなら", "したくらいなら", "してくらいなら"], answer: "するくらいなら", after: "、今全力で挑戦するべきだ。" },
                    { before: "他人に迷惑を", options: ["かけるくらいなら", "かけたくらいなら", "かけてくらいなら"], answer: "かけるくらいなら", after: "、すべて自分一人でやる。" },
                    { before: "あんな奴に相談", options: ["するくらいなら", "したくらいなら", "してくらいなら"], answer: "するくらいなら", after: "、ネットで調べる方が確実だ。" }
                ],
                opinionQuestions: [
                    { text: "「〜するくらいなら、一人でいる方がマシだ」と思うほど嫌なことは何ですか？", eng: "What is something you dislike so much that you think 'Rather than doing ~, I'd rather be alone'?" },
                    { text: "「安い物を買ってすぐ壊れるくらいなら〜」という考え方に賛成ですか？", eng: "Do you agree with the mindset 'Rather than buying a cheap thing and having it break quickly...'?" },
                    { text: "ストレスのたまる満員電車で通勤する「くらいなら」、どんな極端な通勤方法を選びますか？", eng: "Rather than commuting on a stressful crowded train, what extreme commuting method would you choose?" }
                ]
            },
            {
                point: "~に代わって / ~にかわり",
                english: "On behalf of / In place of",
                structure: "Noun + に代わって / にかわり",
                nuance: "Indicates that someone or something steps in to perform a role or function that was originally supposed to be done by someone/something else. It is more formal than '~の代わりに'.",
                metaphor: "A stunt double stepping onto the movie set. They wear the exact same clothes and perform the exact same action on behalf of the main actor.",
                examples: [
                    { topic: "Business", text: "出張中の社長に代わって、私がご挨拶申し上げます。", eng: "On behalf of the president who is on a business trip, I will give the greeting." },
                    { topic: "Technology", text: "現代では、人間に代わってロボットが危険な作業を行っている。", eng: "In modern times, robots are performing dangerous tasks in place of humans." },
                    { topic: "Money", text: "最近は、現金に代わって電子マネーを使う人が増えている。", eng: "Recently, the number of people using electronic money in place of cash is increasing." },
                    { topic: "Sports", text: "怪我をしたエースに代わり、新人が試合に出場した。", eng: "In place of the injured ace, a rookie participated in the match." },
                    { topic: "Family", text: "忙しい妻に代わって、今日は私が夕食を作る。", eng: "On behalf of my busy wife, I will make dinner today." }
                ],
                clickingGames: [
                    { prompt: "I attended the meeting on behalf of the department manager.", target: "部長に代わって私が会議に出席しました", words: ["部長に代わって", "私が", "会議に出席しました"] },
                    { prompt: "Smartphones are playing the role of cameras in place of digital cameras.", target: "デジカメに代わってスマホがカメラの役割を果たしている", words: ["デジカメに代わって", "スマホが", "カメラの役割を果たしている"] },
                    { prompt: "On behalf of the unwell parents, the son welcomed the guests.", target: "体調不良の両親に代わり息子が客を出迎えた", words: ["体調不良の", "両親に代わり", "息子が客を出迎えた"] },
                    { prompt: "I apologized to the client on behalf of him.", target: "彼に代わって私が取引先に謝罪をした", words: ["彼に代わって", "私が", "取引先に謝罪をした"] },
                    { prompt: "In place of paper tickets, IC cards have become mainstream.", target: "紙の切符に代わってICカードが主流になった", words: ["紙の切符に代わって", "ICカードが", "主流になった"] }
                ],
                dropdownGames: [
                    { before: "病気で欠席した同僚", options: ["に代わって", "の代わって", "が代わって"], answer: "に代わって", after: "、私がプレゼンを行います。" },
                    { before: "人間の手作業", options: ["に代わり", "の代わり", "が代わり"], answer: "に代わり", after: "、AIがデータを集計するシステムを構築した。" },
                    { before: "退任する元会長", options: ["に代わって", "の代わって", "な代わって"], answer: "に代わって", after: "、若いリーダーが組織を引き継いだ。" },
                    { before: "手紙", options: ["に代わって", "の代わって", "が代わって"], answer: "に代わって", after: "、メールやSNSがコミュニケーションの中心となった。" },
                    { before: "忙しい両親", options: ["に代わって", "の代わって", "が代わって"], answer: "に代わって", after: "、祖母が子供たちの面倒を見ている。" }
                ],
                opinionQuestions: [
                    { text: "将来、あなたの仕事の「人間に代わって、AIやロボットがやってくれそう」な部分はどこですか？", eng: "In the future, what part of your work do you think 'AI or robots will likely do in place of humans'?" },
                    { text: "誰か（家族や同僚）に「代わって」、あなたが大きな責任を背負った経験はありますか？", eng: "Have you ever shouldered a big responsibility 'on behalf of' someone (family or colleague)?" },
                    { text: "「現金に代わって電子マネーを使う」など、最近の生活で「昔の物に代わって使っている新しい物」は何ですか？", eng: "Like 'using e-money in place of cash', what is a new thing you are using 'in place of an old thing' in your recent life?" }
                ]
            }
        ],
        dialogue: {
            speaker: "Two 40-year-old men (Tanaka and Sato)",
            context: "Discussing fixing a broken floor heater in a newly purchased house.",
            text: "<p><strong>田中:</strong> 「佐藤、聞いてくれよ。この前横須賀の久里浜に買ったばかりのマイホームなんだけどさ、リビングの床暖房が突然動かなくなったんだよ。ノーリツのRC9814C N30ってモデルなんだけど、リモコンにエラーコード113が点滅しててさ。」</p><p><strong>佐藤:</strong> 「せっかくの新居なのに災難だな。エラー113ってなんだ？ガス漏れとかじゃないだろうな。素人が下手に触る[BLANK1]、すぐにプロの業者を呼んで修理してもらうべきだぞ。」</p><p><strong>田中:</strong> 「俺も最初はそう思ったんだ。でも、業者を呼んで何万円も高い出張費を払う[BLANK2]、まずは自分でネットの掲示板や説明書を徹底的に調べてみようと思ったんだ。その[BLANK3]、どうやらエラー113は暖房回路の循環水が不足しているだけのサインだと分かったんだよ。」</p><p><strong>佐藤:</strong> 「へえ、じゃあ水さえ補充すれば直るってことか。便利なネットの情報[BLANK4]、無駄な出費を抑えられたってわけだな。それで、結局自分で直せたのか？」</p><p><strong>田中:</strong> 「ああ、本体のカバーを開けて自分で水を補充したら、見事にエラーが消えて床が暖かくなったよ。高いお金を払って業者に頼む[BLANK5]、自分で解決した方が圧倒的に達成感があるからな。一時的な処置として、古いアナログのタイマー[BLANK6]、スマホから操作できるSwitchBotのスマートプラグを連携させておいたよ。」</p><p><strong>佐藤:</strong> 「お前、完全にDIYのプロみたいになってるな。ネットとスマート家電の[BLANK7]、築古の家でも最新の快適さを手に入れられるんだな。俺の家のエアコンが壊れた時も、業者[BLANK8]お前に見てもらおうかな。」</p><p><strong>田中:</strong> 「ははは、俺は電気屋じゃないぞ。まあ、簡単なトラブルシューティングくらいならアドバイスしてやるよ。」</p>",
            blanks: [
                { id: "BLANK1", options: ["くらいなら", "おかげで", "に代わって"], answer: "くらいなら" },
                { id: "BLANK2", options: ["くらいなら", "おかげで", "に代わって"], answer: "くらいなら" },
                { id: "BLANK3", options: ["おかげで", "くらいなら", "に代わって"], answer: "おかげで" },
                { id: "BLANK4", options: ["のおかげで", "くらいなら", "に代わって"], answer: "のおかげで" },
                { id: "BLANK5", options: ["くらいなら", "おかげで", "に代わって"], answer: "くらいなら" },
                { id: "BLANK6", options: ["に代わって", "おかげで", "くらいなら"], answer: "に代わって" },
                { id: "BLANK7", options: ["おかげで", "くらいなら", "に代わって"], answer: "おかげで" },
                { id: "BLANK8", options: ["に代わって", "おかげで", "くらいなら"], answer: "に代わって" }
            ]
        },
        story: {
            title: "The Warmth of a New Home",
            text: "<p>念願だった横須賀の久里浜に一軒家を購入し、愛するパートナーであるシャンダと共に新しい生活がスタートした。元妻であるヨシとは今でも良好な関係を保っており、共同で娘の子育てを行っている。この家は決して投資目的の物件や別荘などではない。私がこれから家族を育て、温かい思い出を刻んでいくための大切な拠点なのだ。ローンの審査などで様々な苦労はあったが、理解のある銀行の担当者の[BLANK1]、無事に理想のマイホームを手に入れることができた。いつまでも狭い賃貸マンションで高い家賃を払い続ける[BLANK2]、多少無理をしてでも自分たちの城を持ちたかったのだ。</p><p>しかし、住み始めて最初の冬、リビングの床暖房（ノーリツのRC9814C N30）がエラーコード「113」を表示して突然停止してしまうというトラブルに見舞われた。真冬の冷え込んだ床は氷のように冷たく、家族が快適に過ごすことができない。すぐに高額な修理業者を呼んで丸投げする[BLANK3]、まずは自分で何が原因なのかを徹底的に突き止めようと決意した。インターネットのフォーラムや過去の修理ブログを読み漁った[BLANK4]、エラー113が暖房水の循環不良を示すものであることが判明した。</p><p>私はホームセンターで必要な道具を揃え、システムの水を自力で補充することに成功した。スイッチを入れると、古びた床暖房は再び息を吹き返し、リビングにじんわりとした温もりが戻ってきた。古くて使い勝手の悪かった純正のリモコン[BLANK5]、私はSwitchBotを導入し、外出先からでもスマホで床暖房のオンオフができるようにシステムを現代風にアップデートした。自分で知恵を絞り、汗を流して家をメンテナンスした[BLANK6]、この久里浜の家に対する愛着は以前よりも何倍にも深まった。私はこれからも一家の大黒柱として、どんな困難にも立ち向かっていくつもりだ。</p>",
            blanks: [
                { id: "BLANK1", options: ["おかげで", "くらいなら", "に代わって"], answer: "おかげで" },
                { id: "BLANK2", options: ["くらいなら", "おかげで", "に代わって"], answer: "くらいなら" },
                { id: "BLANK3", options: ["くらいなら", "おかげで", "に代わって"], answer: "くらいなら" },
                { id: "BLANK4", options: ["おかげで", "くらいなら", "に代わって"], answer: "おかげで" },
                { id: "BLANK5", options: ["に代わって", "おかげで", "くらいなら"], answer: "に代わって" },
                { id: "BLANK6", options: ["おかげで", "くらいなら", "に代わって"], answer: "おかげで" }
            ]
        }
    }
];