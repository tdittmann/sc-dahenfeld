import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false,
})
export class OrderPipe implements PipeTransform {
  /**
   * Default compare method
   *
   */
  static defaultCompare(a: any, b: any) {
    if (a && a instanceof Date) {
      a = a.getTime();
    }
    if (b && b instanceof Date) {
      b = b.getTime();
    }

    if (a === b) {
      return 0;
    }
    if (a == null) {
      return 1;
    }
    if (b == null) {
      return -1;
    }
    return a > b ? 1 : -1;
  }

  /**
   * Parse expression, split into items
   */
  static parseExpression(expression: string): string[] {
    expression = expression.replace(/\[(\w+)\]/g, '.$1');
    expression = expression.replace(/^\./, '');
    return expression.split('.');
  }

  /**
   * Get value by expression
   *
   */
  static getValue(object: any, expression: string[]): any {
    for (let i = 0, n = expression.length; i < n; ++i) {
      if (!object) {
        return;
      }
      const k = expression[i];
      if (!(k in object)) {
        return;
      }
      if (typeof object[k] === 'function') {
        object = object[k]();
      } else {
        object = object[k];
      }
    }

    return object;
  }

  /**
   * Set value by expression
   *
   */
  static setValue(object: any, value: any, expression: string[]) {
    let i;
    for (i = 0; i < expression.length - 1; i++) {
      object = object[expression[i]];
    }

    object[expression[i]] = value;
  }

  transform<Type>(value: Type | any[], expression?: any, reverse?: boolean): any {
    if (!value) {
      return value;
    }

    if (Array.isArray(expression)) {
      return this.multiExpressionTransform(value, expression.slice(), reverse);
    }

    if (Array.isArray(value)) {
      return this.sortArray(value.slice(), expression, reverse);
    }

    if (typeof value === 'object') {
      return this.transformObject({ ...value }, expression, reverse);
    }

    return value;
  }

  /**
   * Sort array, returns sorted array
   *
   */
  private sortArray<Type>(array: Type[], expression?: any, reverse?: boolean): Type[] {
    const isDeepLink = expression && expression.indexOf('.') !== -1;

    if (isDeepLink) {
      expression = OrderPipe.parseExpression(expression);
    }

    let compareFn: Function = OrderPipe.defaultCompare;

    const sortedArray: any[] = [...array].sort((a: any, b: any): number => {
      if (!expression) {
        return compareFn(a, b);
      }

      if (!isDeepLink) {
        if (a && b) {
          return compareFn(a[expression], b[expression]);
        }
        return compareFn(a, b);
      }

      return compareFn(OrderPipe.getValue(a, expression), OrderPipe.getValue(b, expression));
    });

    if (reverse) {
      return sortedArray.reverse();
    }

    return sortedArray;
  }

  /**
   * Transform Object
   */
  private transformObject<Type>(value: Type | Type[], expression?: any, reverse?: boolean): any {
    const parsedExpression = OrderPipe.parseExpression(expression);
    let lastPredicate = parsedExpression.pop();
    let oldValue = OrderPipe.getValue(value, parsedExpression);

    if (!Array.isArray(oldValue)) {
      parsedExpression.push(lastPredicate);
      lastPredicate = null;
      oldValue = OrderPipe.getValue(value, parsedExpression);
    }

    if (!oldValue) {
      return value;
    }

    OrderPipe.setValue(value, this.transform(oldValue, lastPredicate, reverse), parsedExpression);
    return value;
  }

  /**
   * Apply multiple expressions
   *
   */
  private multiExpressionTransform(value: any, expressions: any[], reverse: boolean): any {
    return [...expressions].reverse().reduce((result: any, expression: any) => {
      return this.transform(result, expression, reverse);
    }, value);
  }
}
