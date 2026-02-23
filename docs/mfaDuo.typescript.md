# `mfaDuo` Submodule <a name="`mfaDuo` Submodule" id="@cdktn/provider-vault.mfaDuo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MfaDuo <a name="MfaDuo" id="@cdktn/provider-vault.mfaDuo.MfaDuo"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_duo vault_mfa_duo}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.mfaDuo.MfaDuo.Initializer"></a>

```typescript
import { mfaDuo } from '@cdktn/provider-vault'

new mfaDuo.MfaDuo(scope: Construct, id: string, config: MfaDuoConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuoConfig">MfaDuoConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.mfaDuo.MfaDuo.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.mfaDuo.MfaDuoConfig">MfaDuoConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.resetPushInfo">resetPushInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.resetUsernameFormat">resetUsernameFormat</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.mfaDuo.MfaDuo.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.mfaDuo.MfaDuo.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.mfaDuo.MfaDuo.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.mfaDuo.MfaDuo.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.mfaDuo.MfaDuo.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.mfaDuo.MfaDuo.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.mfaDuo.MfaDuo.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.mfaDuo.MfaDuo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.mfaDuo.MfaDuo.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.mfaDuo.MfaDuo.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.mfaDuo.MfaDuo.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.mfaDuo.MfaDuo.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.mfaDuo.MfaDuo.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.mfaDuo.MfaDuo.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.mfaDuo.MfaDuo.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.mfaDuo.MfaDuo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.mfaDuo.MfaDuo.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.mfaDuo.MfaDuo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.mfaDuo.MfaDuo.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.mfaDuo.MfaDuo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.mfaDuo.MfaDuo.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.mfaDuo.MfaDuo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.mfaDuo.MfaDuo.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.mfaDuo.MfaDuo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.mfaDuo.MfaDuo.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.mfaDuo.MfaDuo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.mfaDuo.MfaDuo.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.mfaDuo.MfaDuo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.mfaDuo.MfaDuo.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.mfaDuo.MfaDuo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.mfaDuo.MfaDuo.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.mfaDuo.MfaDuo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.mfaDuo.MfaDuo.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.mfaDuo.MfaDuo.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.mfaDuo.MfaDuo.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.mfaDuo.MfaDuo.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.mfaDuo.MfaDuo.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.mfaDuo.MfaDuo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.mfaDuo.MfaDuo.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.mfaDuo.MfaDuo.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.mfaDuo.MfaDuo.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.mfaDuo.MfaDuo.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.mfaDuo.MfaDuo.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.mfaDuo.MfaDuo.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.mfaDuo.MfaDuo.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.mfaDuo.MfaDuo.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.mfaDuo.MfaDuo.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPushInfo` <a name="resetPushInfo" id="@cdktn/provider-vault.mfaDuo.MfaDuo.resetPushInfo"></a>

```typescript
public resetPushInfo(): void
```

##### `resetUsernameFormat` <a name="resetUsernameFormat" id="@cdktn/provider-vault.mfaDuo.MfaDuo.resetUsernameFormat"></a>

```typescript
public resetUsernameFormat(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MfaDuo resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.mfaDuo.MfaDuo.isConstruct"></a>

```typescript
import { mfaDuo } from '@cdktn/provider-vault'

mfaDuo.MfaDuo.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.mfaDuo.MfaDuo.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.mfaDuo.MfaDuo.isTerraformElement"></a>

```typescript
import { mfaDuo } from '@cdktn/provider-vault'

mfaDuo.MfaDuo.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.mfaDuo.MfaDuo.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.mfaDuo.MfaDuo.isTerraformResource"></a>

```typescript
import { mfaDuo } from '@cdktn/provider-vault'

mfaDuo.MfaDuo.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.mfaDuo.MfaDuo.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.mfaDuo.MfaDuo.generateConfigForImport"></a>

```typescript
import { mfaDuo } from '@cdktn/provider-vault'

mfaDuo.MfaDuo.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MfaDuo resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.mfaDuo.MfaDuo.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.mfaDuo.MfaDuo.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MfaDuo to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.mfaDuo.MfaDuo.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MfaDuo that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_duo#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.mfaDuo.MfaDuo.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MfaDuo to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.apiHostnameInput">apiHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.integrationKeyInput">integrationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.mountAccessorInput">mountAccessorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.pushInfoInput">pushInfoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.secretKeyInput">secretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.usernameFormatInput">usernameFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.apiHostname">apiHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.integrationKey">integrationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.mountAccessor">mountAccessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.pushInfo">pushInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.secretKey">secretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.usernameFormat">usernameFormat</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `apiHostnameInput`<sup>Optional</sup> <a name="apiHostnameInput" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.apiHostnameInput"></a>

```typescript
public readonly apiHostnameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `integrationKeyInput`<sup>Optional</sup> <a name="integrationKeyInput" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.integrationKeyInput"></a>

