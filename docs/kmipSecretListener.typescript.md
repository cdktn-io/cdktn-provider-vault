# `kmipSecretListener` Submodule <a name="`kmipSecretListener` Submodule" id="@cdktn/provider-vault.kmipSecretListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmipSecretListener <a name="KmipSecretListener" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener vault_kmip_secret_listener}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer"></a>

```typescript
import { kmipSecretListener } from '@cdktn/provider-vault'

new kmipSecretListener.KmipSecretListener(scope: Construct, id: string, config: KmipSecretListenerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig">KmipSecretListenerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig">KmipSecretListenerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetAdditionalClientCas">resetAdditionalClientCas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetAlsoUseLegacyCa">resetAlsoUseLegacyCa</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetServerHostnames">resetServerHostnames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetServerIps">resetServerIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetTlsCipherSuites">resetTlsCipherSuites</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetTlsMaxVersion">resetTlsMaxVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetTlsMinVersion">resetTlsMinVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAdditionalClientCas` <a name="resetAdditionalClientCas" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetAdditionalClientCas"></a>

```typescript
public resetAdditionalClientCas(): void
```

##### `resetAlsoUseLegacyCa` <a name="resetAlsoUseLegacyCa" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetAlsoUseLegacyCa"></a>

```typescript
public resetAlsoUseLegacyCa(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetServerHostnames` <a name="resetServerHostnames" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetServerHostnames"></a>

```typescript
public resetServerHostnames(): void
```

##### `resetServerIps` <a name="resetServerIps" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetServerIps"></a>

```typescript
public resetServerIps(): void
```

##### `resetTlsCipherSuites` <a name="resetTlsCipherSuites" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetTlsCipherSuites"></a>

```typescript
public resetTlsCipherSuites(): void
```

##### `resetTlsMaxVersion` <a name="resetTlsMaxVersion" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetTlsMaxVersion"></a>

```typescript
public resetTlsMaxVersion(): void
```

##### `resetTlsMinVersion` <a name="resetTlsMinVersion" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetTlsMinVersion"></a>

```typescript
public resetTlsMinVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KmipSecretListener resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isConstruct"></a>

```typescript
import { kmipSecretListener } from '@cdktn/provider-vault'

kmipSecretListener.KmipSecretListener.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isTerraformElement"></a>

```typescript
import { kmipSecretListener } from '@cdktn/provider-vault'

kmipSecretListener.KmipSecretListener.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isTerraformResource"></a>

```typescript
import { kmipSecretListener } from '@cdktn/provider-vault'

kmipSecretListener.KmipSecretListener.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.generateConfigForImport"></a>

```typescript
import { kmipSecretListener } from '@cdktn/provider-vault'

kmipSecretListener.KmipSecretListener.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a KmipSecretListener resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KmipSecretListener to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KmipSecretListener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KmipSecretListener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.additionalClientCasInput">additionalClientCasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.alsoUseLegacyCaInput">alsoUseLegacyCaInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.caInput">caInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverHostnamesInput">serverHostnamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverIpsInput">serverIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsCipherSuitesInput">tlsCipherSuitesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMaxVersionInput">tlsMaxVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMinVersionInput">tlsMinVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.additionalClientCas">additionalClientCas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.alsoUseLegacyCa">alsoUseLegacyCa</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.ca">ca</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverHostnames">serverHostnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverIps">serverIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsCipherSuites">tlsCipherSuites</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMaxVersion">tlsMaxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMinVersion">tlsMinVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `additionalClientCasInput`<sup>Optional</sup> <a name="additionalClientCasInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.additionalClientCasInput"></a>

```typescript
public readonly additionalClientCasInput: string[];
```

- *Type:* string[]

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `alsoUseLegacyCaInput`<sup>Optional</sup> <a name="alsoUseLegacyCaInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.alsoUseLegacyCaInput"></a>

```typescript
public readonly alsoUseLegacyCaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `caInput`<sup>Optional</sup> <a name="caInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.caInput"></a>

```typescript
public readonly caInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `serverHostnamesInput`<sup>Optional</sup> <a name="serverHostnamesInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverHostnamesInput"></a>

```typescript
public readonly serverHostnamesInput: string[];
```

- *Type:* string[]

---

##### `serverIpsInput`<sup>Optional</sup> <a name="serverIpsInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverIpsInput"></a>

```typescript
public readonly serverIpsInput: string[];
```

- *Type:* string[]

---

##### `tlsCipherSuitesInput`<sup>Optional</sup> <a name="tlsCipherSuitesInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsCipherSuitesInput"></a>

```typescript
public readonly tlsCipherSuitesInput: string;
```

- *Type:* string

---

##### `tlsMaxVersionInput`<sup>Optional</sup> <a name="tlsMaxVersionInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMaxVersionInput"></a>

```typescript
public readonly tlsMaxVersionInput: string;
```

- *Type:* string

---

##### `tlsMinVersionInput`<sup>Optional</sup> <a name="tlsMinVersionInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMinVersionInput"></a>

```typescript
public readonly tlsMinVersionInput: string;
```

- *Type:* string

---

##### `additionalClientCas`<sup>Required</sup> <a name="additionalClientCas" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.additionalClientCas"></a>

```typescript
public readonly additionalClientCas: string[];
```

- *Type:* string[]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `alsoUseLegacyCa`<sup>Required</sup> <a name="alsoUseLegacyCa" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.alsoUseLegacyCa"></a>

```typescript
public readonly alsoUseLegacyCa: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ca`<sup>Required</sup> <a name="ca" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.ca"></a>

```typescript
public readonly ca: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `serverHostnames`<sup>Required</sup> <a name="serverHostnames" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverHostnames"></a>

