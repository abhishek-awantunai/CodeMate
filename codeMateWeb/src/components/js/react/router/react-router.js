/*

Sample Routes

No need of Switch instead we use Routes
No need of exact in Routes
Redirect -> Navigate

<BrowserRouter>
    <Routes>
        <Route path='/sample' element={<Navigate to='/welcome' />} />   // we will push the page to browser history call stack
        <Route path='/sample' element={<Navigate replace to='/welcome' />} />   // we will just replace the current page
        <Route path='/' element={<Welcome />} />
        <Route path='/product' element={<About />} />
        <Route path='/product/:id' element={<About />} />
        <Route path='/about' element={<About />} />
        <Route path='/welcome' element={<Welcome />} />
    </Routes>
</BrowserRouter>

<Link to='/about' /> its same
<NavLink className={(navData)=> navData.isActive ? 'active' : '' } to='/welcome' />

const navigate = useNavigate();
navigate('/welcome', {replace: true});
navigate(-1); // got to previous
navigate(1);    // to go forward
navigate(-2)

<Prompt /> to prevent user from exiting pages with un-save changes is not available in rrd6

*/