/**
 * 观音灵签 · 多语言翻译数据
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️  此文件由 scripts/build-translations-ts.mjs 自动生成，请勿手动编辑。
 *     如需更新翻译，请重新运行翻译脚本：
 *     MINIMAX_API_KEY=<your_key> node scripts/translate-lots.mjs
 *     然后运行合并脚本：node scripts/build-translations-ts.mjs
 *
 * 包含内容：100 签的 EN（英文）和 JA（日文）翻译
 * 不包含：title（签文标题）、poemLines（签诗）— 这两个字段保持中文原文
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { LotTranslationMap } from '../types';

export const LOT_TRANSLATIONS: LotTranslationMap = {
  "1": {
    "en": {
      "meaning": "This hexagram symbolizes the creation of heaven and earth; all matters will be auspicious and prosperous.",
      "allusion": "Han Zhongli, one of the Eight Immortals, diligently cultivated himself and ultimately received the true Tao from Taishang Laojun, achieving immortality. This represents the completion of great achievements and the glory of one's household.",
      "explanation": "The creation of heaven and earth brings about all things as desired; plans will be smooth and supported by noble people. This is a sign of great fortune, and all endeavors will prosper.",
      "aspects": [
        {
          "label": "Home",
          "result": "Pray for blessings"
        },
        {
          "label": "Self",
          "result": "Auspicious in autumn and winter"
        },
        {
          "label": "Wealth",
          "result": "Great success in autumn and winter"
        },
        {
          "label": "Transactions",
          "result": "Successful"
        },
        {
          "label": "Marriage",
          "result": "Great fortune"
        },
        {
          "label": "Pregnancy",
          "result": "Birth of a boy"
        },
        {
          "label": "Traveler",
          "result": "Arrival"
        },
        {
          "label": "Agriculture",
          "result": "Early abundance"
        },
        {
          "label": "Seeking people",
          "result": "Will meet"
        },
        {
          "label": "Lawsuits",
          "result": "Justified"
        },
        {
          "label": "Relocation",
          "result": "Auspicious"
        },
        {
          "label": "Illness",
          "result": "Healthy"
        }
      ],
      "keywords": [
        "Renewal of all things",
        "Beginning of great fortune",
        "Support from noble people",
        "All endeavors successful"
      ],
      "zenAdvice": "Heaven and earth are in harmony, presenting an opportunity for great achievements. However, one must maintain a righteous and clear mind, remain vigilant in times of peace, and perform good deeds to receive abundant blessings."
    },
    "ja": {
      "meaning": "この卦は天地創造の象を意味し、万事は吉慶亨通なり。",
      "allusion": "漢の鐘離権は八仙の一人にして、苦心を重ね修行し、ついに太上老君より真の道を授かり、羽化して仙人となる。大功の成就、家門の栄光を象徴す。",
      "explanation": "天地開き、万事如意。謀事は順調に進み、貴人の助けを得る。大吉の兆しにして、万事興隆す。",
      "aspects": [
        {
          "label": "家",
          "result": "祈福"
        },
        {
          "label": "自身",
          "result": "秋冬吉"
        },
        {
          "label": "財を求める",
          "result": "秋冬大遂"
        },
        {
          "label": "取引",
          "result": "成合"
        },
        {
          "label": "婚姻",
          "result": "大吉"
        },
        {
          "label": "妊娠",
          "result": "男子誕生"
        },
        {
          "label": "旅行者",
          "result": "到着"
        },
        {
          "label": "農業",
          "result": "早熟"
        },
        {
          "label": "人探し",
          "result": "出会う"
        },
        {
          "label": "訴訟",
          "result": "道理あり"
        },
        {
          "label": "移転",
          "result": "吉"
        },
        {
          "label": "病気",
          "result": "安康"
        }
      ],
      "keywords": [
        "万象更新",
        "大いなる運の始まり",
        "貴人の引き立て",
        "万事順調"
      ],
      "zenAdvice": "天地の交わりはまさに大いなる計画を立てる好機なり。然れども、心を正しく保ち、安きに居て危うきを思うべし。善行を多く行い、厚き福を受けるべし。"
    }
  },
  "2": {
    "en": {
      "meaning": "This hexagram symbolizes a hidden dragon awaiting its time; all matters require patience and perseverance.",
      "allusion": "Jiang Shang (Zi Ya) of the Zhou Dynasty hid by the Wei River in Pan Xi, fishing with a straight hook without bait, and was recognized by King Wen at the age of eighty, ultimately aiding in the overthrow of the Shang Dynasty. This represents the accumulation of strength before a great breakthrough.",
      "explanation": "Reflect deeply and do not act rashly. Endure patiently and wait for the right moment; when the opportunity arises, you will be able to ride the wind and waves.",
      "aspects": [
        {
          "label": "Home",
          "result": "Stable"
        },
        {
          "label": "Self",
          "result": "Conservative"
        },
        {
          "label": "Wealth",
          "result": "Awaiting the right time"
        },
        {
          "label": "Transactions",
          "result": "Delayed"
        },
        {
          "label": "Marriage",
          "result": "Obstacles before success"
        },
        {
          "label": "Pregnancy",
          "result": "False alarm"
        },
        {
          "label": "Traveler",
          "result": "Blocked"
        },
        {
          "label": "Lawsuits",
          "result": "Should reconcile"
        },
        {
          "label": "Illness",
          "result": "Gradually recovering"
        }
      ],
      "keywords": [
        "Accumulating strength",
        "Cultivating oneself",
        "Waiting for the right moment",
        "Immeasurable blessings to come"
      ],
      "zenAdvice": "Although currently it seems difficult and stagnant, this is a time for tempering the will. Do not act rashly or impatiently; cultivate inner strength, and when the east wind arrives, you will naturally leap over the dragon gate."
    },
    "ja": {
      "meaning": "この卦は潜龍の時を待つ象にして、万事は旧を守るに煩わしからず。",
      "allusion": "周の太公望（子牙）は渭水の磻渓に隠れ、直鉤無餌の釣りにて、八十にして文王に認められ、紂王討伐の大業を成す。厚積薄発の象徴なり。",
      "explanation": "退いて思慮を巡らし、事を急ぐべからず。耐え忍び時節を待つべし。機が熟せば、風を乗じて波濤を破るべし。",
      "aspects": [
        {
          "label": "家",
          "result": "安定"
        },
        {
          "label": "自身",
          "result": "旧を守る"
        },
        {
          "label": "財を求める",
          "result": "時節を待つ"
        },
        {
          "label": "取引",
          "result": "遅緩"
        },
        {
          "label": "婚姻",
          "result": "阻まれて後に成る"
        },
        {
          "label": "妊娠",
          "result": "虚驚"
        },
        {
          "label": "旅行者",
          "result": "阻まれる"
        },
        {
          "label": "訴訟",
          "result": "和解すべし"
        },
        {
          "label": "病気",
          "result": "徐々に安んず"
        }
      ],
      "keywords": [
        "力を蓄え時を待つ",
        "内面を修める",
        "機が熟すのを待つ",
        "後の福は無量"
      ],
      "zenAdvice": "今は困難で滞っているように見えても、心志を鍛える時なり。焦らず動くな、内なる力を深耕せよ。東風が吹く時、自ずと龍門を躍らん。"
    }
  },
  "3": {
    "en": {
      "meaning": "This hexagram symbolizes a storm-tossed world; all matters face obstacles and hardships.",
      "allusion": "Han Dynasty's Dong Yong sold himself to bury his father; his filial piety moved heaven, and the Seven Fairies descended to help him by lending him celestial garments to weave silk, ultimately resolving his difficulties after enduring great hardships.",
      "explanation": "Currently, there are many storms; one must act with caution and thoroughness. If one adheres to the right path, the predicament will eventually be resolved.",
      "aspects": [
        {
          "label": "Home",
          "result": "Much worry"
        },
        {
          "label": "Self",
          "result": "Guarding oneself"
        },
        {
          "label": "Wealth",
          "result": "Laborious"
        },
        {
          "label": "Transactions",
          "result": "Beware of losses"
        },
        {
          "label": "Marriage",
          "result": "Difficult harmony"
        },
        {
          "label": "Seeking people",
          "result": "Nonexistent"
        },
        {
          "label": "Lawsuits",
          "result": "At a loss"
        },
        {
          "label": "Illness",
          "result": "Pray to the gods"
        }
      ],
      "keywords": [
        "Journey through storms",
        "Upholding filial piety",
        "Overcoming with softness",
        "From extreme adversity to prosperity"
      ],
      "zenAdvice": "Although currently facing adversity and coldness, one must not give up. Hold onto the pure and original heart, treat people with sincerity, and the clouds will part to reveal the blue sky."
    },
    "ja": {
      "meaning": "この卦は風雨に漂う象にして、万事は阻まれ労苦多し。",
      "allusion": "漢の董永は父を葬るために身を売ったが、その孝行が天に響き、七仙女が下界に降りて仙衣を借りて織物を手伝う。千辛万苦を経て、ようやく困難を解決す。",
      "explanation": "今は風雨多く、事は慎重かつ周到に進むべし。正道を堅く守れば、窮境もいずれ解消す。",
      "aspects": [
        {
          "label": "家",
          "result": "多憂"
        },
        {
          "label": "自身",
          "result": "己を守る"
        },
        {
          "label": "財を求める",
          "result": "心を労す"
        },
        {
          "label": "取引",
          "result": "失うな"
        },
        {
          "label": "婚姻",
          "result": "難くして調和せず"
        },
        {
          "label": "人探し",
          "result": "ない"
        },
        {
          "label": "訴訟",
          "result": "損す"
        },
        {
          "label": "病気",
          "result": "神仏に祈る"
        }
      ],
      "keywords": [
        "風雨兼行",
        "孝悌を固く守る",
        "柔よく剛を制す",
        "逆境から順境へ"
      ],
      "zenAdvice": "今は逆境と寒さに遭っているが、自暴自棄になるべからず。清い初心を守り、人に誠を尽くせ。雲開けて青空自ずと見えん。"
    }
  },
  "4": {
    "en": {
      "meaning": "This hexagram symbolizes the mending of a broken mirror; all matters involve restoration and reunion, bringing joy and renewal.",
      "allusion": "Peng Zu, known for his longevity and mastery of health, experienced separations and reunions before achieving complete enlightenment and reuniting with loved ones. This represents the restoration of broken relationships and the renewal of old friendships.",
      "explanation": "The broken mirror is mended, and the dead wood sprouts anew. Lost items can be found, and old plans can be revived. Human affairs are smooth, and all is auspicious.",
      "aspects": [
        {
          "label": "Home",
          "result": "Revival"
        },
        {
          "label": "Self",
          "result": "Safe"
        },
        {
          "label": "Wealth",
          "result": "Profitable"
        },
        {
          "label": "Transactions",
          "result": "Reconciliation"
        },
        {
          "label": "Marriage",
          "result": "Reunion"
        },
        {
          "label": "Pregnancy",
          "result": "Birth of a girl"
        },
        {
          "label": "Traveler",
          "result": "Return"
        },
        {
          "label": "Agriculture",
          "result": "Stable"
        },
        {
          "label": "Seeking people",
          "result": "Self-revealing"
        },
        {
          "label": "Lawsuits",
          "result": "Settlement"
        },
        {
          "label": "Illness",
          "result": "Recovery"
        }
      ],
      "keywords": [
        "Mending the broken mirror",
        "Dead wood sprouting anew",
        "Renewal of old friendships",
        "Joyful reunion"
      ],
      "zenAdvice": "The past regrets or estrangements are about to encounter a turning point and reconciliation. Embrace a heart of tolerance and gratitude, cherishing the opportunity of restoration."
    },
    "ja": {
      "meaning": "この卦は破鏡再合の象にして、万事は失われて再び得られ、吉慶重逢す。",
      "allusion": "彭祖は養生の達人にして長寿を得、離合を経てついに道を得て、人事を完うす。離散再合、旧好再び温むるを象徴す。",
      "explanation": "破鏡再合、枯木再び春をなす。失物は求め得られ、旧謀再び興る。人事順調、万事吉祥。",
      "aspects": [
        {
          "label": "家",
          "result": "復興"
        },
        {
          "label": "自身",
          "result": "平安"
        },
        {
          "label": "財を求める",
          "result": "利益を得る"
        },
        {
          "label": "取引",
          "result": "和解"
        },
        {
          "label": "婚姻",
          "result": "再び合う"
        },
        {
          "label": "妊娠",
          "result": "女子誕生"
        },
        {
          "label": "旅行者",
          "result": "帰る"
        },
        {
          "label": "農業",
          "result": "平穏"
        },
        {
          "label": "人探し",
          "result": "自ら現れる"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "回春"
        }
      ],
      "keywords": [
        "破鏡再合",
        "枯木春をなす",
        "旧好再び温む",
        "吉慶再び臨む"
      ],
      "zenAdvice": "過去の遺恨や隔たりが転機と和解を迎える。包容と感謝の心を抱き、失って再び得た機会を大切にするべし。"
    }
  },
  "5": {
    "en": {
      "meaning": "This hexagram symbolizes digging for a spring; all matters require effort to achieve results.",
      "allusion": "The Eastern Han Dynasty's Liu Chen and Ruan Zhao entered Mount Tiantai to gather herbs, got lost, met fairies, and eventually returned home with blessings. This represents the diligent search that leads to enlightenment.",
      "explanation": "Strive for progress and be open to change. Hard work will gradually lead to a better situation. Do not give up halfway.",
      "aspects": [
        {
          "label": "Home",
          "result": "Change of fortune"
        },
        {
          "label": "Self",
          "result": "Laborious"
        },
        {
          "label": "Wealth",
          "result": "Gradually abundant"
        },
        {
          "label": "Transactions",
          "result": "Smooth"
        },
        {
          "label": "Marriage",
          "result": "Successful"
        },
        {
          "label": "Pregnancy",
          "result": "Birth of a boy"
        },
        {
          "label": "Traveler",
          "result": "Action"
        },
        {
          "label": "Lawsuits",
          "result": "Justified"
        },
        {
          "label": "Illness",
          "result": "Good doctor"
        }
      ],
      "keywords": [
        "Diligently digging for spring",
        "Courage to innovate",
        "Self-reliance",
        "Stepping into prosperity"
      ],
      "zenAdvice": "Success comes from persistent digging and appropriate change. Find the right direction, work diligently, and the clear spring water will naturally emerge."
    },
    "ja": {
      "meaning": "この卦は掘地尋泉の象にして、万事は努力すれば必ず所得あり。",
      "allusion": "後漢の劉晨と阮肇は天台山に薬草を採取に入り、道に迷って仙女に出会い、後に仙縁を得て帰郷す。辛労探索、ついに霊機を見出すを象徴す。",
      "explanation": "努めて進み、方針を変えよ。勤勉に耕作すれば、次第に佳境に入るべし。決して中途半端に諦めるべからず。",
      "aspects": [
        {
          "label": "家",
          "result": "運を変える"
        },
        {
          "label": "自身",
          "result": "労力を費やす"
        },
        {
          "label": "財を求める",
          "result": "次第に豊か"
        },
        {
          "label": "取引",
          "result": "順調"
        },
        {
          "label": "婚姻",
          "result": "成就"
        },
        {
          "label": "妊娠",
          "result": "男子誕生"
        },
        {
          "label": "旅行者",
          "result": "動く"
        },
        {
          "label": "訴訟",
          "result": "正当"
        },
        {
          "label": "病気",
          "result": "良医"
        }
      ],
      "keywords": [
        "勤勉に泉を掘る",
        "革新を恐れない",
        "自力更生",
        "栄華に入る"
      ],
      "zenAdvice": "成功は不断の掘り下げと適切な変化に由来す。方向を見定め、地を踏みしめ、清き泉甘露自ずと湧き出ず。"
    }
  },
  "6": {
    "en": {
      "meaning": "This hexagram signifies the image of a tiger being fed beneath a cliff, symbolizing the need for utmost caution and sincere prayer for dispelling misfortune in all matters.",
      "allusion": "Xue Rengui's early struggles and hardships in military life, where he faced numerous dangers and trials before rising to prominence through his unparalleled martial prowess. This represents the idea that true worth is revealed through enduring tests.",
      "explanation": "The path ahead is fraught with difficulties and hidden perils. It is advisable to adhere to the righteous path, perform good deeds, and pray for the dispelling of calamities while awaiting a turning point.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Unsettled"
        },
        {
          "label": "Self",
          "result": "Cautious"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Meager"
        },
        {
          "label": "Business & Trade",
          "result": "Beware"
        },
        {
          "label": "Marriage & Love",
          "result": "Delayed"
        },
        {
          "label": "Traveler",
          "result": "Obstructed"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Pray for Blessings"
        }
      ],
      "keywords": [
        "Endure Hardship with Dignity",
        "Guard Against the Small to Prevent the Large",
        "Cultivate Virtue to Atone for Faults",
        "Transform Danger into Safety"
      ],
      "zenAdvice": "In complex or constrained circumstances, do not act rashly out of bravado. Maintain humility and gentleness, cultivate your spirit with sincerity, and navigate treacherous waters with wisdom."
    },
    "ja": {
      "meaning": "此の卦は岩の下にて虎を養うの象にして、万事は謹んで慎み、心を尽くして災いを祓うべし。",
      "allusion": "薛仁貴若年の困窮、軍に投じて幾多の艱難辛苦を経、後には天下無双の武勇にて王侯将帥の位に至りし例。試練を経て真価を顕すことを示す。",
      "explanation": "前途は多難にして、凶事が潜む。常に正道を守り、善行を積み、災いを除き福を招くことを祈るべきなり。",
      "aspects": [
        {
          "label": "家宅",
          "result": "安からず"
        },
        {
          "label": "自身",
          "result": "慎むべし"
        },
        {
          "label": "求財",
          "result": "僅かなり"
        },
        {
          "label": "取引",
          "result": "慎むべし"
        },
        {
          "label": "縁談",
          "result": "遅し"
        },
        {
          "label": "待ち人",
          "result": "阻まれる"
        },
        {
          "label": "訴訟",
          "result": "和解すべし"
        },
        {
          "label": "病気",
          "result": "祈願すべし"
        }
      ],
      "keywords": [
        "忍辱負重",
        "防微杜漸",
        "修徳消愆",
        "転危為安"
      ],
      "zenAdvice": "複雑なる環境や制約ある状況にあっては、一時の勇に頼ることなかれ。謙虚柔和を保ち、心を清め、誠実に修行して難局を乗り切るべし。"
    }
  },
  "7": {
    "en": {
      "meaning": "This hexagram signifies the image of achieving glory after immense toil, indicating that all endeavors will initially be difficult but ultimately yield great fortune and success.",
      "allusion": "Su Qin, who rose to prominence by becoming the prime minister of six states, returning home in triumph. Similarly, the journey of a cultivator who endures countless trials before attaining the Great Dao.",
      "explanation": "Initial hardships will be followed by prosperity. Perseverance will lead to both fame and fortune. This is a sign of eventual triumph after enduring suffering.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Fortune"
        },
        {
          "label": "Self",
          "result": "Prominent"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Abundant"
        },
        {
          "label": "Business & Trade",
          "result": "Great Fortune"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Achievement & Fame",
          "result": "High Honors"
        },
        {
          "label": "Relocation",
          "result": "Great Benefit"
        },
        {
          "label": "Health & Illness",
          "result": "Recovery"
        }
      ],
      "keywords": [
        "Sweetness After Bitterness",
        "Illustrious Fame",
        "Abundance of Gold and Jade",
        "Difficult Beginnings, Successful Endings"
      ],
      "zenAdvice": "Every drop of sweat and every moment of hardship will be transformed into a bountiful harvest tomorrow. Those who persevere will find the light at the end of the journey."
    },
    "ja": {
      "meaning": "此の卦は労苦の後に栄華を極めるの象にして、万事は先難後易、大吉大利なり。",
      "allusion": "蘇秦、六国の宰相となり、栄華を極めて凱旋せし例。または修行者が幾多の苦難を経て大道を証せし例。",
      "explanation": "先ずは苦労あれど、後には必ず繁栄す。辛抱強く耐え忍べば名利双全となる。苦難の後に甘美が訪れる大兆しなり。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "顕達"
        },
        {
          "label": "求財",
          "result": "豊か"
        },
        {
          "label": "取引",
          "result": "大吉"
        },
        {
          "label": "縁談",
          "result": "和美"
        },
        {
          "label": "功名",
          "result": "高中"
        },
        {
          "label": "転居",
          "result": "大利"
        },
        {
          "label": "病気",
          "result": "快癒"
        }
      ],
      "keywords": [
        "苦尽甘来",
        "功名显赫",
        "金玉满堂",
        "先难后成"
      ],
      "zenAdvice": "捧げし汗の一滴、忍びし辛酸の一つ一つが、明日の実り豊かな収穫となる。百里を行く者は九十里を半ばとす。忍耐はすなわち光明なり。"
    }
  },
  "8": {
    "en": {
      "meaning": "This hexagram symbolizes the enduring nature of pine and cypress, representing steadfastness and resilience in all matters, with boundless blessings to follow.",
      "allusion": "During the Tang Dynasty, Pei Du, while impoverished, found a precious belt and waited in a temple for its owner to return it, thus accumulating profound karmic virtue. Later, he rose to become a chancellor and was granted the title of Duke of Jin.",
      "explanation": "Engage in acts of kindness and accumulate virtue; your profound deeds will bear rich fruits. Like the pine and cypress enduring frost, future generations will find shelter in your shade. Fame and fortune will naturally come to you.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Prosperous"
        },
        {
          "label": "Self",
          "result": "Great Fortune"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Satisfactory"
        },
        {
          "label": "Marriage & Love",
          "result": "Great Fortune"
        },
        {
          "label": "Missing Person",
          "result": "Will Return"
        },
        {
          "label": "Legal Affairs",
          "result": "Great Victory"
        },
        {
          "label": "Health & Illness",
          "result": "Healthy"
        }
      ],
      "keywords": [
        "Evergreen Pine and Cypress",
        "Accumulating Virtue to Change Fate",
        "Noble Character and Esteem",
        "Trusted by All"
      ],
      "zenAdvice": "Great virtue carries all things; kindness is the best amulet. Uphold the nobility and purity of your character, and no matter the storms of the world, you will stand unshaken."
    },
    "ja": {
      "meaning": "この卦は松柏の常緑なる象にして、万事堅貞にして挺抜し、後世限りなき福あり。",
      "allusion": "唐の裴度が貧窮の時、貴重な宝帯を拾い、寺にて失主の帰りを辛抱強く待ち、その徳を積みて後に宰相となり晋国公に封ぜらる。",
      "explanation": "善をなし徳を積み、陰徳深厚なり。松柏霜に傲り、後人その蔭に憩う。功名富貴、自然に至りて至る。",
      "aspects": [
        {
          "label": "家宅",
          "result": "昌盛"
        },
        {
          "label": "自身",
          "result": "大吉"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "合意"
        },
        {
          "label": "縁談",
          "result": "大吉"
        },
        {
          "label": "尋ね人",
          "result": "自帰"
        },
        {
          "label": "訴訟",
          "result": "大勝"
        },
        {
          "label": "病気",
          "result": "安康"
        }
      ],
      "keywords": [
        "松柏常緑",
        "徳を積みて運命を変える",
        "徳高く人望厚し",
        "衆望を集む"
      ],
      "zenAdvice": "徳は物を載せて厚し、善良は最上の護符なり。品格の高潔と純粋を守り、世の移ろい如何にかかわらず、君は倒れざるべし。"
    }
  },
  "9": {
    "en": {
      "meaning": "This hexagram represents the preparation and readiness for undertakings, indicating that through diligent effort and patience, eventual success and prominence will be achieved.",
      "allusion": "During the Three Kingdoms period, Zhuge Liang emerged to aid Liu Bei. His first military action at Bowang Slope showcased his strategic prowess, leading to victory. This symbolizes the importance of preparation and the right timing for action.",
      "explanation": "Though labor is required now, your resolve should remain firm. Equip yourself fully and await the opportune moment. Once the time is right, both fame and fortune will be within reach.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Auspicious"
        },
        {
          "label": "Self",
          "result": "Diligent and Careful"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Promising"
        },
        {
          "label": "Business & Trade",
          "result": "Gradually Improving"
        },
        {
          "label": "Marriage & Love",
          "result": "Late Success"
        },
        {
          "label": "Achievement & Fame",
          "result": "Accurate"
        }
      ],
      "keywords": [
        "Preparing for Action",
        "Aspiring for Greatness",
        "Sharpening One's Skills",
        "Achieving Fame in One Battle"
      ],
      "zenAdvice": "This is the time to gather your tools and hone your abilities. Do not lament unfulfilled potential; instead, sharpen your lance and bow, for the winds of change are approaching."
    },
    "ja": {
      "meaning": "この卦は事を謀り備うる象にして、万事磨いて時に待ちて、遂に顕達を得る。",
      "allusion": "三国時代の諸葛亮が山を出て博望坡にて初めて兵を用い、将を配し、帷幄を運らして敵を破りて勝つ。千日の兵を養い、一朝之用うるを喻う。",
      "explanation": "今は労苦あれども、志は堅く保つべし。兵甲を備え、機を待って発すべし。時至れば名利ともに成就すべし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "吉"
        },
        {
          "label": "自身",
          "result": "勤謹"
        },
        {
          "label": "求財",
          "result": "有望"
        },
        {
          "label": "取引",
          "result": "漸通"
        },
        {
          "label": "縁談",
          "result": "晩成"
        },
        {
          "label": "功名",
          "result": "有準"
        }
      ],
      "keywords": [
        "力を蓄え戦いに備える",
        "志高く遠くを望む",
        "磨いて鋭い刃とする",
        "一戦にして名を成す"
      ],
      "zenAdvice": "今は装備を整え、技能を学ぶ充実の時なり。才を認められずとも嘆くことなかれ、手に持つ長槍利弓を研ぎ澄せ、風雲まさに起らん。"
    }
  },
  "10": {
    "en": {
      "meaning": "This hexagram signifies an unpolished jade, a symbol of hidden potential. Exercise patience and await the right moment, for a kindred spirit will surely recognize your worth.",
      "allusion": "During the Warring States period, Pang Juan was skilled in strategy but narrow-minded, ultimately defeated by Sun Bin at the Maling Pass due to his jealousy and cunning. This teaches us to avoid scheming and to treat others with sincerity.",
      "explanation": "A treasure lies concealed, waiting for the right time to be revealed. Do not lament the present coldness, for true feelings will naturally surface. With a righteous heart and upright conduct, noble benefactors will come to you.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Peaceful"
        },
        {
          "label": "Self",
          "result": "Contentment"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Delayed"
        },
        {
          "label": "Marriage & Love",
          "result": "Fated"
        },
        {
          "label": "Missing Person",
          "result": "Will Appear"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        }
      ],
      "keywords": [
        "Hidden Jade",
        "Await the Wise",
        "Avoid Cunning",
        "Meet Kindred Spirits"
      ],
      "zenAdvice": "Even if you are not fully understood in the present, do not compromise your integrity. True value is like jade within stone; a kindred spirit will soon recognize it."
    },
    "ja": {
      "meaning": "この卦は未琢の玉の象なり。万事忍耐して待つべし、必ず知己を得る。",
      "allusion": "戦国時代の龐涓は才知ありながら狭量にて孫臏と智謀を競い馬陵道にて窮地に陥る。凡事機略を弄さず誠実に人に接すべし。",
      "explanation": "宝は未だ現れず、待つべき時あり。冷暖を嘆かず真情自ずと現れる。心正しく行い正しくして貴人自ずと来る。",
      "aspects": [
        {
          "label": "家宅",
          "result": "安泰"
        },
        {
          "label": "自身",
          "result": "分を守る"
        },
        {
          "label": "求財",
          "result": "遅し"
        },
        {
          "label": "縁談",
          "result": "縁あり"
        },
        {
          "label": "尋ね人",
          "result": "現れる"
        },
        {
          "label": "訴訟",
          "result": "和すべし"
        }
      ],
      "keywords": [
        "未琢の玉",
        "伯楽を待つ",
        "機略を離れ",
        "同道と相まみえる"
      ],
      "zenAdvice": "たとえ今完全に理解されなくとも、己の節操を曲げてはならぬ。真の価値は玉が石の中にあるが如く、間もなく知己現れるべし。"
    }
  },
  "11": {
    "en": {
      "meaning": "This hexagram symbolizes the moon illuminating the path; all matters receive the aid of noble people, achieving success through others.",
      "allusion": "Liu Zhiyuan joined the military and was recognized by Li Xiuying in a study hall. They pledged loyalty under the moonlight and later established the Han dynasty. This represents receiving help to achieve success.",
      "explanation": "Although there are minor obstacles, noble people provide clear guidance. By leveraging their support, one can rise effortlessly. Plans are hopeful, and all things manifest auspiciousness.",
      "aspects": [
        {
          "label": "Home",
          "result": "Auspicious"
        },
        {
          "label": "Self",
          "result": "Fulfilled"
        },
        {
          "label": "Wealth",
          "result": "Great Fortune"
        },
        {
          "label": "Transactions",
          "result": "Harmonious"
        },
        {
          "label": "Marriage",
          "result": "Successful"
        },
        {
          "label": "Reputation",
          "result": "High Achievement"
        }
      ],
      "keywords": [
        "Borrowing the moon's brilliance",
        "Noble patronage",
        "Rising effortlessly",
        "Forming a favorable bond"
      ],
      "zenAdvice": "Acting alone is inferior to skillfully utilizing external resources. Humbly accept the goodwill and support around you, and with the guidance of wise teachers and good friends, your future prospects will be boundless."
    },
    "ja": {
      "meaning": "この卦は月明かりが道を照らす様を示し、万事は貴人の助けを得て、人を通じて事を成すことを表す。",
      "allusion": "劉智遠が軍に加わり、書館で李秀英に認められ、月下で盟約を交わし、後に後漢王朝を築いた。援助を受けて成功することを意味する。",
      "explanation": "小さな障害があるものの、賢明な貴人が明かりを照らす。力を借りて事を運び、平穏に飛躍する。計画は有望であり、万事は吉祥を示す。",
      "aspects": [
        {
          "label": "家",
          "result": "吉慶"
        },
        {
          "label": "自身",
          "result": "遂意"
        },
        {
          "label": "財を求める",
          "result": "大発"
        },
        {
          "label": "取引",
          "result": "合好"
        },
        {
          "label": "婚姻",
          "result": "成就"
        },
        {
          "label": "功名",
          "result": "高中"
        }
      ],
      "keywords": [
        "月を生かして輝く",
        "貴人の引き立て",
        "平穏に飛躍",
        "良縁を結ぶ"
      ],
      "zenAdvice": "単独で戦うよりも、周りの善意と資源を賢く利用すべし。謙虚に受け入れ、賢師良友の光に導かれれば、前途は無限なり。"
    }
  },
  "12": {
    "en": {
      "meaning": "This hexagram symbolizes the transition from extreme adversity to prosperity; all matters turn from misfortune to good fortune, paving the way for great achievements.",
      "allusion": "The woodcutter Wu Ji accidentally killed someone and faced punishment, but met Jiang Ziya who took him as a disciple and taught him military strategy. He later became a renowned general and was granted a fief. This represents a rebirth from dire straits and meeting a great mentor.",
      "explanation": "The dark clouds have dispersed, and the red sun rises. Doubts are dispelled, and the future is bright. Seeking fame brings fame, and seeking profit brings profit.",
      "aspects": [
        {
          "label": "Home",
          "result": "Prospering"
        },
        {
          "label": "Self",
          "result": "Safe"
        },
        {
          "label": "Wealth",
          "result": "Favorable"
        },
        {
          "label": "Transactions",
          "result": "Smooth"
        },
        {
          "label": "Marriage",
          "result": "Great Fortune"
        },
        {
          "label": "Illness",
          "result": "Rapid Recovery"
        }
      ],
      "keywords": [
        "From extreme adversity to prosperity",
        "Turning peril into safety",
        "Meeting a great mentor",
        "Boundless future"
      ],
      "zenAdvice": "The most difficult valley has been left behind, and the gears of fate are turning towards the light. Release your inner anxieties and burdens, and boldly pursue your ambitions!"
    },
    "ja": {
      "meaning": "この卦は極度の逆境から繁栄への移行を示し、万事は凶から吉へと転じ、大いなる成功への道を開く。",
      "allusion": "樵夫の武吉が誤って人を殺めて罪を得たが、姜子牙に弟子入りし兵法を学び、後に大将に任じられ、侯に封じられた。絶望から救われ、名師に出会うことを意味する。",
      "explanation": "暗雲が晴れ、赤い太陽が昇る。疑いが解け、未来は輝かしい。名声を得れば名声を得、名利を求めれば利益を得る。",
      "aspects": [
        {
          "label": "家",
          "result": "転旺"
        },
        {
          "label": "自身",
          "result": "平安"
        },
        {
          "label": "財を求める",
          "result": "順意"
        },
        {
          "label": "取引",
          "result": "順調"
        },
        {
          "label": "婚姻",
          "result": "大吉"
        },
        {
          "label": "疾病",
          "result": "速癒"
        }
      ],
      "keywords": [
        "逆境から繁栄へ",
        "危機を転じて安全へ",
        "名師に出会う",
        "大いなる未来"
      ],
      "zenAdvice": "最も困難な谷間は過ぎ去り、運命の歯車は光明へ向かっている。心の不安と重荷を捨て、大胆に発揮せよ！"
    }
  },
  "13": {
    "en": {
      "meaning": "This hexagram symbolizes the image of unceasing self-improvement; all matters undergo trials and tribulations, leading to great renown.",
      "allusion": "Luo Tong inherited his title at a young age, but his family fell into decline due to unforeseen events. He worked hard to regain his position and eventually won merit by leading campaigns in the north. This represents youthful vigor and self-reliance.",
      "explanation": "Adversity tempers the person, as Heaven bestows great responsibilities. Striving upwards leads to fame and honor. The path is initially obstructed but ultimately prosperous.",
      "aspects": [
        {
          "label": "Home",
          "result": "Reviving"
        },
        {
          "label": "Self",
          "result": "Auspicious"
        },
        {
          "label": "Wealth",
          "result": "Favorable"
        },
        {
          "label": "Marriage",
          "result": "Compatible"
        },
        {
          "label": "Reputation",
          "result": "Prominent"
        },
        {
          "label": "Legal Matters",
          "result": "Victorious"
        }
      ],
      "keywords": [
        "Young and promising",
        "Unceasing self-improvement",
        "Breaking free and flourishing",
        "Renowned far and wide"
      ],
      "zenAdvice": "Regardless of one's origins or ups and downs, true strength lies in inner resilience. Courageously take on great responsibilities; your talents are sufficient to stand on your own."
    },
    "ja": {
      "meaning": "この卦は不断の自己向上の様を示し、万事は試練を経て、偉大な名声を得ることを表す。",
      "allusion": "羅通は若くして爵を継ぎ、後に家運が傾くも奮起して将印を得て北方を平定し功を立てた。若年の英発と自立自強を意味する。",
      "explanation": "困難が人を鍛えるのは、天が大任を下そうとしているからである。奮闘して向上すれば、名声と栄誉を得る。道は最初は阻まれるが、やがて亨通する。",
      "aspects": [
        {
          "label": "家",
          "result": "復盛"
        },
        {
          "label": "自身",
          "result": "吉"
        },
        {
          "label": "財を求める",
          "result": "遂意"
        },
        {
          "label": "婚姻",
          "result": "合"
        },
        {
          "label": "功名",
          "result": "顕"
        },
        {
          "label": "官訟",
          "result": "勝"
        }
      ],
      "keywords": [
        "若くして有為",
        "不断の努力",
        "破れて成る",
        "名声を馳せる"
      ],
      "zenAdvice": "出自や浮き沈みに関わらず、真の底力は内なる強さにある。大胆に重任を担え、あなたの才知は独り立ちするに十分である。"
    }
  },
  "14": {
    "en": {
      "meaning": "This hexagram symbolizes the image of a crane escaping from its cage; all matters break free from constraints, leading to freedom and ease.",
      "allusion": "Wu Zixu escaped through the昭关, his hair turning white overnight from worry. With the help of Dong Gao Gong, he escaped and later became the prime minister of the Wu state, avenging his father. This represents escaping danger.",
      "explanation": "Breaking free from constraints leads to a vast and open world. One can go wherever they wish, all things proceeding smoothly. Turning peril into safety, great achievements await.",
      "aspects": [
        {
          "label": "Home",
          "result": "Safe"
        },
        {
          "label": "Self",
          "result": "Out of Danger"
        },
        {
          "label": "Wealth",
          "result": "Prosperous"
        },
        {
          "label": "Transactions",
          "result": "Successful"
        },
        {
          "label": "Marriage",
          "result": "Compatible"
        },
        {
          "label": "Relocation",
          "result": "Auspicious"
        }
      ],
      "keywords": [
        "Escaping the cage",
        "Vast and open world",
        "Turning peril into safety",
        "Soaring high"
      ],
      "zenAdvice": "The long period of restraint and suppression is about to end, and the road ahead is wide and unobstructed. Maintain clarity of mind and freely pursue your ideals."
    },
    "ja": {
      "meaning": "この卦は鶴が籠から脱出する様を示し、万事は束縛を脱して自由と安楽を得ることを表す。",
      "allusion": "伍子胥が昭関を脱出して難を逃れ、東皋公の助けを得て脱出に成功し、後に呉国の宰相となり父の仇を討った。危険を脱することを意味する。",
      "explanation": "束縛を脱すれば、海闊天空となる。望むままに行き、いずれも思い通りに進む。危機を転じて安全となり、大いに活躍する。",
      "aspects": [
        {
          "label": "家",
          "result": "安"
        },
        {
          "label": "自身",
          "result": "脱危険"
        },
        {
          "label": "財を求める",
          "result": "通達"
        },
        {
          "label": "取引",
          "result": "成"
        },
        {
          "label": "婚姻",
          "result": "合"
        },
        {
          "label": "移住",
          "result": "吉"
        }
      ],
      "keywords": [
        "籠から脱出",
        "海闊天空",
        "危機を転じて安全",
        "大空に羽ばたく"
      ],
      "zenAdvice": "長期の束縛と抑圧が間もなく解かれ、前途は広々と阻むものがない。心の明晰さを保ち、自由奔放に理想に邁進せよ。"
    }
  },
  "15": {
    "en": {
      "meaning": "This hexagram symbolizes the image of steadfastness and contentment; all matters should be approached with a practical and grounded attitude, leading to lasting happiness.",
      "allusion": "Su Qin carried the seals of six states, achieving immense prestige but also deep enmity. The omen advises: do not be overly greedy for advancement, but rather, staying true to one's position brings the greatest peace.",
      "explanation": "Excessive greed leads to toil and hardship. Staying within one's bounds brings boundless blessings and joy. Be cautious and prudent to avoid calamity.",
      "aspects": [
        {
          "label": "Home",
          "result": "Safe"
        },
        {
          "label": "Self",
          "result": "Content"
        },
        {
          "label": "Wealth",
          "result": "Sufficient"
        },
        {
          "label": "Transactions",
          "result": "Cautious"
        },
        {
          "label": "Marriage",
          "result": "Stable"
        },
        {
          "label": "Illness",
          "result": "Recovery"
        }
      ],
      "keywords": [
        "Practical and grounded",
        "Avoiding greed",
        "Contentment and joy",
        "Staying true to oneself"
      ],
      "zenAdvice": "Reaching too high too quickly is the easiest way to drain energy and spirit. Focus on doing every small thing well, build a solid foundation, and stability is the greatest blessing."
    },
    "ja": {
      "meaning": "この卦は堅実さと満足の様を示し、万事は実直で地に足の着いた態度で臨むことで、永続する幸福に至ることを表す。",
      "allusion": "蘇秦は六国の相印を佩びて極度に栄達したが、同時に深い怨みも買った。占いの意は、進取に過度に貪らず、己の分を安んずることが最も平安を得ることを示す。",
      "explanation": "貪欲を求めれば、過度の労苦を招く。分を安んずれば、福楽は無限である。謹んで行動し、禍を避ける。",
      "aspects": [
        {
          "label": "家",
          "result": "安"
        },
        {
          "label": "自身",
          "result": "守分"
        },
        {
          "label": "財を求める",
          "result": "常足"
        },
        {
          "label": "取引",
          "result": "慎重"
        },
        {
          "label": "婚姻",
          "result": "平稳"
        },
        {
          "label": "疾病",
          "result": "调养"
        }
      ],
      "keywords": [
        "地に足の着いた",
        "貪欲を戒める",
        "満足して楽しむ",
        "正道を守る"
      ],
      "zenAdvice": "高望みしすぎるのは最も精力と気を損なう。目の前の小さなことをしっかりとやり、基盤を固めれば、安定こそ最大の福である。"
    }
  },
  "16": {
    "en": {
      "meaning": "This hexagram signifies the image of a withered tree in spring, where all matters burst with vitality and joy fills the home.",
      "allusion": "During the Ming dynasty, Ye Mengxiong quelled border unrest and was rewarded by Emperor Shenzong, who appointed him Minister of Works. This symbolizes the dispersal of worry and the revival of all affairs.",
      "explanation": "Release your burdens and find relief, as spring returns to the earth. Flowers bloom in prosperity, and all endeavors succeed. Seek official recognition and it shall be granted; seek profit and it shall be abundant.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Joyful and Auspicious"
        },
        {
          "label": "Self",
          "result": "Great Peace"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Great Prosperity"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious Union"
        },
        {
          "label": "Achievement & Fame",
          "result": "High Success"
        },
        {
          "label": "Health & Illness",
          "result": "Recovery"
        }
      ],
      "keywords": [
        "Spring returns to the earth",
        "Relief from worries",
        "Flowers blooming in abundance",
        "Infinite vitality"
      ],
      "zenAdvice": "Unfurl your brow! Winter has passed, and the warm spring of life is coaxing blossoms to bloom. Embrace the good fortune that comes your way with a joyful heart."
    },
    "ja": {
      "meaning": "此の卦は枯木春を迎ふるの象にして、万事生机に溢れ、家門に喜び満ちるの兆しなり。",
      "allusion": "明朝の叶梦熊辺乱を平定し、朝に参じて神宗皇帝の嘉賞を受け、兵部尚書に封ぜらる。愁雲消散し、万事が蘇生の象なり。",
      "explanation": "憂いを解き放ち、春の訪れを大地に迎ふ。花咲き栄え、万事亨通すべし。官に求めば官を得、利を求めば利を得べし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "慶事"
        },
        {
          "label": "自身",
          "result": "大安"
        },
        {
          "label": "求財",
          "result": "大発"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "功名",
          "result": "高中"
        },
        {
          "label": "病気",
          "result": "快癒"
        }
      ],
      "keywords": [
        "春の大地に戻る",
        "憂いを解く",
        "百花咲き誇る",
        "無限の生命力"
      ],
      "zenAdvice": "眉をひらきなさい！冬は過ぎ去り、生命の暖春が満開の花を咲かせる。向かってくる幸運を喜びの心で迎えよ。"
    }
  },
  "17": {
    "en": {
      "meaning": "This hexagram signifies the image of steadfastness and righteousness, where one must think independently and resist being misled.",
      "allusion": "During a drought while leading his troops, Cao Cao motivated his soldiers by speaking of a plum forest ahead. This symbolizes the importance of self-reliance and not being swayed by empty words.",
      "explanation": "Do not heed gossip or slander; fortify your inner defenses. Uphold integrity and remain steadfast, treading danger as if it were flat ground. Choose friends wisely and seek your own fortune.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Caution and Vigilance"
        },
        {
          "label": "Self",
          "result": "Prudence"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Maintain the Old"
        },
        {
          "label": "Marriage & Love",
          "result": "Beware of Suspicion"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation is Advisable"
        },
        {
          "label": "Health & Illness",
          "result": "Peace of Mind"
        }
      ],
      "keywords": [
        "Self-reliance",
        "Disregard slander",
        "Integrity and steadfastness",
        "Calm and steady"
      ],
      "zenAdvice": "The clamor of external voices is like wind passing through the ears. Hold fast to your conscience and your pace. As long as your stance is upright, no storm can shake you."
    },
    "ja": {
      "meaning": "此の卦は定心正しきを守るの象にして、万事独立に考え、惑わされずばなり。",
      "allusion": "曹操軍を行くこと旱にあい、「前に梅林あり」と激励して士卒の渇きを止めしむ。万事は徒らに虚言を聴くべからず、自らの定力を保つべきの象なり。",
      "explanation": "是非を聴かず、心の防を固くす。正道を踏み、危難を平らぐがごとく進むべし。慎み深く交わり、自ら福を求めるべし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "防閑"
        },
        {
          "label": "自身",
          "result": "謹慎"
        },
        {
          "label": "求財",
          "result": "旧守"
        },
        {
          "label": "縁談",
          "result": "疑惑を慎む"
        },
        {
          "label": "訴訟",
          "result": "和するをよしとす"
        },
        {
          "label": "病気",
          "result": "安心"
        }
      ],
      "keywords": [
        "自らを保つ力",
        "讒言を聴かず",
        "正道を行く",
        "風波静かなり"
      ],
      "zenAdvice": "外の議論は風の通り過ぎるがごとくす。己の良知と歩みを保ち、身正しければいかなる風波も恐るるに足らず。"
    }
  },
  "18": {
    "en": {
      "meaning": "This hexagram signifies the harmonious interplay of the sun and moon, indicating that all endeavors, when conducted in accordance with the natural order, will yield favorable outcomes.",
      "allusion": "Cao Guojiu, the brother of Empress Cao of Emperor Renzong of the Song Dynasty, renounced worldly riches and pursued spiritual enlightenment, ultimately attaining immortality as one of the Eight Immortals.",
      "explanation": "The sun and moon cycle endlessly, reflecting the manifest justice of the universe. All industries flourish, and all affairs proceed smoothly. With a righteous heart and profound virtue, one's aspirations will be fulfilled.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Auspicious and Joyful"
        },
        {
          "label": "Self",
          "result": "Fulfillment"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Great Prosperity"
        },
        {
          "label": "Business & Trade",
          "result": "Successful Completion"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious and Beautiful"
        },
        {
          "label": "Achievement & Reputation",
          "result": "Satisfactory"
        }
      ],
      "keywords": [
        "Align with the natural order",
        "Harmony of the sun and moon",
        "Each following their path",
        "All aspirations fulfilled"
      ],
      "zenAdvice": "The rising moon and setting sun embody the rhythm of the cosmos. By aligning with the natural flow of events and relinquishing attachment, your life will naturally unfold with ease."
    },
    "ja": {
      "meaning": "此の卦は日月相和すの象にして、万事天の理に従うときは、往くところ皆利ありとの意なり。",
      "allusion": "曹国舅は宋の仁宗の皇后の弟にして、世の栄華を捨てて出家し、八仙の一人となりし故事に基づく。",
      "explanation": "日月循環し、天道の明らかなるは、万業興隆し、万事順調なるを象る。心正しく徳厚ければ、志願皆叶うべし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "慶事あり"
        },
        {
          "label": "自身",
          "result": "遂心に叶う"
        },
        {
          "label": "求財",
          "result": "大いに亨る"
        },
        {
          "label": "取引",
          "result": "成る"
        },
        {
          "label": "縁談",
          "result": "円満"
        },
        {
          "label": "功名",
          "result": "満足"
        }
      ],
      "keywords": [
        "天の理に従う",
        "日月相和す",
        "各々その道をゆく",
        "万事叶う"
      ],
      "zenAdvice": "日没月昇とは宇宙自然の理なり。物事の成り行きに従い、執着を離れよ。されば生活ことごとく順調ならん。"
    }
  },
  "19": {
    "en": {
      "meaning": "This hexagram represents the image of seeking guidance on treacherous waters, suggesting that one must rely on the wisdom of the enlightened to avoid difficulties.",
      "allusion": "Guan Zhong, despite his hardships, was recognized and recommended to Duke Huan of Qi by Bao Shuya, leading to the prosperity of the Qi state. Their profound friendship is celebrated as a timeless tale.",
      "explanation": "Amidst the storms, do not act rashly; seek counsel from the wise. With proper guidance, danger can be averted. By remaining humble and receptive, one can preserve their well-being.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Pray for Blessings"
        },
        {
          "label": "Self",
          "result": "Beware of Danger"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Difficult"
        },
        {
          "label": "Marriage & Love",
          "result": "Requires a Matchmaker"
        },
        {
          "label": "Missing Person",
          "result": "Rely on Others"
        },
        {
          "label": "Legal Affairs",
          "result": "Seek Reconciliation"
        }
      ],
      "keywords": [
        "Turning ill fortune into good",
        "Encountering a noble patron",
        "Humility and receptiveness",
        "Profound friendship"
      ],
      "zenAdvice": "In the midst of turbulent waters, do not attempt to navigate alone. Listen carefully to the advice of elders and experts; the guidance of a noble patron can help you avoid major pitfalls."
    },
    "ja": {
      "meaning": "此の卦は危難の海に師を求むる象にして、万事賢人の導きを得ざれば波瀾あるべしとの意なり。",
      "allusion": "管仲は困窮の時、鮑叔牙の推挙により斉の桓公に仕え、斉国の覇業を成したる故事に基づく。管鮑の交わりは千古の美談なり。",
      "explanation": "風波急なりといえども、賢者に教えを乞うべし。人の導きによりて危難を免れ、虚心に諫めを受くれば保全すべし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "祈福"
        },
        {
          "label": "自身",
          "result": "危険を慎む"
        },
        {
          "label": "求財",
          "result": "難し"
        },
        {
          "label": "縁談",
          "result": "仲人を要す"
        },
        {
          "label": "尋ね人",
          "result": "人に頼る"
        },
        {
          "label": "訴訟",
          "result": "和解を求める"
        }
      ],
      "keywords": [
        "凶を吉に転ず",
        "賢者の導きを得る",
        "虚心に受け入れる",
        "管鮑の交わり"
      ],
      "zenAdvice": "激流の難所にあっては独力で進むなかれ。長老や専門家の諫めをよく聞くべし。賢者の導きは大きな落とし穴を避ける助けとなる。"
    }
  },
  "20": {
    "en": {
      "meaning": "This divination embodies the image of spring rain giving way to clear skies, signifying that all matters will gradually move from adversity to prosperity, entering a realm of light.",
      "allusion": "Jiang Ziya concealed himself by the Panxi River, casting his net to fish. After enduring storms and hardships, the skies finally cleared, and he encountered King Wen, who honored him as the state preceptor. This symbolizes the transition from bitterness to sweetness.",
      "explanation": "After a prolonged rain, the skies clear, and yin disperses while yang arises. Transforming the old into the new, the future holds promise. With light on the horizon, all endeavors will proceed smoothly.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Turning to peace"
        },
        {
          "label": "Self",
          "result": "Gradual auspiciousness"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Gradual acquisition"
        },
        {
          "label": "Business & Trade",
          "result": "Smooth progress"
        },
        {
          "label": "Marriage & Love",
          "result": "Achievement"
        },
        {
          "label": "Health & Illness",
          "result": "Recovery"
        }
      ],
      "keywords": [
        "Rain clearing to reveal the sun",
        "Clouds parting to show the sky",
        "Renewal of old endeavors",
        "Gradual improvement"
      ],
      "zenAdvice": "The persistent gloom is dissipating, and brilliant sunlight now graces your shoulders. Bid farewell to past troubles and embrace the birth of a new horizon."
    },
    "ja": {
      "meaning": "此の卦は春雨の晴れ行く象にして、万事は否極まりて泰来し、漸く光明に入ることを表す。",
      "allusion": "太公望が磻溪に隠れ網を投げて魚を捕らえ、風雨を経ながらも晴れ渡り、文王に遇い国師と仰がれたるを喻え、苦尽きて甘来するを意味する。",
      "explanation": "久しく降りし雨止みて晴れ、陰去りて陽生ず。旧を改めて新しきに従い、前途まさに望みあり。光明まさに望まんとし、万事まさに順調に運ぶ。",
      "aspects": [
        {
          "label": "家宅",
          "result": "安に転ず"
        },
        {
          "label": "自身",
          "result": "漸く吉"
        },
        {
          "label": "求財",
          "result": "漸く有り"
        },
        {
          "label": "取引",
          "result": "順調"
        },
        {
          "label": "縁談",
          "result": "成就"
        },
        {
          "label": "病気",
          "result": "全快"
        }
      ],
      "keywords": [
        "雨晴れて天開く",
        "雲去りて日輝く",
        "旧業新たに改まる",
        "漸く佳境に入る"
      ],
      "zenAdvice": "絶え間なき暗雲は去り、燦然たる陽光が今まさに汝の肩を照らす。過去の煩いを捨てて、新しき局面の到来を迎えよ。"
    }
  },
  "21": {
    "en": {
      "meaning": "This hexagram signifies a harmonious union of Yin and Yang, indicating that all matters are divinely ordained for great fortune and prosperity.",
      "allusion": "Emperor Ruizong of Tang, Li Dan, was exiled and later formed a fortuitous marriage with Hu Fengjiao, eventually reclaiming his throne. This symbolizes a divinely bestowed union leading to both wealth and honor.",
      "explanation": "A union blessed by heaven brings immense fortune. Marriages are blissful, and wealth flows abundantly. The family prospers, and all forms of blessings converge.",
      "aspects": [
        {
          "label": "Home",
          "result": "Auspicious"
        },
        {
          "label": "Self",
          "result": "Great Peace"
        },
        {
          "label": "Wealth Seeking",
          "result": "Fulfilled"
        },
        {
          "label": "Transactions",
          "result": "Smooth"
        },
        {
          "label": "Marriage",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy",
          "result": "Safe"
        },
        {
          "label": "Seeking People",
          "result": "Found"
        },
        {
          "label": "Lawsuits",
          "result": "Victorious"
        },
        {
          "label": "Illness",
          "result": "Seek Medical Peace"
        }
      ],
      "keywords": [
        "Heaven-made union",
        "Harmonious music of the qin and se",
        "Wealth and honor passed down through generations",
        "All matters auspicious"
      ],
      "zenAdvice": "Beautiful connections are the work of nature and the universe. Treat others with sincerity and kindness, and life will be filled with harmony and abundance."
    },
    "ja": {
      "meaning": "この卦は陰と陽の調和の象徴であり、万事が天の配剤により大吉大利となることを示します。",
      "allusion": "唐の睿宗李旦は民間を流浪し胡鳳嬌と縁を得て後に帝位を回復した。これは天が授けた良縁が富と名誉をもたらすことを意味します。",
      "explanation": "天の配剤による結合は、計り知れない幸運をもたらします。婚姻は円満であり、富は豊かに流れ込みます。家門は栄え、すべての祝福が集まります。",
      "aspects": [
        {
          "label": "家",
          "result": "吉慶"
        },
        {
          "label": "自身",
          "result": "大安"
        },
        {
          "label": "財を求める",
          "result": "遂心"
        },
        {
          "label": "取引",
          "result": "順調"
        },
        {
          "label": "婚姻",
          "result": "合好"
        },
        {
          "label": "妊娠",
          "result": "平安"
        },
        {
          "label": "人を探す",
          "result": "見"
        },
        {
          "label": "訴訟",
          "result": "得直"
        },
        {
          "label": "病気",
          "result": "求医安"
        }
      ],
      "keywords": [
        "天の配剤",
        "琴瑟和鳴",
        "富貴伝家",
        "万事吉祥"
      ],
      "zenAdvice": "美しい縁は天地自然の造化によるもの。真心と善意をもって接すれば、生活は調和と豊かさに満ち溢れるでしょう。"
    }
  },
  "22": {
    "en": {
      "meaning": "This hexagram signifies steadfast devotion and adherence to the righteous path, with divine protection and blessings.",
      "allusion": "The Six Ji's report to heaven for blessings, enduring slander yet remaining unwavering, ultimately receiving immense blessings. This symbolizes the power of sincere faith.",
      "explanation": "Ignore idle talk and adhere to the righteous path. With firm determination, boundless blessings will follow. Plans will succeed, and disasters will be averted.",
      "aspects": [
        {
          "label": "Home",
          "result": "Smooth"
        },
        {
          "label": "Self",
          "result": "Content"
        },
        {
          "label": "Wealth Seeking",
          "result": "Await Opportunity"
        },
        {
          "label": "Transactions",
          "result": "Smooth"
        },
        {
          "label": "Marriage",
          "result": "Slow"
        },
        {
          "label": "Pregnancy",
          "result": "Safe"
        },
        {
          "label": "Seeking People",
          "result": "Found"
        },
        {
          "label": "Lawsuits",
          "result": "Victorious"
        },
        {
          "label": "Illness",
          "result": "Seek Medical Peace"
        }
      ],
      "keywords": [
        "Sincere devotion to the Way",
        "Avoiding trouble",
        "Divine protection",
        "Blessings come naturally"
      ],
      "zenAdvice": "External disturbances are but fleeting clouds. Focus within, maintain inner peace and certainty, and heaven will naturally favor the virtuous."
    },
    "ja": {
      "meaning": "この卦は真心を持って正道を守り続けることを示し、神の加護と祝福があることを象徴します。",
      "allusion": "六吉が天に祈りを捧げ、誹謗中傷を受けながらも揺るがず、ついに大いなる福を受けた。これは真心があれば石をも貫くことを意味します。",
      "explanation": "無用の噂は無視し、正道を歩むべし。堅い決意があれば、無限の福が訪れる。願い事は叶い、災いは消え去る。",
      "aspects": [
        {
          "label": "家",
          "result": "平順"
        },
        {
          "label": "自身",
          "result": "守分"
        },
        {
          "label": "財を求める",
          "result": "待時"
        },
        {
          "label": "取引",
          "result": "順調"
        },
        {
          "label": "婚姻",
          "result": "宜緩"
        },
        {
          "label": "妊娠",
          "result": "平安"
        },
        {
          "label": "人を探す",
          "result": "見"
        },
        {
          "label": "訴訟",
          "result": "得直"
        },
        {
          "label": "病気",
          "result": "求医安"
        }
      ],
      "keywords": [
        "虔誠守道",
        "不惹是非",
        "神明暗佑",
        "福沢自来"
      ],
      "zenAdvice": "外界の騒動は過ぎゆく雲のようなもの。心を整え、内なる静けさと確固たる信念を保ち続ければ、神仏の加護が得られるでしょう。"
    }
  },
  "23": {
    "en": {
      "meaning": "This hexagram signifies leveraging through external support, with all matters benefiting from noble assistance and overcoming adversity.",
      "allusion": "Sun Ce of the Three Kingdoms borrowed troops from Yuan Shu to pacify the Jiangdong region, achieving great fame and being enfeoffed as the Marquis of Wu. This symbolizes the power of leveraging external resources for success.",
      "explanation": "Though there are obstacles, with help, success is achieved. With favorable winds, one can ascend to great heights. Seeking fame and fortune will be fruitful.",
      "aspects": [
        {
          "label": "Home",
          "result": "Smooth"
        },
        {
          "label": "Self",
          "result": "Content"
        },
        {
          "label": "Wealth Seeking",
          "result": "Await Opportunity"
        },
        {
          "label": "Transactions",
          "result": "Smooth"
        },
        {
          "label": "Marriage",
          "result": "Slow"
        },
        {
          "label": "Pregnancy",
          "result": "Safe"
        },
        {
          "label": "Seeking People",
          "result": "Found"
        },
        {
          "label": "Lawsuits",
          "result": "Victorious"
        },
        {
          "label": "Illness",
          "result": "Seek Medical Peace"
        }
      ],
      "keywords": [
        "Leveraging momentum",
        "Meeting favorable opportunities",
        "Expanding territory",
        "Rising smoothly"
      ],
      "zenAdvice": "Learn to integrate positive resources around you and strategize for development from a higher platform. Leverage strengths to achieve twice the result with half the effort."
    },
    "ja": {
      "meaning": "この卦は他者の力を借りて前進することを示し、すべての事柄が貴人の援助を受け、困難を乗り越えることを象徴します。",
      "allusion": "三国志の孫策は袁術の兵を借りて江東を平定し、江南で名を馳せ、呉侯に封じられた。これは他力を借りて大業を成すことを意味します。",
      "explanation": "障害はあるが、援助を受ければ通じる。追い風が吹けば、青雲の上まで上り詰める。名声を得る望みがあり、利益を得ることも可能。",
      "aspects": [
        {
          "label": "家",
          "result": "平順"
        },
        {
          "label": "自身",
          "result": "守分"
        },
        {
          "label": "財を求める",
          "result": "待時"
        },
        {
          "label": "取引",
          "result": "順調"
        },
        {
          "label": "婚姻",
          "result": "宜緩"
        },
        {
          "label": "妊娠",
          "result": "平安"
        },
        {
          "label": "人を探す",
          "result": "見"
        },
        {
          "label": "訴訟",
          "result": "得直"
        },
        {
          "label": "病気",
          "result": "求医安"
        }
      ],
      "keywords": [
        "借勢而発",
        "得遇良機",
        "開疆拓土",
        "平步青云"
      ],
      "zenAdvice": "周りの良質な資源を統合し、より高い視点から発展を計画することを学びましょう。力を借りて事を成せば、効果は倍になり、努力は半分で済みます。"
    }
  },
  "24": {
    "en": {
      "meaning": "This hexagram signifies the importance of stillness and restraint, advising against action and encouraging contentment with one's current state.",
      "allusion": "A hasty marriage during the Dragon Boat Festival led to unforeseen troubles and conflicts. This symbolizes the pitfalls of rash actions.",
      "explanation": "Rash actions lead to loss, while stillness brings peace. Abandon excessive desires and focus on self-cultivation. Contentment with one's lot avoids calamity.",
      "aspects": [
        {
          "label": "Home",
          "result": "Caution"
        },
        {
          "label": "Self",
          "result": "Content"
        },
        {
          "label": "Wealth Seeking",
          "result": "Await Opportunity"
        },
        {
          "label": "Transactions",
          "result": "Smooth"
        },
        {
          "label": "Marriage",
          "result": "Slow"
        },
        {
          "label": "Pregnancy",
          "result": "Safe"
        },
        {
          "label": "Seeking People",
          "result": "Found"
        },
        {
          "label": "Lawsuits",
          "result": "Harmony"
        },
        {
          "label": "Illness",
          "result": "Seek Medical Peace"
        }
      ],
      "keywords": [
        "Maintain stillness and contentment",
        "Avoid greed and excess",
        "Retreat for peace",
        "Wait for a turning point"
      ],
      "zenAdvice": "Now is not the time for major changes or aggressive investments. Step back and embrace the tranquility of the present moment; it is the wisest course of action."
    },
    "ja": {
      "meaning": "この卦は静止と自重の重要性を示し、行動を控えて現状に満足することを奨励します。",
      "allusion": "端午の節句に急いで結婚した結果、思いがけないトラブルと衝突を招いた。これは軽率の行動が災いをもたらすことを意味します。",
      "explanation": "軽率な行動は損失を招き、静止は平安をもたらす。過度の欲望を捨て、自己修養に努める。現状に満足すれば、災いを避けることができる。",
      "aspects": [
        {
          "label": "家",
          "result": "宜防"
        },
        {
          "label": "自身",
          "result": "守分"
        },
        {
          "label": "財を求める",
          "result": "待時"
        },
        {
          "label": "取引",
          "result": "順調"
        },
        {
          "label": "婚姻",
          "result": "宜緩"
        },
        {
          "label": "妊娠",
          "result": "平安"
        },
        {
          "label": "人を探す",
          "result": "見"
        },
        {
          "label": "訴訟",
          "result": "宜和"
        },
        {
          "label": "病気",
          "result": "求医安"
        }
      ],
      "keywords": [
        "宜静守分",
        "莫起贪妄",
        "退步自安",
        "静待转机"
      ],
      "zenAdvice": "今は大きな変化や強気の投資を行う時期ではありません。一歩引いて、現状の安定を保つことが最も賢明です。"
    }
  },
  "25": {
    "en": {
      "meaning": "This hexagram signifies gradual progress after enduring hardships, with a transition to a more favorable situation.",
      "allusion": "Yao Neng of the Song Dynasty achieved great military success despite setbacks, eventually receiving high honors from the emperor. This symbolizes overcoming adversity and achieving renewed prosperity.",
      "explanation": "Troubles have dissipated, and the spring breeze returns. Re-strategize and welcome the arrival of joy. Plans will succeed, and all matters will flourish.",
      "aspects": [
        {
          "label": "Home",
          "result": "Smooth"
        },
        {
          "label": "Self",
          "result": "Content"
        },
        {
          "label": "Wealth Seeking",
          "result": "Await Opportunity"
        },
        {
          "label": "Transactions",
          "result": "Smooth"
        },
        {
          "label": "Marriage",
          "result": "Slow"
        },
        {
          "label": "Pregnancy",
          "result": "Safe"
        },
        {
          "label": "Seeking People",
          "result": "Found"
        },
        {
          "label": "Lawsuits",
          "result": "Victorious"
        },
        {
          "label": "Illness",
          "result": "Seek Medical Peace"
        }
      ],
      "keywords": [
        "Spring breeze brings warmth",
        "Revitalizing the family business",
        "Joy arrives",
        "Creating new brilliance"
      ],
      "zenAdvice": "The most difficult trials are now behind you, and new opportunities are coming with the spring breeze. Take heart and bravely embrace the next phase of growth."
    },
    "ja": {
      "meaning": "この卦は苦難に耐えた後の漸進的な進歩を示し、より好転した状況への移行を象徴します。",
      "allusion": "宋の姚能は困難にも関わらず戦功を立て、皇帝から高位の爵位を授かった。これは逆境を乗り越え、再興することを意味します。",
      "explanation": "憂いは消え、春風が再び吹く。再び旗揚げし、喜びを迎える。計画は叶い、万事が通じる。",
      "aspects": [
        {
          "label": "家",
          "result": "平順"
        },
        {
          "label": "自身",
          "result": "守分"
        },
        {
          "label": "財を求める",
          "result": "待時"
        },
        {
          "label": "取引",
          "result": "順調"
        },
        {
          "label": "婚姻",
          "result": "宜緩"
        },
        {
          "label": "妊娠",
          "result": "平安"
        },
        {
          "label": "人を探す",
          "result": "見"
        },
        {
          "label": "訴訟",
          "result": "得直"
        },
        {
          "label": "病気",
          "result": "求医安"
        }
      ],
      "keywords": [
        "春風送暖",
        "重振家業",
        "喜気臨門",
        "再創輝煌"
      ],
      "zenAdvice": "最も困難な試練は既に過ぎ去り、新たな機会が春風に乗ってやって来ています。元気を出して、新たな上昇期を迎え入れましょう。"
    }
  },
  "26": {
    "en": {
      "meaning": "This hexagram symbolizes the calming of storms, indicating that difficulties will eventually give way to ease. Remain patient and await tranquility.",
      "allusion": "Zhong Kui, despite his brilliance, was slandered by treacherous officials but later became a powerful exorcism deity, vanquishing demons. This teaches that turmoil precedes honor.",
      "explanation": "Amidst the tossing waves, do not lose heart. When the winds settle and the waters calm, you will find peace and enjoyment. Wait for the opportune moment, and great achievements will follow.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Smooth"
        },
        {
          "label": "Self",
          "result": "Contentment"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Await the Time"
        },
        {
          "label": "Business & Trade",
          "result": "Prosperous"
        },
        {
          "label": "Marriage & Love",
          "result": "Proceed Slowly"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Traveler",
          "result": "Will Appear"
        },
        {
          "label": "Legal Affairs",
          "result": "Victory"
        },
        {
          "label": "Health & Illness",
          "result": "Seek Medical Help"
        }
      ],
      "keywords": [
        "Weathering Storms",
        "Await Calm Waters",
        "Exorcism of Evil",
        "Secure Victory"
      ],
      "zenAdvice": "The turbulence in life is a whetstone for your resilience. As long as your inner compass remains steady, you will find safe harbor when the storm subsides."
    },
    "ja": {
      "meaning": "この卦は風波の静まる象なり。万事先難後易、穏やかに待つべし。",
      "allusion": "鐘馗は才学ありながら讒言にて貶めらるも後に伏魔神将として妖魔を討ち平ぐ。先ず動乱ありて後に尊栄を得る。",
      "explanation": "風波に翻弄され心を乱さず。風定まり波穏やかにして安楽に坐す。時節を待ちて大成すべし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "平穏"
        },
        {
          "label": "自身",
          "result": "分を守る"
        },
        {
          "label": "求財",
          "result": "時を待つ"
        },
        {
          "label": "取引",
          "result": "順調"
        },
        {
          "label": "縁談",
          "result": "緩やかに"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "待ち人",
          "result": "現れる"
        },
        {
          "label": "訴訟",
          "result": "直る"
        },
        {
          "label": "病気",
          "result": "医を求む"
        }
      ],
      "keywords": [
        "風波を経る",
        "波穏やかに",
        "伏魔顕現",
        "勝機を握る"
      ],
      "zenAdvice": "人生における動揺は定力を試す砥石なり。心の中の針路を変えずして、風波静まるとき安らかに岸に着くべし。"
    }
  },
  "27": {
    "en": {
      "meaning": "This hexagram signifies the blessing of Heaven, suggesting that one should fulfill their duties while trusting in destiny, for a future filled with promise.",
      "allusion": "Emperor Ruizong of Tang ascended the throne thrice, enduring courtly perils before firmly stabilizing the nation. This symbolizes that those with destiny and virtue will ultimately achieve greatness.",
      "explanation": "Plans are well-crafted, and Heaven's will supports them. Acts of kindness and virtue will lead to future prosperity. Ventures will yield benefits, and both fame and fortune will be secured.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Harmonious"
        },
        {
          "label": "Self",
          "result": "Content and restrained"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Await the right time"
        },
        {
          "label": "Business & Trade",
          "result": "Prosperous"
        },
        {
          "label": "Marriage & Love",
          "result": "Proceed with caution"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Will be found"
        },
        {
          "label": "Legal Affairs",
          "result": "Victorious"
        },
        {
          "label": "Health & Illness",
          "result": "Seek medical care for peace"
        }
      ],
      "keywords": [
        "Heaven's protection",
        "Strategic mastery",
        "Rising to prominence",
        "Boundless blessings"
      ],
      "zenAdvice": "Do your utmost in all endeavors and leave the outcome to Heaven and Earth. Uphold righteousness and justice, for the prosperity that is yours can never be taken away."
    },
    "ja": {
      "meaning": "此の卦は天命の加護を示す象なり。万事人事を尽くし天命に任せば前途洋々たり。",
      "allusion": "唐の睿宗李旦、三度即位し宮廷の艱難辛苦を経て社稷を安定せり。天命と徳才ある者ついに大成するを喻ふ。",
      "explanation": "計略まさに妥当にして天意相成る。善行を積み徳を修めれば必ず顕達すべし。事を謀れば利あり、名利自ずから全うすべし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "平穏"
        },
        {
          "label": "自身",
          "result": "分を守りて安んず"
        },
        {
          "label": "求財",
          "result": "時を待つべし"
        },
        {
          "label": "取引",
          "result": "順調"
        },
        {
          "label": "縁談",
          "result": "緩やかにすべし"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "出会ふ"
        },
        {
          "label": "訴訟",
          "result": "正義を得"
        },
        {
          "label": "病気",
          "result": "医を求むれば安し"
        }
      ],
      "keywords": [
        "天命の加護",
        "運を掌る",
        "躍進",
        "無限の福"
      ],
      "zenAdvice": "為すべきことを尽くし、結果を天地に委ねよ。正しき道と公義を貫けば、おのずから繁栄は訪れる。"
    }
  },
  "28": {
    "en": {
      "meaning": "This hexagram symbolizes the waxing and waning of the moon, suggesting that patience and endurance will lead to eventual fulfillment and renewal.",
      "allusion": "Li Dan secluded himself to cultivate his mind and encountered an immortal who imparted the secrets of the Golden Elixir, achieving enlightenment. This represents temporary obscurity ultimately giving way to great completion.",
      "explanation": "The moon has its phases of darkness and light, and events have their ups and downs. Patience will be rewarded, for the full moon will surely come. Lost items will be recovered, and good fortune will return.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Auspicious"
        },
        {
          "label": "Self",
          "result": "Great peace"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Fulfilled desires"
        },
        {
          "label": "Business & Trade",
          "result": "Prosperous"
        },
        {
          "label": "Marriage & Love",
          "result": "Reconciliation"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Will be found"
        },
        {
          "label": "Legal Affairs",
          "result": "Victorious"
        },
        {
          "label": "Health & Illness",
          "result": "Seek medical care for peace"
        }
      ],
      "keywords": [
        "Patience for renewal",
        "Clouds parting for the moon",
        "Encountering immortals",
        "Ultimate fulfillment"
      ],
      "zenAdvice": "The temporary incompleteness of life is merely the prelude to fulfillment. Do not be disheartened by passing clouds obscuring the moon; maintain patience, and the clear moonlight will inevitably illuminate the earth."
    },
    "ja": {
      "meaning": "此の卦は月の満ち欠けの象なり。万事忍耐して時を待てばやがて円満に至らん。",
      "allusion": "李丹隠棲して心を修め仙人に出会い金丹の要訣を授かり大成せり。一時の遮蔽もついに円満大成するを喻ふ。",
      "explanation": "月には陰晴あり、事には起伏あり。忍耐して待ちてはやがて満月来たるべし。失せ物は求め出でよ、好事再び円満ならん。",
      "aspects": [
        {
          "label": "家宅",
          "result": "吉慶"
        },
        {
          "label": "自身",
          "result": "大安"
        },
        {
          "label": "求財",
          "result": "遂心"
        },
        {
          "label": "取引",
          "result": "順調"
        },
        {
          "label": "縁談",
          "result": "和解"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "待ち人",
          "result": "出会ふ"
        },
        {
          "label": "訴訟",
          "result": "正義を得"
        },
        {
          "label": "病気",
          "result": "医を求むれば安し"
        }
      ],
      "keywords": [
        "忍耐",
        "雲間よりの月",
        "仙縁",
        "円満"
      ],
      "zenAdvice": "人生の一時の欠如は円満の前奏曲に過ぎぬ。一時の烏雲に惑わされず、忍耐を保ちて清朗の月光は必ず大地を照らすべし。"
    }
  },
  "29": {
    "en": {
      "meaning": "This lot embodies the image of a sword being unsheathed, signifying the emergence of talent and the dawn of renown.",
      "allusion": "The legendary warrior Zhao Yun of the Three Kingdoms rescued his young lord, A-Dou, at Changban Slope, charging fearlessly through Cao Cao's million-strong army seven times, showcasing unparalleled valor and decisiveness.",
      "explanation": "Your talents are on full display, and your reputation will soon spread far and wide. Opportunities for advancement and prosperity abound. Seek office, and it shall be granted; pursue wealth, and it shall be attained.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Auspicious and Joyful"
        },
        {
          "label": "Self",
          "result": "Great Peace"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Fulfilled Desires"
        },
        {
          "label": "Business & Trade",
          "result": "Smooth"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Will Be Seen"
        },
        {
          "label": "Legal Affairs",
          "result": "Victory"
        },
        {
          "label": "Health & Illness",
          "result": "Seek Medical Care for Peace"
        }
      ],
      "keywords": [
        "Sword Unsheathed",
        "Lone Rider's Rescue",
        "Boundless Prospects",
        "Renown Across the Land"
      ],
      "zenAdvice": "Your abilities and energy have reached their peak, and now is the time to reveal your true strength! Step forward with fearless courage and carve out your own domain."
    },
    "ja": {
      "meaning": "此の卦は宝剣出鞘の象にして、万事鋭気を発し、天下にその名を知らしむるの象なり。",
      "allusion": "三国時代の趙雲、長坂坡にて幼き主君阿斗を単騎にて救い、百万の曹操軍中七進七出、勇猛無双の誉れ高し。",
      "explanation": "その才気鋭く現れ、名を天下に轟かす。昇進と繁栄の機会多く、官に求めば官を得、利に求めば利を得る。",
      "aspects": [
        {
          "label": "家宅",
          "result": "慶事あり"
        },
        {
          "label": "自身",
          "result": "大いに安し"
        },
        {
          "label": "求財",
          "result": "思いのまま"
        },
        {
          "label": "取引",
          "result": "順調"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "現れる"
        },
        {
          "label": "訴訟",
          "result": "勝訴"
        },
        {
          "label": "病気",
          "result": "医を求むれば安し"
        }
      ],
      "keywords": [
        "宝剣出鞘",
        "単騎救主",
        "前途洋々",
        "名声を轟かす"
      ],
      "zenAdvice": "汝の才幹と力はすでに満ち足り、剣を抜くべき時なり。畏れを知らずに進み、己が領地を開拓すべし。"
    }
  },
  "30": {
    "en": {
      "meaning": "This lot signifies the embodiment of benevolence and righteousness, suggesting that one should let things unfold naturally and embrace peace of mind for blessings to follow.",
      "allusion": "An immortal played chess on Qipan Mountain, contemplating the Dao and observing the world as a game of strategy. Those who walk the path of benevolence ultimately triumph.",
      "explanation": "There is no need to seek externally; blessings reside in righteous actions. Establish yourself in benevolence and righteousness, and all affairs will be free of worry. Contentment brings joy, and Heaven rewards the virtuous.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Smooth and Peaceful"
        },
        {
          "label": "Self",
          "result": "Content and Humble"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Await the Right Time"
        },
        {
          "label": "Business & Trade",
          "result": "Smooth"
        },
        {
          "label": "Marriage & Love",
          "result": "Proceed Gradually"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Will Be Seen"
        },
        {
          "label": "Legal Affairs",
          "result": "Victory"
        },
        {
          "label": "Health & Illness",
          "result": "Seek Medical Care for Peace"
        }
      ],
      "keywords": [
        "Benevolence as a Vessel",
        "Natural Flow",
        "Avoid Striving in Vain",
        "Contentment Brings Blessings"
      ],
      "zenAdvice": "Life is like a chess game, ever-changing. The key is to maintain inner kindness and integrity. Do not exhaust yourself in calculations; peace of mind is the greatest blessing."
    },
    "ja": {
      "meaning": "此の卦は仁義を体現する象にして、万事自然の成り行きに任せ、心広くして福を招くの象なり。",
      "allusion": "仙人が棋盤山にて碁を打ち、道を味わい、世を棋局のごとく観る。仁道を歩む者は必ず勝つ。",
      "explanation": "外に求めず、福は仁義の内にあり。仁義を以て身を処し、万事憂いなし。足るを知る者は常に楽しみ、天は善人に報いる。",
      "aspects": [
        {
          "label": "家宅",
          "result": "平穏"
        },
        {
          "label": "自身",
          "result": "分を保つ"
        },
        {
          "label": "求財",
          "result": "時を待つ"
        },
        {
          "label": "取引",
          "result": "順調"
        },
        {
          "label": "縁談",
          "result": "いずれ吉"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "待ち人",
          "result": "現れる"
        },
        {
          "label": "訴訟",
          "result": "勝訴"
        },
        {
          "label": "病気",
          "result": "医を求むれば安し"
        }
      ],
      "keywords": [
        "仁義の舟",
        "自然の成り行き",
        "むやみな求めを慎む",
        "足るを知る"
      ],
      "zenAdvice": "世を棋局のごとく観ずるべし。最も肝要なるは心の仁厚と善良を保つこと。計算に心を費やさず、心安かれれば大いなる福なり。"
    }
  },
  "31": {
    "en": {
      "meaning": "This is the 31st lot with the imagery of resonance. In all matters, maintain upright conduct and sincerity, for the heart's purity will bring about spiritual efficacy.",
      "allusion": "The Zen master Fo Yin and Su Dongpo conversed on Zen while boating on the river, their minds attuned, appreciating each other as kindred spirits.",
      "explanation": "Sincere devotion invokes resonance, and aspirations will be fulfilled. Align with circumstances, cultivate virtue, and blessings will follow.",
      "aspects": [
        {
          "label": "Home",
          "result": "Great Fortune"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth",
          "result": "Prosperous"
        },
        {
          "label": "Transactions",
          "result": "Achievable"
        },
        {
          "label": "Marriage",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy",
          "result": "Safe"
        },
        {
          "label": "Seeking People",
          "result": "Encounter"
        },
        {
          "label": "Lawsuits",
          "result": "Reconciliation"
        },
        {
          "label": "Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere heart brings spiritual efficacy",
        "Adapt to circumstances",
        "Cultivate oneself and bring peace to others",
        "Increase in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此れは第31の籤にて、感応の象。凡そ事は端正しく行い、心の誠あれば霊験あり。",
      "allusion": "仏印禅師と蘇東坡が江上に舟を浮かべ禅を論じ、機鋒相照らし、相知りて相惜しむ。",
      "explanation": "至誠は感応を呼び、願いは叶う。縁に随い、善を積み徳を修めれば、吉祥を得る。",
      "aspects": [
        {
          "label": "家",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "財を求める",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "婚姻",
          "result": "和合"
        },
        {
          "label": "妊娠",
          "result": "平安"
        },
        {
          "label": "人を探す",
          "result": "会う"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸く安し"
        }
      ],
      "keywords": [
        "心の誠は霊験あり",
        "縁に随いて自ら楽しむ",
        "己を修め人を安んずる",
        "福徳と智慧が増す"
      ],
      "zenAdvice": "すべての境遇は心より起こる。純粋な念を持ち、端正な善行を行えば、自然と菩薩の加護を得る。"
    }
  },
  "32": {
    "en": {
      "meaning": "This is the 32nd lot with the imagery of resonance. In all matters, maintain upright conduct and sincerity, for the heart's purity will bring about spiritual efficacy.",
      "allusion": "Chang'e stole the elixir of immortality and ascended to the moon palace, achieving longevity but enduring the moon's cold solitude. This illustrates the importance of understanding one's true self when making choices.",
      "explanation": "Sincere devotion invokes resonance, and aspirations will be fulfilled. Align with circumstances, cultivate virtue, and blessings will follow.",
      "aspects": [
        {
          "label": "Home",
          "result": "Safe"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth",
          "result": "According to Circumstances"
        },
        {
          "label": "Transactions",
          "result": "Achievable"
        },
        {
          "label": "Marriage",
          "result": "Awaiting Time"
        },
        {
          "label": "Pregnancy",
          "result": "Safe"
        },
        {
          "label": "Seeking People",
          "result": "Encounter"
        },
        {
          "label": "Lawsuits",
          "result": "Reconciliation"
        },
        {
          "label": "Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere heart brings spiritual efficacy",
        "Adapt to circumstances",
        "Cultivate oneself and bring peace to others",
        "Increase in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此れは第32の籤にて、感応の象。凡そ事は端正しく行い、心の誠あれば霊験あり。",
      "allusion": "嫦娥が霊薬を盗んで月に昇り、永遠の命を得たが、月の清寒に堪えがたし。選択において本心を明かすことの重要性を示す。",
      "explanation": "至誠は感応を呼び、願いは叶う。縁に随い、善を積み徳を修めれば、吉祥を得る。",
      "aspects": [
        {
          "label": "家",
          "result": "平安"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "財を求める",
          "result": "縁に従う"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "婚姻",
          "result": "時を待つ"
        },
        {
          "label": "妊娠",
          "result": "平安"
        },
        {
          "label": "人を探す",
          "result": "会う"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸く安し"
        }
      ],
      "keywords": [
        "心の誠は霊験あり",
        "縁に随いて自ら楽しむ",
        "己を修め人を安んずる",
        "福徳と智慧が増す"
      ],
      "zenAdvice": "すべての境遇は心より起こる。純粋な念を持ち、端正な善行を行えば、自然と菩薩の加護を得る。"
    }
  },
  "33": {
    "en": {
      "meaning": "This is the 33rd lot with the imagery of resonance. In all matters, maintain upright conduct and sincerity, for the heart's purity will bring about spiritual efficacy.",
      "allusion": "Guan Zhong, despite his hardships, was recommended by Bao Shuya and became a renowned minister, illustrating the importance of finding a patron to achieve greatness.",
      "explanation": "Sincere devotion invokes resonance, and aspirations will be fulfilled. Align with circumstances, cultivate virtue, and blessings will follow.",
      "aspects": [
        {
          "label": "Home",
          "result": "Great Fortune"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth",
          "result": "Prosperous"
        },
        {
          "label": "Transactions",
          "result": "Achievable"
        },
        {
          "label": "Marriage",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy",
          "result": "Safe"
        },
        {
          "label": "Seeking People",
          "result": "Encounter"
        },
        {
          "label": "Lawsuits",
          "result": "Reconciliation"
        },
        {
          "label": "Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere heart brings spiritual efficacy",
        "Adapt to circumstances",
        "Cultivate oneself and bring peace to others",
        "Increase in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此れは第33の籤にて、感応の象。凡そ事は端正しく行い、心の誠あれば霊験あり。",
      "allusion": "管仲が困窮の中、鮑叔牙に推挙され、名相となった。伯楽を得て大いに才能を発揮することの重要性を示す。",
      "explanation": "至誠は感応を呼び、願いは叶う。縁に随い、善を積み徳を修めれば、吉祥を得る。",
      "aspects": [
        {
          "label": "家",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "財を求める",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "婚姻",
          "result": "和合"
        },
        {
          "label": "妊娠",
          "result": "平安"
        },
        {
          "label": "人を探す",
          "result": "会う"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸く安し"
        }
      ],
      "keywords": [
        "心の誠は霊験あり",
        "縁に随いて自ら楽しむ",
        "己を修め人を安んずる",
        "福徳と智慧が増す"
      ],
      "zenAdvice": "すべての境遇は心より起こる。純粋な念を持ち、端正な善行を行えば、自然と菩薩の加護を得る。"
    }
  },
  "34": {
    "en": {
      "meaning": "This is the 34th lot with the imagery of resonance. In all matters, maintain upright conduct and sincerity, for the heart's purity will bring about spiritual efficacy.",
      "allusion": "The Oath of the Peach Garden, where Liu, Guan, and Zhang pledged brotherhood to restore the Han dynasty, symbolizes the power of unity and collaboration.",
      "explanation": "Sincere devotion invokes resonance, and aspirations will be fulfilled. Align with circumstances, cultivate virtue, and blessings will follow.",
      "aspects": [
        {
          "label": "Home",
          "result": "Great Fortune"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth",
          "result": "Prosperous"
        },
        {
          "label": "Transactions",
          "result": "Achievable"
        },
        {
          "label": "Marriage",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy",
          "result": "Safe"
        },
        {
          "label": "Seeking People",
          "result": "Encounter"
        },
        {
          "label": "Lawsuits",
          "result": "Reconciliation"
        },
        {
          "label": "Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere heart brings spiritual efficacy",
        "Adapt to circumstances",
        "Cultivate oneself and bring peace to others",
        "Increase in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此れは第34の籤にて、感応の象。凡そ事は端正しく行い、心の誠あれば霊験あり。",
      "allusion": "劉備、関羽、張飛が桃園にて義兄弟の契りを結び、漢室を再興するために力を合わせたことは、団結と協力の力を象徴する。",
      "explanation": "至誠は感応を呼び、願いは叶う。縁に随い、善を積み徳を修めれば、吉祥を得る。",
      "aspects": [
        {
          "label": "家",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "財を求める",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "婚姻",
          "result": "和合"
        },
        {
          "label": "妊娠",
          "result": "平安"
        },
        {
          "label": "人を探す",
          "result": "会う"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸く安し"
        }
      ],
      "keywords": [
        "心の誠は霊験あり",
        "縁に随いて自ら楽しむ",
        "己を修め人を安んずる",
        "福徳と智慧が増す"
      ],
      "zenAdvice": "すべての境遇は心より起こる。純粋な念を持ち、端正な善行を行えば、自然と菩薩の加護を得る。"
    }
  },
  "35": {
    "en": {
      "meaning": "This is the 35th lot with the imagery of resonance. In all matters, maintain upright conduct and sincerity, for the heart's purity will bring about spiritual efficacy.",
      "allusion": "Xuanzang's journey to the west, enduring eighty-one hardships, ultimately succeeded in bringing back the true scriptures to propagate Buddhism, illustrating the power of perseverance and sincerity.",
      "explanation": "Sincere devotion invokes resonance, and aspirations will be fulfilled. Align with circumstances, cultivate virtue, and blessings will follow.",
      "aspects": [
        {
          "label": "Home",
          "result": "Great Fortune"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth",
          "result": "Prosperous"
        },
        {
          "label": "Transactions",
          "result": "Achievable"
        },
        {
          "label": "Marriage",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy",
          "result": "Safe"
        },
        {
          "label": "Seeking People",
          "result": "Encounter"
        },
        {
          "label": "Lawsuits",
          "result": "Reconciliation"
        },
        {
          "label": "Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere heart brings spiritual efficacy",
        "Adapt to circumstances",
        "Cultivate oneself and bring peace to others",
        "Increase in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此れは第35の籤にて、感応の象。凡そ事は端正しく行い、心の誠あれば霊験あり。",
      "allusion": "玄奘が西行して八十一の難に遭い、遂に真経を持ち帰り、仏教を広めたことは、精誠の力を示す。",
      "explanation": "至誠は感応を呼び、願いは叶う。縁に随い、善を積み徳を修めれば、吉祥を得る。",
      "aspects": [
        {
          "label": "家",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "財を求める",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "婚姻",
          "result": "和合"
        },
        {
          "label": "妊娠",
          "result": "平安"
        },
        {
          "label": "人を探す",
          "result": "会う"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸く安し"
        }
      ],
      "keywords": [
        "心の誠は霊験あり",
        "縁に随いて自ら楽しむ",
        "己を修め人を安んずる",
        "福徳と智慧が増す"
      ],
      "zenAdvice": "すべての境遇は心より起こる。純粋な念を持ち、端正な善行を行えば、自然と菩薩の加護を得る。"
    }
  },
  "36": {
    "en": {
      "meaning": "This is the 36th divination lot, symbolizing the manifestation of resonance. In all matters, act with integrity and sincerity, for a pure heart invokes spiritual efficacy.",
      "allusion": "Sima Xiangru played the guqin to win Zhuo Wenjun's heart, and their mutual understanding became a celebrated tale. This signifies a profound connection and meeting of kindred spirits.",
      "explanation": "Sincere devotion invokes blessings, and aspirations are likely to be fulfilled. Follow the flow of destiny, cultivate virtue, and all endeavors will be auspicious.",
      "aspects": [
        {
          "label": "Home",
          "result": "Peace"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth",
          "result": "Follow Destiny"
        },
        {
          "label": "Transactions",
          "result": "Achievable"
        },
        {
          "label": "Marriage",
          "result": "Await the Right Time"
        },
        {
          "label": "Pregnancy",
          "result": "Safe"
        },
        {
          "label": "Seeking People",
          "result": "Encounter"
        },
        {
          "label": "Lawsuits",
          "result": "Reconciliation"
        },
        {
          "label": "Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "A sincere heart invokes spiritual efficacy",
        "Adapt to circumstances",
        "Cultivate oneself and bring peace to others",
        "Increase in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances are created by the mind. Maintain pure intentions and act with integrity, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此れは第36の籤にて、感応の相を示す。万事において行いを正しくし、心を誠にし霊験を得るべし。",
      "allusion": "司馬相如が琴を奏でて卓文君の心を動かし、互いの心が響き合い佳話となった。心の通い合い、知己に出会うことを表す。",
      "explanation": "至誠は神仏の感応を呼び、願いは叶うべし。縁に従って善を積み徳を修め、求めるものは吉となる。",
      "aspects": [
        {
          "label": "家",
          "result": "平安"
        },
        {
          "label": "自身",
          "result": "順調"
        },
        {
          "label": "財を求める",
          "result": "縁に従う"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "婚姻",
          "result": "時を待つ"
        },
        {
          "label": "妊娠",
          "result": "安全"
        },
        {
          "label": "人を探す",
          "result": "出会う"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "次第に快方に"
        }
      ],
      "keywords": [
        "真心は霊験あり",
        "縁に従って自らを処す",
        "己を修め人を安んずる",
        "福徳と智慧が増す"
      ],
      "zenAdvice": "すべての境遇は心が作り出すもの。純粋な心を持ち、正しい行いをするならば、菩薩の加護を暗に受けるであろう。"
    }
  },
  "37": {
    "en": {
      "meaning": "This is the 37th divination lot, symbolizing the manifestation of resonance. In all matters, act with integrity and sincerity, for a pure heart invokes spiritual efficacy.",
      "allusion": "Li Jing, the Pagoda-Bearing Heavenly King, retired after his achievements and secluded himself to cultivate the Tao. This signifies knowing when to advance and retreat, and preserving oneself wisely.",
      "explanation": "Sincere devotion invokes blessings, and aspirations are likely to be fulfilled. Follow the flow of destiny, cultivate virtue, and all endeavors will be auspicious.",
      "aspects": [
        {
          "label": "Home",
          "result": "Peace"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth",
          "result": "Follow Destiny"
        },
        {
          "label": "Transactions",
          "result": "Achievable"
        },
        {
          "label": "Marriage",
          "result": "Await the Right Time"
        },
        {
          "label": "Pregnancy",
          "result": "Safe"
        },
        {
          "label": "Seeking People",
          "result": "Encounter"
        },
        {
          "label": "Lawsuits",
          "result": "Reconciliation"
        },
        {
          "label": "Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "A sincere heart invokes spiritual efficacy",
        "Adapt to circumstances",
        "Cultivate oneself and bring peace to others",
        "Increase in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances are created by the mind. Maintain pure intentions and act with integrity, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此れは第37の籤にて、感応の相を示す。万事において行いを正しくし、心を誠にし霊験を得るべし。",
      "allusion": "托塔天王李靖が功成り身退き、仙山に隠棲して修行した。進退をわきまえ、賢く身を守ることを表す。",
      "explanation": "至誠は神仏の感応を呼び、願いは叶うべし。縁に従って善を積み徳を修め、求めるものは吉となる。",
      "aspects": [
        {
          "label": "家",
          "result": "平安"
        },
        {
          "label": "自身",
          "result": "順調"
        },
        {
          "label": "財を求める",
          "result": "縁に従う"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "婚姻",
          "result": "時を待つ"
        },
        {
          "label": "妊娠",
          "result": "安全"
        },
        {
          "label": "人を探す",
          "result": "出会う"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "次第に快方に"
        }
      ],
      "keywords": [
        "真心は霊験あり",
        "縁に従って自らを処す",
        "己を修め人を安んずる",
        "福徳と智慧が増す"
      ],
      "zenAdvice": "すべての境遇は心が作り出すもの。純粋な心を持ち、正しい行いをするならば、菩薩の加護を暗に受けるであろう。"
    }
  },
  "38": {
    "en": {
      "meaning": "This is the 38th divination lot, symbolizing the manifestation of resonance. In all matters, act with integrity and sincerity, for a pure heart invokes spiritual efficacy.",
      "allusion": "Han Xin endured the humiliation of crawling between someone's legs in his youth, studied military strategy diligently, and eventually became a great general. This signifies enduring hardships and storing strength for future blessings.",
      "explanation": "Sincere devotion invokes blessings, and aspirations are likely to be fulfilled. Follow the flow of destiny, cultivate virtue, and all endeavors will be auspicious.",
      "aspects": [
        {
          "label": "Home",
          "result": "Peace"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth",
          "result": "Follow Destiny"
        },
        {
          "label": "Transactions",
          "result": "Achievable"
        },
        {
          "label": "Marriage",
          "result": "Await the Right Time"
        },
        {
          "label": "Pregnancy",
          "result": "Safe"
        },
        {
          "label": "Seeking People",
          "result": "Encounter"
        },
        {
          "label": "Lawsuits",
          "result": "Reconciliation"
        },
        {
          "label": "Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "A sincere heart invokes spiritual efficacy",
        "Adapt to circumstances",
        "Cultivate oneself and bring peace to others",
        "Increase in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances are created by the mind. Maintain pure intentions and act with integrity, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此れは第38の籤にて、感応の相を示す。万事において行いを正しくし、心を誠にし霊験を得るべし。",
      "allusion": "韓信は若い頃、股くぐりの辱めを受けつつ兵書を学び、ついに大将軍となった。忍耐して力を蓄え、後世に福があることを表す。",
      "explanation": "至誠は神仏の感応を呼び、願いは叶うべし。縁に従って善を積み徳を修め、求めるものは吉となる。",
      "aspects": [
        {
          "label": "家",
          "result": "平安"
        },
        {
          "label": "自身",
          "result": "順調"
        },
        {
          "label": "財を求める",
          "result": "縁に従う"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "婚姻",
          "result": "時を待つ"
        },
        {
          "label": "妊娠",
          "result": "安全"
        },
        {
          "label": "人を探す",
          "result": "出会う"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "次第に快方に"
        }
      ],
      "keywords": [
        "真心は霊験あり",
        "縁に従って自らを処す",
        "己を修め人を安んずる",
        "福徳と智慧が増す"
      ],
      "zenAdvice": "すべての境遇は心が作り出すもの。純粋な心を持ち、正しい行いをするならば、菩薩の加護を暗に受けるであろう。"
    }
  },
  "39": {
    "en": {
      "meaning": "This is the 39th divination lot, symbolizing the manifestation of resonance. In all matters, act with integrity and sincerity, for a pure heart invokes spiritual efficacy.",
      "allusion": "Meng Jiangnu traveled a thousand miles to find her husband and wept to the point of collapsing the Great Wall, her grief moving Heaven. This signifies that utmost sincerity can touch the very heavens.",
      "explanation": "Sincere devotion invokes blessings, and aspirations are likely to be fulfilled. Follow the flow of destiny, cultivate virtue, and all endeavors will be auspicious.",
      "aspects": [
        {
          "label": "Home",
          "result": "Peace"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth",
          "result": "Follow Destiny"
        },
        {
          "label": "Transactions",
          "result": "Achievable"
        },
        {
          "label": "Marriage",
          "result": "Await the Right Time"
        },
        {
          "label": "Pregnancy",
          "result": "Safe"
        },
        {
          "label": "Seeking People",
          "result": "Encounter"
        },
        {
          "label": "Lawsuits",
          "result": "Reconciliation"
        },
        {
          "label": "Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "A sincere heart invokes spiritual efficacy",
        "Adapt to circumstances",
        "Cultivate oneself and bring peace to others",
        "Increase in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances are created by the mind. Maintain pure intentions and act with integrity, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此れは第39の籤にて、感応の相を示す。万事において行いを正しくし、心を誠にし霊験を得るべし。",
      "allusion": "孟姜女は千里の旅路を経て夫を探し求め、涙で長城を倒した。悲痛さが天を動かし、至誠が天地を感ずることがあることを表す。",
      "explanation": "至誠は神仏の感応を呼び、願いは叶うべし。縁に従って善を積み徳を修め、求めるものは吉となる。",
      "aspects": [
        {
          "label": "家",
          "result": "平安"
        },
        {
          "label": "自身",
          "result": "順調"
        },
        {
          "label": "財を求める",
          "result": "縁に従う"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "婚姻",
          "result": "時を待つ"
        },
        {
          "label": "妊娠",
          "result": "安全"
        },
        {
          "label": "人を探す",
          "result": "出会う"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "次第に快方に"
        }
      ],
      "keywords": [
        "真心は霊験あり",
        "縁に従って自らを処す",
        "己を修め人を安んずる",
        "福徳と智慧が増す"
      ],
      "zenAdvice": "すべての境遇は心が作り出すもの。純粋な心を持ち、正しい行いをするならば、菩薩の加護を暗に受けるであろう。"
    }
  },
  "40": {
    "en": {
      "meaning": "This is the 40th divination lot, symbolizing the manifestation of resonance. In all matters, act with integrity and sincerity, for a pure heart invokes spiritual efficacy.",
      "allusion": "Empress Wu Zetian established herself as emperor and created a prosperous era. This signifies that women are no less than men and emphasizes self-reliance and strength.",
      "explanation": "Sincere devotion invokes blessings, and aspirations are likely to be fulfilled. Follow the flow of destiny, cultivate virtue, and all endeavors will be auspicious.",
      "aspects": [
        {
          "label": "Home",
          "result": "Peace"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth",
          "result": "Follow Destiny"
        },
        {
          "label": "Transactions",
          "result": "Achievable"
        },
        {
          "label": "Marriage",
          "result": "Await the Right Time"
        },
        {
          "label": "Pregnancy",
          "result": "Safe"
        },
        {
          "label": "Seeking People",
          "result": "Encounter"
        },
        {
          "label": "Lawsuits",
          "result": "Reconciliation"
        },
        {
          "label": "Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "A sincere heart invokes spiritual efficacy",
        "Adapt to circumstances",
        "Cultivate oneself and bring peace to others",
        "Increase in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances are created by the mind. Maintain pure intentions and act with integrity, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此れは第40の籤にて、感応の相を示す。万事において行いを正しくし、心を誠にし霊験を得るべし。",
      "allusion": "則天武后は自ら皇帝となり、盛世を築いた。女性も男性に劣らず自立と強さを表す。",
      "explanation": "至誠は神仏の感応を呼び、願いは叶うべし。縁に従って善を積み徳を修め、求めるものは吉となる。",
      "aspects": [
        {
          "label": "家",
          "result": "平安"
        },
        {
          "label": "自身",
          "result": "順調"
        },
        {
          "label": "財を求める",
          "result": "縁に従う"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "婚姻",
          "result": "時を待つ"
        },
        {
          "label": "妊娠",
          "result": "安全"
        },
        {
          "label": "人を探す",
          "result": "出会う"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "次第に快方に"
        }
      ],
      "keywords": [
        "真心は霊験あり",
        "縁に従って自らを処す",
        "己を修め人を安んずる",
        "福徳と智慧が増す"
      ],
      "zenAdvice": "すべての境遇は心が作り出すもの。純粋な心を持ち、正しい行いをするならば、菩薩の加護を暗に受けるであろう。"
    }
  },
  "41": {
    "en": {
      "meaning": "This lot embodies the image of resonance and response. In all matters, maintain upright conduct and sincerity, for such purity will awaken spiritual resonance.",
      "allusion": "Dong Zhuo wielded power tyrannically and was ultimately undone by Wang Yun's cunning stratagem. This signifies that those who commit injustice will inevitably bring about their own downfall, and one should act with benevolence and kindness.",
      "explanation": "Sincere devotion invokes resonance, and aspirations will find fulfillment. Embrace the flow of circumstances, cultivate virtue, and accumulate merit, for such actions will bring auspicious outcomes.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Peaceful"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Follow Circumstances"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Await the Right Time"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Peaceful"
        },
        {
          "label": "Missing Person",
          "result": "Will Appear"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincerity awakens spiritual resonance",
        "Embrace circumstances with ease",
        "Cultivate oneself to bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and act with upright virtue, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠実にすれば霊験あらたかなり。",
      "allusion": "董卓暴虐の権力を振るい、遂に王允の連環の計にて誅せらる。多く不義を行えば必ず自滅す。事をなすには仁厚なるべし。",
      "explanation": "至誠は感応を呼び起こし、謀事は叶うべし。因縁に従い、善を修め徳を積むならば、求めるところ吉なり。",
      "aspects": [
        {
          "label": "家宅",
          "result": "安泰"
        },
        {
          "label": "自身",
          "result": "順調"
        },
        {
          "label": "求財",
          "result": "随縁"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "時節を待つ"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "出現"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸く平癒"
        }
      ],
      "keywords": [
        "心誠ければ則ち霊あり",
        "随縁自適",
        "己を修め人を安んず",
        "福慧増長"
      ],
      "zenAdvice": "万般の境遇は心より起こる。純なる意を保ち、行いを正しくすれば、菩薩の加護を得ること必定なり。"
    }
  },
  "42": {
    "en": {
      "meaning": "This lot reflects the image of resonance and response. In all matters, maintain upright conduct and sincerity, for such purity will awaken spiritual resonance.",
      "allusion": "Zong Que, from a young age, aspired to 'ride the long winds and break through ten thousand miles of waves,' and later rose to become a general. This signifies having grand aspirations.",
      "explanation": "Sincere devotion invokes resonance, and aspirations will find fulfillment. Embrace the flow of circumstances, cultivate virtue, and accumulate merit, for such actions will bring auspicious outcomes.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Fortune"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Peaceful"
        },
        {
          "label": "Missing Person",
          "result": "Will Appear"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincerity awakens spiritual resonance",
        "Embrace circumstances with ease",
        "Cultivate oneself to bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and act with upright virtue, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠実にすれば霊験あらたかなり。",
      "allusion": "宗悫幼くして「願わくば長風に乗り万里の波を破らん」と志し、後に左衛将軍となる。志大なることを示す。",
      "explanation": "至誠は感応を呼び起こし、謀事は叶うべし。因縁に従い、善を修め徳を積むならば、求めるところ吉なり。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順調"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "待ち人",
          "result": "出現"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸く平癒"
        }
      ],
      "keywords": [
        "心誠ければ則ち霊あり",
        "随縁自適",
        "己を修め人を安んず",
        "福慧増長"
      ],
      "zenAdvice": "万般の境遇は心より起こる。純なる意を保ち、行いを正しくすれば、菩薩の加護を得ること必定なり。"
    }
  },
  "43": {
    "en": {
      "meaning": "This lot signifies the image of resonance and response. In all matters, maintain upright conduct and sincere intentions, for where there is true heart, there will be spiritual efficacy.",
      "allusion": "Liu Bang rose from humble beginnings as a minor official to lead a rebellion, slaying a white serpent and founding the Han Dynasty. This symbolizes the rise of a hero from obscurity.",
      "explanation": "Sincere devotion invokes resonance; endeavors are likely to succeed. Align with circumstances, cultivate virtue, and accumulate merit—wishes will be fulfilled auspiciously.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Auspiciousness"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere heart invokes spiritual efficacy",
        "Align with circumstances",
        "Cultivate oneself and bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and perform upright deeds, and you will naturally receive the unseen protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠にし、真実ならば霊験あり。",
      "allusion": "劉邦、微賤より起こり、泗水の亭長となり、白蛇を斬りて漢朝を開く。英雄微賤より起こるの象なり。",
      "explanation": "至誠感格し、謀事叶うべし。縁に随い善をなし徳を積むべし。所願吉祥なり。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "可成"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "見ゆ"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸く安し"
        }
      ],
      "keywords": [
        "真心あれば霊験あり",
        "縁に随いて安んず",
        "己を修め人を安んず",
        "福徳と智慧とが増ゆ"
      ],
      "zenAdvice": "万般の境遇は心より起こる。純なる心を持ち正しき行いを行えば、菩薩の加護を蒙ることを得る。"
    }
  },
  "44": {
    "en": {
      "meaning": "This lot signifies the image of resonance and response. In all matters, maintain upright conduct and sincere intentions, for where there is true heart, there will be spiritual efficacy.",
      "allusion": "Jiang Taigong fished by the Wei River and encountered King Wen of Zhou, who appointed him as his chief advisor. This symbolizes meeting a wise ruler and achieving great aspirations.",
      "explanation": "Sincere devotion invokes resonance; endeavors are likely to succeed. Align with circumstances, cultivate virtue, and accumulate merit—wishes will be fulfilled auspiciously.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Auspiciousness"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere heart invokes spiritual efficacy",
        "Align with circumstances",
        "Cultivate oneself and bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and perform upright deeds, and you will naturally receive the unseen protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠にし、真実ならば霊験あり。",
      "allusion": "太公望、渭水のほとりに釣りして周の文王に遇い、国師の師と為る。賢き君に遇うの象なり。",
      "explanation": "至誠感格し、謀事叶うべし。縁に随い善をなし徳を積むべし。所願吉祥なり。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "可成"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "待ち人",
          "result": "見ゆ"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸く安し"
        }
      ],
      "keywords": [
        "真心あれば霊験あり",
        "縁に随いて安んず",
        "己を修め人を安んず",
        "福徳と智慧とが増ゆ"
      ],
      "zenAdvice": "万般の境遇は心より起こる。純なる心を持ち正しき行いを行えば、菩薩の加護を蒙ることを得る。"
    }
  },
  "45": {
    "en": {
      "meaning": "This lot embodies the image of resonance and response. In all matters, maintain upright conduct and sincerity, for where there is true heart, there shall be spiritual efficacy.",
      "allusion": "Emperor Renzong of Song, after enduring many trials, finally reunited with his birth mother, Empress Dowager Li, restoring familial harmony. This signifies reunion after separation, a sign of great fortune and auspiciousness.",
      "explanation": "Sincere devotion invokes resonance, and aspirations will find fulfillment. Align with circumstances, cultivate virtue, and accumulate merit; all endeavors shall be blessed.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Blessing"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Reunion"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere heart invokes spiritual efficacy",
        "Align with circumstances",
        "Cultivate oneself and bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you shall receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠にし、真実ならば霊験あり。",
      "allusion": "宋の仁宗、曲折を経て生母李太后と再会し、天倫の喜びを全うす。離散の後の再会、大吉の兆しなり。",
      "explanation": "至誠の心は神仏に感応し、願いは叶うべし。縁に従って善を積み、徳を修むれば、求める所は皆吉なり。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "再会"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "快方"
        }
      ],
      "keywords": [
        "真心は霊験あり",
        "縁に従って安んず",
        "己を修め人を安んず",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心より起こる。純粋な心を持ち、正しい行いを行えば、菩薩の加護を得べし。"
    }
  },
  "46": {
    "en": {
      "meaning": "This lot reflects the image of resonance and response. In all matters, maintain upright conduct and sincerity, for where there is true heart, there shall be spiritual efficacy.",
      "allusion": "Taigong fishing, waiting for the willing fish to take the bait; patience will ultimately bring great rewards. This signifies biding one's time and awaiting the opportune moment.",
      "explanation": "Sincere devotion invokes resonance, and aspirations will find fulfillment. Align with circumstances, cultivate virtue, and accumulate merit; all endeavors shall be blessed.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Safe"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "According to Fate"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Awaiting the Right Time"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Reunion"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere heart invokes spiritual efficacy",
        "Align with circumstances",
        "Cultivate oneself and bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you shall receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠にし、真実ならば霊験あり。",
      "allusion": "太公の釣りは、釣り糸を垂れて待つこと。辛抱すれば大いなる収穫あり。機が熟するのを待つべし。",
      "explanation": "至誠の心は神仏に感応し、願いは叶うべし。縁に従って善を積み、徳を修むれば、求める所は皆吉なり。",
      "aspects": [
        {
          "label": "家宅",
          "result": "安泰"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "随縁"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "待時"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "待ち人",
          "result": "再会"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "快方"
        }
      ],
      "keywords": [
        "真心は霊験あり",
        "随縁自適",
        "己を修め人を安んず",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心より起こる。純粋な心を持ち、正しい行いを行えば、菩薩の加護を得べし。"
    }
  },
  "47": {
    "en": {
      "meaning": "This divination signifies the manifestation of sincerity and uprightness in all endeavors. When the heart is pure, the spirit responds.",
      "allusion": "The story of Liang Hao from the Five Dynasties, who passed the imperial exams and became Zhuangyuan at the age of eighty-two, exemplifies perseverance and achieving greatness in old age.",
      "explanation": "Sincere devotion invokes a favorable response; aspirations are within reach. Embrace the flow of circumstances, cultivate virtue, and blessings will follow.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Blessing"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincerity invokes spiritual response",
        "Embrace circumstances",
        "Cultivate virtue for self and others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will find the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は誠と正しき心にて万事を行うべしとの象なり。心誠ならば霊応あり。",
      "allusion": "漢の劉邦、壇を設け韓信を大将に任じ、三軍を率いて天下を平定せり。才華の顕われ、功名の著しきを喻ふ。",
      "explanation": "至誠の感応あり。願いは叶うべし。縁に従い善を積み徳を修むれば、吉祥至るべし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順調"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "発見"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "快方"
        }
      ],
      "keywords": [
        "心誠ければ霊応あり",
        "縁に従いて安んず",
        "自らを修め人を安んず",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心より起こる。純なる心を持ち正しき行いにて、菩薩の加護を得ん。"
    }
  },
  "48": {
    "en": {
      "meaning": "This divination signifies the manifestation of sincerity and uprightness in all endeavors. When the heart is pure, the spirit responds.",
      "allusion": "Emperor Gaozu of Han established an altar to appoint Han Xin as his general, who then led the army to unify the nation. This symbolizes the realization of talent and the attainment of great fame.",
      "explanation": "Sincere devotion invokes a favorable response; aspirations are within reach. Embrace the flow of circumstances, cultivate virtue, and blessings will follow.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Blessing"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincerity invokes spiritual response",
        "Embrace circumstances",
        "Cultivate virtue for self and others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will find the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は誠と正しき心にて万事を行うべしとの象なり。心誠ならば霊応あり。",
      "allusion": "漢の劉邦、壇を設け韓信を大将に任じ、三軍を率いて天下を平定せり。才華の顕われ、功名の著しきを喻ふ。",
      "explanation": "至誠の感応あり。願いは叶うべし。縁に従い善を積み徳を修むれば、吉祥至るべし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順調"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "発見"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "快方"
        }
      ],
      "keywords": [
        "心誠ければ霊応あり",
        "縁に従いて安んず",
        "自らを修め人を安んず",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心より起こる。純なる心を持ち正しき行いにて、菩薩の加護を得ん。"
    }
  },
  "49": {
    "en": {
      "meaning": "This lot embodies the image of resonance and response. In all matters, maintain upright conduct and sincerity, for where there is true heart, there will be spiritual efficacy.",
      "allusion": "Emperor Taizong of Tang admired the blooming and withering of flowers in his royal garden, recognizing the natural order of all things. This signifies aligning with the heavens and finding peace in any circumstance.",
      "explanation": "Sincere devotion invokes resonance, and aspirations will find fulfillment. Embrace the flow of circumstances, cultivate virtue, and blessings will follow.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Peaceful"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Dependent on circumstances"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Await the right time"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Peaceful"
        },
        {
          "label": "Missing Person",
          "result": "Will be found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual recovery"
        }
      ],
      "keywords": [
        "Sincere heart invokes spiritual efficacy",
        "Embrace circumstances",
        "Cultivate oneself and bring peace to others",
        "Increase in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠にし、真実の心あらば霊験あらたかなり。",
      "allusion": "唐の太宗、庭の花を見て、花の開花と凋落は時節によるものなりと悟る。天に順い、境遇に安んずることを示す。",
      "explanation": "至誠の心は感応を呼び起こし、願いは叶うべし。縁に随い、善行を積み、徳を修むれば、吉祥至るべし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "平安"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "縁に従う"
        },
        {
          "label": "取引",
          "result": "成就すべし"
        },
        {
          "label": "縁談",
          "result": "時を待つべし"
        },
        {
          "label": "子宝",
          "result": "平安"
        },
        {
          "label": "尋ね人",
          "result": "見ゆべし"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "次第に安し"
        }
      ],
      "keywords": [
        "真心あれば霊験あり",
        "縁に随い自らを安んず",
        "己を修め人を安んず",
        "福徳と智慧が増す"
      ],
      "zenAdvice": "すべての境遇は心より起こる。純粋な心を持ち、正しい行いを行えば、菩薩の加護を蒙るべし。"
    }
  },
  "50": {
    "en": {
      "meaning": "This lot reflects the image of resonance and response. In all matters, maintain upright conduct and sincerity, for where there is true heart, there will be spiritual efficacy.",
      "allusion": "Tao Yuanming, while picking chrysanthemums by the eastern hedge, carelessly glimpsed the Southern Mountain. This signifies transcending fame and fortune, and finding peace in a noble and detached heart.",
      "explanation": "Sincere devotion invokes resonance, and aspirations will find fulfillment. Embrace the flow of circumstances, cultivate virtue, and blessings will follow.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great fortune"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Peaceful"
        },
        {
          "label": "Missing Person",
          "result": "Will be found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual recovery"
        }
      ],
      "keywords": [
        "Sincere heart invokes spiritual efficacy",
        "Embrace circumstances",
        "Cultivate oneself and bring peace to others",
        "Increase in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠にし、真実の心あらば霊験あらたかなり。",
      "allusion": "陶淵明、東籬の菊を採りて、悠然として南山を見る。名利を離れ、心の高潔に安んずることを示す。",
      "explanation": "至誠の心は感応を呼び起こし、願いは叶うべし。縁に随い、善行を積み、徳を修むれば、吉祥至るべし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就すべし"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "平安"
        },
        {
          "label": "尋ね人",
          "result": "見ゆべし"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "次第に安し"
        }
      ],
      "keywords": [
        "真心あれば霊験あり",
        "縁に随い自らを安んず",
        "己を修め人を安んず",
        "福徳と智慧が増す"
      ],
      "zenAdvice": "すべての境遇は心より起こる。純粋な心を持ち、正しい行いを行えば、菩薩の加護を蒙るべし。"
    }
  },
  "51": {
    "en": {
      "meaning": "This lot embodies the image of resonance and response. In all matters, maintain upright conduct and sincerity, for the spirit will respond to a pure heart.",
      "allusion": "Zhuge Liang invoked the east wind at Nanchi Mountain, using it to set fire to the Red Cliffs and defeat Cao Cao's forces. This signifies the confluence of favorable timing, advantageous terrain, and harmonious human effort.",
      "explanation": "Sincere devotion invokes divine resonance, and aspirations will find fulfillment. Embrace the flow of circumstances, cultivate virtue, and blessings will follow.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Fortune"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere heart invokes spirit",
        "Embrace circumstances",
        "Cultivate virtue for peace",
        "Growth in wisdom and blessings"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright conduct, and you will find the hidden protection of the bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠にし給え。霊験必ずこれに応ずべし。",
      "allusion": "諸葛亮南屏山に壇を設け東風を借り、赤壁を焼き曹操の大軍を破りしこと。天の時、地の利、人の和が揃いたるを喻る。",
      "explanation": "至誠の念は神霊に感応し、願いは叶うべし。縁に従って善を積み徳を修むれば、吉祥至るべし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "可成"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "見ゆ"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸く安し"
        }
      ],
      "keywords": [
        "真心神霊に応ず",
        "縁に従って安んず",
        "己を修め人を安んず",
        "福徳と智慧とが増ゆ"
      ],
      "zenAdvice": "万事は心より起こる。純なる心を持ち正しき行いにて、菩薩の加護を得べし。"
    }
  },
  "52": {
    "en": {
      "meaning": "This lot reflects the image of resonance and response. In all affairs, maintain upright conduct and sincerity, for the spirit will respond to a pure heart.",
      "allusion": "Shao Yong observed the plum blossoms to discern the fortunes of people, demonstrating profound understanding of the I Ching. This signifies keen discernment and foresight.",
      "explanation": "Sincere devotion invokes divine resonance, and aspirations will find fulfillment. Embrace the flow of circumstances, cultivate virtue, and blessings will follow.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Safe"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "As Circumstances Allow"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Awaiting the Right Time"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere heart invokes spirit",
        "Embrace circumstances",
        "Cultivate virtue for peace",
        "Growth in wisdom and blessings"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright conduct, and you will find the hidden protection of the bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠にし給え。霊験必ずこれに応ずべし。",
      "allusion": "邵雍梅の花を見て人の吉凶を知り易理に通じたることを観る。明察秋毫にして先見の明あり。",
      "explanation": "至誠の念は神霊に感応し、願いは叶うべし。縁に従って善を積み徳を修むれば、吉祥至るべし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "安泰"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "随縁"
        },
        {
          "label": "取引",
          "result": "可成"
        },
        {
          "label": "縁談",
          "result": "待時"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "見ゆ"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸く安し"
        }
      ],
      "keywords": [
        "真心神霊に応ず",
        "随縁自適",
        "己を修め人を安んず",
        "福徳と智慧とが増ゆ"
      ],
      "zenAdvice": "万事は心より起こる。純なる心を持ち正しき行いにて、菩薩の加護を得べし。"
    }
  },
  "53": {
    "en": {
      "meaning": "This lot embodies the image of profound resonance and response. Upright conduct and sincere heart shall awaken spiritual potency.",
      "allusion": "Liu Bei journeyed across the river to seek marriage, feigning intentions yet truly winning Lady Sun's hand and safely returning to Jing Province. This signifies turning misfortune into fortune, a sign of great auspiciousness and fulfillment.",
      "explanation": "Supreme sincerity invokes resonance, and aspirations shall find fulfillment. Align with circumstances, cultivate virtue, and blessings shall ensue.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Auspiciousness"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Encounter"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere heart awakens spiritual potency",
        "Align with circumstances",
        "Cultivate virtue for self and others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright conduct, and you shall receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事正しき行いにて、心誠なれば霊験あり。",
      "allusion": "劉備、江を渡り孫夫人を娶り、偽りを真として荊州に安んずる。禍を転じて福となす大吉の象なり。",
      "explanation": "至誠は感応を呼び、願いは叶うべし。縁に随い善を積み、徳を修むれば吉祥至る。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "逢う"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸く安し"
        }
      ],
      "keywords": [
        "心誠なら霊験あり",
        "縁に随い自らを安んず",
        "己を修め人を安んず",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心より起こる。純なる心を持ち正しき行いにて、菩薩の加護を得べし。"
    }
  },
  "54": {
    "en": {
      "meaning": "This lot reflects the image of profound resonance and response. Upright conduct and sincere heart shall awaken spiritual potency.",
      "allusion": "Ancestor Lü Dongbin refined the Golden Elixir through nine transformations, enduring trials to become the True Immortal of Pure Yang. This signifies dedicated cultivation leading to ultimate attainment.",
      "explanation": "Supreme sincerity invokes resonance, and aspirations shall find fulfillment. Align with circumstances, cultivate virtue, and blessings shall ensue.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Safe"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "According to circumstances"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Awaiting the right time"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Encounter"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere heart awakens spiritual potency",
        "Align with circumstances",
        "Cultivate virtue for self and others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright conduct, and you shall receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事正しき行いにて、心誠なれば霊験あり。",
      "allusion": "呂洞賓、九転金丹を練り、純陽真人を成す。精誠を尽くし修行して正果を得るの象なり。",
      "explanation": "至誠は感応を呼び、願いは叶うべし。縁に随い善を積み、徳を修むれば吉祥至る。",
      "aspects": [
        {
          "label": "家宅",
          "result": "安泰"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "随縁"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "待時"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "待ち人",
          "result": "逢う"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸く安し"
        }
      ],
      "keywords": [
        "心誠なら霊験あり",
        "随縁自らを安んず",
        "己を修め人を安んず",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心より起こる。純なる心を持ち正しき行いにて、菩薩の加護を得べし。"
    }
  },
  "55": {
    "en": {
      "meaning": "This divination signifies the manifestation of profound resonance. Upright conduct and sincere heart shall invoke spiritual efficacy.",
      "allusion": "King Wu of Zhou, heeding the will of the people, overthrew the Shang dynasty, establishing an enduring Zhou dynasty legacy of eight centuries. This symbolizes the triumph of righteousness.",
      "explanation": "Sincere devotion invokes divine resonance, and aspirations shall find fulfillment. Align with the flow of destiny, cultivate virtue, and blessings shall ensue.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Peace"
        },
        {
          "label": "Self",
          "result": "Harmony"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Follow Destiny"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Await the Right Time"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Peace"
        },
        {
          "label": "Traveler",
          "result": "Reunion"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere Heart Invokes Efficacy",
        "Align with Destiny",
        "Cultivate Virtue for Peace",
        "Growth in Blessings and Wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you shall receive the unseen protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事正しき行いにて、心誠なれば霊験あり。",
      "allusion": "范蠡、功成り居らず、西施を伴い五湖に舟を浮かべ陶朱公と号す。進退を知り福沢長く続くを喻う。",
      "explanation": "至誠神仏に感応し、願い叶うべし。縁に随い善を積み徳を修むれば、吉祥至るべし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "安泰"
        },
        {
          "label": "自身",
          "result": "順調"
        },
        {
          "label": "求財",
          "result": "縁に従う"
        },
        {
          "label": "取引",
          "result": "成就すべし"
        },
        {
          "label": "縁談",
          "result": "時を待つべし"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "待ち人",
          "result": "会う"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "次第に癒ゆ"
        }
      ],
      "keywords": [
        "心誠ければ霊験あり",
        "縁に従いて安んず",
        "己を修め人を安んず",
        "福徳と智慧と増ゆ"
      ],
      "zenAdvice": "万般の境遇は心より起こる。純なる心を持ち正しき行いにて、菩薩の加護を得べし。"
    }
  },
  "56": {
    "en": {
      "meaning": "This divination signifies the manifestation of profound resonance. Upright conduct and sincere heart shall invoke spiritual efficacy.",
      "allusion": "Fan Li, after achieving great success, did not cling to power but chose to live a life of simplicity with Xi Shi on the lakes, known as Tao Zhu Gong. This symbolizes knowing when to advance and when to retreat, ensuring enduring blessings.",
      "explanation": "Sincere devotion invokes divine resonance, and aspirations shall find fulfillment. Align with the flow of destiny, cultivate virtue, and blessings shall ensue.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Peace"
        },
        {
          "label": "Self",
          "result": "Harmony"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Follow Destiny"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Await the Right Time"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Peace"
        },
        {
          "label": "Traveler",
          "result": "Reunion"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere Heart Invokes Efficacy",
        "Align with Destiny",
        "Cultivate Virtue for Peace",
        "Growth in Blessings and Wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you shall receive the unseen protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事正しき行いにて、心誠なれば霊験あり。",
      "allusion": "范蠡、功成り居らず、西施を伴い五湖に舟を浮かべ陶朱公と号す。進退を知り福沢長く続くを喻う。",
      "explanation": "至誠神仏に感応し、願い叶うべし。縁に随い善を積み徳を修むれば、吉祥至るべし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "安泰"
        },
        {
          "label": "自身",
          "result": "順調"
        },
        {
          "label": "求財",
          "result": "縁に従う"
        },
        {
          "label": "取引",
          "result": "成就すべし"
        },
        {
          "label": "縁談",
          "result": "時を待つべし"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "待ち人",
          "result": "会う"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "次第に癒ゆ"
        }
      ],
      "keywords": [
        "心誠ければ霊験あり",
        "縁に従いて安んず",
        "己を修め人を安んず",
        "福徳と智慧と増ゆ"
      ],
      "zenAdvice": "万般の境遇は心より起こる。純なる心を持ち正しき行いにて、菩薩の加護を得べし。"
    }
  },
  "57": {
    "en": {
      "meaning": "This lot embodies the image of resonance and response. In all matters, maintain upright conduct and sincerity, for where there is true heart, there shall be efficacy.",
      "allusion": "Dong Yong's filial piety moved the heavens, and the Seventh Fairy descended to aid him in weaving silk to repay debts. This signifies that sincere devotion touches the divine and leads to extraordinary encounters.",
      "explanation": "Sincere devotion invokes resonance, and aspirations shall find fulfillment. Align with circumstances, cultivate virtue, and accumulate merit; all endeavors shall be auspicious.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Peace"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "According to fate"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Await the right time"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Will be found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual recovery"
        }
      ],
      "keywords": [
        "Sincere heart invokes efficacy",
        "Align with fate",
        "Cultivate oneself and bring peace to others",
        "Increase in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you shall receive the unseen protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠にし、真実ならば霊験あり。",
      "allusion": "董永の孝行により七仙女天より下り、織物を織って負債を償う。孝心の天に通じ、奇縁に逢うことを表す。",
      "explanation": "至誠は感応を呼び、謀事は叶うべし。縁に随い、善を積み徳を積むならば、求めるところすべて吉祥なり。",
      "aspects": [
        {
          "label": "家宅",
          "result": "安泰"
        },
        {
          "label": "自身",
          "result": "順調"
        },
        {
          "label": "求財",
          "result": "縁に従う"
        },
        {
          "label": "取引",
          "result": "成就すべし"
        },
        {
          "label": "縁談",
          "result": "時を待つべし"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "会う"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "次第に安し"
        }
      ],
      "keywords": [
        "真心は霊験あり",
        "縁に従いて安んず",
        "己を修め人を安んず",
        "福徳と智慧が増す"
      ],
      "zenAdvice": "すべての境遇は心より起こる。純粋な心を持ち、正しい行いを行えば、菩薩の加護を得べし。"
    }
  },
  "58": {
    "en": {
      "meaning": "This lot reflects the image of resonance and response. In all matters, maintain upright conduct and sincerity, for where there is true heart, there shall be efficacy.",
      "allusion": "King Wen of Zhou sought the worthy with great eagerness, personally welcoming Jiang Taigong into the court. This signifies that humility in seeking the worthy leads to great achievements.",
      "explanation": "Sincere devotion invokes resonance, and aspirations shall find fulfillment. Align with circumstances, cultivate virtue, and accumulate merit; all endeavors shall be auspicious.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Peace"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "According to fate"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Await the right time"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Will be found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual recovery"
        }
      ],
      "keywords": [
        "Sincere heart invokes efficacy",
        "Align with fate",
        "Cultivate oneself and bring peace to others",
        "Increase in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you shall receive the unseen protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠にし、真実ならば霊験あり。",
      "allusion": "文王賢人を求めて渇望し、姜太公を自ら迎えて朝廷に入る。謙虚に賢人を求めることは大業を成すことを表す。",
      "explanation": "至誠は感応を呼び、謀事は叶うべし。縁に随い、善を積み徳を積むならば、求めるところすべて吉祥なり。",
      "aspects": [
        {
          "label": "家宅",
          "result": "安泰"
        },
        {
          "label": "自身",
          "result": "順調"
        },
        {
          "label": "求財",
          "result": "縁に従う"
        },
        {
          "label": "取引",
          "result": "成就すべし"
        },
        {
          "label": "縁談",
          "result": "時を待つべし"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "待ち人",
          "result": "来る"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "次第に安し"
        }
      ],
      "keywords": [
        "真心は霊験あり",
        "縁に従いて安んず",
        "己を修め人を安んず",
        "福徳と智慧が増す"
      ],
      "zenAdvice": "すべての境遇は心より起こる。純粋な心を持ち、正しい行いを行えば、菩薩の加護を得べし。"
    }
  },
  "59": {
    "en": {
      "meaning": "This lot embodies the image of resonance and response. Upright conduct and sincere heart shall awaken spiritual potency.",
      "allusion": "Zhang Liang, at the Yi Bridge, thrice offered shoes to an elder, receiving the 'Tai Gong Military Strategy' from the Yellow Stone Elder, becoming the imperial strategist of the Han dynasty. This signifies the attainment of true transmission through reverence for the teacher and the Way.",
      "explanation": "Sincere devotion invokes resonance, making aspirations attainable. Align with circumstances, cultivate virtue, and blessings shall follow.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Peaceful"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Follow Circumstances"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Await the Right Time"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Peaceful"
        },
        {
          "label": "Missing Person",
          "result": "Will Appear"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere heart awakens spiritual potency",
        "Align with circumstances",
        "Cultivate oneself and bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you shall receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事正しき行いにて影を正し、心誠なれば霊験あり。",
      "allusion": "張良、圯上の橋にて三度履を捧げ、黄石公より『太公兵法』を授かり、漢の帝師となる。師を敬い道を重んじ、真伝を得ることを示す。",
      "explanation": "至誠の感格により、謀事叶うべし。縁に随い、善を積み徳を修め、求めるところ吉なり。",
      "aspects": [
        {
          "label": "家宅",
          "result": "安泰"
        },
        {
          "label": "自身",
          "result": "順調"
        },
        {
          "label": "求財",
          "result": "縁に従う"
        },
        {
          "label": "取引",
          "result": "成就すべし"
        },
        {
          "label": "縁談",
          "result": "時を待つ"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "現れる"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "次第に安し"
        }
      ],
      "keywords": [
        "心誠なれば霊験あり",
        "縁に従い自らを安んず",
        "己を修め人を安んず",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万般の境遇は心より起こる。純なる心を持ち正しき行いを行えば、菩薩の加護を得べし。"
    }
  },
  "60": {
    "en": {
      "meaning": "This lot reflects the image of resonance and response. Upright conduct and sincere heart shall awaken spiritual potency.",
      "allusion": "Ban Chao cast aside his brush to join the military and served as an envoy to the Western Regions, earning the title of 'Dingyuan Marquis.' This signifies the ability to rise above trivialities and achieve merit in foreign lands.",
      "explanation": "Sincere devotion invokes resonance, making aspirations attainable. Align with circumstances, cultivate virtue, and blessings shall follow.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Peaceful"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Follow Circumstances"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Await the Right Time"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Peaceful"
        },
        {
          "label": "Missing Person",
          "result": "Will Appear"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere heart awakens spiritual potency",
        "Align with circumstances",
        "Cultivate oneself and bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you shall receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事正しき行いにて影を正し、心誠なれば霊験あり。",
      "allusion": "班超、筆を投げて軍に従い西域に赴き、定遠侯に封ぜらる。小事を捨て異域に功を立てることを示す。",
      "explanation": "至誠の感格により、謀事叶うべし。縁に随い、善を積み徳を修め、求めるところ吉なり。",
      "aspects": [
        {
          "label": "家宅",
          "result": "安泰"
        },
        {
          "label": "自身",
          "result": "順調"
        },
        {
          "label": "求財",
          "result": "縁に従う"
        },
        {
          "label": "取引",
          "result": "成就すべし"
        },
        {
          "label": "縁談",
          "result": "時を待つ"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "待ち人",
          "result": "現れる"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "次第に安し"
        }
      ],
      "keywords": [
        "心誠なれば霊験あり",
        "縁に従い自らを安んず",
        "己を修め人を安んず",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万般の境遇は心より起こる。純なる心を持ち正しき行いを行えば、菩薩の加護を得べし。"
    }
  },
  "61": {
    "en": {
      "meaning": "This lot embodies the image of resonance and awakening. In all matters, maintain upright conduct and sincerity, for such purity invokes spiritual efficacy.",
      "allusion": "Guanyin Bodhisattva, the compassionate savior, imparts through the 61st lot the wisdom of aligning with karmic conditions and cultivating oneself to bring peace to others.",
      "explanation": "Sincere devotion invokes divine resonance, and aspirations will find fulfillment. Embrace the flow of circumstances, practice virtue, and accumulate merit—your endeavors shall be blessed.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Blessing"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Reunion"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere devotion invokes spiritual efficacy",
        "Embrace circumstances with ease",
        "Cultivate oneself to bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you shall receive the unseen protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠にし、真実を貫くべし。",
      "allusion": "観音大士、慈航普渡の法を説き、第61の籤にて世の人々に因縁に従い、自己を修めて人を安んずべしと示せり。",
      "explanation": "至誠の念は神仏の感応を呼び起こし、願いは叶うべし。因縁に従い、善をなし、徳を積むとき、吉祥至る。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "見ゆ"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸く安し"
        }
      ],
      "keywords": [
        "真心は神仏に通ず",
        "因縁に従い自らを安んず",
        "自己を修めて人を安んず",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心より起こる。純なる心を持ち、身を正し、菩薩の加護を蒙るべし。"
    }
  },
  "62": {
    "en": {
      "meaning": "This lot reflects the image of resonance and awakening. In all affairs, maintain integrity and sincerity, for such purity invokes spiritual efficacy.",
      "allusion": "Guanyin Bodhisattva, the compassionate savior, imparts through the 62nd lot the wisdom of aligning with karmic conditions and cultivating oneself to bring peace to others.",
      "explanation": "Sincere devotion invokes divine resonance, and aspirations will find fulfillment. Embrace the flow of circumstances, practice virtue, and accumulate merit—your endeavors shall be blessed.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Blessing"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Reunion"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere devotion invokes spiritual efficacy",
        "Embrace circumstances with ease",
        "Cultivate oneself to bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you shall receive the unseen protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠にし、真実を貫くべし。",
      "allusion": "観音大士、慈航普渡の法を説き、第62の籤にて世の人々に因縁に従い、自己を修めて人を安んずべしと示せり。",
      "explanation": "至誠の念は神仏の感応を呼び起こし、願いは叶うべし。因縁に従い、善をなし、徳を積むとき、吉祥至る。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "見ゆ"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸く安し"
        }
      ],
      "keywords": [
        "真心は神仏に通ず",
        "因縁に従い自らを安んず",
        "自己を修めて人を安んず",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心より起こる。純なる心を持ち、身を正し、菩薩の加護を蒙るべし。"
    }
  },
  "63": {
    "en": {
      "meaning": "This lot embodies the image of resonance and response. In all matters, maintain upright conduct and sincerity, for the spirit will respond to a pure heart.",
      "allusion": "Guanyin Bodhisattva, with boundless compassion, guides all beings across the sea of suffering. In this 63rd lot, she reveals the importance of aligning with circumstances and cultivating oneself to bring peace to others.",
      "explanation": "Sincere devotion invokes a powerful resonance, and aspirations will find fulfillment. Embrace circumstances as they arise, practice kindness, and accumulate virtue—your desires will be met with auspicious outcomes.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Peaceful"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Follow Circumstances"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Await the Right Time"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Peaceful"
        },
        {
          "label": "Missing Person",
          "result": "Will Appear"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere heart invokes spirit",
        "Embrace circumstances",
        "Cultivate oneself to bring peace",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠にし、霊験自らあらわるるものなり。",
      "allusion": "観音大士、慈航普渡し、第63の籤にて世の人々に因縁に従い己を修め人を安んずべしと示し給う。",
      "explanation": "至誠感格し、願い事叶うべし。因縁に従い、善をなし徳を積むとき、吉祥至る。",
      "aspects": [
        {
          "label": "家宅",
          "result": "安泰"
        },
        {
          "label": "自身",
          "result": "順調"
        },
        {
          "label": "求財",
          "result": "因縁に従う"
        },
        {
          "label": "取引",
          "result": "成就すべし"
        },
        {
          "label": "縁談",
          "result": "時を待つべし"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "現れる"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "次第に癒ゆ"
        }
      ],
      "keywords": [
        "心誠ければ霊験あり",
        "因縁に従いて安んず",
        "己を修め人を安んず",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心より起こる。純なる心を持ち正しき行いをする時、菩薩の加護自らあらわる。"
    }
  },
  "64": {
    "en": {
      "meaning": "This lot reflects the image of resonance and response. Maintain upright conduct and sincerity in all matters, for the spirit will respond to a pure heart.",
      "allusion": "Guanyin Bodhisattva, with boundless compassion, guides all beings across the sea of suffering. In this 64th lot, she emphasizes aligning with circumstances and cultivating oneself to bring peace to others.",
      "explanation": "Sincere devotion invokes a powerful resonance, and aspirations will find fulfillment. Embrace circumstances as they arise, practice kindness, and accumulate virtue—your desires will be met with auspicious outcomes.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Fortune"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Peaceful"
        },
        {
          "label": "Missing Person",
          "result": "Will Appear"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere heart invokes spirit",
        "Embrace circumstances",
        "Cultivate oneself to bring peace",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠にし、霊験自らあらわるるものなり。",
      "allusion": "観音大士、慈航普渡し、第64の籤にて世の人々に因縁に従い己を修め人を安んずべしと示し給う。",
      "explanation": "至誠感格し、願い事叶うべし。因縁に従い、善をなし徳を積むとき、吉祥至る。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順調"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就すべし"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "現れる"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "次第に癒ゆ"
        }
      ],
      "keywords": [
        "心誠ければ霊験あり",
        "因縁に従いて安んず",
        "己を修め人を安んず",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心より起こる。純なる心を持ち正しき行いをする時、菩薩の加護自らあらわる。"
    }
  },
  "65": {
    "en": {
      "meaning": "This lot embodies the image of resonance and response. In all matters, maintain upright conduct and sincerity, for then the spirit will respond.",
      "allusion": "The Bodhisattva Guanyin, with boundless compassion, guides all beings across the sea of suffering. This lot reveals the importance of adapting to circumstances and cultivating oneself to bring peace to others.",
      "explanation": "Sincere devotion invokes a powerful resonance, making aspirations attainable. Embrace circumstances as they arise, cultivate virtue, and your endeavors will be blessed.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Peaceful"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Follow circumstances"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Await the right time"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Peaceful"
        },
        {
          "label": "Traveler",
          "result": "Reunion"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual recovery"
        }
      ],
      "keywords": [
        "Sincere devotion invokes response",
        "Adapt to circumstances",
        "Cultivate oneself to bring peace",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠にし、真実を貫くべし。",
      "allusion": "観音菩薩の大慈悲により、衆生を救済し給う。第65の卦は因縁に従い、自己を修め人を安んずることを諭す。",
      "explanation": "至誠の心は天地に感応し、願いは叶うべし。因縁に従い、善行を積み、徳を修むれば、吉祥を得るべし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "安泰"
        },
        {
          "label": "自身",
          "result": "順調"
        },
        {
          "label": "求財",
          "result": "因縁に従う"
        },
        {
          "label": "取引",
          "result": "成就すべし"
        },
        {
          "label": "縁談",
          "result": "時を待つべし"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "待ち人",
          "result": "会う"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "次第に癒ゆ"
        }
      ],
      "keywords": [
        "真心は通ず",
        "因縁に従う",
        "自己を修め人を安んずる",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心より起こる。純粋な心を持ち、正しい行いをする者は、菩薩の加護を得る。"
    }
  },
  "66": {
    "en": {
      "meaning": "This lot reflects the image of resonance and response. In all matters, maintain upright conduct and sincerity, for then the spirit will respond.",
      "allusion": "The story of Xiang Yu, the Hegemon-King of Chu, besieged at Gaixia, surrounded by the songs of Chu, illustrates the peril of arrogance and the virtue of humility and receptiveness.",
      "explanation": "Sincere devotion invokes a powerful resonance, making aspirations attainable. Embrace circumstances as they arise, cultivate virtue, and your endeavors will be blessed.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Peaceful"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Follow circumstances"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Await the right time"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Peaceful"
        },
        {
          "label": "Traveler",
          "result": "Reunion"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual recovery"
        }
      ],
      "keywords": [
        "Sincere devotion invokes response",
        "Adapt to circumstances",
        "Cultivate oneself to bring peace",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠にし、真実を貫くべし。",
      "allusion": "楚の覇王・項羽が垓下に囲まれ、四方の楚歌を聴く。傲慢の危険と謙虚と受容の徳を諭す。",
      "explanation": "至誠の心は天地に感応し、願いは叶うべし。因縁に従い、善行を積み、徳を修むれば、吉祥を得るべし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "安泰"
        },
        {
          "label": "自身",
          "result": "順調"
        },
        {
          "label": "求財",
          "result": "因縁に従う"
        },
        {
          "label": "取引",
          "result": "成就すべし"
        },
        {
          "label": "縁談",
          "result": "時を待つべし"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "待ち人",
          "result": "会う"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "次第に癒ゆ"
        }
      ],
      "keywords": [
        "真心は通ず",
        "因縁に従う",
        "自己を修め人を安んずる",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心より起こる。純粋な心を持ち、正しい行いをする者は、菩薩の加護を得る。"
    }
  },
  "67": {
    "en": {
      "meaning": "This lot embodies the image of resonance and response. In all matters, maintain upright conduct and sincerity, for where there is true heart, there shall be efficacy.",
      "allusion": "The Bodhisattva Guanyin, in her boundless compassion, guides all beings to salvation. In this 67th lot, she reveals the importance of aligning with circumstances and cultivating oneself to bring peace to others.",
      "explanation": "Sincere devotion moves the heavens, and aspirations will find fulfillment. Embrace circumstances as they arise, practice kindness and accumulate virtue, and all endeavors shall be auspicious.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Blessing"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere heart brings efficacy",
        "Adapt to circumstances",
        "Cultivate oneself to bring peace",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you shall receive the unseen protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠にし、真実ならば霊験あり。",
      "allusion": "観音大士、慈航普渡し、第68の卦にて世の人々に因縁に従い、自己を修めて人を安んずべしと示し給う。",
      "explanation": "至誠は天に通じ、願いは叶うべし。因縁に従い、善をなし徳を積むならば、所願は吉なり。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "出現"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "快方"
        }
      ],
      "keywords": [
        "真心は霊験あり",
        "因縁に従う",
        "自己を修めて人を安んず",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心より起こる。純粋な心を持ち、正しい行いをするならば、菩薩の加護を得ん。"
    }
  },
  "68": {
    "en": {
      "meaning": "This lot reflects the image of resonance and response. In all affairs, maintain upright conduct and sincerity, for where there is true heart, there shall be efficacy.",
      "allusion": "The Bodhisattva Guanyin, in her boundless compassion, guides all beings to salvation. In this 68th lot, she emphasizes aligning with circumstances and cultivating oneself to bring peace to others.",
      "explanation": "Sincere devotion moves the heavens, and aspirations will find fulfillment. Embrace circumstances as they arise, practice kindness and accumulate virtue, and all endeavors shall be auspicious.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Safe"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "As Circumstances Allow"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Awaiting the Right Time"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere heart brings efficacy",
        "Adapt to circumstances",
        "Cultivate oneself to bring peace",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you shall receive the unseen protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠にし、真実ならば霊験あり。",
      "allusion": "観音大士、慈航普渡し、第68の卦にて世の人々に因縁に従い、自己を修めて人を安んずべしと示し給う。",
      "explanation": "至誠は天に通じ、願いは叶うべし。因縁に従い、善をなし徳を積むならば、所願は吉なり。",
      "aspects": [
        {
          "label": "家宅",
          "result": "安泰"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "随縁"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "待時"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "待ち人",
          "result": "出現"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "快方"
        }
      ],
      "keywords": [
        "真心は霊験あり",
        "因縁に従う",
        "自己を修めて人を安んず",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心より起こる。純粋な心を持ち、正しい行いをするならば、菩薩の加護を得ん。"
    }
  },
  "69": {
    "en": {
      "meaning": "This lot embodies the image of resonance and awakening. In all matters, maintain upright conduct and sincerity, for the spirit will respond to a pure heart.",
      "allusion": "The Bodhisattva Guanyin, in her boundless compassion, guides all beings to salvation. In this 69th lot, she reveals the importance of aligning with circumstances and cultivating oneself to bring peace to others.",
      "explanation": "Sincere devotion invokes a powerful resonance, and aspirations will find fulfillment. Embrace circumstances as they arise, practice kindness and virtue, and blessings will follow.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Blessing"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere heart invokes spirit",
        "Embrace circumstances",
        "Cultivate oneself to bring peace",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠にし、霊験を感ずべし。",
      "allusion": "観音大士は慈悲の船を浮かべ、世人を救済す。第69の卦に於いて、因縁に従い己を修め人を安んずべしとの教えを示す。",
      "explanation": "至誠の念は霊験を感ぜしめ、願いは叶うべし。因縁に従い、善行を積み徳を修むれば、吉祥至るべし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "見ゆ"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸く安し"
        }
      ],
      "keywords": [
        "心誠ければ霊験あり",
        "因縁に従う",
        "己を修め人を安んず",
        "福徳と智慧の增長"
      ],
      "zenAdvice": "万事は心より起こる。純なる心を持ち正しき行いをする時、菩薩の加護を蒙ることを得べし。"
    }
  },
  "70": {
    "en": {
      "meaning": "This lot reflects the image of resonance and awakening. In all matters, maintain upright conduct and sincerity, for the spirit will respond to a pure heart.",
      "allusion": "The Bodhisattva Guanyin, in her boundless compassion, guides all beings to salvation. In this 70th lot, she emphasizes aligning with circumstances and cultivating oneself to bring peace to others.",
      "explanation": "Sincere devotion invokes a powerful resonance, and aspirations will find fulfillment. Embrace circumstances as they arise, practice kindness and virtue, and blessings will follow.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Safe"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "As Circumstances Allow"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Awaiting the Right Time"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere heart invokes spirit",
        "Embrace circumstances",
        "Cultivate oneself to bring peace",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠にし、霊験を感ずべし。",
      "allusion": "観音大士は慈悲の船を浮かべ、世人を救済す。第70の卦に於いて、因縁に従い己を修め人を安んずべしとの教えを示す。",
      "explanation": "至誠の念は霊験を感ぜしめ、願いは叶うべし。因縁に従い、善行を積み徳を修むれば、吉祥至るべし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "安泰"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "随縁"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "時節を待つ"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "待ち人",
          "result": "見ゆ"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸く安し"
        }
      ],
      "keywords": [
        "心誠ければ霊験あり",
        "随縁自適",
        "己を修め人を安んず",
        "福徳と智慧の增長"
      ],
      "zenAdvice": "万事は心より起こる。純なる心を持ち正しき行いをする時、菩薩の加護を蒙ることを得べし。"
    }
  },
  "71": {
    "en": {
      "meaning": "This lot embodies the image of resonance for the 71st divination. In all matters, maintain upright conduct and sincere intentions, for such purity invokes spiritual efficacy.",
      "allusion": "The Bodhisattva Guanyin, in her boundless compassion, guides all beings to salvation. In the 71st lot, she reveals the importance of aligning with karmic conditions and cultivating oneself to bring peace to others.",
      "explanation": "Sincere devotion moves the heavens, and aspirations will find fulfillment. Embrace the flow of circumstances, practice virtue, and accumulate merit—your wishes shall be auspicious.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Blessing"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere intentions bring spiritual efficacy",
        "Embrace circumstances with ease",
        "Cultivate oneself to bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you shall receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦、第71番の御籤は感応の象なり。万事において行いを正しくし、心を誠にし霊験を祈るべし。",
      "allusion": "観音大士、慈悲の船を浮かべ広く衆生を救い給う。第71番の御籤にて、世の人々に因縁に従い己を修め人を安んずべしと示し給う。",
      "explanation": "至誠は天に通じ、願いは叶うべし。因縁に従い善をなし徳を積むとき、求めるところは吉祥なり。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "出現"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸安"
        }
      ],
      "keywords": [
        "真心に霊験あり",
        "因縁に従い安んずべし",
        "己を修め人を安んず",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心より起こる。純なる心を持ち正しい行いをする者は、菩薩の加護を得べし。"
    }
  },
  "72": {
    "en": {
      "meaning": "This lot embodies the image of resonance for the 72nd divination. In all matters, maintain upright conduct and sincere intentions, for such purity invokes spiritual efficacy.",
      "allusion": "The Bodhisattva Guanyin, in her boundless compassion, guides all beings to salvation. In the 72nd lot, she reveals the importance of aligning with karmic conditions and cultivating oneself to bring peace to others.",
      "explanation": "Sincere devotion moves the heavens, and aspirations will find fulfillment. Embrace the flow of circumstances, practice virtue, and accumulate merit—your wishes shall be auspicious.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Blessing"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere intentions bring spiritual efficacy",
        "Embrace circumstances with ease",
        "Cultivate oneself to bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you shall receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦、第72番の御籤は感応の象なり。万事において行いを正しくし、心を誠にし霊験を祈るべし。",
      "allusion": "観音大士、慈悲の船を浮かべ広く衆生を救い給う。第72番の御籤にて、世の人々に因縁に従い己を修め人を安んずべしと示し給う。",
      "explanation": "至誠は天に通じ、願いは叶うべし。因縁に従い善をなし徳を積むとき、求めるところは吉祥なり。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "出現"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸安"
        }
      ],
      "keywords": [
        "真心に霊験あり",
        "因縁に従い安んずべし",
        "己を修め人を安んず",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心より起こる。純なる心を持ち正しい行いをする者は、菩薩の加護を得べし。"
    }
  },
  "73": {
    "en": {
      "meaning": "This divination signifies the image of resonance and response. In all matters, maintain upright conduct and sincere intentions, for then the spirit will respond.",
      "allusion": "Xiao He pursued Han Xin under the moonlight, earnestly recommending him to the Han King as a great general. This symbolizes recognizing talent and utilizing it wisely, never letting it slip away.",
      "explanation": "Sincere devotion invokes resonance, and aspirations will find fulfillment. Align with circumstances, cultivate virtue, and accumulate merit; all endeavors will be auspicious.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Blessing"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere intentions bring spiritual response",
        "Align with circumstances",
        "Cultivate oneself and bring peace to others",
        "Increase in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠にし、霊験を得べし。",
      "allusion": "蕭何月下に韓信を追う。漢王に大将に推挙し、賢才を見出し、逸することなかれとの意なり。",
      "explanation": "至誠は感応を呼び起こし、願いは叶うべし。縁に随い、善を積み、徳を積むならば、諸事吉祥となるべし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "発見"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸く平癒"
        }
      ],
      "keywords": [
        "真心は霊験あり",
        "縁に随い自らを安んず",
        "己を修め人を安んず",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心より起こる。純なる心を持ち、身を正しければ、菩薩の加護を得べし。"
    }
  },
  "74": {
    "en": {
      "meaning": "This divination signifies the image of resonance and response. In all matters, maintain upright conduct and sincere intentions, for then the spirit will respond.",
      "allusion": "Guanyin Bodhisattva compassionately guides all beings, and in this 74th divination, instructs the world to align with circumstances and cultivate oneself to bring peace to others.",
      "explanation": "Sincere devotion invokes resonance, and aspirations will find fulfillment. Align with circumstances, cultivate virtue, and accumulate merit; all endeavors will be auspicious.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Blessing"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere intentions bring spiritual response",
        "Align with circumstances",
        "Cultivate oneself and bring peace to others",
        "Increase in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠にし、霊験を得べし。",
      "allusion": "観音菩薩は慈悲の舟を浮かべ、衆生を済度す。第74番の卦にて、世に縁に随い、己を修め、人を安んずべしと示せり。",
      "explanation": "至誠は感応を呼び起こし、願いは叶うべし。縁に随い、善を積み、徳を積むならば、諸事吉祥となるべし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "待ち人",
          "result": "出現"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸く平癒"
        }
      ],
      "keywords": [
        "真心は霊験あり",
        "縁に随い自らを安んず",
        "己を修め人を安んず",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心より起こる。純なる心を持ち、身を正しければ、菩薩の加護を得べし。"
    }
  },
  "75": {
    "en": {
      "meaning": "This lot embodies the image of resonance and response. In all matters, maintain upright conduct and sincerity, for where there is true heart, there shall be spiritual efficacy.",
      "allusion": "The Bodhisattva Guanyin, in her boundless compassion, guides all beings to salvation. In this 75th lot, she reveals the importance of aligning with karma and cultivating oneself to bring peace to others.",
      "explanation": "Sincere devotion moves the heavens, and aspirations will find fulfillment. Embrace the flow of circumstances, practice kindness, and accumulate virtue; in this way, all desires shall be auspicious.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Peaceful"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Follow circumstances"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Await the right time"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Peaceful"
        },
        {
          "label": "Missing Person",
          "result": "Will be found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual recovery"
        }
      ],
      "keywords": [
        "Sincere heart brings spiritual efficacy",
        "Embrace circumstances with ease",
        "Cultivate oneself to bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you shall receive the unseen protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠にし、真実ならば霊験あり。",
      "allusion": "観音大士慈悲の船に乗り給い、普く衆生を済度し給う。第76の卦に於いて、世の人々に因縁に従い、自己を修めて人を安んずべしと示し給う。",
      "explanation": "至誠は天に通じ、願いは叶うべし。因縁に従い、善をなし徳を積むならば、所願は吉祥なり。",
      "aspects": [
        {
          "label": "家宅",
          "result": "安泰"
        },
        {
          "label": "自身",
          "result": "順調"
        },
        {
          "label": "求財",
          "result": "縁に従う"
        },
        {
          "label": "取引",
          "result": "成就すべし"
        },
        {
          "label": "縁談",
          "result": "時を待つべし"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "現れる"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "次第に癒ゆ"
        }
      ],
      "keywords": [
        "真心あれば霊験あり",
        "縁に従いて安んずべし",
        "自己を修めて人を安んずべし",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心より起こる。純なる心を持ち、正しき行いをするならば、菩薩の加護を得べし。"
    }
  },
  "76": {
    "en": {
      "meaning": "This lot reflects the image of resonance and response. In all affairs, maintain upright conduct and sincerity, for where there is true heart, there shall be spiritual efficacy.",
      "allusion": "The Bodhisattva Guanyin, in her boundless compassion, guides all beings to salvation. In this 76th lot, she reveals the importance of aligning with karma and cultivating oneself to bring peace to others.",
      "explanation": "Sincere devotion moves the heavens, and aspirations will find fulfillment. Embrace the flow of circumstances, practice kindness, and accumulate virtue; in this way, all desires shall be auspicious.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great fortune"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Peaceful"
        },
        {
          "label": "Missing Person",
          "result": "Will be found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual recovery"
        }
      ],
      "keywords": [
        "Sincere heart brings spiritual efficacy",
        "Embrace circumstances with ease",
        "Cultivate oneself to bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you shall receive the unseen protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠にし、真実ならば霊験あり。",
      "allusion": "観音大士慈悲の船に乗り給い、普く衆生を済度し給う。第76の卦に於いて、世の人々に因縁に従い、自己を修めて人を安んずべしと示し給う。",
      "explanation": "至誠は天に通じ、願いは叶うべし。因縁に従い、善をなし徳を積むならば、所願は吉祥なり。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順調"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就すべし"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "現れる"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "次第に癒ゆ"
        }
      ],
      "keywords": [
        "真心あれば霊験あり",
        "縁に従いて安んずべし",
        "自己を修めて人を安んずべし",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心より起こる。純なる心を持ち、正しき行いをするならば、菩薩の加護を得べし。"
    }
  },
  "77": {
    "en": {
      "meaning": "This lot embodies the omen of resonance for the 77th verse, signifying that all endeavors will prosper when actions are upright and intentions are sincere.",
      "allusion": "The Bodhisattva Guanyin, with boundless compassion, guides all beings to enlightenment and salvation, revealing through the 77th verse the importance of aligning with karmic conditions and cultivating oneself to bring peace to others.",
      "explanation": "Sincere devotion invokes divine resonance, making aspirations attainable. Embracing karmic conditions and cultivating virtue will lead to auspicious outcomes.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Blessing"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere heart invokes blessings",
        "Align with circumstances",
        "Cultivate oneself to bring peace",
        "Growth in wisdom and virtue"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will naturally receive the Bodhisattva's hidden protection."
    },
    "ja": {
      "meaning": "此の卦は第七十七の御籤に感応する象にして、万事は行正しく影直く、心誠なれば即ち霊験あり。",
      "allusion": "観音大士は慈悲の船を浮かべ広く衆生を済度し給う。第七十七の御籤に於いて、世を順応し因縁に従い、自己を修めて人を安んずべしと示し給う。",
      "explanation": "至誠は神仏の感応を招き、願いは叶うべし。因縁に従い、善を積み徳を修むれば、求めるところは吉なり。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "可成"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "平安"
        },
        {
          "label": "尋ね人",
          "result": "見"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸安"
        }
      ],
      "keywords": [
        "心誠なれば即ち霊験あり",
        "因縁に従いて自ずと安し",
        "自己を修めて人を安んず",
        "福徳と智慧とが増長す"
      ],
      "zenAdvice": "すべての境遇は心より起こる。純なる心を持ち、行いを正しくすれば、菩薩の加護を暗に受けるべし。"
    }
  },
  "78": {
    "en": {
      "meaning": "This lot reflects the omen of resonance for the 78th verse, indicating that all undertakings will prosper when actions are upright and intentions are sincere.",
      "allusion": "The Bodhisattva Guanyin, with boundless compassion, guides all beings to enlightenment and salvation, revealing through the 78th verse the importance of aligning with karmic conditions and cultivating oneself to bring peace to others.",
      "explanation": "Sincere devotion invokes divine resonance, making aspirations attainable. Embracing karmic conditions and cultivating virtue will lead to auspicious outcomes.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Safe"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "According to circumstances"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Awaiting the right time"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere heart invokes blessings",
        "Align with circumstances",
        "Cultivate oneself to bring peace",
        "Growth in wisdom and virtue"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will naturally receive the Bodhisattva's hidden protection."
    },
    "ja": {
      "meaning": "此の卦は第七十八の御籤に感応する象にして、万事は行正しく影直く、心誠なれば即ち霊験あり。",
      "allusion": "観音大士は慈悲の船を浮かべ広く衆生を済度し給う。第七十八の御籤に於いて、世を順応し因縁に従い、自己を修めて人を安んずべしと示し給う。",
      "explanation": "至誠は神仏の感応を招き、願いは叶うべし。因縁に従い、善を積み徳を修むれば、求めるところは吉なり。",
      "aspects": [
        {
          "label": "家宅",
          "result": "平安"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "随縁"
        },
        {
          "label": "取引",
          "result": "可成"
        },
        {
          "label": "縁談",
          "result": "待時"
        },
        {
          "label": "子宝",
          "result": "平安"
        },
        {
          "label": "待ち人",
          "result": "見"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸安"
        }
      ],
      "keywords": [
        "心誠なれば即ち霊験あり",
        "因縁に従いて自ずと安し",
        "自己を修めて人を安んず",
        "福徳と智慧とが増長す"
      ],
      "zenAdvice": "すべての境遇は心より起こる。純なる心を持ち、行いを正しくすれば、菩薩の加護を暗に受けるべし。"
    }
  },
  "79": {
    "en": {
      "meaning": "This lot embodies the image of resonance and response. In all matters, maintain upright conduct and sincerity, for the spirit will respond.",
      "allusion": "Guanyin Bodhisattva, the compassionate savior, imparts the wisdom of adapting to circumstances and cultivating oneself to bring peace to others in the 79th lot.",
      "explanation": "Sincere devotion invokes resonance, and aspirations will find fulfillment. Embrace circumstances with grace, practice kindness, and accumulate virtue to attain auspicious outcomes.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Blessing"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere devotion invokes resonance",
        "Adapt to circumstances",
        "Cultivate oneself to bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠にし給うべし。霊験必ず応ずるものなり。",
      "allusion": "観音大士慈悲の舟を浮かべ給い、第79の卦にて世の人々に因縁に従い己を修め人を安んずべしと示し給う。",
      "explanation": "至誠は感応を呼び起こし、願いは叶うべし。因縁に従い善をなし徳を積むとき、吉祥至る。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "見ゆ"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸く安し"
        }
      ],
      "keywords": [
        "至誠感応",
        "因縁に従う",
        "善をなし徳を積む",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心より起こる。純なる心を持ち正しき行いにて、菩薩の加護を蒙るべし。"
    }
  },
  "80": {
    "en": {
      "meaning": "This lot reflects the image of resonance and response. In all affairs, maintain upright conduct and sincerity, for the spirit will respond.",
      "allusion": "Liu Zhiyuan, who endured hardships and joined the military, achieved great merit and was later enthroned as the Emperor of the Han dynasty. This signifies that heroes emerge from humble beginnings through perseverance and self-improvement.",
      "explanation": "Sincere devotion invokes resonance, and aspirations will find fulfillment. Embrace circumstances with grace, practice kindness, and accumulate virtue to attain auspicious outcomes.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Blessing"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere devotion invokes resonance",
        "Adapt to circumstances",
        "Cultivate oneself to bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠にし給うべし。霊験必ず応ずるものなり。",
      "allusion": "劉智遠忍苦して軍に加わり、数々の奇功を立て後漢の高祖と封ぜらる。英雄は出処を問わぬものなり。奮闘して自らを強むるものなり。",
      "explanation": "至誠は感応を呼び起こし、願いは叶うべし。因縁に従い善をなし徳を積むとき、吉祥至る。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "待ち人",
          "result": "見ゆ"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸く安し"
        }
      ],
      "keywords": [
        "至誠感応",
        "因縁に従う",
        "善をなし徳を積む",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心より起こる。純なる心を持ち正しき行いにて、菩薩の加護を蒙るべし。"
    }
  },
  "81": {
    "en": {
      "meaning": "This divination, the 81st lot, reveals the image of profound resonance. In all matters, maintain upright conduct and sincerity, for the spirit will respond.",
      "allusion": "The Bodhisattva Guanyin, in her boundless compassion, guides all beings to enlightenment. In the 81st lot, she teaches us to align with the flow of karma and cultivate ourselves to bring peace to others.",
      "explanation": "Sincere devotion invokes a powerful resonance, bringing hope to your endeavors. Embrace the natural course of events, practice virtue, and accumulate merit—your aspirations will be fulfilled auspiciously.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Blessing"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere devotion invokes spiritual response",
        "Embrace the natural flow",
        "Cultivate oneself to bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦第81番の霊験は、万事にわたり行いと影が正しく、心誠なれば霊験ありとの象なり。",
      "allusion": "観音大士慈悲の船に乗り広く衆生を済度し、第81番にて因縁に従い己を修め人を安んずべしと示し給う。",
      "explanation": "至誠の感応により願い事叶うべし。因縁に従い善をなし徳を積むならば、求めることすべて吉祥となる。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "出現"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸安"
        }
      ],
      "keywords": [
        "心誠なれば霊験あり",
        "因縁に従い自らを安んず",
        "己を修め人を安んず",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "すべての境遇は心より起こる。純なる心を持ち正しき行いを行えば、菩薩の加護を暗に受けること必定なり。"
    }
  },
  "82": {
    "en": {
      "meaning": "This divination, the 82nd lot, reveals the image of profound resonance. In all matters, maintain upright conduct and sincerity, for the spirit will respond.",
      "allusion": "The Bodhisattva Guanyin, in her boundless compassion, guides all beings to enlightenment. In the 82nd lot, she teaches us to align with the flow of karma and cultivate ourselves to bring peace to others.",
      "explanation": "Sincere devotion invokes a powerful resonance, bringing hope to your endeavors. Embrace the natural course of events, practice virtue, and accumulate merit—your aspirations will be fulfilled auspiciously.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Blessing"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere devotion invokes spiritual response",
        "Embrace the natural flow",
        "Cultivate oneself to bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦第82番の霊験は、万事にわたり行いと影が正しく、心誠なれば霊験ありとの象なり。",
      "allusion": "観音大士慈悲の船に乗り広く衆生を済度し、第82番にて因縁に従い己を修め人を安んずべしと示し給う。",
      "explanation": "至誠の感応により願い事叶うべし。因縁に従い善をなし徳を積むならば、求めることすべて吉祥となる。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "出現"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸安"
        }
      ],
      "keywords": [
        "心誠なれば霊験あり",
        "因縁に従い自らを安んず",
        "己を修め人を安んず",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "すべての境遇は心より起こる。純なる心を持ち正しき行いを行えば、菩薩の加護を暗に受けること必定なり。"
    }
  },
  "83": {
    "en": {
      "meaning": "This lot embodies the image of resonance and response. In all matters, maintain upright conduct and sincerity, for where there is true heart, there shall be spiritual efficacy.",
      "allusion": "The Bodhisattva Guanyin, in her boundless compassion, guides all beings to salvation. In this 83rd lot, she reveals the importance of adapting to circumstances and cultivating oneself to bring peace to others.",
      "explanation": "Sincere devotion moves the heavens, and aspirations are likely to be fulfilled. Embrace the flow of circumstances, practice kindness, and accumulate virtue; in this way, all desires shall be auspicious.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Peaceful"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Follow circumstances"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Await the right time"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Peaceful"
        },
        {
          "label": "Traveler",
          "result": "Will meet"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual recovery"
        }
      ],
      "keywords": [
        "Sincere heart brings spiritual efficacy",
        "Adapt to circumstances",
        "Cultivate oneself to bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you shall receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠にし、真実ならば霊験あり。",
      "allusion": "観音大士慈悲の船に乗り、世の人々を普く渡さんとす。第83の卦にて因縁に従い己を修め人を安んずべきことを示す。",
      "explanation": "至誠は天に通じ、願いは叶うべし。因縁に従い善をなし徳を積むならば、求めるところは吉祥なり。",
      "aspects": [
        {
          "label": "家宅",
          "result": "安泰"
        },
        {
          "label": "自身",
          "result": "順調"
        },
        {
          "label": "求財",
          "result": "因縁に従う"
        },
        {
          "label": "取引",
          "result": "成就すべし"
        },
        {
          "label": "縁談",
          "result": "時を待つべし"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "待ち人",
          "result": "会う"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "次第に癒ゆ"
        }
      ],
      "keywords": [
        "真心あれば霊験あり",
        "因縁に従う",
        "己を修め人を安んず",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心より起こる。純粋な心を持ち正しい行いをするならば、観音の加護を得ん。"
    }
  },
  "84": {
    "en": {
      "meaning": "This lot reflects the image of resonance and response. In all affairs, maintain upright conduct and sincerity, for where there is true heart, there shall be spiritual efficacy.",
      "allusion": "The Bodhisattva Guanyin, in her boundless compassion, guides all beings to salvation. In this 84th lot, she reveals the importance of adapting to circumstances and cultivating oneself to bring peace to others.",
      "explanation": "Sincere devotion moves the heavens, and aspirations are likely to be fulfilled. Embrace the flow of circumstances, practice kindness, and accumulate virtue; in this way, all desires shall be auspicious.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Greatly Auspicious"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Peaceful"
        },
        {
          "label": "Traveler",
          "result": "Will meet"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual recovery"
        }
      ],
      "keywords": [
        "Sincere heart brings spiritual efficacy",
        "Adapt to circumstances",
        "Cultivate oneself to bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you shall receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正しくし、心を誠にし、真実ならば霊験あり。",
      "allusion": "観音大士慈悲の船に乗り、世の人々を普く渡さんとす。第84の卦にて因縁に従い己を修め人を安んずべきことを示す。",
      "explanation": "至誠は天に通じ、願いは叶うべし。因縁に従い善をなし徳を積むならば、求めるところは吉祥なり。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順調"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就すべし"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "待ち人",
          "result": "会う"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "次第に癒ゆ"
        }
      ],
      "keywords": [
        "真心あれば霊験あり",
        "因縁に従う",
        "己を修め人を安んず",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心より起こる。純粋な心を持ち正しい行いをするならば、観音の加護を得ん。"
    }
  },
  "85": {
    "en": {
      "meaning": "This omen, the 85th lot, signifies a profound resonance with the universe. Upright conduct and sincere heart shall awaken spiritual grace.",
      "allusion": "Guanyin Bodhisattva, the compassionate savior, imparts through the 85th lot the wisdom of aligning with karmic conditions and cultivating oneself to bring peace to others.",
      "explanation": "Sincere devotion invokes divine favor, and aspirations shall find fulfillment. Embrace the flow of circumstances, practice virtue, and accumulate merit for auspicious outcomes.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Peace"
        },
        {
          "label": "Self",
          "result": "Harmony"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Follow Fate"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Await the Right Time"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Peace"
        },
        {
          "label": "Missing Person",
          "result": "Reunion"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere heart invokes grace",
        "Embrace fate",
        "Cultivate oneself to bring peace",
        "Growth in wisdom and blessings"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you shall receive the Bodhisattva's hidden protection."
    },
    "ja": {
      "meaning": "此の卦第85番は感応の象なり。万事正しき行いにて影も直く、心誠なれば霊験あり。",
      "allusion": "観音大士慈航普渡、第85番にて世人に因縁に従い己を修め人を安んずべしと示し給う。",
      "explanation": "至誠感格し、謀り事叶うべし。因縁に従い善を積み徳を修むれば、願望叶いて吉祥を得べし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "平安"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "随縁"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "時を待つ"
        },
        {
          "label": "子宝",
          "result": "平安"
        },
        {
          "label": "尋ね人",
          "result": "会う"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "次第に安し"
        }
      ],
      "keywords": [
        "心誠なれば霊験あり",
        "因縁に従いて自らを安んず",
        "己を修め人を安んず",
        "福徳と智慧の生長"
      ],
      "zenAdvice": "万般の境遇は心より起こる。純なる心を持ち正しき行いにて、菩薩の加護を得べし。"
    }
  },
  "86": {
    "en": {
      "meaning": "This omen, the 86th lot, signifies a profound resonance with the universe. Upright conduct and sincere heart shall awaken spiritual grace.",
      "allusion": "Guanyin Bodhisattva, the compassionate savior, imparts through the 86th lot the wisdom of aligning with karmic conditions and cultivating oneself to bring peace to others.",
      "explanation": "Sincere devotion invokes divine favor, and aspirations shall find fulfillment. Embrace the flow of circumstances, practice virtue, and accumulate merit for auspicious outcomes.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Fortune"
        },
        {
          "label": "Self",
          "result": "Harmony"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperity"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmony"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Peace"
        },
        {
          "label": "Missing Person",
          "result": "Reunion"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere heart invokes grace",
        "Embrace fate",
        "Cultivate oneself to bring peace",
        "Growth in wisdom and blessings"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you shall receive the Bodhisattva's hidden protection."
    },
    "ja": {
      "meaning": "此の卦第86番は感応の象なり。万事正しき行いにて影も直く、心誠なれば霊験あり。",
      "allusion": "観音大士慈航普渡、第86番にて世人に因縁に従い己を修め人を安んずべしと示し給う。",
      "explanation": "至誠感格し、謀り事叶うべし。因縁に従い善を積み徳を修むれば、願望叶いて吉祥を得べし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "平安"
        },
        {
          "label": "待ち人",
          "result": "会う"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "次第に安し"
        }
      ],
      "keywords": [
        "心誠なれば霊験あり",
        "因縁に従いて自らを安んず",
        "己を修め人を安んず",
        "福徳と智慧の生長"
      ],
      "zenAdvice": "万般の境遇は心より起こる。純なる心を持ち正しき行いにて、菩薩の加護を得べし。"
    }
  },
  "87": {
    "en": {
      "meaning": "This lot embodies the image of resonance and awakening. In all matters, maintain upright conduct and sincere intentions, for then the spirit will respond.",
      "allusion": "The Bodhisattva Guanyin, with boundless compassion, guides all beings to salvation. This lot reveals the importance of adapting to circumstances and cultivating oneself to bring peace to others.",
      "explanation": "Sincere devotion invokes a powerful resonance, making aspirations attainable. Embrace the flow of circumstances, practice kindness, and accumulate virtue—your wishes shall be fulfilled auspiciously.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Blessing"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere intentions bring spiritual response",
        "Adapt to circumstances",
        "Cultivate oneself to bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you shall receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正し、心を誠にし霊を感ずべし。",
      "allusion": "観音大士は慈悲の舟を浮かべ広く衆生を救わんとする。第87の卦は因縁に従い己を修め人を安んずることを諭す。",
      "explanation": "至誠は天地に感応し、願いは叶うべし。因縁に従い善をなし徳を積むとき、吉祥を得ること疑いなし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "出現"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "快方"
        }
      ],
      "keywords": [
        "真心は霊を感ず",
        "因縁に従う",
        "己を修め人を安んずる",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心に由る。純なる心を持ち正しき行いをする者は、菩薩の加護を得ること必定なり。"
    }
  },
  "88": {
    "en": {
      "meaning": "This lot reflects the image of resonance and awakening. In all affairs, maintain upright conduct and sincere intentions, for then the spirit will respond.",
      "allusion": "Pang Hong abused power and falsely accused the loyal, only to bring ruin upon himself. This teaches that one must always follow the righteous path and avoid harming others.",
      "explanation": "Sincere devotion invokes a powerful resonance, making aspirations attainable. Embrace the flow of circumstances, practice kindness, and accumulate virtue—your wishes shall be fulfilled auspiciously.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Safe"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "As Circumstances Allow"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Awaiting the Right Time"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere intentions bring spiritual response",
        "Adapt to circumstances",
        "Cultivate oneself to bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you shall receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦は感応の象なり。万事において行いを正し、心を誠にし霊を感ずべし。",
      "allusion": "龐洪は権力を弄び忠良を誣告し、ついに自らがその報いを受ける。万事において正道を守り、他者を陥れることなかれ。",
      "explanation": "至誠は天地に感応し、願いは叶うべし。因縁に従い善をなし徳を積むとき、吉祥を得ること疑いなし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "安泰"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "随縁"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "待時"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "待ち人",
          "result": "出現"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "快方"
        }
      ],
      "keywords": [
        "真心は霊を感ず",
        "随縁自適",
        "己を修め人を安んずる",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心に由る。純なる心を持ち正しき行いをする者は、菩薩の加護を得ること必定なり。"
    }
  },
  "89": {
    "en": {
      "meaning": "This lot embodies the image of resonance and awakening. In all matters, maintain upright conduct and sincerity, for then the spirit will respond.",
      "allusion": "The Bodhisattva Guanyin, with boundless compassion, guides all beings to salvation, revealing through this lot the importance of adapting to circumstances and cultivating oneself to bring peace to others.",
      "explanation": "Sincere devotion invokes a powerful resonance, making aspirations attainable. Embrace the flow of circumstances, cultivate virtue, and blessings will follow.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Fortune"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere devotion brings spiritual response",
        "Adapt to circumstances",
        "Cultivate oneself to bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦、第89番の霊験の象なり。万事において行いを正しくし、心を誠にし、霊験を感ずべし。",
      "allusion": "観音大士、慈悲の船を浮かべ広く衆生を救い導く。第89番の卦にて、世の人々に因縁に従い己を修め人を安んずべしと示し給う。",
      "explanation": "至誠の念は霊験を呼び起こし、願いは叶うべし。因縁に従い善行を積み徳を積むとき、吉祥至る。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "出現"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸く安し"
        }
      ],
      "keywords": [
        "真心に霊験あり",
        "因縁に従う",
        "己を修め人を安んず",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心より起こる。純なる心を持ち正しき行いをする者は、菩薩の加護を蒙る。"
    }
  },
  "90": {
    "en": {
      "meaning": "This lot reflects the image of resonance and awakening. In all matters, maintain upright conduct and sincerity, for then the spirit will respond.",
      "allusion": "In the Han Dynasty, General Wei Pei led campaigns with remarkable success, earning him titles and honors from the emperor. This symbolizes the sudden arrival of joyous news and the attainment of wealth and honor.",
      "explanation": "Sincere devotion invokes a powerful resonance, making aspirations attainable. Embrace the flow of circumstances, cultivate virtue, and blessings will follow.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Fortune"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere devotion brings spiritual response",
        "Adapt to circumstances",
        "Cultivate oneself to bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦、第90番の霊験の象なり。万事において行いを正しくし、心を誠にし、霊験を感ずべし。",
      "allusion": "漢代の武将・韋佩、幾多の戦いに勝利し、天子の詔により侯爵・宰相に封ぜらる。喜びの報せ突然届き、富貴至るの象なり。",
      "explanation": "至誠の念は霊験を呼び起こし、願いは叶うべし。因縁に従い善行を積み徳を積むとき、吉祥至る。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "待ち人",
          "result": "出現"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸く安し"
        }
      ],
      "keywords": [
        "真心に霊験あり",
        "因縁に従う",
        "己を修め人を安んず",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心より起こる。純なる心を持ち正しき行いをする者は、菩薩の加護を蒙る。"
    }
  },
  "91": {
    "en": {
      "meaning": "This divination signifies the manifestation of profound resonance. Upright conduct and sincere intentions will invoke spiritual efficacy.",
      "allusion": "Guanyin Bodhisattva, the compassionate savior, imparts guidance in this 91st verse, urging humanity to align with karmic conditions and cultivate oneself to bring peace to others.",
      "explanation": "Sincere devotion invokes resonance, and aspirations will find fulfillment. Embrace the flow of circumstances, practice virtue, and accumulate merit—your desires shall be auspicious.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Blessing"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere intentions invoke spiritual efficacy",
        "Embrace circumstances with ease",
        "Cultivate oneself to bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you shall receive the Bodhisattva's hidden protection."
    },
    "ja": {
      "meaning": "此の卦、第九十一の御籤は感応の象なり。万事行い正しく、心誠なれば霊験あり。",
      "allusion": "観音大士、慈航普渡し、第九十一の御籤にて世の人々に因縁に従い己を修め人を安んずべしと示し給う。",
      "explanation": "至誠感格し、願い事叶うべし。因縁に従い、善をなし徳を積むならば、求めるところ吉なり。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "見ゆ"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸く安し"
        }
      ],
      "keywords": [
        "心誠なれば霊験あり",
        "因縁に従い自らを安んず",
        "己を修め人を安んず",
        "福徳と智慧の生長"
      ],
      "zenAdvice": "万般の境遇は心より起こる。純なる心を持ち正しき行いにて、菩薩の加護を得べし。"
    }
  },
  "92": {
    "en": {
      "meaning": "This divination signifies the manifestation of profound resonance. Upright conduct and sincere intentions will invoke spiritual efficacy.",
      "allusion": "Guanyin Bodhisattva, the compassionate savior, imparts guidance in this 92nd verse, urging humanity to align with karmic conditions and cultivate oneself to bring peace to others.",
      "explanation": "Sincere devotion invokes resonance, and aspirations will find fulfillment. Embrace the flow of circumstances, practice virtue, and accumulate merit—your desires shall be auspicious.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Blessing"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere intentions invoke spiritual efficacy",
        "Embrace circumstances with ease",
        "Cultivate oneself to bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you shall receive the Bodhisattva's hidden protection."
    },
    "ja": {
      "meaning": "此の卦、第九十二の御籤は感応の象なり。万事行い正しく、心誠なれば霊験あり。",
      "allusion": "観音大士、慈航普渡し、第九十二の御籤にて世の人々に因縁に従い己を修め人を安んずべしと示し給う。",
      "explanation": "至誠感格し、願い事叶うべし。因縁に従い、善をなし徳を積むならば、求めるところ吉なり。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "見ゆ"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸く安し"
        }
      ],
      "keywords": [
        "心誠なれば霊験あり",
        "因縁に従い自らを安んず",
        "己を修め人を安んず",
        "福徳と智慧の生長"
      ],
      "zenAdvice": "万般の境遇は心より起こる。純なる心を持ち正しき行いにて、菩薩の加護を得べし。"
    }
  },
  "93": {
    "en": {
      "meaning": "This divination sign, the 93rd, embodies the image of resonance and response. In all matters, maintain upright conduct and sincerity, for such purity of heart invokes spiritual efficacy.",
      "allusion": "The Bodhisattva Guanyin, with boundless compassion, guides all beings to salvation. In the 93rd sign, She reveals the importance of aligning with karmic conditions and cultivating oneself to bring peace to others.",
      "explanation": "Sincere devotion invokes divine resonance, and aspirations pursued with integrity are destined for fulfillment. Embrace the flow of circumstances, cultivate virtue, and blessings will naturally follow.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Peace"
        },
        {
          "label": "Self",
          "result": "Harmony"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Follow Circumstances"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Await the Right Time"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Peace"
        },
        {
          "label": "Traveler",
          "result": "Reunion"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincerity invokes spiritual efficacy",
        "Embrace circumstances",
        "Cultivate oneself to bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will naturally receive the Bodhisattva's hidden protection."
    },
    "ja": {
      "meaning": "此の卦、第九十三の御籤は感応の象なり。万事において行いを正しくし、心を誠にし霊験を祈るべし。",
      "allusion": "観音大士、慈悲の船を浮かべ広く衆生を救い給う。第九十三の御籤に於いて、世の人々に因縁に従い己を修め人を安んずべしと示し給う。",
      "explanation": "至誠の心は神仏の感応を呼び起こし、願いは叶うべし。因縁に従い善行を積み徳を修むれば、吉祥至るべし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "平安"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "因縁に従う"
        },
        {
          "label": "取引",
          "result": "成就すべし"
        },
        {
          "label": "縁談",
          "result": "時を待つべし"
        },
        {
          "label": "子宝",
          "result": "平安"
        },
        {
          "label": "待ち人",
          "result": "会う"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "次第に安し"
        }
      ],
      "keywords": [
        "真心は霊験あり",
        "因縁に従う",
        "己を修め人を安んず",
        "福徳と智慧の生長"
      ],
      "zenAdvice": "万事は心より起こる。純なる心を持ち正しい行いをするならば、観音の加護を蒙るべし。"
    }
  },
  "94": {
    "en": {
      "meaning": "This divination sign, the 94th, embodies the image of resonance and response. In all matters, maintain upright conduct and sincerity, for such purity of heart invokes spiritual efficacy.",
      "allusion": "The Bodhisattva Guanyin, with boundless compassion, guides all beings to salvation. In the 94th sign, She reveals the importance of aligning with karmic conditions and cultivating oneself to bring peace to others.",
      "explanation": "Sincere devotion invokes divine resonance, and aspirations pursued with integrity are destined for fulfillment. Embrace the flow of circumstances, cultivate virtue, and blessings will naturally follow.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Fortune"
        },
        {
          "label": "Self",
          "result": "Harmony"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Peace"
        },
        {
          "label": "Traveler",
          "result": "Reunion"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincerity invokes spiritual efficacy",
        "Embrace circumstances",
        "Cultivate oneself to bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will naturally receive the Bodhisattva's hidden protection."
    },
    "ja": {
      "meaning": "此の卦、第九十四の御籤は感応の象なり。万事において行いを正しくし、心を誠にし霊験を祈るべし。",
      "allusion": "観音大士、慈悲の船を浮かべ広く衆生を救い給う。第九十四の御籤に於いて、世の人々に因縁に従い己を修め人を安んずべしと示し給う。",
      "explanation": "至誠の心は神仏の感応を呼び起こし、願いは叶うべし。因縁に従い善行を積み徳を修むれば、吉祥至るべし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就すべし"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "平安"
        },
        {
          "label": "待ち人",
          "result": "会う"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "次第に安し"
        }
      ],
      "keywords": [
        "真心は霊験あり",
        "因縁に従う",
        "己を修め人を安んず",
        "福徳と智慧の生長"
      ],
      "zenAdvice": "万事は心より起こる。純なる心を持ち正しい行いをするならば、観音の加護を蒙るべし。"
    }
  },
  "95": {
    "en": {
      "meaning": "This divination sign, the 95th, embodies the image of resonance and response. In all matters, maintain upright conduct and sincerity, for then the spirit will move.",
      "allusion": "The Bodhisattva Guanyin, with boundless compassion, guides all beings to salvation. In the 95th sign, She reveals to the world the importance of adapting to circumstances and cultivating oneself to bring peace to others.",
      "explanation": "Sincere devotion invokes a powerful resonance; endeavors will meet with success. Embrace the flow of circumstances, practice kindness, and accumulate virtue—your aspirations will be fulfilled auspiciously.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Peaceful"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Follow circumstances"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Await the right time"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Peaceful"
        },
        {
          "label": "Missing Person",
          "result": "Will be found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual recovery"
        }
      ],
      "keywords": [
        "Sincerity invokes spiritual response",
        "Adapt to circumstances",
        "Cultivate oneself to bring peace",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦、第95番の象は、万物に応ずることあり。万事において正しく行い、心を尽くせば霊験あり。",
      "allusion": "観音大士、慈悲の船を浮かべ広く衆生を救う。第95番の象において、世の人々に因縁に従い己を修めて人を安んずべしと示されたるなり。",
      "explanation": "至誠の念は霊験あらたかなり。願いは叶うべし。因縁に従い善をなし徳を積むならば、吉祥を得るべし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "安泰"
        },
        {
          "label": "自身",
          "result": "順調"
        },
        {
          "label": "求財",
          "result": "因縁に従う"
        },
        {
          "label": "取引",
          "result": "成就すべし"
        },
        {
          "label": "縁談",
          "result": "時を待つべし"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "見つかる"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "次第に癒ゆ"
        }
      ],
      "keywords": [
        "真心は霊験あり",
        "因縁に従う",
        "己を修めて人を安んず",
        "福徳と智慧の生長"
      ],
      "zenAdvice": "すべての境遇は心より起こる。純粋な心を持ち正しい行いをするならば、観音の加護を得ること必定なり。"
    }
  },
  "96": {
    "en": {
      "meaning": "This divination sign, the 96th, embodies the image of resonance and response. In all matters, maintain upright conduct and sincerity, for then the spirit will move.",
      "allusion": "The Bodhisattva Guanyin, with boundless compassion, guides all beings to salvation. In the 96th sign, She reveals to the world the importance of adapting to circumstances and cultivating oneself to bring peace to others.",
      "explanation": "Sincere devotion invokes a powerful resonance; endeavors will meet with success. Embrace the flow of circumstances, practice kindness, and accumulate virtue—your aspirations will be fulfilled auspiciously.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great fortune"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Peaceful"
        },
        {
          "label": "Missing Person",
          "result": "Will be found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual recovery"
        }
      ],
      "keywords": [
        "Sincerity invokes spiritual response",
        "Adapt to circumstances",
        "Cultivate oneself to bring peace",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦、第96番の象は、万物に応ずることあり。万事において正しく行い、心を尽くせば霊験あり。",
      "allusion": "観音大士、慈悲の船を浮かべ広く衆生を救う。第96番の象において、世の人々に因縁に従い己を修めて人を安んずべしと示されたるなり。",
      "explanation": "至誠の念は霊験あらたかなり。願いは叶うべし。因縁に従い善をなし徳を積むならば、吉祥を得るべし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順調"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就すべし"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "見つかる"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "次第に癒ゆ"
        }
      ],
      "keywords": [
        "真心は霊験あり",
        "因縁に従う",
        "己を修めて人を安んず",
        "福徳と智慧の生長"
      ],
      "zenAdvice": "すべての境遇は心より起こる。純粋な心を持ち正しい行いをするならば、観音の加護を得ること必定なり。"
    }
  },
  "97": {
    "en": {
      "meaning": "This divination, the 97th lot, embodies the image of resonance and response. In all matters, maintain upright conduct and sincerity, for then the spirit will move.",
      "allusion": "The Bodhisattva Guanyin, with boundless compassion, guides all beings to salvation. In the 97th lot, the message is to align with circumstances and cultivate oneself to bring peace to others.",
      "explanation": "Sincere devotion invokes a powerful resonance, making aspirations attainable. Embrace the flow of circumstances, practice kindness, and accumulate virtue to ensure auspicious outcomes.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Blessing"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere devotion invokes blessings",
        "Embrace circumstances",
        "Cultivate oneself to bring peace",
        "Growth in wisdom and virtue"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦、第97番の御籤は感応の象なり。万事において行いを正しくし、心を誠にし霊を感ずべし。",
      "allusion": "観音大士、慈悲の船を浮かべ広く衆生を救い給う。第97番の御籤にて、世の人々に因縁に従い己を修め人を安んずべしと示し給う。",
      "explanation": "至誠の念は霊を感ぜしめ、願いは叶うべし。因縁に従い善をなし徳を積むとき、吉祥を得べし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "見ゆ"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸安"
        }
      ],
      "keywords": [
        "真心は霊を感ず",
        "因縁に従う",
        "己を修め人を安んず",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "すべての境遇は心より起こる。純なる心を持ち正しい行いをする者は、菩薩の加護を蒙る。"
    }
  },
  "98": {
    "en": {
      "meaning": "This divination, the 98th lot, embodies the image of resonance and response. In all matters, maintain upright conduct and sincerity, for then the spirit will move.",
      "allusion": "The physician Ji Ping of the Three Kingdoms, who attempted to eliminate a treacherous minister, was tortured and died by striking a pillar. This signifies that taking dangerous risks leads to disaster; one should remain cautious and content.",
      "explanation": "Sincere devotion invokes a powerful resonance, making aspirations attainable. Embrace the flow of circumstances, practice kindness, and accumulate virtue to ensure auspicious outcomes.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Safe"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "As Circumstances Allow"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Awaiting the Right Time"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Found"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere devotion invokes blessings",
        "Embrace circumstances",
        "Cultivate oneself to bring peace",
        "Growth in wisdom and virtue"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you will naturally receive the hidden protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦、第98番の御籤は感応の象なり。万事において行いを正しくし、心を誠にし霊を感ずべし。",
      "allusion": "三国時代の医者吉平、奸臣を誅さんと試みて酷刑を受け柱に当たりて死す。危険を冒して幸運を得んとする者は必ず災いを招く。謹んで安分を保つべし。",
      "explanation": "至誠の念は霊を感ぜしめ、願いは叶うべし。因縁に従い善をなし徳を積むとき、吉祥を得べし。",
      "aspects": [
        {
          "label": "家宅",
          "result": "安泰"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "随縁"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "待時"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "見ゆ"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸安"
        }
      ],
      "keywords": [
        "真心は霊を感ず",
        "因縁に従う",
        "己を修め人を安んず",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "すべての境遇は心より起こる。純なる心を持ち正しい行いをする者は、菩薩の加護を蒙る。"
    }
  },
  "99": {
    "en": {
      "meaning": "This divination, the 99th lot, embodies the image of profound resonance. In all matters, maintain upright conduct and sincerity, for where there is true heart, there shall be spiritual efficacy.",
      "allusion": "The Bodhisattva Guanyin, in her boundless compassion, navigates the sea of suffering to guide all beings. In this 99th lot, she reveals the importance of aligning with karma and cultivating oneself to bring peace to others.",
      "explanation": "Sincere devotion invokes divine resonance, and aspirations shall find fulfillment. Embrace the flow of circumstances, practice virtue, and accumulate merit; blessings shall follow.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Auspiciousness"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Reunion"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere heart invokes spiritual efficacy",
        "Embrace circumstances with ease",
        "Cultivate oneself to bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you shall receive the unseen protection of the Bodhisattva."
    },
    "ja": {
      "meaning": "此の卦、第99番の御籤は感応の象なり。万事において行いを正しくし、心を誠にし、真実ならば霊験あり。",
      "allusion": "観音大士、慈悲の船を浮かべ広く衆生を救い給う。第99番の御籤にて、世の人々に因縁に従い己を修め人を安んずべしと示し給う。",
      "explanation": "至誠は神仏の感応を招き、願いは叶うべし。因縁に従い善をなし徳を積むならば、求めるところは吉祥なり。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "見ゆ"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸く安し"
        }
      ],
      "keywords": [
        "真心は霊験あり",
        "因縁に従い自らを安んず",
        "己を修め人を安んず",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心より起こる。純粋な心を持ち正しい行いをするならば、菩薩の加護を得ること必定なり。"
    }
  },
  "100": {
    "en": {
      "meaning": "This divination, the 100th lot, embodies the image of profound resonance. In all matters, maintain upright conduct and sincerity, for where there is true heart, there shall be spiritual efficacy.",
      "allusion": "Confucian, Buddhist, and Daoist sages gather to discuss the Way, where all teachings converge into unity. This symbolizes the attainment of profound insight into life's true nature, achieving harmony and freedom from obstruction.",
      "explanation": "Sincere devotion invokes divine resonance, and aspirations shall find fulfillment. Embrace the flow of circumstances, practice virtue, and accumulate merit; blessings shall follow.",
      "aspects": [
        {
          "label": "Home & Residence",
          "result": "Great Auspiciousness"
        },
        {
          "label": "Self",
          "result": "Favorable"
        },
        {
          "label": "Wealth & Fortune",
          "result": "Prosperous"
        },
        {
          "label": "Business & Trade",
          "result": "Achievable"
        },
        {
          "label": "Marriage & Love",
          "result": "Harmonious"
        },
        {
          "label": "Pregnancy & Birth",
          "result": "Safe"
        },
        {
          "label": "Missing Person",
          "result": "Reunion"
        },
        {
          "label": "Legal Affairs",
          "result": "Reconciliation"
        },
        {
          "label": "Health & Illness",
          "result": "Gradual Recovery"
        }
      ],
      "keywords": [
        "Sincere heart invokes spiritual efficacy",
        "Embrace circumstances with ease",
        "Cultivate oneself to bring peace to others",
        "Growth in blessings and wisdom"
      ],
      "zenAdvice": "All circumstances arise from the mind. Maintain pure intentions and upright actions, and you shall receive the unseen protection of the sages."
    },
    "ja": {
      "meaning": "此の卦、第100番の御籤は感応の象なり。万事において行いを正しくし、心を誠にし、真実ならば霊験あり。",
      "allusion": "儒仏道の聖人、三教の教えを論じ合い、万法帰一となる。人生の真諦を悟り、円満無礙の境地に至ることを示す。",
      "explanation": "至誠は神仏の感応を招き、願いは叶うべし。因縁に従い善をなし徳を積むならば、求めるところは吉祥なり。",
      "aspects": [
        {
          "label": "家宅",
          "result": "大吉"
        },
        {
          "label": "自身",
          "result": "順意"
        },
        {
          "label": "求財",
          "result": "亨通"
        },
        {
          "label": "取引",
          "result": "成就"
        },
        {
          "label": "縁談",
          "result": "和合"
        },
        {
          "label": "子宝",
          "result": "安泰"
        },
        {
          "label": "尋ね人",
          "result": "見ゆ"
        },
        {
          "label": "訴訟",
          "result": "和解"
        },
        {
          "label": "病気",
          "result": "漸く安し"
        }
      ],
      "keywords": [
        "真心は霊験あり",
        "因縁に従い自らを安んず",
        "己を修め人を安んず",
        "福徳と智慧の増長"
      ],
      "zenAdvice": "万事は心より起こる。純粋な心を持ち正しい行いをするならば、聖人の加護を得ること必定なり。"
    }
  }
};
