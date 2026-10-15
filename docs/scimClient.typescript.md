# `scimClient` Submodule <a name="`scimClient` Submodule" id="@cdktn/provider-vault.scimClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ScimClient <a name="ScimClient" id="@cdktn/provider-vault.scimClient.ScimClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client vault_scim_client}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer"></a>

```typescript
import { scimClient } from '@cdktn/provider-vault'

new scimClient.ScimClient(scope: Construct, id: string, config: ScimClientConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig">ScimClientConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.scimClient.ScimClientConfig">ScimClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetAliasMountAccessor">resetAliasMountAccessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetAllowedExtraAliasMountAccessors">resetAllowedExtraAliasMountAccessors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetAllowGroupAdoption">resetAllowGroupAdoption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetAllowUserAdoption">resetAllowUserAdoption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetDefaultSchemaVersion">resetDefaultSchemaVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetMaxActiveTokens">resetMaxActiveTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetMaxTokenTtl">resetMaxTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.scimClient.ScimClient.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.scimClient.ScimClient.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.scimClient.ScimClient.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.scimClient.ScimClient.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.scimClient.ScimClient.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.scimClient.ScimClient.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.scimClient.ScimClient.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.scimClient.ScimClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.scimClient.ScimClient.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.scimClient.ScimClient.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.scimClient.ScimClient.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.scimClient.ScimClient.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.scimClient.ScimClient.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.scimClient.ScimClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.scimClient.ScimClient.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.scimClient.ScimClient.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.scimClient.ScimClient.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.scimClient.ScimClient.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.scimClient.ScimClient.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.scimClient.ScimClient.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.scimClient.ScimClient.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.scimClient.ScimClient.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.scimClient.ScimClient.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.scimClient.ScimClient.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.scimClient.ScimClient.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-vault.scimClient.ScimClient.putTimeouts"></a>

```typescript
public putTimeouts(value: ScimClientTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.scimClient.ScimClient.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a>

---

##### `resetAliasMountAccessor` <a name="resetAliasMountAccessor" id="@cdktn/provider-vault.scimClient.ScimClient.resetAliasMountAccessor"></a>

```typescript
public resetAliasMountAccessor(): void
```

##### `resetAllowedExtraAliasMountAccessors` <a name="resetAllowedExtraAliasMountAccessors" id="@cdktn/provider-vault.scimClient.ScimClient.resetAllowedExtraAliasMountAccessors"></a>

```typescript
public resetAllowedExtraAliasMountAccessors(): void
```

##### `resetAllowGroupAdoption` <a name="resetAllowGroupAdoption" id="@cdktn/provider-vault.scimClient.ScimClient.resetAllowGroupAdoption"></a>

```typescript
public resetAllowGroupAdoption(): void
```

##### `resetAllowUserAdoption` <a name="resetAllowUserAdoption" id="@cdktn/provider-vault.scimClient.ScimClient.resetAllowUserAdoption"></a>

```typescript
public resetAllowUserAdoption(): void
```

##### `resetDefaultSchemaVersion` <a name="resetDefaultSchemaVersion" id="@cdktn/provider-vault.scimClient.ScimClient.resetDefaultSchemaVersion"></a>

```typescript
public resetDefaultSchemaVersion(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-vault.scimClient.ScimClient.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.scimClient.ScimClient.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxActiveTokens` <a name="resetMaxActiveTokens" id="@cdktn/provider-vault.scimClient.ScimClient.resetMaxActiveTokens"></a>

```typescript
public resetMaxActiveTokens(): void
```

##### `resetMaxTokenTtl` <a name="resetMaxTokenTtl" id="@cdktn/provider-vault.scimClient.ScimClient.resetMaxTokenTtl"></a>

```typescript
public resetMaxTokenTtl(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.scimClient.ScimClient.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-vault.scimClient.ScimClient.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ScimClient resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.scimClient.ScimClient.isConstruct"></a>

```typescript
import { scimClient } from '@cdktn/provider-vault'

scimClient.ScimClient.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.scimClient.ScimClient.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.scimClient.ScimClient.isTerraformElement"></a>

```typescript
import { scimClient } from '@cdktn/provider-vault'

scimClient.ScimClient.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.scimClient.ScimClient.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.scimClient.ScimClient.isTerraformResource"></a>

```typescript
import { scimClient } from '@cdktn/provider-vault'

scimClient.ScimClient.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.scimClient.ScimClient.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport"></a>

```typescript
import { scimClient } from '@cdktn/provider-vault'

scimClient.ScimClient.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ScimClient resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ScimClient to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ScimClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ScimClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.deleting">deleting</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference">ScimClientTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.accessGrantPrincipalInput">accessGrantPrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.aliasMountAccessorInput">aliasMountAccessorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowedExtraAliasMountAccessorsInput">allowedExtraAliasMountAccessorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowGroupAdoptionInput">allowGroupAdoptionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowUserAdoptionInput">allowUserAdoptionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.clientNameInput">clientNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.defaultSchemaVersionInput">defaultSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.maxActiveTokensInput">maxActiveTokensInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.maxTokenTtlInput">maxTokenTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.accessGrantPrincipal">accessGrantPrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.aliasMountAccessor">aliasMountAccessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowedExtraAliasMountAccessors">allowedExtraAliasMountAccessors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowGroupAdoption">allowGroupAdoption</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowUserAdoption">allowUserAdoption</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.clientName">clientName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.defaultSchemaVersion">defaultSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.maxActiveTokens">maxActiveTokens</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.maxTokenTtl">maxTokenTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.scimClient.ScimClient.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.scimClient.ScimClient.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.scimClient.ScimClient.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.scimClient.ScimClient.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.scimClient.ScimClient.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.scimClient.ScimClient.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.scimClient.ScimClient.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.scimClient.ScimClient.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.scimClient.ScimClient.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.scimClient.ScimClient.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.scimClient.ScimClient.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.scimClient.ScimClient.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.scimClient.ScimClient.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.scimClient.ScimClient.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-vault.scimClient.ScimClient.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `deleting`<sup>Required</sup> <a name="deleting" id="@cdktn/provider-vault.scimClient.ScimClient.property.deleting"></a>

```typescript
public readonly deleting: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-vault.scimClient.ScimClient.property.timeouts"></a>

```typescript
public readonly timeouts: ScimClientTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference">ScimClientTimeoutsOutputReference</a>

---

##### `accessGrantPrincipalInput`<sup>Optional</sup> <a name="accessGrantPrincipalInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.accessGrantPrincipalInput"></a>

```typescript
public readonly accessGrantPrincipalInput: string;
```

- *Type:* string

---

##### `aliasMountAccessorInput`<sup>Optional</sup> <a name="aliasMountAccessorInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.aliasMountAccessorInput"></a>

```typescript
public readonly aliasMountAccessorInput: string;
```

- *Type:* string

---

##### `allowedExtraAliasMountAccessorsInput`<sup>Optional</sup> <a name="allowedExtraAliasMountAccessorsInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowedExtraAliasMountAccessorsInput"></a>

```typescript
public readonly allowedExtraAliasMountAccessorsInput: string[];
```

- *Type:* string[]

---

##### `allowGroupAdoptionInput`<sup>Optional</sup> <a name="allowGroupAdoptionInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowGroupAdoptionInput"></a>

```typescript
public readonly allowGroupAdoptionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowUserAdoptionInput`<sup>Optional</sup> <a name="allowUserAdoptionInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowUserAdoptionInput"></a>

```typescript
public readonly allowUserAdoptionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `clientNameInput`<sup>Optional</sup> <a name="clientNameInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.clientNameInput"></a>

```typescript
public readonly clientNameInput: string;
```

- *Type:* string

---

##### `defaultSchemaVersionInput`<sup>Optional</sup> <a name="defaultSchemaVersionInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.defaultSchemaVersionInput"></a>

```typescript
public readonly defaultSchemaVersionInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxActiveTokensInput`<sup>Optional</sup> <a name="maxActiveTokensInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.maxActiveTokensInput"></a>

```typescript
public readonly maxActiveTokensInput: number;
```

- *Type:* number

---

##### `maxTokenTtlInput`<sup>Optional</sup> <a name="maxTokenTtlInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.maxTokenTtlInput"></a>

```typescript
public readonly maxTokenTtlInput: number;
```

- *Type:* number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ScimClientTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a>

---

##### `accessGrantPrincipal`<sup>Required</sup> <a name="accessGrantPrincipal" id="@cdktn/provider-vault.scimClient.ScimClient.property.accessGrantPrincipal"></a>

```typescript
public readonly accessGrantPrincipal: string;
```

- *Type:* string

---

##### `aliasMountAccessor`<sup>Required</sup> <a name="aliasMountAccessor" id="@cdktn/provider-vault.scimClient.ScimClient.property.aliasMountAccessor"></a>

```typescript
public readonly aliasMountAccessor: string;
```

- *Type:* string

---

##### `allowedExtraAliasMountAccessors`<sup>Required</sup> <a name="allowedExtraAliasMountAccessors" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowedExtraAliasMountAccessors"></a>

```typescript
public readonly allowedExtraAliasMountAccessors: string[];
```

- *Type:* string[]

---

##### `allowGroupAdoption`<sup>Required</sup> <a name="allowGroupAdoption" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowGroupAdoption"></a>

```typescript
public readonly allowGroupAdoption: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowUserAdoption`<sup>Required</sup> <a name="allowUserAdoption" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowUserAdoption"></a>

```typescript
public readonly allowUserAdoption: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `clientName`<sup>Required</sup> <a name="clientName" id="@cdktn/provider-vault.scimClient.ScimClient.property.clientName"></a>

```typescript
public readonly clientName: string;
```

- *Type:* string

---

##### `defaultSchemaVersion`<sup>Required</sup> <a name="defaultSchemaVersion" id="@cdktn/provider-vault.scimClient.ScimClient.property.defaultSchemaVersion"></a>

```typescript
public readonly defaultSchemaVersion: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-vault.scimClient.ScimClient.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.scimClient.ScimClient.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxActiveTokens`<sup>Required</sup> <a name="maxActiveTokens" id="@cdktn/provider-vault.scimClient.ScimClient.property.maxActiveTokens"></a>

```typescript
public readonly maxActiveTokens: number;
```

- *Type:* number

---

##### `maxTokenTtl`<sup>Required</sup> <a name="maxTokenTtl" id="@cdktn/provider-vault.scimClient.ScimClient.property.maxTokenTtl"></a>

```typescript
public readonly maxTokenTtl: number;
```

- *Type:* number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.scimClient.ScimClient.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.scimClient.ScimClient.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ScimClientConfig <a name="ScimClientConfig" id="@cdktn/provider-vault.scimClient.ScimClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.scimClient.ScimClientConfig.Initializer"></a>

```typescript
import { scimClient } from '@cdktn/provider-vault'

const scimClientConfig: scimClient.ScimClientConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.accessGrantPrincipal">accessGrantPrincipal</a></code> | <code>string</code> | Entity ID authorized to call SCIM protocol endpoints on behalf of this client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.clientName">clientName</a></code> | <code>string</code> | The name of the SCIM client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.aliasMountAccessor">aliasMountAccessor</a></code> | <code>string</code> | Auth mount accessor used to create entity aliases for SCIM users. Immutable after creation. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowedExtraAliasMountAccessors">allowedExtraAliasMountAccessors</a></code> | <code>string[]</code> | Additional mount accessors whose aliases may be managed by this SCIM client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowGroupAdoption">allowGroupAdoption</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to allow adoption of existing Vault groups by SCIM-provisioned groups. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowUserAdoption">allowUserAdoption</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to allow adoption of existing Vault entities by SCIM users. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.defaultSchemaVersion">defaultSchemaVersion</a></code> | <code>string</code> | The Vault SCIM extension schema version used for this client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Controls how linked entities/groups/aliases are handled when this resource is destroyed. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#id ScimClient#id}. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.maxActiveTokens">maxActiveTokens</a></code> | <code>number</code> | Maximum number of active tokens for this SCIM client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.maxTokenTtl">maxTokenTtl</a></code> | <code>number</code> | Maximum TTL (in seconds) for tokens issued to this SCIM client. Zero means the cluster default is used. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessGrantPrincipal`<sup>Required</sup> <a name="accessGrantPrincipal" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.accessGrantPrincipal"></a>

```typescript
public readonly accessGrantPrincipal: string;
```

- *Type:* string

Entity ID authorized to call SCIM protocol endpoints on behalf of this client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#access_grant_principal ScimClient#access_grant_principal}

---

##### `clientName`<sup>Required</sup> <a name="clientName" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.clientName"></a>

```typescript
public readonly clientName: string;
```

- *Type:* string

The name of the SCIM client.

Must be lowercase, because Vault lowercases client names when it stores them. May contain only letters, digits, '_', '-' and '.', and must start and end with a letter, digit or '_'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#client_name ScimClient#client_name}

---

##### `aliasMountAccessor`<sup>Optional</sup> <a name="aliasMountAccessor" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.aliasMountAccessor"></a>

```typescript
public readonly aliasMountAccessor: string;
```

- *Type:* string

Auth mount accessor used to create entity aliases for SCIM users. Immutable after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#alias_mount_accessor ScimClient#alias_mount_accessor}

---

##### `allowedExtraAliasMountAccessors`<sup>Optional</sup> <a name="allowedExtraAliasMountAccessors" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowedExtraAliasMountAccessors"></a>

```typescript
public readonly allowedExtraAliasMountAccessors: string[];
```

- *Type:* string[]

Additional mount accessors whose aliases may be managed by this SCIM client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#allowed_extra_alias_mount_accessors ScimClient#allowed_extra_alias_mount_accessors}

---

##### `allowGroupAdoption`<sup>Optional</sup> <a name="allowGroupAdoption" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowGroupAdoption"></a>

```typescript
public readonly allowGroupAdoption: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to allow adoption of existing Vault groups by SCIM-provisioned groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#allow_group_adoption ScimClient#allow_group_adoption}

---

##### `allowUserAdoption`<sup>Optional</sup> <a name="allowUserAdoption" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowUserAdoption"></a>

```typescript
public readonly allowUserAdoption: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to allow adoption of existing Vault entities by SCIM users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#allow_user_adoption ScimClient#allow_user_adoption}

---

##### `defaultSchemaVersion`<sup>Optional</sup> <a name="defaultSchemaVersion" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.defaultSchemaVersion"></a>

```typescript
public readonly defaultSchemaVersion: string;
```

- *Type:* string

The Vault SCIM extension schema version used for this client.

Must be "2.0" or "2.2". Leave unset to use Vault's default for new clients ("2.2").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#default_schema_version ScimClient#default_schema_version}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Controls how linked entities/groups/aliases are handled when this resource is destroyed.

`orphan_child_resources` detaches managed resources without deleting them; `delete_child_resources` deletes all managed resources along with the client. Leave unset for a plain delete (fails if the client still owns linked resources). Only consulted at destroy time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#deletion_policy ScimClient#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#id ScimClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxActiveTokens`<sup>Optional</sup> <a name="maxActiveTokens" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.maxActiveTokens"></a>

```typescript
public readonly maxActiveTokens: number;
```

- *Type:* number

Maximum number of active tokens for this SCIM client.

Must be a positive non-zero value. Leave unset to use Vault's default (2).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#max_active_tokens ScimClient#max_active_tokens}

---

##### `maxTokenTtl`<sup>Optional</sup> <a name="maxTokenTtl" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.maxTokenTtl"></a>

```typescript
public readonly maxTokenTtl: number;
```

- *Type:* number

Maximum TTL (in seconds) for tokens issued to this SCIM client. Zero means the cluster default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#max_token_ttl ScimClient#max_token_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#namespace ScimClient#namespace}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ScimClientTimeouts;
```

- *Type:* <a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#timeouts ScimClient#timeouts}

---

### ScimClientTimeouts <a name="ScimClientTimeouts" id="@cdktn/provider-vault.scimClient.ScimClientTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.scimClient.ScimClientTimeouts.Initializer"></a>

```typescript
import { scimClient } from '@cdktn/provider-vault'

const scimClientTimeouts: scimClient.ScimClientTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#delete ScimClient#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-vault.scimClient.ScimClientTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#delete ScimClient#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ScimClientTimeoutsOutputReference <a name="ScimClientTimeoutsOutputReference" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.Initializer"></a>

```typescript
import { scimClient } from '@cdktn/provider-vault'

new scimClient.ScimClientTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ScimClientTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a>

---



