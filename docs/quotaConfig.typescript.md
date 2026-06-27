# `quotaConfig` Submodule <a name="`quotaConfig` Submodule" id="@cdktn/provider-vault.quotaConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuotaConfig <a name="QuotaConfig" id="@cdktn/provider-vault.quotaConfig.QuotaConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config vault_quota_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer"></a>

```typescript
import { quotaConfig } from '@cdktn/provider-vault'

new quotaConfig.QuotaConfig(scope: Construct, id: string, config?: QuotaConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig">QuotaConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig">QuotaConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetAbsoluteRateLimitExemptPaths">resetAbsoluteRateLimitExemptPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetEnableRateLimitAuditLogging">resetEnableRateLimitAuditLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetEnableRateLimitResponseHeaders">resetEnableRateLimitResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetRateLimitExemptPaths">resetRateLimitExemptPaths</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAbsoluteRateLimitExemptPaths` <a name="resetAbsoluteRateLimitExemptPaths" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetAbsoluteRateLimitExemptPaths"></a>

```typescript
public resetAbsoluteRateLimitExemptPaths(): void
```

##### `resetEnableRateLimitAuditLogging` <a name="resetEnableRateLimitAuditLogging" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetEnableRateLimitAuditLogging"></a>

```typescript
public resetEnableRateLimitAuditLogging(): void
```

##### `resetEnableRateLimitResponseHeaders` <a name="resetEnableRateLimitResponseHeaders" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetEnableRateLimitResponseHeaders"></a>

```typescript
public resetEnableRateLimitResponseHeaders(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetRateLimitExemptPaths` <a name="resetRateLimitExemptPaths" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetRateLimitExemptPaths"></a>

```typescript
public resetRateLimitExemptPaths(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a QuotaConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isConstruct"></a>

```typescript
import { quotaConfig } from '@cdktn/provider-vault'

quotaConfig.QuotaConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformElement"></a>

```typescript
import { quotaConfig } from '@cdktn/provider-vault'

quotaConfig.QuotaConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformResource"></a>

```typescript
import { quotaConfig } from '@cdktn/provider-vault'

quotaConfig.QuotaConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport"></a>

```typescript
import { quotaConfig } from '@cdktn/provider-vault'

quotaConfig.QuotaConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a QuotaConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuotaConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuotaConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the QuotaConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.absoluteRateLimitExemptPathsInput">absoluteRateLimitExemptPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitAuditLoggingInput">enableRateLimitAuditLoggingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitResponseHeadersInput">enableRateLimitResponseHeadersInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.rateLimitExemptPathsInput">rateLimitExemptPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.absoluteRateLimitExemptPaths">absoluteRateLimitExemptPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitAuditLogging">enableRateLimitAuditLogging</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitResponseHeaders">enableRateLimitResponseHeaders</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.rateLimitExemptPaths">rateLimitExemptPaths</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `absoluteRateLimitExemptPathsInput`<sup>Optional</sup> <a name="absoluteRateLimitExemptPathsInput" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.absoluteRateLimitExemptPathsInput"></a>

```typescript
public readonly absoluteRateLimitExemptPathsInput: string[];
```

- *Type:* string[]

---

##### `enableRateLimitAuditLoggingInput`<sup>Optional</sup> <a name="enableRateLimitAuditLoggingInput" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitAuditLoggingInput"></a>

```typescript
public readonly enableRateLimitAuditLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableRateLimitResponseHeadersInput`<sup>Optional</sup> <a name="enableRateLimitResponseHeadersInput" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitResponseHeadersInput"></a>

```typescript
public readonly enableRateLimitResponseHeadersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `rateLimitExemptPathsInput`<sup>Optional</sup> <a name="rateLimitExemptPathsInput" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.rateLimitExemptPathsInput"></a>

```typescript
public readonly rateLimitExemptPathsInput: string[];
```

- *Type:* string[]

---

##### `absoluteRateLimitExemptPaths`<sup>Required</sup> <a name="absoluteRateLimitExemptPaths" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.absoluteRateLimitExemptPaths"></a>

```typescript
public readonly absoluteRateLimitExemptPaths: string[];
```

- *Type:* string[]

---

##### `enableRateLimitAuditLogging`<sup>Required</sup> <a name="enableRateLimitAuditLogging" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitAuditLogging"></a>

```typescript
public readonly enableRateLimitAuditLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableRateLimitResponseHeaders`<sup>Required</sup> <a name="enableRateLimitResponseHeaders" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitResponseHeaders"></a>

```typescript
public readonly enableRateLimitResponseHeaders: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `rateLimitExemptPaths`<sup>Required</sup> <a name="rateLimitExemptPaths" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.rateLimitExemptPaths"></a>

```typescript
public readonly rateLimitExemptPaths: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuotaConfigConfig <a name="QuotaConfigConfig" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.Initializer"></a>

```typescript
import { quotaConfig } from '@cdktn/provider-vault'

const quotaConfigConfig: quotaConfig.QuotaConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.absoluteRateLimitExemptPaths">absoluteRateLimitExemptPaths</a></code> | <code>string[]</code> | Absolute paths exempt from all rate limit quotas, qualified from the root of the namespace hierarchy. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.enableRateLimitAuditLogging">enableRateLimitAuditLogging</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables audit logging for requests rejected by rate limit quotas. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.enableRateLimitResponseHeaders">enableRateLimitResponseHeaders</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables rate limit response headers on HTTP responses. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.rateLimitExemptPaths">rateLimitExemptPaths</a></code> | <code>string[]</code> | Paths exempt from rate limit quotas relative to the current namespace context. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `absoluteRateLimitExemptPaths`<sup>Optional</sup> <a name="absoluteRateLimitExemptPaths" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.absoluteRateLimitExemptPaths"></a>

```typescript
public readonly absoluteRateLimitExemptPaths: string[];
```

- *Type:* string[]

Absolute paths exempt from all rate limit quotas, qualified from the root of the namespace hierarchy.

This field is effectively root-managed; administrative namespaces can read returned values but cannot reliably manage them. Order is not significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config#absolute_rate_limit_exempt_paths QuotaConfig#absolute_rate_limit_exempt_paths}

---

##### `enableRateLimitAuditLogging`<sup>Optional</sup> <a name="enableRateLimitAuditLogging" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.enableRateLimitAuditLogging"></a>

```typescript
public readonly enableRateLimitAuditLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables audit logging for requests rejected by rate limit quotas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config#enable_rate_limit_audit_logging QuotaConfig#enable_rate_limit_audit_logging}

---

##### `enableRateLimitResponseHeaders`<sup>Optional</sup> <a name="enableRateLimitResponseHeaders" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.enableRateLimitResponseHeaders"></a>

```typescript
public readonly enableRateLimitResponseHeaders: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables rate limit response headers on HTTP responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config#enable_rate_limit_response_headers QuotaConfig#enable_rate_limit_response_headers}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config#namespace QuotaConfig#namespace}

---

##### `rateLimitExemptPaths`<sup>Optional</sup> <a name="rateLimitExemptPaths" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.rateLimitExemptPaths"></a>

```typescript
public readonly rateLimitExemptPaths: string[];
```

- *Type:* string[]

Paths exempt from rate limit quotas relative to the current namespace context.

This endpoint is only callable from the root or an administrative namespace, and exemption updates are effectively root-managed. Order is not significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config#rate_limit_exempt_paths QuotaConfig#rate_limit_exempt_paths}

---



