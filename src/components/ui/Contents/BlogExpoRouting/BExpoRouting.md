# Expoの動的ルーティング
expo routerの動的ルートのURLの構築の仕方について学んだことをつらつらと記述していく。

```
import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Link 
                href={{
                    pathname: '/details/[id]',
                    params: { id: 'bacon' },
                }}
            >
                View user details 
            </Link>
        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
```

## 仕組みの概要
expo-routerは「ファイルベースルーティング」を採用している。
```
app/
  index.tsx             ← "/" に対応
  details/
    [id].tsx            ← "/details/任意のid" に対応
```
以上のようなディレクトリ構造であった場合に、Linkコンポーネントで以下のように記述したとき内部的に`/details/bacon`というURLを構築する。
```
<Link
  href={{
    pathname: '/details/[id]',
    params: { id: 'bacon' },
  }}>
  View user details
</Link>
```
→この結果、`app/details/[id].tsx`が読み込まれ、そのコンポーネント内で`useLocalSearchParams()`を使えば
```
const { id } = useLocalSearchParams();
// id === "bacon"
```
という形で取得できる。

これは`/details/[id]?id=bacon`というようなパスと似たようで異なる。
**expo-routerの動的ルーティングはクエリパラメータ(`?id=bacon`)ではなく、URLパスの一部として渡す方式**
pathnameとparamsを組み合わせて自動的にURLを展開するので、`[id]`を`bacon`に置き換えて`/details/bacon`の挙動となる。
```
pathname: "/details/[id]"
params: { id: "bacon" }
```

もし`pathname: "/details/[any]"`だとすれば、paramasのところは`params: {any: bacon}`などと記述する必要がある。
**[]がファイル名を囲わない場合は動的にはならない。ファイル名がもし`app/details.tsx`なら`/details/[id].tsx`のような動的ルートは使えない。**
その場合は、クエリパラメータ方式でルーティングする。後に文法を記述しておく。

### クエリ形式との違い
クエリを用いることはできるが文法は異なる。
```
<Link href={{ pathname: '/details', params: { id: 'bacon' } }}>
  Go to details
</Link>
```
この場合に`/details?id=bacon`という形でルーティングされる。