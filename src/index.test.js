import * as React from 'react'
import Repeat from './index'
import renderer from 'react-test-renderer'

describe('Repeat', function () {
   it('should display one element', function () {
      const component = renderer.create(
         <Repeat size={1}>
           <li>🔥</li>
         </Repeat>,
      )
      let tree = component.toJSON()
      expect(tree).toMatchSnapshot()
   })

   it('should repeat two elements twice', function () {
      const component = renderer.create(
         <Repeat size={4}>
           <li>🔥</li>
           <li>🍏</li>
         </Repeat>,
      )
      let tree = component.toJSON()
      expect(tree).toMatchSnapshot()
   })

   it('should repeat a React Component six times', function () {
      const MyComp = function (props) {
         return (
            <button onClick={props.onClick}>Click</button>
         )
      }

      const component = renderer.create(
         <Repeat size={6}>
           <MyComp />
         </Repeat>,
      )

      let tree = component.toJSON()
      expect(tree).toMatchSnapshot()
   })

   it('should repeat a React Component and call listeners', function () {
      const MyComp = function (props) {
         return (
            <button onClick={props.onClick}>Click me!</button>
         )
      }

      const validateSpy = jest.fn()

      const component = renderer.create(
         <Repeat size={6}>
           <MyComp onClick={validateSpy} />
         </Repeat>
      )

      let tree = component.toJSON()
      expect(tree).toMatchSnapshot()
      // manually trigger the callback
      tree[0].props.onClick();
      tree[0].props.onClick();
      expect(validateSpy).toHaveBeenCalledTimes(2)
   })

})
