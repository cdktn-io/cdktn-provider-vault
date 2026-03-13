# `cfAuthBackendConfig` Submodule <a name="`cfAuthBackendConfig` Submodule" id="@cdktn/provider-vault.cfAuthBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CfAuthBackendConfig <a name="CfAuthBackendConfig" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config vault_cf_auth_backend_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer"></a>

```typescript
import { cfAuthBackendConfig } from '@cdktn/provider-vault'

new cfAuthBackendConfig.CfAuthBackendConfig(scope: Construct, id: string, config: CfAuthBackendConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig">CfAuthBackendConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig">CfAuthBackendConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetCfApiTrustedCertificates">resetCfApiTrustedCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetCfTimeout">resetCfTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetLoginMaxSecondsNotAfter">resetLoginMaxSecondsNotAfter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetLoginMaxSecondsNotBefore">resetLoginMaxSecondsNotBefore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCfApiTrustedCertificates` <a name="resetCfApiTrustedCertificates" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetCfApiTrustedCertificates"></a>

```typescript
public resetCfApiTrustedCertificates(): void
```

##### `resetCfTimeout` <a name="resetCfTimeout" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetCfTimeout"></a>

```typescript
public resetCfTimeout(): void
```

##### `resetLoginMaxSecondsNotAfter` <a name="resetLoginMaxSecondsNotAfter" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetLoginMaxSecondsNotAfter"></a>

```typescript
public resetLoginMaxSecondsNotAfter(): void
```

##### `resetLoginMaxSecondsNotBefore` <a name="resetLoginMaxSecondsNotBefore" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetLoginMaxSecondsNotBefore"></a>

```typescript
public resetLoginMaxSecondsNotBefore(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CfAuthBackendConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isConstruct"></a>

```typescript
import { cfAuthBackendConfig } from '@cdktn/provider-vault'

cfAuthBackendConfig.CfAuthBackendConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformElement"></a>

```typescript
import { cfAuthBackendConfig } from '@cdktn/provider-vault'

cfAuthBackendConfig.CfAuthBackendConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformResource"></a>

```typescript
import { cfAuthBackendConfig } from '@cdktn/provider-vault'

cfAuthBackendConfig.CfAuthBackendConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport"></a>

```typescript
import { cfAuthBackendConfig } from '@cdktn/provider-vault'

cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CfAuthBackendConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CfAuthBackendConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CfAuthBackendConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CfAuthBackendConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiAddrInput">cfApiAddrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiTrustedCertificatesInput">cfApiTrustedCertificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfPasswordWoInput">cfPasswordWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfTimeoutInput">cfTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfUsernameInput">cfUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.identityCaCertificatesInput">identityCaCertificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotAfterInput">loginMaxSecondsNotAfterInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotBeforeInput">loginMaxSecondsNotBeforeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiAddr">cfApiAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiTrustedCertificates">cfApiTrustedCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfPasswordWo">cfPasswordWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfTimeout">cfTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfUsername">cfUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.identityCaCertificates">identityCaCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotAfter">loginMaxSecondsNotAfter</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotBefore">loginMaxSecondsNotBefore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cfApiAddrInput`<sup>Optional</sup> <a name="cfApiAddrInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiAddrInput"></a>

```typescript
public readonly cfApiAddrInput: string;
```

- *Type:* string

---

##### `cfApiTrustedCertificatesInput`<sup>Optional</sup> <a name="cfApiTrustedCertificatesInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiTrustedCertificatesInput"></a>

```typescript
public readonly cfApiTrustedCertificatesInput: string[];
```

- *Type:* string[]

---

##### `cfPasswordWoInput`<sup>Optional</sup> <a name="cfPasswordWoInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfPasswordWoInput"></a>

```typescript
public readonly cfPasswordWoInput: string;
```

- *Type:* string

---

