# `tpmAuthBackendConfig` Submodule <a name="`tpmAuthBackendConfig` Submodule" id="@cdktn/provider-vault.tpmAuthBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TpmAuthBackendConfig <a name="TpmAuthBackendConfig" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config vault_tpm_auth_backend_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.Initializer"></a>

```typescript
import { tpmAuthBackendConfig } from '@cdktn/provider-vault'

new tpmAuthBackendConfig.TpmAuthBackendConfig(scope: Construct, id: string, config: TpmAuthBackendConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig">TpmAuthBackendConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig">TpmAuthBackendConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetCaLifetime">resetCaLifetime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetCaSoftExpiry">resetCaSoftExpiry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetDefaultCertTtl">resetDefaultCertTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCaLifetime` <a name="resetCaLifetime" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetCaLifetime"></a>

```typescript
public resetCaLifetime(): void
```

##### `resetCaSoftExpiry` <a name="resetCaSoftExpiry" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetCaSoftExpiry"></a>

```typescript
public resetCaSoftExpiry(): void
```

##### `resetDefaultCertTtl` <a name="resetDefaultCertTtl" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetDefaultCertTtl"></a>

```typescript
public resetDefaultCertTtl(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TpmAuthBackendConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.isConstruct"></a>

```typescript
import { tpmAuthBackendConfig } from '@cdktn/provider-vault'

tpmAuthBackendConfig.TpmAuthBackendConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.isTerraformElement"></a>

```typescript
import { tpmAuthBackendConfig } from '@cdktn/provider-vault'

tpmAuthBackendConfig.TpmAuthBackendConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.isTerraformResource"></a>

```typescript
import { tpmAuthBackendConfig } from '@cdktn/provider-vault'

tpmAuthBackendConfig.TpmAuthBackendConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.generateConfigForImport"></a>

```typescript
import { tpmAuthBackendConfig } from '@cdktn/provider-vault'

tpmAuthBackendConfig.TpmAuthBackendConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a TpmAuthBackendConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TpmAuthBackendConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TpmAuthBackendConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TpmAuthBackendConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.caLifetimeInput">caLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.caSoftExpiryInput">caSoftExpiryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.defaultCertTtlInput">defaultCertTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.caLifetime">caLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.caSoftExpiry">caSoftExpiry</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.defaultCertTtl">defaultCertTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `caLifetimeInput`<sup>Optional</sup> <a name="caLifetimeInput" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.caLifetimeInput"></a>

```typescript
public readonly caLifetimeInput: number;
```

- *Type:* number

---

##### `caSoftExpiryInput`<sup>Optional</sup> <a name="caSoftExpiryInput" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.caSoftExpiryInput"></a>

```typescript
public readonly caSoftExpiryInput: number;
```

- *Type:* number

---

##### `defaultCertTtlInput`<sup>Optional</sup> <a name="defaultCertTtlInput" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.defaultCertTtlInput"></a>

```typescript
public readonly defaultCertTtlInput: number;
```

- *Type:* number

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `caLifetime`<sup>Required</sup> <a name="caLifetime" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.caLifetime"></a>

```typescript
public readonly caLifetime: number;
```

- *Type:* number

---

##### `caSoftExpiry`<sup>Required</sup> <a name="caSoftExpiry" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.caSoftExpiry"></a>

```typescript
public readonly caSoftExpiry: number;
```

- *Type:* number

---

##### `defaultCertTtl`<sup>Required</sup> <a name="defaultCertTtl" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.defaultCertTtl"></a>

```typescript
public readonly defaultCertTtl: number;
```

- *Type:* number

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TpmAuthBackendConfigConfig <a name="TpmAuthBackendConfigConfig" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.Initializer"></a>

```typescript
import { tpmAuthBackendConfig } from '@cdktn/provider-vault'

const tpmAuthBackendConfigConfig: tpmAuthBackendConfig.TpmAuthBackendConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.mount">mount</a></code> | <code>string</code> | Path of the enabled TPM auth backend mount to configure. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.caLifetime">caLifetime</a></code> | <code>number</code> | How long each CA is valid once it becomes active, in seconds. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.caSoftExpiry">caSoftExpiry</a></code> | <code>number</code> | How long before hard expiry the active CA stops signing new certificates, in seconds. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.defaultCertTtl">defaultCertTtl</a></code> | <code>number</code> | Default lifetime for issued client certificates when the role does not specify `cert_ttl`, in seconds. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Path of the enabled TPM auth backend mount to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config#mount TpmAuthBackendConfig#mount}

---

##### `caLifetime`<sup>Optional</sup> <a name="caLifetime" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.caLifetime"></a>

```typescript
public readonly caLifetime: number;
```

- *Type:* number

How long each CA is valid once it becomes active, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config#ca_lifetime TpmAuthBackendConfig#ca_lifetime}

---

##### `caSoftExpiry`<sup>Optional</sup> <a name="caSoftExpiry" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.caSoftExpiry"></a>

```typescript
public readonly caSoftExpiry: number;
```

- *Type:* number

How long before hard expiry the active CA stops signing new certificates, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config#ca_soft_expiry TpmAuthBackendConfig#ca_soft_expiry}

---

##### `defaultCertTtl`<sup>Optional</sup> <a name="defaultCertTtl" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.defaultCertTtl"></a>

```typescript
public readonly defaultCertTtl: number;
```

- *Type:* number

Default lifetime for issued client certificates when the role does not specify `cert_ttl`, in seconds.

When unset or `0`, the effective TTL falls back to CA soft expiry. Vault always caps the actual certificate lifetime by the remaining validity of the signing CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config#default_cert_ttl TpmAuthBackendConfig#default_cert_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config#namespace TpmAuthBackendConfig#namespace}

---



