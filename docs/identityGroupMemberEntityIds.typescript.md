# `identityGroupMemberEntityIds` Submodule <a name="`identityGroupMemberEntityIds` Submodule" id="@cdktn/provider-vault.identityGroupMemberEntityIds"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityGroupMemberEntityIds <a name="IdentityGroupMemberEntityIds" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/identity_group_member_entity_ids vault_identity_group_member_entity_ids}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer"></a>

```typescript
import { identityGroupMemberEntityIds } from '@cdktn/provider-vault'

new identityGroupMemberEntityIds.IdentityGroupMemberEntityIds(scope: Construct, id: string, config: IdentityGroupMemberEntityIdsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig">IdentityGroupMemberEntityIdsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig">IdentityGroupMemberEntityIdsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetExclusive">resetExclusive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetMemberEntityIds">resetMemberEntityIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetExclusive` <a name="resetExclusive" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetExclusive"></a>

```typescript
public resetExclusive(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMemberEntityIds` <a name="resetMemberEntityIds" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetMemberEntityIds"></a>

```typescript
public resetMemberEntityIds(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IdentityGroupMemberEntityIds resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isConstruct"></a>

```typescript
import { identityGroupMemberEntityIds } from '@cdktn/provider-vault'

identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isTerraformElement"></a>

```typescript
import { identityGroupMemberEntityIds } from '@cdktn/provider-vault'

identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isTerraformResource"></a>

```typescript
import { identityGroupMemberEntityIds } from '@cdktn/provider-vault'

identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.generateConfigForImport"></a>

```typescript
import { identityGroupMemberEntityIds } from '@cdktn/provider-vault'

identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IdentityGroupMemberEntityIds resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityGroupMemberEntityIds to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityGroupMemberEntityIds that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/identity_group_member_entity_ids#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IdentityGroupMemberEntityIds to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.exclusiveInput">exclusiveInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.memberEntityIdsInput">memberEntityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.exclusive">exclusive</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.memberEntityIds">memberEntityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `exclusiveInput`<sup>Optional</sup> <a name="exclusiveInput" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.exclusiveInput"></a>

```typescript
public readonly exclusiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberEntityIdsInput`<sup>Optional</sup> <a name="memberEntityIdsInput" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.memberEntityIdsInput"></a>

```typescript
public readonly memberEntityIdsInput: string[];
```

- *Type:* string[]

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `exclusive`<sup>Required</sup> <a name="exclusive" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.exclusive"></a>

```typescript
public readonly exclusive: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `memberEntityIds`<sup>Required</sup> <a name="memberEntityIds" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.memberEntityIds"></a>

```typescript
public readonly memberEntityIds: string[];
```

- *Type:* string[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityGroupMemberEntityIdsConfig <a name="IdentityGroupMemberEntityIdsConfig" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.Initializer"></a>

```typescript
import { identityGroupMemberEntityIds } from '@cdktn/provider-vault'

const identityGroupMemberEntityIdsConfig: identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.groupId">groupId</a></code> | <code>string</code> | ID of the group. |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.exclusive">exclusive</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, allows the resource to manage member entity ids exclusively. |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/identity_group_member_entity_ids#id IdentityGroupMemberEntityIds#id}. |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.memberEntityIds">memberEntityIds</a></code> | <code>string[]</code> | Entity IDs to be assigned as group members. |
| <code><a href="#@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/identity_group_member_entity_ids#group_id IdentityGroupMemberEntityIds#group_id}

---

##### `exclusive`<sup>Optional</sup> <a name="exclusive" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.exclusive"></a>

```typescript
public readonly exclusive: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, allows the resource to manage member entity ids exclusively.

Beware of race conditions when disabling exclusive management

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/identity_group_member_entity_ids#exclusive IdentityGroupMemberEntityIds#exclusive}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/identity_group_member_entity_ids#id IdentityGroupMemberEntityIds#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memberEntityIds`<sup>Optional</sup> <a name="memberEntityIds" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.memberEntityIds"></a>

```typescript
public readonly memberEntityIds: string[];
```

- *Type:* string[]

Entity IDs to be assigned as group members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/identity_group_member_entity_ids#member_entity_ids IdentityGroupMemberEntityIds#member_entity_ids}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/identity_group_member_entity_ids#namespace IdentityGroupMemberEntityIds#namespace}

---