```typescript
public readonly serverHostnames: string[];
```

- *Type:* string[]

---

##### `serverIps`<sup>Required</sup> <a name="serverIps" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverIps"></a>

```typescript
public readonly serverIps: string[];
```

- *Type:* string[]

---

##### `tlsCipherSuites`<sup>Required</sup> <a name="tlsCipherSuites" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsCipherSuites"></a>

```typescript
public readonly tlsCipherSuites: string;
```

- *Type:* string

---

##### `tlsMaxVersion`<sup>Required</sup> <a name="tlsMaxVersion" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMaxVersion"></a>

```typescript
public readonly tlsMaxVersion: string;
```

- *Type:* string

---

##### `tlsMinVersion`<sup>Required</sup> <a name="tlsMinVersion" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMinVersion"></a>

```typescript
public readonly tlsMinVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmipSecretListenerConfig <a name="KmipSecretListenerConfig" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.Initializer"></a>

```typescript
import { kmipSecretListener } from '@cdktn/provider-vault'

const kmipSecretListenerConfig: kmipSecretListener.KmipSecretListenerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.address">address</a></code> | <code>string</code> | Host:port address to listen on. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.ca">ca</a></code> | <code>string</code> | Name of the CA to use to generate the server certificate and verify client certificates. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.name">name</a></code> | <code>string</code> | Unique name for the listener. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.path">path</a></code> | <code>string</code> | Path where KMIP backend is mounted. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.additionalClientCas">additionalClientCas</a></code> | <code>string[]</code> | Names of additional TLS CAs to use to verify client certificates. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.alsoUseLegacyCa">alsoUseLegacyCa</a></code> | <code>boolean \| cdktn.IResolvable</code> | Use the legacy unnamed CA for verifying client certificates as well. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.serverHostnames">serverHostnames</a></code> | <code>string[]</code> | DNS SANs to include in listener certificate. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.serverIps">serverIps</a></code> | <code>string[]</code> | IP SANs to include in listener certificate. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsCipherSuites">tlsCipherSuites</a></code> | <code>string</code> | TLS cipher suites to allow (does not apply to tls13+). |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsMaxVersion">tlsMaxVersion</a></code> | <code>string</code> | Maximum TLS version to accept (tls12 or tls13). |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsMinVersion">tlsMinVersion</a></code> | <code>string</code> | Minimum TLS version to accept (tls12 or tls13). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Host:port address to listen on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#address KmipSecretListener#address}

---

##### `ca`<sup>Required</sup> <a name="ca" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.ca"></a>

```typescript
public readonly ca: string;
```

- *Type:* string

Name of the CA to use to generate the server certificate and verify client certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#ca KmipSecretListener#ca}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique name for the listener.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#name KmipSecretListener#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path where KMIP backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#path KmipSecretListener#path}

---

##### `additionalClientCas`<sup>Optional</sup> <a name="additionalClientCas" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.additionalClientCas"></a>

```typescript
public readonly additionalClientCas: string[];
```

- *Type:* string[]

Names of additional TLS CAs to use to verify client certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#additional_client_cas KmipSecretListener#additional_client_cas}

---

##### `alsoUseLegacyCa`<sup>Optional</sup> <a name="alsoUseLegacyCa" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.alsoUseLegacyCa"></a>

```typescript
public readonly alsoUseLegacyCa: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Use the legacy unnamed CA for verifying client certificates as well.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#also_use_legacy_ca KmipSecretListener#also_use_legacy_ca}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#namespace KmipSecretListener#namespace}

---

##### `serverHostnames`<sup>Optional</sup> <a name="serverHostnames" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.serverHostnames"></a>

```typescript
public readonly serverHostnames: string[];
```

- *Type:* string[]

DNS SANs to include in listener certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#server_hostnames KmipSecretListener#server_hostnames}

---

##### `serverIps`<sup>Optional</sup> <a name="serverIps" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.serverIps"></a>

```typescript
public readonly serverIps: string[];
```

- *Type:* string[]

IP SANs to include in listener certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#server_ips KmipSecretListener#server_ips}

---

##### `tlsCipherSuites`<sup>Optional</sup> <a name="tlsCipherSuites" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsCipherSuites"></a>

```typescript
public readonly tlsCipherSuites: string;
```

- *Type:* string

TLS cipher suites to allow (does not apply to tls13+).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#tls_cipher_suites KmipSecretListener#tls_cipher_suites}

---

##### `tlsMaxVersion`<sup>Optional</sup> <a name="tlsMaxVersion" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsMaxVersion"></a>

```typescript
public readonly tlsMaxVersion: string;
```

- *Type:* string

Maximum TLS version to accept (tls12 or tls13).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#tls_max_version KmipSecretListener#tls_max_version}

---

##### `tlsMinVersion`<sup>Optional</sup> <a name="tlsMinVersion" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsMinVersion"></a>

```typescript
public readonly tlsMinVersion: string;
```

- *Type:* string

Minimum TLS version to accept (tls12 or tls13).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#tls_min_version KmipSecretListener#tls_min_version}

---



