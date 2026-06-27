# `agentRegistration` Submodule <a name="`agentRegistration` Submodule" id="@cdktn/provider-vault.agentRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentRegistration <a name="AgentRegistration" id="@cdktn/provider-vault.agentRegistration.AgentRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration vault_agent_registration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer"></a>

```typescript
import { agentRegistration } from '@cdktn/provider-vault'

new agentRegistration.AgentRegistration(scope: Construct, id: string, config: AgentRegistrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig">AgentRegistrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig">AgentRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.resetCeilingPolicies">resetCeilingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.resetNoDefaultCeilingPolicy">resetNoDefaultCeilingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.resetOptionalAuthorizationDetails">resetOptionalAuthorizationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.resetOwner">resetOwner</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCeilingPolicies` <a name="resetCeilingPolicies" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.resetCeilingPolicies"></a>

```typescript
public resetCeilingPolicies(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetNoDefaultCeilingPolicy` <a name="resetNoDefaultCeilingPolicy" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.resetNoDefaultCeilingPolicy"></a>

```typescript
public resetNoDefaultCeilingPolicy(): void
```

##### `resetOptionalAuthorizationDetails` <a name="resetOptionalAuthorizationDetails" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.resetOptionalAuthorizationDetails"></a>

```typescript
public resetOptionalAuthorizationDetails(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.resetOwner"></a>

```typescript
public resetOwner(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AgentRegistration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.isConstruct"></a>

```typescript
import { agentRegistration } from '@cdktn/provider-vault'

agentRegistration.AgentRegistration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.isTerraformElement"></a>

```typescript
import { agentRegistration } from '@cdktn/provider-vault'

agentRegistration.AgentRegistration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.isTerraformResource"></a>

```typescript
import { agentRegistration } from '@cdktn/provider-vault'

agentRegistration.AgentRegistration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.generateConfigForImport"></a>

```typescript
import { agentRegistration } from '@cdktn/provider-vault'

agentRegistration.AgentRegistration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AgentRegistration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AgentRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AgentRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AgentRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.ceilingPoliciesInput">ceilingPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.entityIdInput">entityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.noDefaultCeilingPolicyInput">noDefaultCeilingPolicyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.optionalAuthorizationDetailsInput">optionalAuthorizationDetailsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.ceilingPolicies">ceilingPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.noDefaultCeilingPolicy">noDefaultCeilingPolicy</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.optionalAuthorizationDetails">optionalAuthorizationDetails</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.owner">owner</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `ceilingPoliciesInput`<sup>Optional</sup> <a name="ceilingPoliciesInput" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.ceilingPoliciesInput"></a>

```typescript
public readonly ceilingPoliciesInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.entityIdInput"></a>

```typescript
public readonly entityIdInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `noDefaultCeilingPolicyInput`<sup>Optional</sup> <a name="noDefaultCeilingPolicyInput" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.noDefaultCeilingPolicyInput"></a>

```typescript
public readonly noDefaultCeilingPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `optionalAuthorizationDetailsInput`<sup>Optional</sup> <a name="optionalAuthorizationDetailsInput" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.optionalAuthorizationDetailsInput"></a>

```typescript
public readonly optionalAuthorizationDetailsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `ceilingPolicies`<sup>Required</sup> <a name="ceilingPolicies" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.ceilingPolicies"></a>

```typescript
public readonly ceilingPolicies: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `noDefaultCeilingPolicy`<sup>Required</sup> <a name="noDefaultCeilingPolicy" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.noDefaultCeilingPolicy"></a>

```typescript
public readonly noDefaultCeilingPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `optionalAuthorizationDetails`<sup>Required</sup> <a name="optionalAuthorizationDetails" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.optionalAuthorizationDetails"></a>

```typescript
public readonly optionalAuthorizationDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AgentRegistrationConfig <a name="AgentRegistrationConfig" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.Initializer"></a>

```typescript
import { agentRegistration } from '@cdktn/provider-vault'

const agentRegistrationConfig: agentRegistration.AgentRegistrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.displayName">displayName</a></code> | <code>string</code> | Human-readable name for the agent registration. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.entityId">entityId</a></code> | <code>string</code> | Entity ID representing this agent. Each entity can only have one registration. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.ceilingPolicies">ceilingPolicies</a></code> | <code>string[]</code> | List of policy identifiers that define the authorization ceiling for this agent. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.description">description</a></code> | <code>string</code> | Detailed description of the agent's purpose. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.noDefaultCeilingPolicy">noDefaultCeilingPolicy</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, opts out of automatically adding the default-ceiling policy to this agent registration. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.optionalAuthorizationDetails">optionalAuthorizationDetails</a></code> | <code>boolean \| cdktn.IResolvable</code> | When false, RAR (Rich Authorization Requests) is mandatory and authorization_details must be present in the token. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.owner">owner</a></code> | <code>string</code> | Owner of the agent registration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Human-readable name for the agent registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#display_name AgentRegistration#display_name}

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

Entity ID representing this agent. Each entity can only have one registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#entity_id AgentRegistration#entity_id}

---

##### `ceilingPolicies`<sup>Optional</sup> <a name="ceilingPolicies" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.ceilingPolicies"></a>

```typescript
public readonly ceilingPolicies: string[];
```

- *Type:* string[]

List of policy identifiers that define the authorization ceiling for this agent.

Cannot include 'root' policy. Note: Vault automatically adds default policies (['default', 'default-ceiling']) unless no_default_ceiling_policy is true, but these are filtered out when reading the state to match your configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#ceiling_policies AgentRegistration#ceiling_policies}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Detailed description of the agent's purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#description AgentRegistration#description}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#namespace AgentRegistration#namespace}

---

##### `noDefaultCeilingPolicy`<sup>Optional</sup> <a name="noDefaultCeilingPolicy" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.noDefaultCeilingPolicy"></a>

```typescript
public readonly noDefaultCeilingPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, opts out of automatically adding the default-ceiling policy to this agent registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#no_default_ceiling_policy AgentRegistration#no_default_ceiling_policy}

---

##### `optionalAuthorizationDetails`<sup>Optional</sup> <a name="optionalAuthorizationDetails" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.optionalAuthorizationDetails"></a>

```typescript
public readonly optionalAuthorizationDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When false, RAR (Rich Authorization Requests) is mandatory and authorization_details must be present in the token.

When set to true, authorization_details in the JWT token are optional for this agent. This setting works in conjunction with the OAuth Resource Server profile's optional_authorization_details setting - RAR is optional if EITHER is true. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#optional_authorization_details AgentRegistration#optional_authorization_details}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Owner of the agent registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#owner AgentRegistration#owner}

---



