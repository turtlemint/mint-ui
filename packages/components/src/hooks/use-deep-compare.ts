import { useRef, DependencyList } from "react";
import isEqual from "lodash/fp/isEqual";

const useDeepCompare = (
    value: DependencyList | undefined
): DependencyList | undefined => {
    const ref = useRef<DependencyList | undefined>();
    if (!isEqual(ref.current, value)) {
        ref.current = value;
    }
    return ref.current;
};

export default useDeepCompare;