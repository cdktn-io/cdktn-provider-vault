# `mfaTotp` Submodule <a name="`mfaTotp` Submodule" id="@cdktn/provider-vault.mfaTotp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MfaTotp <a name="MfaTotp" id="@cdktn/provider-vault.mfaTotp.MfaTotp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp vault_mfa_totp}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer"></a>

```typescript
import { mfaTotp } from '@cdktn/provider-vault'

new mfaTotp.MfaTotp(scope: Construct, id: string, config: MfaTotpConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig">MfaTotpConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig">MfaTotpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.resetDigits">resetDigits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.resetKeySize">resetKeySize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.resetMaxValidationAttempts">resetMaxValidationAttempts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.resetQrSize">resetQrSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.resetSkew">resetSkew</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.mfaTotp.MfaTotp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.mfaTotp.MfaTotp.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.mfaTotp.MfaTotp.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.mfaTotp.MfaTotp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.mfaTotp.MfaTotp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.mfaTotp.MfaTotp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.mfaTotp.MfaTotp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.mfaTotp.MfaTotp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.mfaTotp.MfaTotp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.mfaTotp.MfaTotp.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.mfaTotp.MfaTotp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.mfaTotp.MfaTotp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.mfaTotp.MfaTotp.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.mfaTotp.MfaTotp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.mfaTotp.MfaTotp.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.mfaTotp.MfaTotp.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.mfaTotp.MfaTotp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.mfaTotp.MfaTotp.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.mfaTotp.MfaTotp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.mfaTotp.MfaTotp.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.mfaTotp.MfaTotp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.mfaTotp.MfaTotp.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.mfaTotp.MfaTotp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.mfaTotp.MfaTotp.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.mfaTotp.MfaTotp.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.mfaTotp.MfaTotp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktn/provider-vault.mfaTotp.MfaTotp.resetAlgorithm"></a>

```typescript
public resetAlgorithm(): void
```

##### `resetDigits` <a name="resetDigits" id="@cdktn/provider-vault.mfaTotp.MfaTotp.resetDigits"></a>

```typescript
public resetDigits(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.mfaTotp.MfaTotp.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeySize` <a name="resetKeySize" id="@cdktn/provider-vault.mfaTotp.MfaTotp.resetKeySize"></a>

```typescript
public resetKeySize(): void
```

##### `resetMaxValidationAttempts` <a name="resetMaxValidationAttempts" id="@cdktn/provider-vault.mfaTotp.MfaTotp.resetMaxValidationAttempts"></a>

```typescript
public resetMaxValidationAttempts(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.mfaTotp.MfaTotp.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktn/provider-vault.mfaTotp.MfaTotp.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetQrSize` <a name="resetQrSize" id="@cdktn/provider-vault.mfaTotp.MfaTotp.resetQrSize"></a>

```typescript
public resetQrSize(): void
```

##### `resetSkew` <a name="resetSkew" id="@cdktn/provider-vault.mfaTotp.MfaTotp.resetSkew"></a>

```typescript
public resetSkew(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MfaTotp resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.mfaTotp.MfaTotp.isConstruct"></a>

```typescript
import { mfaTotp } from '@cdktn/provider-vault'

mfaTotp.MfaTotp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.mfaTotp.MfaTotp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.mfaTotp.MfaTotp.isTerraformElement"></a>

```typescript
import { mfaTotp } from '@cdktn/provider-vault'

mfaTotp.MfaTotp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.mfaTotp.MfaTotp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.mfaTotp.MfaTotp.isTerraformResource"></a>

```typescript
import { mfaTotp } from '@cdktn/provider-vault'

mfaTotp.MfaTotp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.mfaTotp.MfaTotp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.mfaTotp.MfaTotp.generateConfigForImport"></a>

```typescript
import { mfaTotp } from '@cdktn/provider-vault'

mfaTotp.MfaTotp.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MfaTotp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.mfaTotp.MfaTotp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.mfaTotp.MfaTotp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MfaTotp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.mfaTotp.MfaTotp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MfaTotp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.mfaTotp.MfaTotp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MfaTotp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.algorithmInput">algorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.digitsInput">digitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.keySizeInput">keySizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.maxValidationAttemptsInput">maxValidationAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.periodInput">periodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.qrSizeInput">qrSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.skewInput">skewInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.digits">digits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.keySize">keySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.maxValidationAttempts">maxValidationAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.qrSize">qrSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.skew">skew</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: string;
```

- *Type:* string

---

##### `digitsInput`<sup>Optional</sup> <a name="digitsInput" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.digitsInput"></a>

```typescript
public readonly digitsInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `keySizeInput`<sup>Optional</sup> <a name="keySizeInput" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.keySizeInput"></a>

```typescript
public readonly keySizeInput: number;
```

- *Type:* number

---

##### `maxValidationAttemptsInput`<sup>Optional</sup> <a name="maxValidationAttemptsInput" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.maxValidationAttemptsInput"></a>

```typescript
public readonly maxValidationAttemptsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.periodInput"></a>

```typescript
public readonly periodInput: number;
```

- *Type:* number

---

##### `qrSizeInput`<sup>Optional</sup> <a name="qrSizeInput" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.qrSizeInput"></a>

```typescript
public readonly qrSizeInput: number;
```

- *Type:* number

---

##### `skewInput`<sup>Optional</sup> <a name="skewInput" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.skewInput"></a>

```typescript
public readonly skewInput: number;
```

- *Type:* number

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `digits`<sup>Required</sup> <a name="digits" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.digits"></a>

```typescript
public readonly digits: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `keySize`<sup>Required</sup> <a name="keySize" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.keySize"></a>

```typescript
public readonly keySize: number;
```

- *Type:* number

---

##### `maxValidationAttempts`<sup>Required</sup> <a name="maxValidationAttempts" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.maxValidationAttempts"></a>

```typescript
public readonly maxValidationAttempts: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `qrSize`<sup>Required</sup> <a name="qrSize" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.qrSize"></a>

```typescript
public readonly qrSize: number;
```

- *Type:* number

---

##### `skew`<sup>Required</sup> <a name="skew" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.skew"></a>

```typescript
public readonly skew: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.mfaTotp.MfaTotp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MfaTotpConfig <a name="MfaTotpConfig" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.Initializer"></a>

```typescript
import { mfaTotp } from '@cdktn/provider-vault'

const mfaTotpConfig: mfaTotp.MfaTotpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.issuer">issuer</a></code> | <code>string</code> | The name of the key's issuing organization. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.name">name</a></code> | <code>string</code> | Name of the MFA method. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.algorithm">algorithm</a></code> | <code>string</code> | Specifies the hashing algorithm used to generate the TOTP code. Options include 'SHA1', 'SHA256' and 'SHA512'. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.digits">digits</a></code> | <code>number</code> | The number of digits in the generated TOTP token. This value can either be 6 or 8. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.id">id</a></code> | <code>string</code> | ID computed by Vault. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.keySize">keySize</a></code> | <code>number</code> | Specifies the size in bytes of the generated key. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.maxValidationAttempts">maxValidationAttempts</a></code> | <code>number</code> | The maximum number of consecutive failed validation attempts allowed. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.period">period</a></code> | <code>number</code> | The length of time used to generate a counter for the TOTP token calculation. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.qrSize">qrSize</a></code> | <code>number</code> | The pixel size of the generated square QR code. |
| <code><a href="#@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.skew">skew</a></code> | <code>number</code> | The number of delay periods that are allowed when validating a TOTP token. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

The name of the key's issuing organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#issuer MfaTotp#issuer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the MFA method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#name MfaTotp#name}

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

Specifies the hashing algorithm used to generate the TOTP code. Options include 'SHA1', 'SHA256' and 'SHA512'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#algorithm MfaTotp#algorithm}

---

##### `digits`<sup>Optional</sup> <a name="digits" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.digits"></a>

```typescript
public readonly digits: number;
```

- *Type:* number

The number of digits in the generated TOTP token. This value can either be 6 or 8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#digits MfaTotp#digits}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

ID computed by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#id MfaTotp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keySize`<sup>Optional</sup> <a name="keySize" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.keySize"></a>

```typescript
public readonly keySize: number;
```

- *Type:* number

Specifies the size in bytes of the generated key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#key_size MfaTotp#key_size}

---

##### `maxValidationAttempts`<sup>Optional</sup> <a name="maxValidationAttempts" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.maxValidationAttempts"></a>

```typescript
public readonly maxValidationAttempts: number;
```

- *Type:* number

The maximum number of consecutive failed validation attempts allowed.

Must be a positive integer. Vault defaults this value to 5 if not provided or if set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#max_validation_attempts MfaTotp#max_validation_attempts}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#namespace MfaTotp#namespace}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

The length of time used to generate a counter for the TOTP token calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#period MfaTotp#period}

---

##### `qrSize`<sup>Optional</sup> <a name="qrSize" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.qrSize"></a>

```typescript
public readonly qrSize: number;
```

- *Type:* number

The pixel size of the generated square QR code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#qr_size MfaTotp#qr_size}

---

##### `skew`<sup>Optional</sup> <a name="skew" id="@cdktn/provider-vault.mfaTotp.MfaTotpConfig.property.skew"></a>

```typescript
public readonly skew: number;
```

- *Type:* number

The number of delay periods that are allowed when validating a TOTP token.

This value can either be 0 or 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_totp#skew MfaTotp#skew}

---



