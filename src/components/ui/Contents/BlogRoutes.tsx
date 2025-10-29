import { Routes, Route } from 'react-router-dom';
import BlogTest from './BlogTest/BTest';
import BlogSearch from './BlogSearch';
import BlogInitial from './BlogInitial/BInitial';
import Blogs from './Blogs';
import MD from './BlogMD/BMD';
import BExpoRouting from './BlogExpoRouting/BExpoRouting';


function BlogRoutes() {
  return (
    <Routes>
      {/* /blog へのアクセス時 */}
      <Route index element={<Blogs />} />

      {/* /blog/list へのアクセス時 */}
      <Route path="tag" element={<BlogSearch />} />

      <Route path="md" element={<MD />} />
      
      {/* /blog/test へのアクセス時 */}
      <Route path="test" element={<BlogTest />} />
      
      {/* /blog/initial へのアクセス時 */}
      <Route path="initial" element={<BlogInitial />} />

      {/* /blog/expo-routing-basic へのアクセス時 */}
      <Route path="expo-routing-basic" element={<BExpoRouting />} />
      
      {/* その他のブログルート用の404 */}
      <Route path="*" element={<div>Blog Not Found</div>} />
    </Routes>
  );
}

export default BlogRoutes;