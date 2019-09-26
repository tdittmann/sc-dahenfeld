export abstract class Mapper<I, O> {
    abstract mapFrom(param: I): O;

    // TODO tdit0703: Brauch ich das überhaupt? Falls nein kann auch das Interface weg :O
    abstract mapTo(param: O): I;
}
