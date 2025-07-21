import React from 'react';
import image1 from '../images/image_1.jpg';
import image2 from '../images/image_2.jpg';
import image3 from '../images/image_3.jpg';
import person2 from '../images/person_2.jpg';
import person4 from '../images/person_4.jpg';
import Navbar from './Navbar';
import Footer from './Footer';

const BlogPost = () => {
  return (
    <>
    <Navbar/>
    <section className="pt-24 text-left bg-black text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="w-full md:w-8/12">
            <h2 className="text-3xl font-bold text-[#c49b63] mb-6">10 Tips For The Traveler</h2>
            <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p>
            
            <img src={image1} alt="Travel tips" className="w-full h-auto rounded-lg mb-6" />
            
            <p className="mb-6">Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!</p>
            
            <h2 className="text-2xl font-bold text-[#c49b63] mb-6 mt-8">#2. Creative WordPress Themes</h2>
            <p className="mb-6">Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.</p>
            
            <img src={image2} alt="WordPress themes" className="w-full h-auto rounded-lg mb-6" />
            
            <p className="mb-6">Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.</p>
            <p className="mb-6">Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.</p>
            <p className="mb-8">Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!</p>
            <p className="mb-8">Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?</p>
            
            <div className="tag-widget mb-8">
              <div className="flex flex-wrap gap-2">
                <a href="#" className="tag-cloud-link px-3 py-1 bg-gray-800 rounded-full text-sm hover:bg-[#c49b63] hover:text-gray-900 transition-colors">Life</a>
                <a href="#" className="tag-cloud-link px-3 py-1 bg-gray-800 rounded-full text-sm hover:bg-[#c49b63] hover:text-gray-900 transition-colors">Sport</a>
                <a href="#" className="tag-cloud-link px-3 py-1 bg-gray-800 rounded-full text-sm hover:bg-[#c49b63] hover:text-gray-900 transition-colors">Tech</a>
                <a href="#" className="tag-cloud-link px-3 py-1 bg-gray-800 rounded-full text-sm hover:bg-[#c49b63] hover:text-gray-900 transition-colors">Travel</a>
              </div>
            </div>
            
            <div className="about-author flex flex-col md:flex-row gap-6 mb-12 p-6 bg-gray-800 rounded-lg">
              <div className="flex-shrink-0">
                <img src={person4} alt="Lance Smith" className="w-24 h-24 rounded-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Lance Smith</h3>
                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-700">
              <h3 className="text-2xl font-bold text-[#c49b63] mb-8">6 Comments</h3>
              
              <ul className="comment-list space-y-8">
                {/* Comment 1 */}
                <li className="comment">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <img src={person2} alt="John Doe" className="w-12 h-12 rounded-full" />
                    </div>
                    <div className="comment-body bg-gray-800 p-4 rounded-lg flex-1">
                      <h3 className="text-lg font-bold text-white">John Doe</h3>
                      <div className="meta text-sm text-gray-500 mb-3">June 27, 2018 at 2:21pm</div>
                      <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                      <p className="mt-3"><a href="#" className="reply text-[#c49b63] hover:text-[#d8af70]">Reply</a></p>
                    </div>
                  </div>

                  {/* Nested Comments */}
                  <ul className="children mt-6 ml-4 md:ml-12 space-y-6 border-l-2 border-gray-700 pl-4 md:pl-8">
                    <li className="comment">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <img src={person2} alt="John Doe" className="w-12 h-12 rounded-full" />
                        </div>
                        <div className="comment-body bg-gray-800 p-4 rounded-lg flex-1">
                          <h3 className="text-lg font-bold text-white">John Doe</h3>
                          <div className="meta text-sm text-gray-500 mb-3">June 27, 2018 at 2:21pm</div>
                          <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                          <p className="mt-3"><a href="#" className="reply text-[#c49b63] hover:text-[#d8af70]">Reply</a></p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>

                {/* Comment 2 */}
                <li className="comment">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <img src={person2} alt="John Doe" className="w-12 h-12 rounded-full" />
                    </div>
                    <div className="comment-body bg-gray-800 p-4 rounded-lg flex-1">
                      <h3 className="text-lg font-bold text-white">John Doe</h3>
                      <div className="meta text-sm text-gray-500 mb-3">June 27, 2018 at 2:21pm</div>
                      <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                      <p className="mt-3"><a href="#" className="reply text-[#c49b63] hover:text-[#d8af70]">Reply</a></p>
                    </div>
                  </div>
                </li>
              </ul>

              {/* Comment Form */}
              <div className="comment-form-wrap pt-8 mt-8 border-t border-gray-700">
                <h3 className="text-2xl font-bold text-[#c49b63] mb-6">Leave a comment</h3>
                <form className="space-y-4">
                  <div className="form-group">
                    <label htmlFor="name" className="block text-gray-400 mb-2">Name *</label>
                    <input type="text" id="name" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#c49b63]" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="block text-gray-400 mb-2">Email *</label>
                    <input type="email" id="email" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#c49b63]" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="website" className="block text-gray-400 mb-2">Website</label>
                    <input type="url" id="website" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#c49b63]" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                    <textarea id="message" rows="6" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#c49b63]"></textarea>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="bg-[#c49b63] hover:bg-[#d8af70] text-gray-900 font-bold py-3 px-6 rounded transition-colors">
                      Post Comment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-4/12 space-y-8">
            <div className="sidebar-box p-6 bg-gray-800 rounded-lg">
              <form className="search-form">
                <div className="form-group relative">
                  <div className="icon absolute left-3 top-3 text-gray-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                  <input type="text" className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#c49b63]" placeholder="Search..." />
                </div>
              </form>
            </div>

            <div className="sidebar-box p-6 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
              <ul className="categories space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#c49b63] transition-colors">Tour <span className="text-gray-500">(12)</span></a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#c49b63] transition-colors">Hotel <span className="text-gray-500">(22)</span></a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#c49b63] transition-colors">Coffee <span className="text-gray-500">(37)</span></a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#c49b63] transition-colors">Drinks <span className="text-gray-500">(42)</span></a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#c49b63] transition-colors">Foods <span className="text-gray-500">(14)</span></a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#c49b63] transition-colors">Travel <span className="text-gray-500">(140)</span></a></li>
              </ul>
            </div>

            <div className="sidebar-box p-6 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Recent Blog</h3>
              
              <div className="block-21 mb-4 flex gap-4">
                <div className="blog-img w-20 h-20 flex-shrink-0 bg-cover bg-center rounded" style={{backgroundImage: `url(${image1})`}}></div>
                <div className="text">
                  <h3 className="heading text-white font-medium mb-1"><a href="#" className="hover:text-[#c49b63] transition-colors">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <div className="meta flex gap-3 text-sm text-gray-500">
                    <div><span>July 12, 2018</span></div>
                    <div><span>Admin</span></div>
                    <div><span>19</span></div>
                  </div>
                </div>
              </div>
              
              <div className="block-21 mb-4 flex gap-4">
                <div className="blog-img w-20 h-20 flex-shrink-0 bg-cover bg-center rounded" style={{backgroundImage: `url(${image2})`}}></div>
                <div className="text">
                  <h3 className="heading text-white font-medium mb-1"><a href="#" className="hover:text-[#c49b63] transition-colors">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <div className="meta flex gap-3 text-sm text-gray-500">
                    <div><span>July 12, 2018</span></div>
                    <div><span>Admin</span></div>
                    <div><span>19</span></div>
                  </div>
                </div>
              </div>
              
              <div className="block-21 mb-4 flex gap-4">
                <div className="blog-img w-20 h-20 flex-shrink-0 bg-cover bg-center rounded" style={{backgroundImage: `url(${image3})`}}></div>
                <div className="text">
                  <h3 className="heading text-white font-medium mb-1"><a href="#" className="hover:text-[#c49b63] transition-colors">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <div className="meta flex gap-3 text-sm text-gray-500">
                    <div><span>July 12, 2018</span></div>
                    <div><span>Admin</span></div>
                    <div><span>19</span></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sidebar-box p-6 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Tag Cloud</h3>
              <div className="tagcloud flex flex-wrap gap-2">
                <a href="#" className="tag-cloud-link px-3 py-1 bg-gray-700 rounded-full text-sm hover:bg-[#c49b63] hover:text-gray-900 transition-colors">dish</a>
                <a href="#" className="tag-cloud-link px-3 py-1 bg-gray-700 rounded-full text-sm hover:bg-[#c49b63] hover:text-gray-900 transition-colors">menu</a>
                <a href="#" className="tag-cloud-link px-3 py-1 bg-gray-700 rounded-full text-sm hover:bg-[#c49b63] hover:text-gray-900 transition-colors">food</a>
                <a href="#" className="tag-cloud-link px-3 py-1 bg-gray-700 rounded-full text-sm hover:bg-[#c49b63] hover:text-gray-900 transition-colors">sweet</a>
                <a href="#" className="tag-cloud-link px-3 py-1 bg-gray-700 rounded-full text-sm hover:bg-[#c49b63] hover:text-gray-900 transition-colors">tasty</a>
                <a href="#" className="tag-cloud-link px-3 py-1 bg-gray-700 rounded-full text-sm hover:bg-[#c49b63] hover:text-gray-900 transition-colors">delicious</a>
                <a href="#" className="tag-cloud-link px-3 py-1 bg-gray-700 rounded-full text-sm hover:bg-[#c49b63] hover:text-gray-900 transition-colors">desserts</a>
                <a href="#" className="tag-cloud-link px-3 py-1 bg-gray-700 rounded-full text-sm hover:bg-[#c49b63] hover:text-gray-900 transition-colors">drinks</a>
              </div>
            </div>

            <div className="sidebar-box p-6 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Paragraph</h3>
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default BlogPost;