##### `cfTimeoutInput`<sup>Optional</sup> <a name="cfTimeoutInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfTimeoutInput"></a>

```typescript
public readonly cfTimeoutInput: number;
```

- *Type:* number

---

##### `cfUsernameInput`<sup>Optional</sup> <a name="cfUsernameInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfUsernameInput"></a>

```typescript
public readonly cfUsernameInput: string;
```

- *Type:* string

---

##### `identityCaCertificatesInput`<sup>Optional</sup> <a name="identityCaCertificatesInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.identityCaCertificatesInput"></a>

```typescript
public readonly identityCaCertificatesInput: string[];
```

- *Type:* string[]

---

##### `loginMaxSecondsNotAfterInput`<sup>Optional</sup> <a name="loginMaxSecondsNotAfterInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotAfterInput"></a>

```typescript
public readonly loginMaxSecondsNotAfterInput: number;
```

- *Type:* number

---

##### `loginMaxSecondsNotBeforeInput`<sup>Optional</sup> <a name="loginMaxSecondsNotBeforeInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotBeforeInput"></a>

```typescript
public readonly loginMaxSecondsNotBeforeInput: number;
```

- *Type:* number

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `cfApiAddr`<sup>Required</sup> <a name="cfApiAddr" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiAddr"></a>

```typescript
public readonly cfApiAddr: string;
```

- *Type:* string

---

##### `cfApiTrustedCertificates`<sup>Required</sup> <a name="cfApiTrustedCertificates" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiTrustedCertificates"></a>

```typescript
public readonly cfApiTrustedCertificates: string[];
```

- *Type:* string[]

---

##### `cfPasswordWo`<sup>Required</sup> <a name="cfPasswordWo" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfPasswordWo"></a>

```typescript
public readonly cfPasswordWo: string;
```

- *Type:* string

---

##### `cfTimeout`<sup>Required</sup> <a name="cfTimeout" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfTimeout"></a>

```typescript
public readonly cfTimeout: number;
```

- *Type:* number

---

##### `cfUsername`<sup>Required</sup> <a name="cfUsername" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfUsername"></a>

```typescript
public readonly cfUsername: string;
```

- *Type:* string

---

##### `identityCaCertificates`<sup>Required</sup> <a name="identityCaCertificates" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.identityCaCertificates"></a>

```typescript
public readonly identityCaCertificates: string[];
```

- *Type:* string[]

---

##### `loginMaxSecondsNotAfter`<sup>Required</sup> <a name="loginMaxSecondsNotAfter" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotAfter"></a>

```typescript
public readonly loginMaxSecondsNotAfter: number;
```

- *Type:* number

---

##### `loginMaxSecondsNotBefore`<sup>Required</sup> <a name="loginMaxSecondsNotBefore" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotBefore"></a>

```typescript
public readonly loginMaxSecondsNotBefore: number;
```

- *Type:* number

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CfAuthBackendConfigConfig <a name="CfAuthBackendConfigConfig" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.Initializer"></a>

```typescript
import { cfAuthBackendConfig } from '@cdktn/provider-vault'

const cfAuthBackendConfigConfig: cfAuthBackendConfig.CfAuthBackendConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfApiAddr">cfApiAddr</a></code> | <code>string</code> | CF's full API address, used for verifying that a given `CF_INSTANCE_CERT` shows an application ID, space ID, and organization ID that presently exist. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfPasswordWo">cfPasswordWo</a></code> | <code>string</code> | The password for authenticating to the CF API. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfUsername">cfUsername</a></code> | <code>string</code> | The username for authenticating to the CF API. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.identityCaCertificates">identityCaCertificates</a></code> | <code>string[]</code> | The root CA certificate(s) to be used for verifying that the `CF_INSTANCE_CERT` presented for logging in was issued by the proper authority. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.mount">mount</a></code> | <code>string</code> | Mount path for the CF auth engine in Vault. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfApiTrustedCertificates">cfApiTrustedCertificates</a></code> | <code>string[]</code> | The certificate(s) presented by the CF API. Configures Vault to trust these certificates when making API calls. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfTimeout">cfTimeout</a></code> | <code>number</code> | The timeout for the CF API in seconds. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.loginMaxSecondsNotAfter">loginMaxSecondsNotAfter</a></code> | <code>number</code> | The maximum number of seconds in the future when a signature could have been created. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.loginMaxSecondsNotBefore">loginMaxSecondsNotBefore</a></code> | <code>number</code> | The maximum number of seconds in the past when a signature could have been created. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cfApiAddr`<sup>Required</sup> <a name="cfApiAddr" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfApiAddr"></a>

