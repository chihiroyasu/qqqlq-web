# expo-router Tips
**最終更新: 2025年11月1日**
## 目次
- [グループタブを使う時のWARN処理](#グループタブを使う時のwarn処理)
    - [試行](#試行)
    - [なぜ`/details`と認識されないのか](#なぜdetailsindextsxがdetailsと認識されないのか)
    - [警告を消す方法](#警告を消す方法)

### グループタブを使う時のWARN処理
**投稿日: 11月1日**\
expo-routerを使っている時に出た以下のような警告
```
WARN [Layout children]: No route named "details" exists in nested children: ["index", "details/[id]", "details/test"]
```
これは別に気にするほどの警告ではないが、気持ち悪いので詳細を調べてみた。
結論から言えば、`details`ディレクトリと同様の階層に`details.tsx`を置いて`/details`を用意しておけば警告は消える。

#### 試行
ディレクトリ構成は以下のような場合
```
app/
└── (tabs)/
    ├── (home)/
    │   ├── _layout.tsx
    │   ├── index.tsx
    │   └── details/
    │       ├── [id].tsx
    │       └── test.tsx
    └── settings.tsx
```
アプリ自体は正常に動作する。`/details/[id]`や`/details/test`には問題なく遷移可能。

警告は以下のようなもの
```
No route named "details" exists in nested children: ["index", "details/[id]", "details/test"]
```
↑
`details`ディレクトリは存在するが、「存在しない」と言われている...。

`/details`を用意しておく必要があるのかと思ったので、`/details/index.tsx`を追加してみた。ところが...。
```
["index", "details/[id]", "details/index", "details/test"]
```
このように`"details/index"`まで追加されて警告が表示された。
つまり、`details/index.tsx`を作ったのに`"details/index"`として認識されており、`"/details"`にはならなかったということ。

#### なぜ`details/index.tsx`が`/details`と認識されないのか
expo-routerのフォルダ構造が関係している。
(home)のようなグループフォルダがフォルファ構造に含まれるとき、内部的なルート構造は階層的になる。
| ファイル | 実際のルート |
| --- | ---|
| (home)/index.tsx | / |
| (home)/details/[id].tsx | /details/[id] |
| (home)/details/test.tsx | /details/test |
| (home)/details/index.tsx | /details/index |

つまり、`index.tsx`は置かれたフォルダ自体を表すルートとなるが、それがグループフォルダ(`(home)`など)ではない場合は`/"ディレクトリ名"/index`と認識される。

そして警告の正体はexpo-routerが`_layout.tsx`で子ルートを探索しているときに「`details`という直下ルートが見つからない」と勘違いして出したものだった。実際は無害で公式にも同様の報告があるよう。

#### 警告を消す方法
```
app/
└── (tabs)/
    ├── (home)/
    │   ├── _layout.tsx
    │   ├── index.tsx
    │   ├── details.tsx
    │   └── details/
    │       ├── [id].tsx
    │       └── test.tsx
    └── settings.tsx
```
のような構成にして`details.tsx`についても直接置いてしまうという方法がある。