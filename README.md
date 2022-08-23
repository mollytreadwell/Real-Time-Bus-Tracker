# Real Time Bus Tracker

## Application Programming Interface

This project shows the active bus routes in downtown Boston. 

## Real Time Routes

Using data collected from the Massachusetts Bay Transportation Authority website, I have marked the locations of the buses that are in service weekday mornings. I gathered the GPS coordinates by searching through the JSON file within the browser devtools. The coordinates were put into a JavaScript array and filtered through with the function <i>move()</i>. 

### What Comes Next?

Although this map displays active bus routes, I could show other data such as weekend routes, certain bus lines (orange, red, green...), subway routes, routes that move through certain areas (for example, if I wanted to know all of the busses that go through South Station), or even routes that lead to the harbor and ferry services. 

### MIT License

MIT License

Copyright (c) 2020 John Williams

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

