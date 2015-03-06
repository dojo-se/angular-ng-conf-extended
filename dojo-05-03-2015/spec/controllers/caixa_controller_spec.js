describe("controller: CaixaController", function() {

  beforeEach(function() {
    module("app");
  });

  beforeEach(inject(function($controller, $rootScope) {
    this.scope = $rootScope.$new();

    this.caixaController = $controller('CaixaController', {
      $scope: this.scope
    });

  }));

  describe("teste inicial CaixaController", function() {
    it("Para saldo 0, 0 notas", function() {
      this.scope.saque = '0';
      this.scope.calcularNotas();
      expect(this.scope.numeroNotas).toBe(0);
    });

    it("Para saldo 10, 1 nota", function(){
      this.scope.saque = '10';
      this.scope.calcularNotas();
      expect(this.scope.numeroNotas).toBe(1);
      
    });

    it("Para saldo 75, 3 nota", function(){
      this.scope.saque = '75';
      this.scope.calcularNotas();
      expect(this.scope.numeroNotas).toBe(3);
    });

    it("Para saldo 200, 2 nota", function(){
      this.scope.saque = '200';
      this.scope.calcularNotas();
      expect(this.scope.numeroNotas).toBe(2);
      
    });

    it("Para saldo 203, 2 nota", function(){
      this.scope.saque = '203';
      this.scope.calcularNotas();
      expect(this.scope.numeroNotas).toBe(2);
      
    });

    it("Para saldo 210, 3 nota", function(){
      this.scope.saque = '210';
      this.scope.calcularNotas();
      expect(this.scope.numeroNotas).toBe(3);
      
    });
  });
});
