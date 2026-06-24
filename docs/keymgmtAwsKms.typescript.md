# `keymgmtAwsKms` Submodule <a name="`keymgmtAwsKms` Submodule" id="@cdktn/provider-vault.keymgmtAwsKms"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeymgmtAwsKms <a name="KeymgmtAwsKms" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_aws_kms vault_keymgmt_aws_kms}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.Initializer"></a>

```typescript
import { keymgmtAwsKms } from '@cdktn/provider-vault'

new keymgmtAwsKms.KeymgmtAwsKms(scope: Construct, id: string, config: KeymgmtAwsKmsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig">KeymgmtAwsKmsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig">KeymgmtAwsKmsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.resetCredentialsWo">resetCredentialsWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.resetCredentialsWoVersion">resetCredentialsWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCredentialsWo` <a name="resetCredentialsWo" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.resetCredentialsWo"></a>

```typescript
public resetCredentialsWo(): void
```

##### `resetCredentialsWoVersion` <a name="resetCredentialsWoVersion" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.resetCredentialsWoVersion"></a>

```typescript
public resetCredentialsWoVersion(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KeymgmtAwsKms resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.isConstruct"></a>

```typescript
import { keymgmtAwsKms } from '@cdktn/provider-vault'

keymgmtAwsKms.KeymgmtAwsKms.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.isTerraformElement"></a>

```typescript
import { keymgmtAwsKms } from '@cdktn/provider-vault'

keymgmtAwsKms.KeymgmtAwsKms.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.isTerraformResource"></a>

```typescript
import { keymgmtAwsKms } from '@cdktn/provider-vault'

keymgmtAwsKms.KeymgmtAwsKms.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.generateConfigForImport"></a>

```typescript
import { keymgmtAwsKms } from '@cdktn/provider-vault'

keymgmtAwsKms.KeymgmtAwsKms.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a KeymgmtAwsKms resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KeymgmtAwsKms to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KeymgmtAwsKms that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_aws_kms#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KeymgmtAwsKms to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.credentialsWoInput">credentialsWoInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.credentialsWoVersionInput">credentialsWoVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.keyCollectionInput">keyCollectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.credentialsWo">credentialsWo</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.credentialsWoVersion">credentialsWoVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.keyCollection">keyCollection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `credentialsWoInput`<sup>Optional</sup> <a name="credentialsWoInput" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.credentialsWoInput"></a>

```typescript
public readonly credentialsWoInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `credentialsWoVersionInput`<sup>Optional</sup> <a name="credentialsWoVersionInput" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.credentialsWoVersionInput"></a>

```typescript
public readonly credentialsWoVersionInput: number;
```

- *Type:* number

---

##### `keyCollectionInput`<sup>Optional</sup> <a name="keyCollectionInput" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.keyCollectionInput"></a>

```typescript
public readonly keyCollectionInput: string;
```

- *Type:* string

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `credentialsWo`<sup>Required</sup> <a name="credentialsWo" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.credentialsWo"></a>

```typescript
public readonly credentialsWo: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `credentialsWoVersion`<sup>Required</sup> <a name="credentialsWoVersion" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.credentialsWoVersion"></a>

```typescript
public readonly credentialsWoVersion: number;
```

- *Type:* number

---

##### `keyCollection`<sup>Required</sup> <a name="keyCollection" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.keyCollection"></a>

```typescript
public readonly keyCollection: string;
```

- *Type:* string

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKms.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeymgmtAwsKmsConfig <a name="KeymgmtAwsKmsConfig" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig.Initializer"></a>

```typescript
import { keymgmtAwsKms } from '@cdktn/provider-vault'

const keymgmtAwsKmsConfig: keymgmtAwsKms.KeymgmtAwsKmsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig.property.keyCollection">keyCollection</a></code> | <code>string</code> | Refers to the name of an AWS region. Cannot be changed after creation. |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig.property.mount">mount</a></code> | <code>string</code> | Path of the Key Management secrets engine mount. |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig.property.name">name</a></code> | <code>string</code> | Specifies the name of the AWS KMS provider. Cannot be changed after creation. |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig.property.credentialsWo">credentialsWo</a></code> | <code>{[ key: string ]: string}</code> | The credentials to use for authentication with AWS KMS. |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig.property.credentialsWoVersion">credentialsWoVersion</a></code> | <code>number</code> | Version counter for the write-only `credentials_wo` field. |
| <code><a href="#@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `keyCollection`<sup>Required</sup> <a name="keyCollection" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig.property.keyCollection"></a>

```typescript
public readonly keyCollection: string;
```

- *Type:* string

Refers to the name of an AWS region. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_aws_kms#key_collection KeymgmtAwsKms#key_collection}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Path of the Key Management secrets engine mount.

Must match the `path` of a `vault_mount` resource with `type = "keymgmt"`. Use `vault_mount.keymgmt.path` here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_aws_kms#mount KeymgmtAwsKms#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the name of the AWS KMS provider. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_aws_kms#name KeymgmtAwsKms#name}

---

##### `credentialsWo`<sup>Optional</sup> <a name="credentialsWo" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig.property.credentialsWo"></a>

```typescript
public readonly credentialsWo: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The credentials to use for authentication with AWS KMS.

Supplying values for this parameter is optional, as credentials may also be specified as environment variables. Credentials provided to this parameter will take precedence over credentials provided via environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_aws_kms#credentials_wo KeymgmtAwsKms#credentials_wo}

---

##### `credentialsWoVersion`<sup>Optional</sup> <a name="credentialsWoVersion" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig.property.credentialsWoVersion"></a>

```typescript
public readonly credentialsWoVersion: number;
```

- *Type:* number

Version counter for the write-only `credentials_wo` field.

Since write-only values are not stored in state, Terraform cannot detect when credentials change. Increment this value whenever you update `credentials_wo` to ensure the new credentials are sent to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_aws_kms#credentials_wo_version KeymgmtAwsKms#credentials_wo_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.keymgmtAwsKms.KeymgmtAwsKmsConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_aws_kms#namespace KeymgmtAwsKms#namespace}

---



