#### 并查集
并查集主要是为了解决动态连通性问题，这里主要是利用了一个技巧，就是用一个数组来表示连通的集合。这样，合并就抽象为将一个集合的值变为另一个集合。判断两个变量是否连通抽象为两个变量是否属于同一个集合。这里的实现是使用一个数组来记录父节点，如果父节点是本身，那么这个值就代表一个集合。这里进行了一点优化，就是在合并的时候，将小树合并到大树。

`
class UnionFind{
public:
    UnionFind(int n):cnt(n){
        for(int i=0;i<n;i++){
            id.push_back(i);
            size.push_back(1);
        }
    }

    int find(int p){
        while(p != id[p]){
            p = id[p];
        }
        return p;
    }

    void merge(int p, int q){
        int i = find(p);
        int j = find(q);
        if(i == j){
            return;
        }
        if(size[i] < size[j]){
            id[i] = j;
            size[j] += size[i];
        }else{
            id[j] = i;
            size[i] += size[j]; 
        }
        cnt--;
    }

    int count(){
        return cnt;
    }

private:
    vector<int> id;
    vector<int> size;
    int cnt;
};
`

#### 字典树

字典树的实现个人认为还是比较简单，主要是递归的应用，其实这里是可以不使用递归的，但是为了简单起见，使用递归可以使得思路更加清晰。这里需要注意的一点是，使用连接代表字母，而不是使用结点代表字母；结点只是表示从root到该结点的之间组成的单词是否存在。

`
class Trie {
public:
    Trie():root(NULL){}

    ~Trie(){
        delete root;
    }

    void insert(string word) {
        root = put(root,word,0);
    }
    
    bool search(string word) {
        return get(root,word,0);
    }
    
    bool startsWith(string prefix) {
        return find(root,prefix,0);
    }

    void delWord(string word){
        root = del(root,word,0);
    }

private:
    class Node{
    public:
        Node():isEnd(false){
            for(int i=0;i<26;i++){
                child[i] = NULL;
            }
        }
        ~Node(){
            for(int i=0;i<26;i++){
                if(child[i] != NULL){
                    delete child[i];
                }
            }
        }
        Node *child[26];
        bool isEnd;
    };

    Node *root;

    Node* put(Node *node, string word, int n){
        if(node == NULL){
            node = new Node();
        }    
        if(n == word.size()){
            node->isEnd = true;
        }else{
            int pos = word[n] - 'a';
            node->child[pos] = put(node->child[pos],word,n+1);
        }
        return node;
    }

    bool get(Node *node, string word, int n){
        if(node == NULL){
            return false;
        }
        if(n == word.size()){
            return node->isEnd;
        }else{
            int pos = word[n] - 'a';
            return get(node->child[pos],word,n+1);
        }
    }

    bool find(Node *node, string word, int n){
        if(node == NULL){
            return false;
        }
        if(n == word.size()){
            return true;
        }else{
            int pos = word[n] - 'a';
            return find(node->child[pos],word,n+1);
        }
    }

    Node* del(Node *node, string word, int n){
        if(node == NULL){
            return NULL;
        }
        if(n == word.size()){
            node->isEnd = false;
        }else{
            int pos = word[n] - 'a';
            node->child[pos] = del(node->child[pos],word,n+1);
        }
        if(node->isEnd == true){
            return node;
        }
        for(int i=0;i<26;i++){
            if(node->child[i] != NULL){
                return node;
            }
        }
        delete node;
        return NULL;
    }
};
`






























