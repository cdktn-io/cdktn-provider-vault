# `transformTransformationTokenization` Submodule <a name="`transformTransformationTokenization` Submodule" id="@cdktn/provider-vault.transformTransformationTokenization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformTransformationTokenization <a name="TransformTransformationTokenization" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization vault_transform_transformation_tokenization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer"></a>

```typescript
import { transformTransformationTokenization } from '@cdktn/provider-vault'

new transformTransformationTokenization.TransformTransformationTokenization(scope: Construct, id: string, config: TransformTransformationTokenizationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig">TransformTransformationTokenizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig">TransformTransformationTokenizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetAllowedRoles">resetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetConvergent">resetConvergent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetDeletionAllowed">resetDeletionAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetMappingMode">resetMappingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetStores">resetStores</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedRoles` <a name="resetAllowedRoles" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetAllowedRoles"></a>

```typescript
public resetAllowedRoles(): void
```

##### `resetConvergent` <a name="resetConvergent" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetConvergent"></a>

```typescript
public resetConvergent(): void
```

##### `resetDeletionAllowed` <a name="resetDeletionAllowed" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetDeletionAllowed"></a>

```typescript
public resetDeletionAllowed(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMappingMode` <a name="resetMappingMode" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetMappingMode"></a>

```typescript
public resetMappingMode(): void
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetMaxTtl"></a>

```typescript
public resetMaxTtl(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetStores` <a name="resetStores" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetStores"></a>

```typescript
public resetStores(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TransformTransformationTokenization resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isConstruct"></a>

```typescript
import { transformTransformationTokenization } from '@cdktn/provider-vault'

transformTransformationTokenization.TransformTransformationTokenization.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isTerraformElement"></a>

```typescript
import { transformTransformationTokenization } from '@cdktn/provider-vault'

transformTransformationTokenization.TransformTransformationTokenization.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isTerraformResource"></a>

```typescript
import { transformTransformationTokenization } from '@cdktn/provider-vault'

transformTransformationTokenization.TransformTransformationTokenization.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.generateConfigForImport"></a>

```typescript
import { transformTransformationTokenization } from '@cdktn/provider-vault'

transformTransformationTokenization.TransformTransformationTokenization.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a TransformTransformationTokenization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransformTransformationTokenization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransformTransformationTokenization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TransformTransformationTokenization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.allowedRolesInput">allowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.convergentInput">convergentInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.deletionAllowedInput">deletionAllowedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.mappingModeInput">mappingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.maxTtlInput">maxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.storesInput">storesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.convergent">convergent</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.deletionAllowed">deletionAllowed</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.mappingMode">mappingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.maxTtl">maxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.stores">stores</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `allowedRolesInput`<sup>Optional</sup> <a name="allowedRolesInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.allowedRolesInput"></a>

```typescript
public readonly allowedRolesInput: string[];
```

- *Type:* string[]

---

##### `convergentInput`<sup>Optional</sup> <a name="convergentInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.convergentInput"></a>

```typescript
public readonly convergentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deletionAllowedInput`<sup>Optional</sup> <a name="deletionAllowedInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.deletionAllowedInput"></a>

```typescript
public readonly deletionAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mappingModeInput`<sup>Optional</sup> <a name="mappingModeInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.mappingModeInput"></a>

```typescript
public readonly mappingModeInput: string;
```

- *Type:* string

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.maxTtlInput"></a>

```typescript
public readonly maxTtlInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `storesInput`<sup>Optional</sup> <a name="storesInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.storesInput"></a>

```typescript
public readonly storesInput: string[];
```

- *Type:* string[]

---

##### `allowedRoles`<sup>Required</sup> <a name="allowedRoles" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

---

##### `convergent`<sup>Required</sup> <a name="convergent" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.convergent"></a>

```typescript
public readonly convergent: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deletionAllowed`<sup>Required</sup> <a name="deletionAllowed" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.deletionAllowed"></a>

```typescript
public readonly deletionAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mappingMode`<sup>Required</sup> <a name="mappingMode" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.mappingMode"></a>

```typescript
public readonly mappingMode: string;
```

- *Type:* string

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `stores`<sup>Required</sup> <a name="stores" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.stores"></a>

```typescript
public readonly stores: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransformTransformationTokenizationConfig <a name="TransformTransformationTokenizationConfig" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.Initializer"></a>

```typescript
import { transformTransformationTokenization } from '@cdktn/provider-vault'

const transformTransformationTokenizationConfig: transformTransformationTokenization.TransformTransformationTokenizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.name">name</a></code> | <code>string</code> | The name of the transformation. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.path">path</a></code> | <code>string</code> | The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | Specifies a list of allowed roles that this transformation can be assigned to. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.convergent">convergent</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether to use convergent tokenization, where tokenization of the same plaintext more than once results in the same token. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.deletionAllowed">deletionAllowed</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, this transform can be deleted. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#id TransformTransformationTokenization#id}. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.mappingMode">mappingMode</a></code> | <code>string</code> | Specifies the mapping mode for stored tokenization values. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.maxTtl">maxTtl</a></code> | <code>number</code> | The maximum TTL of a token. If 0 or unspecified, tokens may have no expiration. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.stores">stores</a></code> | <code>string[]</code> | The list of tokenization stores to use for tokenization state. Vault's internal storage is used by default. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#name TransformTransformationTokenization#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#path TransformTransformationTokenization#path}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

Specifies a list of allowed roles that this transformation can be assigned to.

A role using this transformation must exist in this list in order for encode and decode operations to properly function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#allowed_roles TransformTransformationTokenization#allowed_roles}

---

##### `convergent`<sup>Optional</sup> <a name="convergent" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.convergent"></a>

```typescript
public readonly convergent: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether to use convergent tokenization, where tokenization of the same plaintext more than once results in the same token.

Defaults to false as unique tokens are more desirable from a security standpoint if there isn't a use-case need for convergence. This property cannot be changed after the transform is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#convergent TransformTransformationTokenization#convergent}

---

##### `deletionAllowed`<sup>Optional</sup> <a name="deletionAllowed" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.deletionAllowed"></a>

```typescript
public readonly deletionAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, this transform can be deleted.

Otherwise deletion is blocked while this value remains false. Note that deleting the transform deletes the underlying key making decoding of tokenized values impossible without restoring from a backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#deletion_allowed TransformTransformationTokenization#deletion_allowed}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#id TransformTransformationTokenization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mappingMode`<sup>Optional</sup> <a name="mappingMode" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.mappingMode"></a>

```typescript
public readonly mappingMode: string;
```

- *Type:* string

Specifies the mapping mode for stored tokenization values.

default is strongly recommended for highest security. exportable allows for all plaintexts to be decoded via the export-decoded endpoint in an emergency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#mapping_mode TransformTransformationTokenization#mapping_mode}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

The maximum TTL of a token. If 0 or unspecified, tokens may have no expiration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#max_ttl TransformTransformationTokenization#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#namespace TransformTransformationTokenization#namespace}

---

##### `stores`<sup>Optional</sup> <a name="stores" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.stores"></a>

```typescript
public readonly stores: string[];
```

- *Type:* string[]

The list of tokenization stores to use for tokenization state. Vault's internal storage is used by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#stores TransformTransformationTokenization#stores}

---