```typescript
public readonly integrationKeyInput: string;
```

- *Type:* string

---

##### `mountAccessorInput`<sup>Optional</sup> <a name="mountAccessorInput" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.mountAccessorInput"></a>

```typescript
public readonly mountAccessorInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `pushInfoInput`<sup>Optional</sup> <a name="pushInfoInput" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.pushInfoInput"></a>

```typescript
public readonly pushInfoInput: string;
```

- *Type:* string

---

##### `secretKeyInput`<sup>Optional</sup> <a name="secretKeyInput" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.secretKeyInput"></a>

```typescript
public readonly secretKeyInput: string;
```

- *Type:* string

---

##### `usernameFormatInput`<sup>Optional</sup> <a name="usernameFormatInput" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.usernameFormatInput"></a>

```typescript
public readonly usernameFormatInput: string;
```

- *Type:* string

---

##### `apiHostname`<sup>Required</sup> <a name="apiHostname" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.apiHostname"></a>

```typescript
public readonly apiHostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationKey`<sup>Required</sup> <a name="integrationKey" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.integrationKey"></a>

```typescript
public readonly integrationKey: string;
```

- *Type:* string

---

##### `mountAccessor`<sup>Required</sup> <a name="mountAccessor" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.mountAccessor"></a>

```typescript
public readonly mountAccessor: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `pushInfo`<sup>Required</sup> <a name="pushInfo" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.pushInfo"></a>

```typescript
public readonly pushInfo: string;
```

- *Type:* string

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

---

##### `usernameFormat`<sup>Required</sup> <a name="usernameFormat" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.usernameFormat"></a>

```typescript
public readonly usernameFormat: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuo.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.mfaDuo.MfaDuo.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MfaDuoConfig <a name="MfaDuoConfig" id="@cdktn/provider-vault.mfaDuo.MfaDuoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.mfaDuo.MfaDuoConfig.Initializer"></a>

```typescript
import { mfaDuo } from '@cdktn/provider-vault'

const mfaDuoConfig: mfaDuo.MfaDuoConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.apiHostname">apiHostname</a></code> | <code>string</code> | API hostname for Duo. |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.integrationKey">integrationKey</a></code> | <code>string</code> | Integration key for Duo. |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.mountAccessor">mountAccessor</a></code> | <code>string</code> | The mount to tie this method to for use in automatic mappings. |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.name">name</a></code> | <code>string</code> | Name of the MFA method. |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.secretKey">secretKey</a></code> | <code>string</code> | Secret key for Duo. |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_duo#id MfaDuo#id}. |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.pushInfo">pushInfo</a></code> | <code>string</code> | Push information for Duo. |
| <code><a href="#@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.usernameFormat">usernameFormat</a></code> | <code>string</code> | A format string for mapping Identity names to MFA method names. Values to substitute should be placed in `{{}}`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `apiHostname`<sup>Required</sup> <a name="apiHostname" id="@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.apiHostname"></a>

```typescript
public readonly apiHostname: string;
```

- *Type:* string

API hostname for Duo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_duo#api_hostname MfaDuo#api_hostname}

---

##### `integrationKey`<sup>Required</sup> <a name="integrationKey" id="@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.integrationKey"></a>

```typescript
public readonly integrationKey: string;
```

- *Type:* string

Integration key for Duo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_duo#integration_key MfaDuo#integration_key}

---

##### `mountAccessor`<sup>Required</sup> <a name="mountAccessor" id="@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.mountAccessor"></a>

```typescript
public readonly mountAccessor: string;
```

- *Type:* string

The mount to tie this method to for use in automatic mappings.

The mapping will use the Name field of Aliases associated with this mount as the username in the mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_duo#mount_accessor MfaDuo#mount_accessor}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the MFA method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_duo#name MfaDuo#name}

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

Secret key for Duo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_duo#secret_key MfaDuo#secret_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_duo#id MfaDuo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_duo#namespace MfaDuo#namespace}

---

##### `pushInfo`<sup>Optional</sup> <a name="pushInfo" id="@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.pushInfo"></a>

```typescript
public readonly pushInfo: string;
```

- *Type:* string

Push information for Duo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_duo#push_info MfaDuo#push_info}

---

##### `usernameFormat`<sup>Optional</sup> <a name="usernameFormat" id="@cdktn/provider-vault.mfaDuo.MfaDuoConfig.property.usernameFormat"></a>

```typescript
public readonly usernameFormat: string;
```

- *Type:* string

A format string for mapping Identity names to MFA method names. Values to substitute should be placed in `{{}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mfa_duo#username_format MfaDuo#username_format}

---