```typescript
public readonly cfApiAddr: string;
```

- *Type:* string

CF's full API address, used for verifying that a given `CF_INSTANCE_CERT` shows an application ID, space ID, and organization ID that presently exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#cf_api_addr CfAuthBackendConfig#cf_api_addr}

---

##### `cfPasswordWo`<sup>Required</sup> <a name="cfPasswordWo" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfPasswordWo"></a>

```typescript
public readonly cfPasswordWo: string;
```

- *Type:* string

The password for authenticating to the CF API.

This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#cf_password_wo CfAuthBackendConfig#cf_password_wo}

---

##### `cfUsername`<sup>Required</sup> <a name="cfUsername" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfUsername"></a>

```typescript
public readonly cfUsername: string;
```

- *Type:* string

The username for authenticating to the CF API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#cf_username CfAuthBackendConfig#cf_username}

---

##### `identityCaCertificates`<sup>Required</sup> <a name="identityCaCertificates" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.identityCaCertificates"></a>

```typescript
public readonly identityCaCertificates: string[];
```

- *Type:* string[]

The root CA certificate(s) to be used for verifying that the `CF_INSTANCE_CERT` presented for logging in was issued by the proper authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#identity_ca_certificates CfAuthBackendConfig#identity_ca_certificates}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Mount path for the CF auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#mount CfAuthBackendConfig#mount}

---

##### `cfApiTrustedCertificates`<sup>Optional</sup> <a name="cfApiTrustedCertificates" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfApiTrustedCertificates"></a>

```typescript
public readonly cfApiTrustedCertificates: string[];
```

- *Type:* string[]

The certificate(s) presented by the CF API. Configures Vault to trust these certificates when making API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#cf_api_trusted_certificates CfAuthBackendConfig#cf_api_trusted_certificates}

---

##### `cfTimeout`<sup>Optional</sup> <a name="cfTimeout" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfTimeout"></a>

```typescript
public readonly cfTimeout: number;
```

- *Type:* number

The timeout for the CF API in seconds.

Defaults to `0` (no timeout). Removing this field from config resets the value to `0` in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#cf_timeout CfAuthBackendConfig#cf_timeout}

---

##### `loginMaxSecondsNotAfter`<sup>Optional</sup> <a name="loginMaxSecondsNotAfter" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.loginMaxSecondsNotAfter"></a>

```typescript
public readonly loginMaxSecondsNotAfter: number;
```

- *Type:* number

The maximum number of seconds in the future when a signature could have been created.

Defaults to `60`. This field is `Computed`: if removed from config, Vault retains the previously set value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#login_max_seconds_not_after CfAuthBackendConfig#login_max_seconds_not_after}

---

##### `loginMaxSecondsNotBefore`<sup>Optional</sup> <a name="loginMaxSecondsNotBefore" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.loginMaxSecondsNotBefore"></a>

```typescript
public readonly loginMaxSecondsNotBefore: number;
```

- *Type:* number

The maximum number of seconds in the past when a signature could have been created.

Defaults to `300`. This field is `Computed`: if removed from config, Vault retains the previously set value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#login_max_seconds_not_before CfAuthBackendConfig#login_max_seconds_not_before}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#namespace CfAuthBackendConfig#namespace}

---



